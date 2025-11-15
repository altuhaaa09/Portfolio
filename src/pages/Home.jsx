import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-start px-16 ml-56">
      <h1 className="text-8xl font-bold mb-4">
        <b
          className="text-8xl font-extrabold text-white"
          style={{
            textShadow: `
      1px 1px 0 #aaa,
      2px 2px 0 #999,
      3px 3px 0 #777,
      4px 4px 0 #555,
      5px 5px 5px rgba(0,0,0,0.5)
    `,
          }}
        >
          H
        </b>
        i, <br /> I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Altyn<b className="text-8xl font-semibold">b</b>ek
        </span>
        ,
      </h1>
      <h2 className="text-7xl font-semibold mb-6 text-gray-200 mt-[-26px]">
        a Fron<b className="text-8xl font-semibold">t</b>end Develo<b className="text-cyan-400 font-semibold">p</b>er
      </h2>
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
        Начинающий фронтенд-разработчик. Прошел 3-месячный курс. Умею верстать
        адаптивные сайты, продолжаю изучать JavaScript и React. Готов
        развиваться и работать над реальными проектами.
      </p>
      <Link
        to="/contact"
        className="border border-cyan-400 px-6 py-2 rounded hover:bg-cyan-400 hover:text-black transition-all"
      >
        Contact me
      </Link>
    </main>
  );
}
