import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Building2, 
  User, 
  CheckCircle, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { companyConfig, getWhatsAppLink } from '../config/company';

export default function ContactModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: defaultService || 'Automação de Processos',
    message: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const serviceOptions = [
    { label: 'Automação de Processos', value: 'Automação de Processos' },
    { label: 'Desenvolvimento de Sistemas', value: 'Desenvolvimento de Sistemas' },
    { label: 'Infraestrutura de Dados', value: 'Infraestrutura de Dados' },
    { label: 'Outro / Consultoria Geral', value: 'Consultoria Geral' },
  ];

  // Sincroniza o serviço padrão selecionado ao abrir pelo card
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService, isOpen]);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Olá! Meu nome é ${formData.name || 'um cliente'}${formData.company ? ` da empresa ${formData.company}` : ''}.\nTenho interesse na área de: *${formData.service}*.\n${formData.message ? `Detalhes: ${formData.message}` : 'Gostaria de agendar uma reunião ou diagnóstico inicial.'}`;
    
    const url = getWhatsAppLink(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0C111C] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#C5A059]/10 rounded-full blur-[70px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#DFBF79] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Atendimento Personalizado</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Fale com um Especialista Ætech
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Preencha os dados abaixo para ser direcionado ao canal de WhatsApp com o contexto do seu projeto.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Seu Nome Completo *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Carlos Silva"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Empresa
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nome da sua empresa"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>
            </div>

            {/* Custom Select para Serviço de Interesse */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Serviço de Interesse
              </label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-sm text-left flex items-center justify-between cursor-pointer transition-all ${
                    dropdownOpen
                      ? 'border-[#C5A059] ring-1 ring-[#C5A059] text-white shadow-md shadow-[#C5A059]/10'
                      : 'border-slate-700/80 text-white hover:border-slate-600'
                  }`}
                >
                  <span className="truncate pr-2 font-medium">
                    {formData.service}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A059] flex-shrink-0 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Options Customizado com o design escuro e dourado */}
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-xl bg-[#0B101B] border border-[#C5A059]/50 shadow-2xl shadow-black overflow-hidden py-1 animate-fadeIn">
                    {serviceOptions.map((option) => {
                      const isSelected = formData.service === option.label;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service: option.label });
                            setDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#C5A059]/15 text-[#DFBF79] font-semibold'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <span>{option.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#C5A059]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Mensagem ou Desafio Atual (Opcional)
            </label>
            <textarea
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Descreva brevemente a sua necessidade ou objetivo..."
              className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] hover:brightness-110 shadow-lg shadow-[#C5A059]/25 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-black fill-current" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Resposta média em até 30 minutos em horário comercial</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
