import { MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'
import { site } from '../lib/content'
import { whatsAppGenericUrl } from '../lib/whatsapp'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Área de atendimento', href: '#area-atendimento' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-graphite-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src="/images/logo-rs-refrigeracao.webp"
              alt="RS Refrigeração"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs font-display text-sm uppercase tracking-wide text-silver-500">
              {site.slogan}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver-500">
              Assistência técnica independente em eletrodomésticos, atendendo diferentes
              fabricantes.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-silver-100">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-silver-500 transition-colors hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-silver-100">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={whatsAppGenericUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver-500 transition-colors hover:text-electric-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-electric-500" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver-500 transition-colors hover:text-electric-400"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-electric-500" />
                  {site.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-silver-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
                {site.areaServed.join(' e ')} – {site.state}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-silver-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Assistência técnica independente, não
            vinculada a fabricantes.
          </p>
          <div className="flex items-center gap-6">
            <a href="/politica-de-privacidade.html" className="transition-colors hover:text-silver-300">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
