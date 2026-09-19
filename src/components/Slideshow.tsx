import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const slides = [
  {
    quote: 'WaferX reduced our model training time by 73%. The stacked architecture is unlike anything we\'ve seen — it\'s a generational leap.',
    author: 'Dr. Sarah Chen',
    role: 'VP of AI Infrastructure, Helix Labs',
    stat: '73%',
    statLabel: 'faster training',
  },
  {
    quote: 'We migrated 400 nodes to WaferX and cut our datacenter power bill in half. The 12W TDP at full load is genuinely astonishing.',
    author: 'Marcus Reid',
    role: 'CTO, Northwind Compute',
    stat: '50%',
    statLabel: 'power reduction',
  },
  {
    quote: 'The chiplet design let us customize the die for our inference workload without a full respin. That flexibility is a game-changer.',
    author: 'Aisha Patel',
    role: 'Head of Silicon, Vector AI',
    stat: '8.4TB/s',
    statLabel: 'throughput',
  },
];

export default function Slideshow() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((dir: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + slides.length) % slides.length);
      setIsAnimating(false);
    }, 200);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const slide = slides[active];

  return (
    <section id="showcase" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Quote className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Customer Stories</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by <span className="text-gradient">visionaries</span>
          </h2>
        </div>

        <div className="relative glass rounded-3xl p-10 lg:p-16 overflow-hidden min-h-[340px]">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600/5 blur-[60px] pointer-events-none" />

          <div
            className={`relative z-10 transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-x-[-30px]' : 'opacity-100 translate-x-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <Quote className="w-10 h-10 text-purple-500/30 mb-6" />
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-8">
                  {slide.quote}
                </p>
                <div>
                  <div className="text-white font-semibold font-display">{slide.author}</div>
                  <div className="text-sm text-gray-500 mt-1">{slide.role}</div>
                </div>
              </div>

              <div className="lg:w-48 flex lg:flex-col items-center justify-center gap-2 lg:gap-1 lg:border-l lg:border-white/10 lg:pl-12">
                <div className="text-5xl lg:text-6xl font-bold text-gradient font-display">
                  {slide.stat}
                </div>
                <div className="text-sm text-gray-500 text-center">{slide.statLabel}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActive(i);
                      setIsAnimating(false);
                    }, 200);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-10 bg-purple-500' : 'w-4 bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
