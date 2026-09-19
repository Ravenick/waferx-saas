import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const wafers = Array.from({ length: 7 }, (_, i) => i);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-gray-300 tracking-wide">
                Introducing the 3nm WaferX Architecture
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Silicon that
              <br />
              <span className="text-gradient">thinks at the</span>
              <br />
              speed of light
            </h1>

            <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-10">
              Our stacked wafer architecture delivers 1000x compute density with
              zero compromise on power efficiency. Built for the AI era.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="group px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-purple hover:scale-105 flex items-center gap-2"
              >
                Explore Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-gray-300 glass hover:text-white hover:border-purple-500/30 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-8 mt-12">
              {[
                { icon: Zap, value: '1000x', label: 'Compute Density' },
                { icon: Layers, value: '3nm', label: 'Process Node' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-display">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Wafer Stack 3D */}
          <div
            ref={ref}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-2000"
          >
            <div
              className="relative preserve-3d transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${35 + mouse.y * 10}deg) rotateY(${-25 + mouse.x * 15}deg)`,
              }}
            >
              {wafers.map((i) => {
                const offset = i * 32;
                const isTop = i === wafers.length - 1;
                const isBottom = i === 0;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-64 h-64 -ml-32 -mt-32 rounded-2xl"
                    style={{
                      transform: `translateZ(${offset}px)`,
                      animation: `wafer-float ${6 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      ['--rx' as string]: '0deg',
                      ['--ry' as string]: '0deg',
                      ['--rz' as string]: '0deg',
                    }}
                  >
                    <div
                      className={`w-full h-full rounded-2xl relative overflow-hidden border ${
                        isTop
                          ? 'border-purple-400/40 glow-purple-strong'
                          : 'border-white/10'
                      }`}
                      style={{
                        background: isTop
                          ? 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)'
                          : isBottom
                          ? 'linear-gradient(135deg, #0a0810 0%, #12101a 100%)'
                          : 'linear-gradient(135deg, #0e0c14 0%, #1a1428 50%, #0e0c14 100%)',
                        boxShadow: isTop
                          ? '0 0 60px -10px rgba(168,85,247,0.4), inset 0 0 30px rgba(168,85,247,0.1)'
                          : 'inset 0 0 20px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Circuit pattern */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(168,85,247,0.4) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(168,85,247,0.3) 1px, transparent 2px),
                            radial-gradient(circle at 50% 50%, rgba(168,85,247,0.2) 1px, transparent 2px),
                            linear-gradient(0deg, transparent 24%, rgba(168,85,247,0.08) 25%, rgba(168,85,247,0.08) 26%, transparent 27%),
                            linear-gradient(90deg, transparent 24%, rgba(168,85,247,0.08) 25%, rgba(168,85,247,0.08) 26%, transparent 27%)
                          `,
                          backgroundSize: '40px 40px, 40px 40px, 60px 60px, 80px 80px, 80px 80px',
                        }}
                      />

                      {/* Shimmer on top wafer */}
                      {isTop && (
                        <div
                          className="absolute inset-0 wafer-shimmer"
                          style={{
                            background:
                              'linear-gradient(105deg, transparent 40%, rgba(168,85,247,0.15) 50%, transparent 60%)',
                          }}
                        />
                      )}

                      {/* Center chip on top wafer */}
                      {isTop && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-700/20 border border-purple-400/30 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 glow-purple-strong animate-pulse-glow" />
                            </div>
                            {/* Pin connectors */}
                            {[0, 90, 180, 270].map((rot) => (
                              <div
                                key={rot}
                                className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-purple-400/40"
                                style={{
                                  transform: `rotate(${rot}deg) translateY(-44px)`,
                                  transformOrigin: 'bottom center',
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Edge highlights */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
                    </div>
                  </div>
                );
              })}

              {/* Ambient glow under stack */}
              <div className="absolute left-1/2 top-1/2 -ml-40 -mt-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none" />
            </div>

            {/* Floating labels */}
            <div className="absolute top-8 right-4 lg:right-12 glass rounded-xl px-4 py-3 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <div className="text-xs text-gray-500 mb-1">Throughput</div>
              <div className="text-lg font-bold text-gradient font-display">8.4 TB/s</div>
            </div>
            <div className="absolute bottom-12 left-4 lg:left-12 glass rounded-xl px-4 py-3 animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <div className="text-xs text-gray-500 mb-1">Power Draw</div>
              <div className="text-lg font-bold text-white font-display">12W</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}
