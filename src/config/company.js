export const companyConfig = {
  name: 'Ætech',
  legalName: 'Grupo Ætech',
  tagline: 'Engenharia para organizações inteligentes',
  description:
    'Potencializamos a eficiência e segurança do seu negócio através de automação avançada de processos, gestão e migração de dados de missão crítica, infraestrutura de TI resiliente e desenvolvimento de software sob medida.',
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
    instagram: 'https://instagram.com/grupoaetech',
    linkedin: 'https://linkedin.com/company/grupoaetech',
    whatsapp: 'https://wa.me/5579999999999',
  },
  services: [
    {
      id: 'automacao',
      name: 'Automação de Processos',
    },
    {
      id: 'dados',
      name: 'Gestão e Migração de Dados',
    },
    {
      id: 'infra',
      name: 'Infraestrutura de TI',
    },
    {
      id: 'software',
      name: 'Desenvolvimento de Software',
    },
  ],
};

export const getWhatsAppLink = (customMessage) => {
  const defaultText = `Olá! Gostaria de conversar com um especialista da Ætech sobre soluções para a minha empresa.`;
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${companyConfig.whatsappRaw}?text=${message}`;
};

