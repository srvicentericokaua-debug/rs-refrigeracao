import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useScrollDirection } from '../lib/useScrollDirection'
import { whatsAppGenericUrl } from '../lib/whatsapp'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Área de atendimento', href: '#area-atendimento' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const { hidden, scrolled } = useScrollDirection()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-100%' : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? 'bg-graphite-900/85 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#topo" className="flex items-center gap-2">
            <img
              src="/images/logo-rs-refrigeracao.webp"
              alt="RS Refrigeração"
              className="h-10 w-auto sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold uppercase tracking-wide text-silver-300 transition-colors hover:text-electric-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsAppGenericUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric-500 px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-graphite-950 transition-transform hover:scale-105 hover:bg-electric-400"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar atendimento
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/5 bg-graphite-900/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 font-display text-base font-semibold uppercase tracking-wide text-silver-200 transition-colors hover:bg-white/5 hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={whatsAppGenericUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-electric-500 px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-graphite-950"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar atendimento
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
