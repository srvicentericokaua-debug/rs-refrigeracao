import { motion } from 'framer-motion'
import { ArrowUpRight, Refrigerator, Snowflake, WashingMachine, Microwave, Wrench } from 'lucide-react'
import { appliances } from '../../lib/content'
import { whatsAppApplianceUrl } from '../../lib/whatsapp'
import { Reveal } from '../Reveal'

const icons: Record<string, typeof Refrigerator> = {
  geladeira: Refrigerator,
  freezer: Snowflake,
  'maquina-lavar': WashingMachine,
  'lava-e-seca': Wrench,
  microondas: Microwave,
}

export function Services() {
  return (
    <section id="servicos" className="relative bg-graphite-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-500">
            Serviços
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Especialistas em cuidar dos seus eletrodomésticos.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appliances.map((appliance, i) => {
            const Icon = icons[appliance.id] ?? Wrench
            return (
              <Reveal key={appliance.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-graphite-800/60 p-7"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-electric-500/0 via-electric-500/0 to-electric-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-electric-500/10 group-hover:via-transparent group-hover:to-transparent" />

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-electric-500/25 bg-electric-500/10 text-electric-400 transition-colors duration-300 group-hover:border-electric-400/50 group-hover:bg-electric-500/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-silver-100">
                    {appliance.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-silver-500">
                    {appliance.description}
                  </p>

                  <a
                    href={whatsAppApplianceUrl(appliance.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-electric-400 transition-colors hover:text-electric-300"
                  >
                    Solicitar atendimento
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
