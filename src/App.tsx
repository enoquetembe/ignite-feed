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
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto quefiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
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
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto quefiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
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
