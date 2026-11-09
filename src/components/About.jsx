import React from 'react';
import { Cpu, Code2, Database, CheckCircle2 } from 'lucide-react';

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
    <section id="quem-somos" className="py-24 bg-[#080B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1.5 rounded-full border border-[#C5A059]/20">
              Sobre a Ætech
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia de alta precisão para empresas que exigem excelência
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A <strong className="text-white font-medium">Ætech</strong> atua como o braço tecnológico estratégico da sua organização. Criamos ecossistemas digitais resilientes, automatizados e prontos para suportar o crescimento do seu negócio com previsibilidade e segurança técnica.
          </p>
        </div>

        {/* 3 Pillars Grid (Estáticos, sem efeito de clique/hover falso) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-900/50 border border-slate-800/90 p-8 flex flex-col justify-between shadow-lg shadow-black/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-[#C5A059] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C5A059] mt-1 mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Metodologia Ágil e Engenharia Contínua</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
