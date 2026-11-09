import React from 'react';
import { Lock, Zap, Handshake } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lock,
      title: 'Segurança & Conformidade',
      subtitle: 'Proteção & Governança LGPD',
      description:
        'Garantimos a total proteção dos dados e a conformidade (LGPD) em todas as nossas integrações, infraestruturas e rotinas de backup.',
    },
    {
      icon: Zap,
      title: 'Alta Performance',
      subtitle: 'Velocidade & Escalabilidade',
      description:
        'Criamos sistemas, automações e softwares que rodam com máxima velocidade, escalabilidade e sem interrupções.',
    },
    {
      icon: Handshake,
      title: 'Parceria Contínua',
      subtitle: 'Compromisso & Suporte',
      description:
        'Não apenas entregamos o código; nós acompanhamos e cuidamos da infraestrutura para que a tecnologia cresça junto com o negócio.',
    },
  ];

  return (
    <section id="quem-somos" className="py-20 sm:py-24 bg-[#080B10] relative scroll-mt-12 sm:scroll-mt-4">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1.5 rounded-full border border-[#C5A059]/20">
              Sobre a Ætech
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia com foco em segurança, velocidade e resultado
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Nós somos a <strong className="text-white font-semibold">Ætech</strong>, uma empresa voltada para a área de tecnologia especializada em desenvolvimento de sistemas, automação inteligente e infraestrutura de dados. Entregamos soluções de alta performance que tornam as operações de outras organizações mais seguras, modernas e eficientes.
          </p>
        </div>

        {/* 3 Values / Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800/90 p-8 flex flex-col justify-start shadow-lg shadow-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-[#C5A059] shadow-sm mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#C5A059] mb-3 uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
