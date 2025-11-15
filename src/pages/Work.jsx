export default function Work() {
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
      }}>Мои проекты</h2>

      <div className="bg-[#111] border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-all max-w-xl">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
          ПромСтройСнаб
        </h3>
        <p className="text-gray-300 text-lg mb-2">
          Сайт по макету из Figma. Верстка HTML/CSS + Icons, подключён JS.
        </p>
        <p className="text-gray-400 text-sm">
          Есть адаптивная мобильная версия
        </p>
      </div>
    </main>
  );
}
