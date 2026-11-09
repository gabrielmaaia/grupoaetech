import React, { useState } from 'react';
import { X, MessageCircle, Send, Sparkles, Building2, User, Phone, CheckCircle } from 'lucide-react';
import { companyConfig, getWhatsAppLink } from '../config/company';

export default function ContactModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: defaultService || 'Automação de Processos',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Olá! Meu nome é ${formData.name || 'um cliente'}${formData.company ? ` da empresa ${formData.company}` : ''}.\nTenho interesse na área de: *${formData.service}*.\n${formData.message ? `Detalhes: ${formData.message}` : 'Gostaria de agendar uma reunião ou diagnóstico inicial.'}`;
    
    const url = getWhatsAppLink(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0C111C] border border-[#C5A059]/40 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#C5A059]/10 rounded-full blur-[70px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
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

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Serviço de Interesse
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              >
                <option value="Automação de Processos">Automação de Processos</option>
                <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                <option value="Infraestrutura de Dados">Infraestrutura de Dados</option>
                <option value="Consultoria Geral">Outro / Consultoria Geral</option>
              </select>
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
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] hover:brightness-110 shadow-lg shadow-[#C5A059]/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
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

