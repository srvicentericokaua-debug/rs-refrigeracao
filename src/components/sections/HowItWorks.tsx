import { motion } from 'framer-motion'
import { steps } from '../../lib/content'
import { Reveal } from '../Reveal'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-graphite-900 py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-500">
            Como funciona
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Resolver seu problema é simples.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent sm:block" />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15} className="relative">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-electric-500/40 bg-graphite-800 font-display text-2xl font-bold text-electric-400 glow-ring"
              >
                {step.number}
              </motion.div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-silver-100">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-silver-500">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
