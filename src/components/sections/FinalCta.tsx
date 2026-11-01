import { ArrowRight, Wrench } from 'lucide-react'
import { whatsAppFinalCtaUrl } from '../../lib/whatsapp'
import { Reveal } from '../Reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-graphite-900 py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/20 blur-[150px]" />
      <div className="bg-grid absolute inset-0 opacity-20" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-electric-500/30 bg-electric-500/10 text-electric-400">
            <Wrench className="h-8 w-8" />
          </div>

          <h2 className="mt-7 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Seu eletrodoméstico voltou a dar problema?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-silver-500 sm:text-lg">
            Não deixe o problema esperar. Fale com a RS Refrigeração e solicite seu
            atendimento.
          </p>

          <a
            href={whatsAppFinalCtaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-electric-500 px-9 py-5 font-display text-base font-bold uppercase tracking-wide text-graphite-950 transition-all hover:scale-[1.04] hover:bg-electric-400"
          >
            Falar com um técnico
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
