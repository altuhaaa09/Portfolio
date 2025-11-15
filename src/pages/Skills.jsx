export default function Skills() {
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
      }}>Навыки</h2>
      <ul className="space-y-4 text-lg text-gray-300 gradient-text">
        <li> HTML5 / CSS3 — уверенно, адаптивная вёрстка</li>
        <li> React — базовый уровень, продолжаю изучать</li>
        <li> Figma — умею работать с макетами</li>
        <li> Bootstrap — знаю как использовать в своих сайтах</li>
      </ul>
    </main>
  );
}
