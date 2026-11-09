import React from 'react';
import { 
  MapPin, 
  Mail, 
  Globe, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './BrandIcons';
import { companyConfig, getWhatsAppLink } from '../config/company';
import headerLogo from '../assets/header-logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppLink("Olá! Gostaria de falar com um especialista da Ætech sobre soluções para a minha empresa.");

  return (
    <footer id="contato" className="bg-[#05070B] border-t border-slate-800/80 text-slate-300 relative scroll-mt-40">
      
      {/* Contact Banner / Direct Call Section */}
      <div className="relative -top-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-slate-900 via-[#131a29] to-slate-900 border border-[#C5A059]/40 shadow-2xl shadow-black">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20 inline-block">
                Pronto para transformar sua operação?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Fale agora com a equipe de engenharia da Ætech
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Agende um diagnóstico inicial sem compromisso com nossos especialistas e descubra como otimizar seus sistemas, automações e infraestrutura de dados.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] hover:brightness-110 shadow-lg shadow-[#C5A059]/25 hover:shadow-xl hover:shadow-[#C5A059]/35 transition-all text-center"
              >
                <WhatsAppIcon className="w-5 h-5 text-black flex-shrink-0" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="mailto:contato@grupoaetech.com.br"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all text-center"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Enviar E-mail Corporativo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center">
              <img
                src={headerLogo}
                alt="Ætech - Engenharia Tecnológica"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(197,160,89,0.2)]"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engenharia de precisão para organizações inteligentes. Desenvolvimento de sistemas sob medida, automação de processos com n8n & WABA e infraestrutura de dados moderna.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Ætech"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={companyConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Ætech"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Ætech"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#quem-somos" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Quem Somos</span>
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Nossos Serviços</span>
                </a>
              </li>
              <li>
                <a href="#mural" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mural Instagram</span>
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Fale com Especialista</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contato & Localização
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Domínio Oficial</div>
                  <a href="https://grupoaetech.com.br" className="text-white hover:text-[#C5A059] transition-colors">
                    grupoaetech.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">E-mail Corporativo</div>
                  <a href="mailto:contato@grupoaetech.com.br" className="text-white hover:text-[#C5A059] transition-colors">
                    contato@grupoaetech.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Sede</div>
                  <span className="text-slate-200">Aracaju, Sergipe - Brasil</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Atendimento Rápido</div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#DFBF79] hover:underline font-medium">
                    Atendimento via WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Ætech - Grupo Ætech. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Desenvolvido por Grupo Aetech</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
