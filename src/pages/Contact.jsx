import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col justify-center px-16 ml-56">
      <h2 className="text-6xl font-semibold mb-8 text-white" style={{
        textShadow: `
      1px 1px 0 #bcbcbc,
      2px 2px 0 #a0a0a0,
      3px 3px 0 #888,
      4px 4px 0 #666,
      5px 5px 5px rgba(0,0,0,0.6)
    `,
      }}>Контакты</h2>

      <div className="space-y-4 mb-8 text-lg">
        <div className="flex items-center text-gray-300">
          <HiOutlineMail className="text-cyan-400 mr-3 text-2xl" />
          <a
            href="mailto:altuhaaa09@gmail.com"
            className="hover:text-cyan-400"
          >
            altuhaaa09@gmail.com
          </a>
        </div>
        <div className="flex items-center text-gray-300">
          <FaGithub className="text-cyan-400 mr-3 text-2xl" />
          <a
            href="https://github.com/altuhaaa09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            github.com/altuhaaa09
          </a>
        </div>
      </div>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full bg-[#0c0c0c] border border-gray-700 p-3 rounded focus:outline-none focus:border-cyan-400"
        />
        <textarea
          placeholder="Сообщение"
          rows="4"
          className="w-full bg-[#0c0c0c] border border-gray-700 p-3 rounded focus:outline-none focus:border-cyan-400"
        ></textarea>
        <button
          type="submit"
          className="border border-cyan-400 px-6 py-2 rounded hover:bg-cyan-400 hover:text-black transition-all"
        >
          Отправить
        </button>
      </form>
    </main>
  );
}
