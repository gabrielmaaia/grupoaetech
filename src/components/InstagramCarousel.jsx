import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { companyConfig } from '../config/company';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function InstagramCarousel() {
  // Posts padrão com temas reais da empresa caso o feed dinâmico não esteja ativo
  const defaultPosts = [
    {
      id: 1,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Engenharia de Dados',
      title: 'Da Planilha ao Banco de Dados',
      caption: 'Substituição definitiva de planilhas manuais e lentas por bancos de dados estruturados e seguros.',
      likes: '142',
      comments: '18',
      date: 'Há 2 dias',
      gradient: 'from-amber-900/40 via-slate-900 to-black',
    },
    {
      id: 2,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Automação & WABA',
      title: 'WhatsApp Oficial (WABA) + n8n',
      caption: 'Disparos automáticos e notificações em tempo real conectando sistemas corporativos à API oficial do WhatsApp sem risco de banimento.',
      likes: '235',
      comments: '34',
      date: 'Há 4 dias',
      gradient: 'from-[#C5A059]/30 via-slate-900 to-black',
    },
    {
      id: 3,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Engenharia de Dados',
      title: 'Migração de Bases Críticas',
      caption: 'Mais de 10TB migrados para a nuvem com zero downtime e governança total.',
      likes: '189',
      comments: '21',
      date: 'Há 1 semana',
      gradient: 'from-blue-900/40 via-slate-900 to-black',
    },
    {
      id: 4,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Sistemas Sob Medida',
      title: 'Plataforma Corporativa Sob Medida',
      caption: 'Microsserviços escaláveis conectando operações de ponta a ponta com estabilidade técnica.',
      likes: '312',
      comments: '42',
      date: 'Há 1 semana',
      gradient: 'from-slate-800 via-slate-900 to-black',
    },
    {
      id: 5,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Cultura & Engenharia',
      title: 'Time de Engenharia Ætech',
      caption: 'Inovação constante e foco na entrega de valor real e mensurável para nossos parceiros.',
      likes: '274',
      comments: '29',
      date: 'Há 2 semanas',
      gradient: 'from-[#DFBF79]/20 via-slate-900 to-black',
    },
    {
      id: 6,
      image: null,
      postUrl: companyConfig.social.instagram,
      tag: 'Segurança & LGPD',
      title: 'Auditoria e Compliance',
      caption: 'Blindagem de informações e governança rigorosa em total conformidade com a LGPD.',
      likes: '198',
      comments: '16',
      date: 'Há 3 semanas',
      gradient: 'from-emerald-950/40 via-slate-900 to-black',
    },
  ];

  const [posts, setPosts] = useState(defaultPosts);

  // Busca as postagens reais automaticamente do feed configurado
  useEffect(() => {
    if (!companyConfig.instagramFeedId) return;

    fetch(`https://feeds.behold.so/${companyConfig.instagramFeedId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao carregar feed do Instagram');
        return res.json();
      })
      .then((data) => {
        const rawPosts = Array.isArray(data) ? data : data.posts;
        if (rawPosts && rawPosts.length > 0) {
          const livePosts = rawPosts.map((post, idx) => {
            const imageUrl = post.mediaType === 'VIDEO' 
              ? (post.thumbnailUrl || post.mediaUrl) 
              : (post.mediaUrl || post.thumbnailUrl);

            const cleanCaption = (post.prunedCaption || post.caption || '').trim();
            const firstLine = cleanCaption.split('\n')[0].trim() || 'Post no Instagram';
            const dateFormatted = post.timestamp
              ? new Date(post.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
              : 'Recente';

            return {
              id: post.id || idx,
              image: imageUrl,
              postUrl: post.permalink || companyConfig.social.instagram,
              tag: post.hashtags && post.hashtags[0] ? `#${post.hashtags[0]}` : `@${data.username || 'instagram'}`,
              title: firstLine.length > 35 ? firstLine.slice(0, 32) + '...' : firstLine,
              caption: cleanCaption || 'Confira esta postagem no Instagram.',
              likes: String(post.likeCount || 0),
              comments: String(post.commentsCount || 0),
              date: dateFormatted,
              gradient: 'from-amber-900/40 via-slate-900 to-black',
            };
          });

          setPosts(livePosts);
        }
      })
      .catch((err) => {
        console.warn('Feed dinâmico não disponível, usando posts padrão da Ætech:', err);
      });
  }, []);

  return (
    <section id="mural" className="py-24 bg-[#080B10] relative overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#DFBF79] text-xs font-semibold uppercase tracking-wider">
              <InstagramIcon className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Mural Social</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Acompanhe a Ætech no Instagram
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Bastidores, inovações, projetos de engenharia e novidades tecnológicas compartilhadas em nossa comunidade.
            </p>
          </div>

          <div>
            <a
              href={companyConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#C5A059] transition-all group"
            >
              <InstagramIcon className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Siga Nosso Perfil</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Swiper Carousel com Cards Maiores (3 por tela no Desktop) */}
        <div className="relative">
          <Swiper
            key={posts.length}
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={posts.length >= 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="group relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-950 transition-all duration-300 hover:border-[#C5A059]/70 hover:shadow-2xl hover:shadow-[#C5A059]/15">
                  
                  {/* Container Limpo: Post visualmente puro, sem texto por cima na visualização normal */}
                  <div className="aspect-square w-full relative overflow-hidden bg-black flex items-center justify-center">
                    
                    {/* Imagem Real do Post em Destaque Limpo */}
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title || 'Post do Instagram'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      /* Fallback com gradiente tecnológico caso não haja imagem */
                      <div className={`w-full h-full relative p-6 flex flex-col justify-between bg-gradient-to-br ${post.gradient}`}>
                        <div 
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle, #C5A059 1px, transparent 1px)`,
                            backgroundSize: '16px 16px'
                          }}
                        ></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFBF79] bg-black/60 px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                            {post.tag}
                          </span>
                          <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
                        </div>
                        <div className="relative z-10 my-auto text-left py-2">
                          <h4 className="text-base font-bold text-white leading-snug">{post.title}</h4>
                          <p className="text-xs text-slate-300/90 mt-2 line-clamp-3 leading-relaxed">{post.caption}</p>
                        </div>
                        <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                          <span>{post.likes} curtidas</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    )}

                    {/* Selo sutil do Instagram no topo para identificar a origem */}
                    {post.image && (
                      <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/90 shadow-lg group-hover:opacity-0 transition-opacity pointer-events-none">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                    )}

                    {/* Overlay elegante que só aparece ao passar o mouse (Hover) */}
                    <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                      {/* Topo do Hover */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider text-[#DFBF79] bg-black/80 px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                          {post.tag}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          {post.date}
                        </span>
                      </div>

                      {/* Botão de Ação Central */}
                      <div className="my-auto text-center py-4">
                        <a
                          href={post.postUrl || companyConfig.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBF79] to-[#C5A059] text-black text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#C5A059]/30 hover:brightness-110 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
                        >
                          <InstagramIcon className="w-4 h-4 text-black" />
                          <span>Ver no Instagram</span>
                          <ExternalLink className="w-3.5 h-3.5 text-black" />
                        </a>
                      </div>

                      {/* Rodapé do Hover com Curtidas e Comentários Reais */}
                      <div className="flex items-center justify-between text-xs text-slate-300 border-t border-white/15 pt-3">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 font-semibold text-white">
                            <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                            <span>{post.likes}</span>
                          </span>
                          <span className="flex items-center gap-1.5 font-semibold text-white">
                            <MessageCircle className="w-4 h-4 text-slate-300" />
                            <span>{post.comments}</span>
                          </span>
                        </div>
                        <span className="text-[11px] text-[#DFBF79] font-medium">Instagram</span>
                      </div>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
