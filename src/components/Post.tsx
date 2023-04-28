import { format, formatDistanceToNow } from "date-fns";
import en from "date-fns/locale/en-US";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { ChangeEvent, FormEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm'h'", {
    locale: en,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: en,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className="bg-gray-2 p-10 mb-8 rounded-lg">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={author.avatarUrl} />

          <div className="flex flex-col">
            <strong className="text-gray-7 leading[1.6]">{author.name}</strong>
            <span className="text-sm text-gray-5">{author.role}</span>
          </div>
        </div>

        <time
          className="text-sm text-gray-5"
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="leading-[1.6] text-gray-6 mt-6">
        {content.map((item) => {
          if (item.type === "paragraph") {
            return (
              <p key={item.content} className="mt-4">
                {item.content}
              </p>
            );
          } else if (item.type === "link") {
            return (
              <p key={item.content} className="mt-4">
                {" "}
                <a
                  href=""
                  className="font-bold text-green-1  hover:text-green-2"
                >
                  {" "}
                  {item.content}{" "}
                </a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form
        className="w-full mt-6 pt-6 border-t border-gray-3 commentForm"
        onSubmit={handleCreateNewComment}
      >
        <strong className="leading-[1.6] text-gray-7">
          Leave your feedback
        </strong>

        <textarea
          className="w-full h-24 mt-4 p-4 resize-none border-0 rounded-lg
          bg-gray-1 text-gray-7 leading-[1.4] focus:outline-none focus:ring-2 focus:ring-green-300 "
          placeholder="Leave your comment"
          value={newComment}
          onChange={handleNewCommentChange}
          required
        />

        <footer className="invisible max-h-0">
          <button
            type="submit"
            disabled={newComment.length === 0}
            className="cursor-pointer bg-green-1 font-bold text-white mt-4 
            py-4 px-6 border-0 rounded-lg hover:bg-green-2 transition-colors 
            disabled:opacity-70 disabled:hover:bg-green-1 disabled:cursor-not-allowed"
          >
            Comment
          </button>
        </footer>
      </form>

      <div>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
