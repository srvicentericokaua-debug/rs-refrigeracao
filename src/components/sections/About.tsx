import { ShieldCheck } from 'lucide-react'
import { Reveal } from '../Reveal'

export function About() {
  return (
    <section id="sobre" className="relative bg-graphite-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-24} y={0}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="/images/tecnico-reparo.webp"
              alt="Técnico da RS Refrigeração realizando reparo"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal x={24} y={0}>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-electric-500">
            Sobre a empresa
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Compromisso com seu conforto.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-500">
            A RS Refrigeração trabalha com assistência técnica independente em
            eletrodomésticos, oferecendo atendimento residencial e comercial em Sorocaba e
            Votorantim. Nosso compromisso é proporcionar soluções com transparência,
            responsabilidade e respeito ao cliente.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/8 bg-graphite-800/60 px-5 py-4">
            <ShieldCheck className="h-6 w-6 shrink-0 text-electric-400" />
            <p className="text-sm text-silver-300">
              Assistência técnica independente, atendendo diferentes fabricantes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
