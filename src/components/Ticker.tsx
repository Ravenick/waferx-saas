const items = [
  '3nm Process',
  'Stacked Die Architecture',
  '8.4 TB/s Bandwidth',
  '12W Power Draw',
  '92B Transistors',
  'Chiplet Design',
  'Neural Mesh Fabric',
  'Hardware Root of Trust',
  'Zero-Copy Memory',
  'AI-Native Interconnect',
];

export default function Ticker() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 via-transparent to-violet-950/10 pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#07060a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#07060a] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-4 mx-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="font-display text-lg font-medium text-gray-400 hover:text-white transition-colors cursor-default">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
