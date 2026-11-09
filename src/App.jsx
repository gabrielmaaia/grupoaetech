import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InstagramCarousel from './components/InstagramCarousel';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './config/company';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openContact = (serviceName = '') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const closeContact = () => {
    setModalOpen(false);
  };

  const floatingWhatsAppUrl = getWhatsAppLink("Olá! Gostaria de conversar com um especialista da Ætech.");

  return (
    <div className="min-h-screen bg-[#05070B] text-gray-100 flex flex-col font-sans selection:bg-[#C5A059] selection:text-black">
      <Navbar onOpenContact={() => openContact()} />
      <main className="flex-grow">
        <Hero onOpenContact={() => openContact()} />
        <About />
        <Services onSelectService={(service) => openContact(service)} />
        <InstagramCarousel />
      </main>
      <Footer onOpenContact={() => openContact()} />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={closeContact}
        defaultService={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-emerald-400 group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute right-16 bg-slate-900/95 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale com um Especialista
        </span>
      </a>
    </div>
  );
}
