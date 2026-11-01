// Fonte única de verdade para dados comerciais da RS Refrigeração.
// Apenas informações confirmadas pelo cliente. Não inventar preços, prazos,
// avaliações, quantidade de clientes ou certificações.

export const site = {
  name: 'RS Refrigeração',
  slogan: 'Climatizando seu conforto.',
  domain: 'https://rsrefrigera.online',
  phoneDisplay: '(15) 99198-6851',
  whatsappNumber: '5515991986851',
  instagramHandle: '@rs.refrigeracao',
  instagramUrl: 'https://instagram.com/rs.refrigeracao',
  areaServed: ['Sorocaba', 'Votorantim'],
  state: 'SP',
}

export type ApplianceId =
  | 'geladeira'
  | 'freezer'
  | 'maquina-lavar'
  | 'lava-e-seca'
  | 'microondas'

export interface Appliance {
  id: ApplianceId
  name: string
  description: string
  image?: string
}

export const appliances: Appliance[] = [
  {
    id: 'geladeira',
    name: 'Geladeiras',
    description: 'Conserto de geladeiras com diagnóstico preciso e orçamento antes da execução.',
    image: '/images/geladeira.webp',
  },
  {
    id: 'freezer',
    name: 'Freezers',
    description: 'Assistência técnica para freezers residenciais e comerciais.',
    image: '/images/freezer.webp',
  },
  {
    id: 'maquina-lavar',
    name: 'Máquinas de lavar',
    description: 'Reparo de máquinas de lavar com peças trocadas apenas mediante aprovação.',
    image: '/images/maquina-lavar.webp',
  },
  {
    id: 'lava-e-seca',
    name: 'Lava e seca',
    description: 'Conserto especializado em lava e seca, independente da marca.',
  },
  {
    id: 'microondas',
    name: 'Micro-ondas',
    description: 'Assistência técnica para micro-ondas residenciais e comerciais.',
    image: '/images/microondas.webp',
  },
]

export interface Differential {
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    title: 'Orçamento transparente',
    description: 'Você conhece o valor antes da execução do serviço.',
  },
  {
    title: 'Garantia de 90 dias',
    description: 'Segurança sobre o serviço realizado, conforme condições aplicáveis.',
  },
  {
    title: 'Atendimento a domicílio',
    description: 'Comodidade para você, sem precisar transportar seu eletrodoméstico.',
  },
  {
    title: 'Aprovação do cliente',
    description: 'Nenhuma troca de peça sem a sua autorização.',
  },
]

export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Entre em contato',
    description: 'Informe qual aparelho apresenta defeito.',
  },
  {
    number: '02',
    title: 'Agende uma avaliação',
    description: 'Combine o atendimento com nossa equipe.',
  },
  {
    number: '03',
    title: 'Aprove o orçamento',
    description: 'O serviço é executado após sua aprovação.',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Quais aparelhos vocês consertam?',
    answer:
      'Realizamos conserto de geladeiras, freezers, máquinas de lavar, lava e seca e micro-ondas.',
  },
  {
    question: 'Vocês atendem em domicílio?',
    answer: 'Sim, o atendimento é realizado a domicílio, residencial e comercial.',
  },
  {
    question: 'Qual região vocês atendem?',
    answer: 'Atendemos Sorocaba e Votorantim – SP.',
  },
  {
    question: 'Como funciona o orçamento?',
    answer:
      'O orçamento é apresentado antes da execução do serviço. Nenhuma peça é trocada sem a sua aprovação.',
  },
  {
    question: 'O serviço possui garantia?',
    answer:
      'Sim, oferecemos garantia de 90 dias sobre o serviço executado e peças trocadas, conforme condições aplicáveis.',
  },
  {
    question: 'Vocês atendem todas as marcas?',
    answer:
      'Somos uma assistência técnica independente, atendendo diferentes fabricantes.',
  },
  {
    question: 'Como solicitar atendimento?',
    answer: 'Basta falar com a gente pelo WhatsApp e informar o problema do seu aparelho.',
  },
]
