export const companyConfig = {
  name: 'Ætech',
  legalName: 'Grupo Ætech',
  tagline: 'Engenharia para organizações inteligentes',
  description:
    'Potencializamos a eficiência e segurança do seu negócio através de automação avançada de processos, infraestrutura de dados de alta resiliência e desenvolvimento de sistemas sob medida.',
  domain: 'grupoaetech.com.br',
  domainUrl: 'https://grupoaetech.com.br',
  email: 'contato@grupoaetech.com.br',
  phoneDisplay: '(79) 99999-9999',
  whatsappRaw: '5579999999999', // Substituir pelo número real (DDI + DDD + Número)
  location: {
    city: 'Aracaju',
    state: 'Sergipe',
    country: 'Brasil',
    display: 'Aracaju, Sergipe - Brasil',
  },
  social: {
    whatsapp: 'https://wa.me/5579999999999',
    instagram: 'https://instagram.com/grupoaetech',
    facebook: 'https://facebook.com/grupoaetech',
  },
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

