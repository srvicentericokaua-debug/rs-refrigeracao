import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { site } from '../../lib/content'
import { whatsAppGenericUrl } from '../../lib/whatsapp'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-graphite-900 pt-28 pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-appliances.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-graphite-900/40" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-electric-600/20 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5"
          >
            <MapPin className="h-3.5 w-3.5 text-electric-400" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-electric-400">
              Atendimento em {site.areaServed.join(' e ')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Seu eletrodoméstico merece{' '}
            <span className="text-gradient-electric">voltar a funcionar</span> perfeitamente.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-silver-500"
          >
            Assistência técnica especializada em eletrodomésticos, com atendimento a domicílio em{' '}
            {site.areaServed.join(' e ')}. Transparência, qualidade e confiança em cada serviço.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsAppGenericUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric-500 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-graphite-950 transition-all hover:scale-[1.03] hover:bg-electric-400"
            >
              Solicitar atendimento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-silver-100 transition-colors hover:border-electric-400/60 hover:text-electric-400"
            >
              Conhecer serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
