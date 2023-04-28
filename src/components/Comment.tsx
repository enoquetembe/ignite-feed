import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [applaudCount, setApplaudCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleApplaudComment() {
    setApplaudCount(applaudCount + 1);
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar src="https://github.com/enoquetembe.png" />

      <div className="flex-1">
        <div className="bg-gray-3 p-4 rounded-lg">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-[1.6]">Enoque Tembe</strong>

              <time
                className="text-xs text-gray-5 leading-[1.6]"
                dateTime="2023-04-15 08:00:45"
                title="April 14, 2023"
              >
                About 1h ago
              </time>
            </div>

            <button
              title="delete"
              className="hover:text-red-danger"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-6">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            onClick={handleApplaudComment}
            className="text-gray-5 flex items-center hover:text-green-1"
          >
            <ThumbsUp className="mr-2" /> Aplaudir
            <span className="before:py-0 before:px-1 before:content-['\2022']">
              {applaudCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
