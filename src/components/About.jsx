import React from 'react';
import { Cpu, Code2, Database } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Automações Inteligentes',
      subtitle: 'Escala & Eficiência Operacional',
      description:
        'Desenvolvimento de robôs de automação (RPA), fluxos assíncronos e orquestração de processos ponta a ponta, eliminando gargalos manuais e acelerando o tempo de resposta da sua empresa.',
    },
    {
      icon: Code2,
      title: 'Sistemas & Software Sob Medida',
      subtitle: 'Engenharia Customizada',
      description:
        'Construção de plataformas web, mobile e microsserviços modernos com código limpo, arquitetura segura e total aderência às regras de negócio e integrações da sua operação.',
    },
    {
      icon: Database,
      title: 'Infraestrutura de Dados & Cloud',
      subtitle: 'Segurança & Continuidade',
      description:
        'Engenharia de dados estratégica, pipelines ETL/ELT de alta capacidade, migrações para nuvem com zero downtime, governança e conformidade rigorosa com a LGPD.',
    },
  ];

  return (
    <section id="quem-somos" className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-[#080B10] relative scroll-mt-14 sm:scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
              Sobre a Ætech
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Engenharia de alta precisão para empresas que exigem excelência
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A <strong className="text-white font-medium">Ætech</strong> atua como o braço tecnológico estratégico da sua organização. Criamos ecossistemas digitais resilientes, automatizados e prontos para suportar o crescimento do seu negócio.
          </p>
        </div>

        {/* 3 Pillars Grid (Enquadramento perfeito na tela) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-8 sm:mt-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-900/50 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-start shadow-lg shadow-black/40"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-[#C5A059] shadow-sm mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-[#C5A059] mb-2.5">
                  {pillar.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
