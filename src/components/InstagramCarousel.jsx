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
  // Posts padrão com temas reais da empresa caso o feed dinâmico não esteja ativo ou esteja carregando
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

  // Busca as postagens reais automaticamente caso haja um Feed ID do Behold configurado
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
    <section id="mural" className="py-24 bg-[#080B10] relative overflow-hidden scroll-mt-24">
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

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            key={posts.length}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={posts.length >= 4}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
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
                <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-[#C5A059]/70 hover:shadow-xl hover:shadow-[#C5A059]/10">
                  
                  {/* Aspect-square Container */}
                  <div className={`aspect-square w-full relative p-6 flex flex-col justify-between ${!post.image ? `bg-gradient-to-br ${post.gradient}` : 'bg-black'}`}>
                    
                    {/* Real Image If Available */}
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    {/* Gradient overlay for readability if real image is present */}
                    {post.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/60 pointer-events-none"></div>
                    )}

                    {/* Background Tech Mesh lines (fallback when no image) */}
                    {!post.image && (
                      <div 
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle, #C5A059 1px, transparent 1px)`,
                          backgroundSize: '16px 16px'
                        }}
                      ></div>
                    )}

                    {/* Top Row: Tag & Instagram Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFBF79] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                        {post.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-slate-700/60 flex items-center justify-center text-[#C5A059]">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="relative z-10 my-auto text-left py-2">
                      <h4 className="text-base font-bold text-white group-hover:text-[#DFBF79] transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-300/90 mt-2 line-clamp-3 leading-relaxed">
                        {post.caption}
                      </p>
                    </div>

                    {/* Bottom: Metrics & Date */}
                    <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                          <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center gap-1 hover:text-white transition-colors">
                          <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">{post.date}</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#080B10]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <a
                        href={post.postUrl || companyConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#DFBF79] text-black text-xs font-bold uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-lg shadow-[#C5A059]/30"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver no Instagram</span>
                      </a>
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
