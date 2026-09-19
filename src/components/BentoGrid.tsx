import { Cpu, Zap, Shield, GitBranch, Gauge, Network, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: '3nm Process Node',
    desc: 'The world\'s first commercial 3nm stacked die architecture, delivering unprecedented transistor density.',
    span: 'lg:col-span-2 lg:row-span-2',
    big: true,
  },
  {
    icon: Zap,
    title: 'Ultra-Low Power',
    desc: '12W total draw at full load.',
    span: '',
    big: false,
  },
  {
    icon: Shield,
    title: 'Hardware Root of Trust',
    desc: 'On-die cryptographic enclave.',
    span: '',
    big: false,
  },
  {
    icon: GitBranch,
    title: 'Chiplet Architecture',
    desc: 'Modular die design lets us mix and match IP blocks per workload without a full respin.',
    span: 'lg:col-span-2',
    big: false,
  },
  {
    icon: Gauge,
    title: '8.4 TB/s Throughput',
    desc: 'Silicon-embedded interconnect.',
    span: '',
    big: false,
  },
  {
    icon: Network,
    title: 'Neural Mesh',
    desc: 'Native AI fabric.',
    span: '',
    big: false,
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Capabilities</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Engineered for the <span className="text-gradient">impossible</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every layer of the WaferX stack is designed to push the boundaries of
            what silicon can do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl glass overflow-hidden p-7 hover:border-purple-500/30 transition-all duration-500 ${f.span}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-700/0 group-hover:from-purple-600/5 group-hover:to-violet-700/10 transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-700/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400/40 transition-all duration-300">
                    <f.icon className="w-5 h-5 text-purple-400" strokeWidth={2} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300" />
                </div>

                <h3 className={`font-display font-bold text-white mb-2 ${f.big ? 'text-2xl' : 'text-lg'}`}>
                  {f.title}
                </h3>
                <p className={`text-gray-500 leading-relaxed ${f.big ? 'text-base max-w-sm' : 'text-sm'}`}>
                  {f.desc}
                </p>

                {f.big && (
                  <div className="mt-auto pt-6">
                    <div className="flex gap-6">
                      {[
                        { label: 'Transistors', value: '92B' },
                        { label: 'Cache', value: '128MB' },
                        { label: 'Bandwidth', value: '8.4TB/s' },
                      ].map((s) => (
                        <div key={s.label}>
                          <div className="text-2xl font-bold text-gradient font-display">{s.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative circuit lines for big card */}
              {f.big && (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 pointer-events-none">
                  <div className="w-full h-full rounded-full border-2 border-purple-400 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border border-purple-400/50 animate-spin-reverse-slow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
