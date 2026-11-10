export const companyConfig = {
  name: 'Ætech',
  legalName: 'Grupo Ætech',
  tagline: 'Engenharia para organizações inteligentes',
  description:
    'Potencializamos a eficiência e segurança do seu negócio através de automação avançada de processos, infraestrutura de dados de alta resiliência e desenvolvimento de sistemas sob medida.',
  domain: 'grupoaetech.com.br',
  domainUrl: 'https://grupoaetech.com.br',
  email: 'contato@grupoaetech.com.br',
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || '+55 (79) 9998-1909',
  whatsappRaw: import.meta.env.VITE_WHATSAPP_RAW || '557999981909',
  location: {
    city: 'Aracaju',
    state: 'Sergipe',
    country: 'Brasil',
    display: 'Aracaju, Sergipe - Brasil',
  },
  social: {
    whatsapp: `https://wa.me/${import.meta.env.VITE_WHATSAPP_RAW || '557999981909'}`,
    instagram: 'https://instagram.com/aetech.se',
    facebook: 'https://facebook.com/grupoaetech',
  },
  instagramFeedId: import.meta.env.VITE_INSTAGRAM_FEED_ID || 'xbR67YOVCvnd36PX7ZL4',
  services: [
    {
      id: 'automacao',
      name: 'Automação de Processos',
    },
    {
      id: 'sistemas',
      name: 'Desenvolvimento de Sistemas',
    },
    {
      id: 'dados',
      name: 'Infraestrutura de Dados',
    },
  ],
};

export const getWhatsAppLink = (customMessage) => {
  const defaultText = `Olá! Gostaria de conversar com um especialista da Ætech sobre soluções para a minha empresa.`;
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${companyConfig.whatsappRaw}?text=${message}`;
};

