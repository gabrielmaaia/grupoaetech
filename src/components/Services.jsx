import React from 'react';
import { 
  Bot, 
  Database, 
  Network, 
  Code2, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      title: 'Automação de Processos',
      subtitle: 'Eficiência e Redução de Custos',
      icon: Bot,
      popular: false,
      description:
        'Substitua fluxos manuais repetitivos por rotinas automatizadas inteligentes e conexões diretas entre plataformas.',
      features: [
        'Robôs de automação (RPA)',
        'Integração de APIs e ecossistemas',
        'Notificações e relatórios em tempo real',
        'Redução drástica de falhas operacionais',
      ],
      tag: 'Otimização Contínua',
    },
    {
      title: 'Gestão e Migração de Dados',
      subtitle: 'Segurança e Continuidade',
      icon: Database,
      popular: true, // destacando como fundamental
      description:
        'Migre bancos legados e estruture dados críticos sem perda de integridade, interrupção ou riscos de conformidade.',
      features: [
        'Pipelines ETL/ELT de alto volume',
        'Migração segura para a nuvem',
        'Modelagem e governança de dados',
        'Conformidade técnica e LGPD',
      ],
      tag: 'Missão Crítica',
    },
    {
      title: 'Infraestrutura de TI',
      subtitle: 'Alta Disponibilidade e Nuvem',
      icon: Network,
      popular: false,
      description:
        'Projetos de infraestrutura física, virtual e cloud focados em uptime contínuo, velocidade de rede e proteção cibernética.',
      features: [
        'Arquitetura Cloud & On-Premise',
        'Monitoramento e observabilidade em nuvem',
        'Segurança de perímetro e firewalls',
        'Planos de contingência e recuperação',
      ],
      tag: 'Resiliência Total',
    },
    {
      title: 'Desenvolvimento de Software',
      subtitle: 'Engenharia Sob Demanda',
      icon: Code2,
      popular: false,
      description:
        'Criação de soluções digitais personalizadas, plataformas web, microsserviços e modernização de legado.',
      features: [
        'Aplicações Web e Mobile de alta performance',
        'APIs REST e arquitetura escalável',
        'Modernização de sistemas legados',
        'Código limpo, seguro e documentado',
      ],
      tag: 'Tecnologia Customizada',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-[#080B10] via-[#0B0F17] to-[#080B10] relative scroll-mt-24">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1.5 rounded-full border border-[#C5A059]/20">
              Nossas Soluções
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serviços projetados para a era da inteligência corporativa
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Soluções completas com metodologia ágil, governança rigorosa e compromisso com o retorno sobre o investimento.
          </p>
        </div>

        {/* Services Grid (Layout similar a cards de planos/produtos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-7 ${
                  service.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-[#121927] border-2 border-[#C5A059] shadow-xl shadow-[#C5A059]/15 -translate-y-1 lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-[#C5A059]/50 shadow-lg hover:shadow-xl hover:shadow-[#C5A059]/10 hover:-translate-y-1'
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBF79] text-[11px] font-bold uppercase tracking-wider text-black shadow-md">
                    Destaque Corporativo
                  </div>
                )}

                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        service.popular
                          ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                          : 'bg-slate-800 text-[#C5A059] border border-slate-700/80'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-[#C5A059] mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      service.popular
                        ? 'bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] text-black hover:brightness-110 shadow-md shadow-[#C5A059]/20'
                        : 'bg-slate-800 text-slate-200 hover:bg-[#C5A059] hover:text-black border border-slate-700 hover:border-[#C5A059]'
                    }`}
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            Diagnóstico Inicial sem Compromisso
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            Prazos e Entregas Contratuais Respeitados
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            Suporte e Monitoramento Especializado
          </span>
        </div>

      </div>
    </section>
  );
}

