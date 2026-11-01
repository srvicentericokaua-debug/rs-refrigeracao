import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { site } from '../../lib/content'
import { Reveal } from '../Reveal'

export function ServiceArea() {
  return (
    <section id="area-atendimento" className="relative overflow-hidden bg-graphite-900 py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-500">
            Região de atendimento
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Estamos perto de você.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-silver-500">
            Atendimento a domicílio em {site.areaServed.join(' e ')} – {site.state}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.areaServed.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-electric-400"
              >
                <MapPin className="h-4 w-4" />
                {city}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal x={24} y={0}>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full border border-electric-500/20">
            <div className="absolute inset-6 rounded-full border border-electric-500/15" />
            <div className="absolute inset-14 rounded-full border border-electric-500/15" />
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-electric-400/30"
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
              />
            ))}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-electric-500 text-graphite-950 glow-ring">
              <Navigation className="h-9 w-9" fill="currentColor" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
