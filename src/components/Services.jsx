import React from 'react';
import { 
  Bot, 
  Database, 
  Code2, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      title: 'Automação de Processos',
      subtitle: 'Fluxos Inteligentes & n8n',
      icon: Bot,
      popular: false,
      tag: 'Eficiência Operacional',
      description:
        'Orquestração de rotinas corporativas com n8n, integração entre plataformas e automações de atendimento e notificações via API oficial do WhatsApp (WABA).',
      features: [
        'Orquestração de fluxos avançados com n8n',
        'Disparo e automações no WhatsApp Oficial (WABA)',
        'Integração de APIs, Webhooks e sistemas (ERP/CRM)',
        'Eliminação de tarefas manuais e alertas em tempo real',
      ],
    },
    {
      title: 'Desenvolvimento de Sistemas',
      subtitle: 'Plataformas & Software',
      icon: Code2,
      popular: true, // DESTAQUE CORPORATIVO NO CENTRO
      tag: 'Solução Sob Medida',
      description:
        'Criação de sistemas web, portais corporativos e aplicativos exclusivos, construídos exatamente para as regras do seu negócio.',
      features: [
        'Sistemas Web e Painéis Administrativos',
        'Interfaces visuais modernas e intuitivas',
        'Aplicativos e Portais corporativos exclusivos',
        'Código proprietário, limpo e escalável',
      ],
    },
    {
      title: 'Infraestrutura de Dados',
      subtitle: 'Da Planilha ao Banco Estruturado',
      icon: Database,
      popular: false,
      tag: 'Bancos de Dados',
      description:
        'Substituição definitiva de planilhas manuais e descentralizadas por bancos de dados estruturados, seguros e de alta confiabilidade.',
      features: [
        'Migração segura de planilhas para bancos relacionais',
        'Fim de arquivos corrompidos e retrabalho manual',
        'Modelagem, estruturação e integridade das bases',
        'Backups automáticos e prontidão para relatórios',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-[#080B10] via-[#0B0F17] to-[#080B10] relative scroll-mt-4">
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
            Serviços desenhados para a eficiência da sua organização
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Soluções práticas com engenharia sob medida, transparência e compromisso com o resultado real do seu negócio.
          </p>
        </div>

        {/* 3 Services Grid (Destaque Central em Desenvolvimento de Sistemas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-7 ${
                  service.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-[#121927] border-2 border-[#C5A059] shadow-xl shadow-[#C5A059]/15 -translate-y-1 lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBF79] text-[11px] font-bold uppercase tracking-wider text-black shadow-md whitespace-nowrap">
                    Destaque Corporativo
                  </div>
                )}

                <div>
                  {/* Top Tag & Icon: Ícone fixo na esquerda e cardzinho com tamanho fixo na direita */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        service.popular
                          ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                          : 'bg-slate-800 text-[#C5A059] border border-slate-700/80'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Cardzinho na direita com tamanho fixo e padronizado em todos os cards */}
                    <div className="w-40 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-[10.5px] font-semibold text-slate-300 uppercase tracking-wider text-center px-2 truncate">
                        {service.tag}
                      </span>
                    </div>
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
            Suporte e Atendimento Especializado
          </span>
        </div>

      </div>
    </section>
  );
}
