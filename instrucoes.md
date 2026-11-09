# Ætech - Landing Page Institucional e Kit de Mídia Digital

## 📌 Contexto para a IA (Instruções de Geração)
Você é um desenvolvedor frontend especialista em **React, Vite e Tailwind CSS**.
O objetivo é gerar a estrutura inicial e os componentes de uma Landing Page (página única) para a empresa de engenharia tecnológica **Ætech**. 
O código deve ser modular, limpo, responsivo (Mobile First) e pronto para produção.

## 🛠️ Stack Tecnológico
*   **Framework:** React + Vite (`npm create vite@latest`)
*   **Estilização:** Tailwind CSS
*   **Carrossel:** Swiper.js (para React, focado no mural do Instagram)
*   **Ícones:** Lucide React ou FontAwesome

## 🎨 Identidade Visual (Design System)
A paleta de cores deve espelhar a logomarca da empresa:
*   **Fundo Principal:** Fundo escuro (Preto sólido `#000000` ou Chumbo muito escuro `bg-slate-900`).
*   **Textos Principais:** Branco ou Cinza claro (`text-gray-100`, `text-gray-300`).
*   **Destaques e Botões (Dourado):** Tons baseados no logo (ex: `#C5A059`, `#D4AF37` ou classes como `text-yellow-500` / `bg-yellow-600` ajustadas para um dourado sofisticado).
*   **Detalhes Secundários (Prata/Cinza Metálico):** Tons de cinza azulado (`text-slate-400`).
*   **Tipografia:** Fonte moderna, sem serifa, limpa e tecnológica (ex: Inter ou Roboto via Google Fonts).

## 📂 Estrutura de Seções (Single Page)

1.  **Navbar (Fixo):**
    *   Logo da Ætech alinhada à esquerda.
    *   Links de âncora invisíveis em mobile, visíveis em desktop (Quem Somos, Soluções, Mural, Contato).

2.  **Hero Section:**
    *   Fundo escuro.
    *   Logo grande (`aetech logo.jpg`) e/ou Banner (`aetech banner.jpg`) integrados visualmente.
    *   Headline: "Engenharia para organizações inteligentes".
    *   Call to Action (Botão Dourado): "Fale com um Especialista" (âncora para contato/WhatsApp).

3.  **Quem Somos:**
    *   Texto curto e direto.
    *   Foco em: infraestrutura corporativa, automação e inteligência de dados.

4.  **Nossos Serviços (Cards):**
    *   Estrutura de *grid* (semelhante a cards de preços/planos).
    *   Cards com bordas sutis douradas/metálicas e fundo levemente mais claro que o fundo principal (`bg-slate-800`).
    *   Serviços: Automação de Processos, Gestão e Migração de Dados, Infraestrutura de TI, Desenvolvimento de Software.

5.  **Mural Social (Carrossel do Instagram):**
    *   Utilizar **Swiper.js** com a propriedade `autoplay` ativada (rolagem automática para o lado).
    *   O componente deve prever placeholders quadrados (`aspect-square`) para receber as futuras imagens ou iframes do Instagram.

6.  **Rodapé (Contato):**
    *   Domínio: `grupoaetech.com.br`
    *   E-mail: E-mail corporativo a definir.
    *   Endereço: Aracaju, Sergipe.
    *   Botão direto para o WhatsApp.
    *   Logo da empresa em tamanho reduzido.

## 🚀 Passos Imediatos para a IA da IDE
1.  Inicie o projeto React + Vite.
2.  Configure o Tailwind CSS no `tailwind.config.js`.
3.  Crie a estrutura de pastas (`/src/components`, `/src/assets`).
4.  Gere os componentes modulares para cada seção (`Hero.jsx`, `Services.jsx`, `InstagramCarousel.jsx`, `Footer.jsx`).
5.  Monte a `App.jsx` importando e organizando todos os componentes em ordem.