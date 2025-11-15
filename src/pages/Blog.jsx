export default function Blog() {
  return (
    <main className="flex-1 flex flex-col justify-center px-16 ml-56">
      <h2
        className="text-6xl font-semibold mb-8 text-white mt-30"
        style={{
          textShadow: `
            1px 1px 0 #bcbcbc,
            2px 2px 0 #a0a0a0,
            3px 3px 0 #888,
            4px 4px 0 #666,
            5px 5px 5px rgba(0,0,0,0.6)
          `,
        }}
      >
        Блог
      </h2>

      <h3 className="text-2xl font-semibold text-white mb-4">
        3 вещи, которые помогают мне развиваться и создавать
      </h3>

      <section className="mb-10">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">Практика через вёрстку реальных сайтов</h4>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Я беру интересные сайты или макеты, которые нахожу, например, в Telegram-каналах и на просторах интернета, и воссоздаю их с нуля с помощью вёрстки.
          Так я отрабатываю структуру, адаптивность и современные приёмы в CSS и React.
          Это помогает развивать насмотренность, понимать, как устроены настоящие проекты, и со временем вырабатывать собственный стиль и логику построения интерфейсов.
        </p>
      </section>

      <section className="mb-10">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2"> ChatGPT</h4>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Мой постоянный партнёр в разработке.
          Использую его для поиска решений, ускорения рутинных задач, рефакторинга и даже для генерации небольших кусков кода.
          ChatGPT помогает мне не “застревать” — если появляется сложность, я сразу могу разобрать идею, протестировать логику или получить новый взгляд на задачу.
          Это инструмент, который экономит время и <b>держит мозг в тонусе</b>.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2"> Мой интерес — глубина деталей</h4>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Главное, что движет мной — <b>интерес к тому, как всё устроено внутри</b>.
          Мне важно не просто сделать, чтобы “работало”, а понять механику, структуру и смысл.
          Будь то анимация в CSS, работа React-хуков или просто визуальная гармония интерфейса —
          я получаю удовольствие от того, что узнаю новое и могу сделать чуть лучше, чем вчера.
        </p>
      </section>
    </main>
  );
}
