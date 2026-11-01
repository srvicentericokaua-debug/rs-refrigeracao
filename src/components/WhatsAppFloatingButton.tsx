import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsAppGenericUrl } from '../lib/whatsapp'

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={whatsAppGenericUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a RS Refrigeração"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6 shrink-0" fill="white" strokeWidth={0} />
      <span className="hidden font-display text-sm font-bold uppercase tracking-wide sm:inline">
        Fale conosco
      </span>
    </motion.a>
  )
}
