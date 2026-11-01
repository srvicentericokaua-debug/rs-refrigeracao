import { Wallet, ShieldCheck, Home, UserCheck } from 'lucide-react'
import { differentials } from '../../lib/content'
import { Reveal } from '../Reveal'

const icons = [Wallet, ShieldCheck, Home, UserCheck]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-graphite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-500">
            Diferenciais
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Transparência e confiança do início ao fim.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={item.title} delay={i * 0.08} className="bg-graphite-950 p-8">
                <Icon className="h-8 w-8 text-electric-400" strokeWidth={1.75} />
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-silver-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-500">{item.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
