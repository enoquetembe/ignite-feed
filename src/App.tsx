import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/enoquetembe.png",
      name: "Enoque Tembe",
      role: "CEO @Room",
    },

    content: [
      { type: "paragraph", content: "Wassup guys? 👋 " },
      {
        type: "paragraph",
        content:
          "I just added another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      { type: "link", content: "enoque.design/doctorcare" },
    ],

    publishedAt: new Date("2023-04-14 22:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Luzidio.png",
      name: "Luzídio Rafael",
      role: "Instructor @Room",
    },

    content: [
      { type: "paragraph", content: "Wassup devs? 👋 " },
      {
        type: "paragraph",
        content:
          "I finally finalized my new website/portfolio. It was quite a challenge to create the whole design and scratch it on the nail, but I did it 💪🏻",
      },
      { type: "link", content: "Log in and leave your feedback 👉 luzidio.design" },
    ],

    publishedAt: new Date("2023-04-11 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-wrapper gap-8 items max-w-[70rem] py-0 px-4 mx-auto mt-8 max-md:grid-cols-1 max-md:text-[87.5%]">
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
