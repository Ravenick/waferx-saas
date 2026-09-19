import { Check, Zap, Building, Rocket } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    price: '$499',
    period: '/month',
    desc: 'For teams exploring wafer-scale compute.',
    features: [
      '2x WaferX nodes',
      '8.4 TB/s interconnect',
      'Community support',
      'Standard SDK access',
      'Monthly firmware updates',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    icon: Rocket,
    name: 'Pro',
    price: '$1,999',
    period: '/month',
    desc: 'For production AI workloads at scale.',
    features: [
      '8x WaferX nodes',
      'Neural Mesh fabric enabled',
      'Priority 24/7 support',
      'Advanced SDK + profiling tools',
      'Weekly firmware updates',
      'Custom chiplet configurations',
      'Dedicated solutions architect',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    icon: Building,
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For hyperscale deployments.',
    features: [
      'Unlimited nodes',
      'On-premise deployment',
      'Custom die tape-outs',
      'SLA with 99.99% uptime',
      'White-glove migration',
      'Direct engineering access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-700/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Pricing</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Scale without <span className="text-gradient">limits</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Transparent pricing for every stage of your compute journey. No hidden
            fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'glass glow-purple-strong border-purple-500/30 md:-translate-y-4'
                  : 'glass hover:border-purple-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-700/20 border border-purple-500/20 flex items-center justify-center">
                  <plan.icon className="w-5 h-5 text-purple-400" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.desc}</p>

              <div className="flex items-end gap-1 mb-8">
                <span className={`font-display font-bold text-white ${plan.popular ? 'text-5xl' : 'text-4xl'}`}>
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm mb-2">{plan.period}</span>
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 glow-purple hover:scale-[1.02]'
                    : 'text-gray-300 glass hover:text-white hover:border-purple-500/30'
                }`}
              >
                {plan.cta}
              </a>

              <div className="mt-8 pt-8 border-t border-white/5">
                <ul className="space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-400 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
