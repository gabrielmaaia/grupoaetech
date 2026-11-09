import React from 'react';
import { 
  ArrowRight, 
  Cpu
} from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import heroImg from '../assets/hero-operations.jpg';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#05070B] via-[#080C14] to-[#0A0E17]">
      {/* Background Glows & Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#C5A059]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-24 right-12 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Subtle tech grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(197, 160, 89, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-7">
            
            {/* Badge Sem Ícone de IA */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#C5A059]/30 text-xs font-semibold text-[#DFBF79] shadow-sm shadow-[#C5A059]/10">
              <span className="tracking-wide uppercase">Soluções Corporativas de Alta Performance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Engenharia para{' '}
              <span className="bg-gradient-to-r from-[#DFBF79] via-[#C5A059] to-[#A68037] bg-clip-text text-transparent">
                organizações inteligentes
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Potencializamos a eficiência e a segurança da sua empresa através de <strong className="text-white font-semibold">desenvolvimento de sistemas</strong>, <strong className="text-white font-semibold">automações inteligentes</strong> e <strong className="text-white font-semibold">infraestrutura de dados</strong> de alta resiliência.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] hover:brightness-110 shadow-lg shadow-[#C5A059]/25 hover:shadow-xl hover:shadow-[#C5A059]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap flex-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 text-black flex-shrink-0" />
                <span className="whitespace-nowrap">Fale com um Especialista</span>
              </button>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700/70 hover:border-[#C5A059]/50 transition-all whitespace-nowrap"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Informações Verídicas e Reais da Empresa (Sem 'Seg - Sex') */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Sob Medida</div>
                <div className="text-[10px] text-slate-500">Desenho exclusivo</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800/80 px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">Dedicado</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Suporte Especializado</div>
                <div className="text-[10px] text-slate-500">Atendimento consultivo</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">Direto</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Com Especialista</div>
                <div className="text-[10px] text-slate-500">Sem intermediários</div>
              </div>
            </div>

          </div>

          {/* Right Column / Hero Operations Image Showcase (Sem hover na imagem) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-2xl">
              
              {/* Outer Golden Ambient Glow (Estático, sem hover) */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C5A059]/25 via-slate-700/15 to-[#C5A059]/20 rounded-3xl blur-2xl opacity-75"></div>

              {/* Image Frame Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl shadow-black">
                
                {/* Main Visual (Estático, sem zoom no hover) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Ætech - Engenharia de Sistemas, Automações e Infraestrutura de Dados"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle vignette around edges for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Barra Inferior com Ponto Verde Pulsando */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white tracking-wide">
                        Engenharia em Operação
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Sistemas • Automações RPA • Infraestrutura de Dados
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#C5A059]/10 border border-[#C5A059]/20 text-[10px] font-mono text-[#DFBF79] font-semibold">
                    <span>Foco em Resultados</span>
                  </div>
                </div>

              </div>

              {/* Cardzinho Flutuante Superior de Automações & RPA (Estático, sem hover) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/95 border border-[#C5A059]/40 backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-xl items-center gap-2.5 z-20">
                <div className="p-1.5 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Automações & RPA</div>
                  <div className="text-[9px] text-slate-400">Fluxos Inteligentes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
