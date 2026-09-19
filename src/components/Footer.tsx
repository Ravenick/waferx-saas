import { Cpu, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center glow-purple">
                <Cpu className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold text-white">
                WAFER<span className="text-gradient">X</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Next-generation silicon architecture powering the world's most
              demanding compute workloads.
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Showcase', 'Documentation'].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {s}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Blog', 'Contact'].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 WaferX Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
