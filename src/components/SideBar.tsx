import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className="bg-gray-2 rounded-lg overflow-hidden h-[294px]">
      <img
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
        className="w-full h-[72px] object-cover"
      />

      <section className="flex flex-col items-center">
        <div className="-mt-8">
          <Avatar hasBorder src="https://github.com/enoquetembe.png" />
        </div>

        <strong className="mt-4  text-gray-7 leading-[1.6]">
          Enoque Tembe
        </strong>
        <span className="text-sm text-gray-4">Web Developer</span>

        <footer className="border-t border-t-gray-3 px-8 pt-6 pb-8 mt-6">
          <a
            href="#"
            className="flex items-center gap-2 justify-center h-[50px] px-8 py-0 font-bold bg-transparent text-green-2 border border-green-2 rounded-lg hover:bg-green-2 hover:text-white transition-colors"
          >
            <PencilLine size={20} />
            Edit profile
          </a>
        </footer>
      </section>
    </aside>
  );
}
