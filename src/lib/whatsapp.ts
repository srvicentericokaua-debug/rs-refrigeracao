import { site, type ApplianceId } from './content'

const MESSAGE = 'Olá, preciso de uma assistência técnica!'

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function whatsAppGenericUrl(): string {
  return buildWhatsAppUrl(MESSAGE)
}

export function whatsAppApplianceUrl(_applianceId: ApplianceId): string {
  return buildWhatsAppUrl(MESSAGE)
}

export function whatsAppFinalCtaUrl(): string {
  return buildWhatsAppUrl(MESSAGE)
}
