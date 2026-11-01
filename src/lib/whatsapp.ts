import { site, type ApplianceId } from './content'

const applianceLabel: Record<ApplianceId, string> = {
  geladeira: 'geladeira',
  freezer: 'freezer',
  'maquina-lavar': 'máquina de lavar',
  'lava-e-seca': 'lava e seca',
  microondas: 'micro-ondas',
}

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function whatsAppGenericUrl(): string {
  const message = `Olá! Conheci a RS Refrigeração pelo site e gostaria de solicitar um atendimento.

Meu aparelho é:

O problema apresentado é:

Marca e modelo:

Meu bairro:

Poderiam me informar a disponibilidade para uma avaliação?`
  return buildWhatsAppUrl(message)
}

export function whatsAppApplianceUrl(applianceId: ApplianceId): string {
  const label = applianceLabel[applianceId]
  const message = `Olá! Acessei o site da RS Refrigeração e gostaria de solicitar um atendimento para minha ${label}.

Minha ${label} está apresentando o seguinte problema:

Marca e modelo:

Meu bairro:

Poderiam me informar a disponibilidade para uma avaliação?`
  return buildWhatsAppUrl(message)
}

export function whatsAppFinalCtaUrl(): string {
  const message = `Olá! Meu eletrodoméstico está apresentando defeito e gostaria de falar com um técnico da RS Refrigeração.

Aparelho:

Problema apresentado:

Meu bairro:`
  return buildWhatsAppUrl(message)
}
