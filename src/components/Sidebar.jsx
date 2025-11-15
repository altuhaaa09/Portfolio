import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "My Skills", path: "/skills" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-[#0c0c0c] border-r border-cyan-400 flex flex-col justify-between py-8 px-4">
      <div>
        <div className="flex items-center space-x-2 mb-12 ml-2">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            A
          </div>
          <div>
            <p className="text-white font-semibold leading-none">Altynbek</p>
            <p className="text-gray-400 text-xs">Web Develo<b className="text-cyan-400 text">p</b>er</p>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-2 rounded transition-all border border-transparent hover:border-cyan-400 hover:bg-[#111]
                ${pathname === path ? "border-cyan-400 bg-[#111]" : ""}
              `}
            >
              <span className="text-gray-300 hover:text-cyan-400">{name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4 text-gray-400 mt-auto ml-5">
        <a href="mailto:altuhaaa09@gmail.com" className="hover:text-cyan-400">
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/altuhaaa09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </aside>
  );
}
