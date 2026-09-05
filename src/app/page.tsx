"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail, 
  ShieldCheck, 
  Layout, 
  Database, 
  Layers,
  CheckCircle2,
  Monitor,
  Smartphone,
  Code2,
  Terminal,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Server,
  Zap,
  MessageSquare,
  UserCheck,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState<'home' | 'projetos' | 'stack' | 'curriculo' | 'formatura'>('home');
  
  const [hubViewMode, setHubViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [ialeViewMode, setIaleViewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Estado para controlar o modal de zoom ao clicar na imagem
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formaturaImages = [
    { src: "/formatura(1).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(2).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(3).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(4).jpeg", caption: "Momentos da Colação de Grau" },
  ];

  const hubDesktopPrints = [
    { src: "/projeto/headi_tarefa_subtaref_funcoes.png", title: "Tarefas, Subtarefas e Registro de Atividades", desc: "Gerenciamento completo onde cada tarefa principal possui subtarefas detalhadas, controle de tempo dedicado e anotações técnicas." },
    { src: "/projeto/Dashboard_Projeto1.png", title: "Dashboard Analítico e Evolução", desc: "Acompanhamento visual de status operacionais com barra de progresso, total de tarefas concluídas, em andamento e pendentes." },
    { src: "/projeto/torre_ao_vivo.png", title: "Torre de Controle ao Vivo", desc: "Visão geral em tempo real da disponibilidade da equipe técnica em campo e escritórios." }
  ];

  const hubMobilePrints = [
    { src: "/projetohub_mobile/cadastrar_usuario.jpeg", title: "Cadastro de Usuário", desc: "Fluxo simplificado para cadastro e gestão de novos colaboradores no sistema HEADI." },
    { src: "/projetohub_mobile/dashboard.jpeg", title: "Dashboard Mobile", desc: "Visão geral e resumida das métricas de produtividade e status de projetos na palma da mão." },
    { src: "/projetohub_mobile/Headi_cabeçalho.jpeg", title: "Cabeçalho e Menu Principal", desc: "Navegação adaptada para telas touch, garantindo acesso rápido aos módulos operacionais." },
    { src: "/projetohub_mobile/tarefa.jpeg", title: "Gestão de Tarefas e Apontamento", desc: "Interface otimizada para abertura e apontamento de horas em tarefas e subtarefas em campo." },
    { src: "/projetohub_mobile/torre.jpeg", title: "Torre de Controle Mobile", desc: "Monitoramento da equipe em tempo real, adaptado para visualização vertical em smartphones." },
  ];

  const ialeDesktopPrints = [
    { src: "/projetoiale_desktop/agenda.png", title: "Agenda da Comunidade", desc: "Gestão unificada de eventos, cultos e reuniões com visualização em calendário." },
    { src: "/projetoiale_desktop/comunicados.png", title: "Central de Comunicados", desc: "Módulo para envio e leitura de notícias e avisos importantes para os membros." },
    { src: "/projetoiale_desktop/curso_estudo.png", title: "Módulo de Estudos Bíblicos", desc: "Plataforma para disponibilização de materiais, cursos e estudos teológicos online." },
    { src: "/projetoiale_desktop/navbar.png", title: "Navbar de Navegação", desc: "Barra lateral intuitiva para acesso rápido a todos os módulos do sistema IALE." },
    { src: "/projetoiale_desktop/oracao.png", title: "Mural de Orações", desc: "Espaço colaborativo para pedidos e agradecimentos da comunidade em tempo real." },
  ];

  const ialeMobilePrints = [
    { src: "/projetoiale_mobile/agenda.jpeg", title: "Agenda Mobile", desc: "Eventos e programações da igreja organizados para acesso rápido no celular." },
    { src: "/projetoiale_mobile/album.jpeg", title: "Álbum de Mídias", desc: "Galeria de fotos e vídeos dos principais eventos e atividades da comunidade." },
    { src: "/projetoiale_mobile/comunicado.jpeg", title: "Comunicados Mobile", desc: "Visualização otimizada de avisos institucionais e mensagens pastorais." },
    { src: "/projetoiale_mobile/comunidade.jpeg", title: "Painel da Comunidade", desc: "Visão geral da área do membro com acesso a aniversariantes e mural." },
    { src: "/projetoiale_mobile/louvor.jpeg", title: "Painel de Louvor", desc: "Repertório de músicas, cifras e arquivos de áudio para o ministério de música." },
    { src: "/projetoiale_mobile/oracao.jpeg", title: "Orações Mobile", desc: "Mural de orações interativo adaptado para interação em dispositivos móveis." },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % formaturaImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [formaturaImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % formaturaImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + formaturaImages.length) % formaturaImages.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#1569EF]/20 selection:text-[#1569EF]">
      
      <head>
        <link rel="icon" href="/fivconq.png" type="image/png" />
      </head>

      {/* --- NAVBAR SUPERIOR --- */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => setCurrentTab('home')}
            className="font-mono font-extrabold text-base sm:text-lg text-slate-900 tracking-tight cursor-pointer flex items-center gap-1 hover:text-[#1569EF] transition-colors"
          >
            <span className="text-[#1569EF]">&lt;</span>
            <span>Crystian.Dev</span>
            <span className="text-[#1569EF]">/&gt;</span>
          </div>

          <nav className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto max-w-full">
            <button onClick={() => setCurrentTab('home')} className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'home' ? 'bg-[#1569EF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>Início</button>
            <button onClick={() => setCurrentTab('projetos')} className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'projetos' ? 'bg-[#1569EF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>Projetos</button>
            <button onClick={() => setCurrentTab('stack')} className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'stack' ? 'bg-[#1569EF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>Stack Tech</button>
            <button onClick={() => setCurrentTab('curriculo')} className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'curriculo' ? 'bg-[#1569EF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>Currículo</button>
            <button onClick={() => setCurrentTab('formatura')} className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'formatura' ? 'bg-[#1569EF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>Formatura</button>
          </nav>
        </div>
      </header>

      {/* --- MODAL PARA ZOOM DE IMAGENS --- */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Visualização Ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          
          {currentTab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="py-4">
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#1569EF] to-blue-700 rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="lg:col-span-7 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-mono mb-6 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Disponível para novos projetos</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]">Full Stack <br />Developer.</h1>
                  <p className="text-blue-100 text-lg sm:text-xl font-light mb-10 max-w-xl leading-relaxed">
                    Especialista em construir ecossistemas web robustos, seguros e escaláveis com foco total em alta performance e experiência do usuário.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => setCurrentTab('projetos')} className="px-8 py-4 bg-white text-[#1569EF] font-bold rounded-2xl flex items-center gap-3 transition-all shadow-lg hover:bg-slate-100 hover:scale-[1.02]">
                      Meus Projetos <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-900/40 backdrop-blur-md text-white font-semibold rounded-2xl flex items-center gap-3 transition-all border border-white/20 hover:bg-blue-900/60">
                      <MessageSquare className="w-4 h-4 text-cyan-300" /> Entrar em Contato
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setSelectedImage("/avatar-fullstack.jpg")}>
                    <img src="/avatar-fullstack.jpg" alt="Foto Profissional" className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentTab === 'projetos' && (
            <motion.div key="projetos" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Portfólio de Soluções</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Sessões Detalhadas de Projetos</h2>
                <p className="text-slate-600 mt-2">Documentação visual completa das telas Desktop e Mobile em sessões organizadas. Clique em qualquer imagem para ampliar.</p>
              </div>

              {/* PROJETO 1: HUB OPERACIONAL / ANALIZA ATA */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 mb-16 relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-800 pb-8">
                  <div>
                    <span className="text-xs font-mono text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Sistema de Missão Crítica</span>
                    <h3 className="text-3xl font-black tracking-tight">Hub Operacional - Pendencias e Gestão</h3>
                    <p className="text-slate-400 text-base mt-2 max-w-3xl leading-relaxed">Gerenciamento de grandes projetos com controle de pendências, horas por subtarefas, dashboards e torre ao vivo.</p>
                  </div>
                  <a href="https://analiza-ata.vercel.app/login" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shrink-0">
                    Acessar Online <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs font-mono text-slate-400 pl-2">// Alternar Visão do Sistema</span>
                  <div className="flex gap-2">
                    <button onClick={() => setHubViewMode('desktop')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${hubViewMode === 'desktop' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                      <Monitor className="w-4 h-4" /> Visão Desktop
                    </button>
                    <button onClick={() => setHubViewMode('mobile')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${hubViewMode === 'mobile' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                      <Smartphone className="w-4 h-4" /> Visão Mobile
                    </button>
                  </div>
                </div>

                {hubViewMode === 'desktop' ? (
                  <div className="space-y-8">
                    {hubDesktopPrints.map((item, idx) => (
                      <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
                        <div className="lg:col-span-5 space-y-3">
                          <span className="text-xs font-mono text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full font-bold inline-block">Módulo Desktop</span>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                          <img src={item.src} alt={item.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" title="Clique para ampliar" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {hubMobilePrints.map((item, idx) => (
                      <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
                        <div className="lg:col-span-5 space-y-3">
                          <span className="text-xs font-mono text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Mobile</span>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex justify-center p-4 cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                          <img src={item.src} alt={item.title} className="max-h-[350px] w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl" title="Clique para ampliar" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PROJETO 2: IALE COMUNIDADE */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-800 pb-8">
                  <div>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Ecossistema Corporativo e Igreja</span>
                    <h3 className="text-3xl font-black tracking-tight">IALE - Comunidade</h3>
                    <p className="text-slate-400 text-base mt-2 max-w-3xl leading-relaxed">Plataforma de gestão integrada com painel de música, repertório, bate-papo, central de comunicados e base de aniversariantes.</p>
                  </div>
                  <a href="https://iale.vercel.app/login" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#1569EF] hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shrink-0">
                    Acessar Online <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs font-mono text-slate-400 pl-2">// Versões Disponíveis do IALE</span>
                  <div className="flex gap-2">
                    <button onClick={() => setIaleViewMode('desktop')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${ialeViewMode === 'desktop' ? 'bg-[#1569EF] text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                      <Monitor className="w-4 h-4" /> Versão Desktop
                    </button>
                    <button onClick={() => setIaleViewMode('mobile')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${ialeViewMode === 'mobile' ? 'bg-[#1569EF] text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
                      <Smartphone className="w-4 h-4" /> Versão Mobile
                    </button>
                  </div>
                </div>

                {ialeViewMode === 'desktop' ? (
                  <div className="space-y-8">
                    {ialeDesktopPrints.map((item, idx) => (
                      <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
                        <div className="lg:col-span-5 space-y-3">
                          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Desktop</span>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex justify-center p-4 cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                          <img src={item.src} alt={item.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 rounded-xl" title="Clique para ampliar" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {ialeMobilePrints.map((item, idx) => (
                      <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
                        <div className="lg:col-span-5 space-y-3">
                          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Mobile</span>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex justify-center p-4 cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                          <img src={item.src} alt={item.title} className="max-h-[350px] w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl" title="Clique para ampliar" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {currentTab === 'stack' && (
            <motion.div key="stack" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Ferramentas</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Stack Tecnológica</h2>
                <p className="text-slate-600 mt-2">Tecnologias de ponta utilizadas na construção dos projetos.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <Layout className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Front-end</h3>
                  <p className="text-sm text-slate-600 font-mono">Next.js • React • TypeScript • Tailwind CSS</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <Database className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Back-end e Dados</h3>
                  <p className="text-sm text-slate-600 font-mono">Supabase • PostgreSQL • Node.js APIs</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">DevOps e Deploy</h3>
                  <p className="text-sm text-slate-600 font-mono">Vercel Cloud • Git CI/CD • Segurança</p>
                </div>
              </div>
            </motion.div>
          )}

          {currentTab === 'curriculo' && (
            <motion.div key="curriculo" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Perfil Profissional e Conquistas</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Currículo Profissional</h2>
                <p className="text-slate-600 mt-2">Analista de TI e Dados | Formado em Análise e Desenvolvimento de Sistemas (ADS) pela Unicesumar.</p>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-80 h-80 bg-[#1569EF]/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-[#1569EF]/30 text-cyan-300 border border-[#1569EF]/40">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Graduação e Trajetória</h3>
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-6">
                  Sou Analista de TI e Dados formado em ADS pela Faculdade Unicesumar, com atuação focada em engenharia de dados, automação, sustentação de sistemas de missão crítica e integração entre bancos de dados e planilhas no setor de Saúde e Diagnósticos Laboratoriais (operações Brasil/Espanha).
                </p>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  No dia a dia, utilizo um excelente relacionamento interpessoal para colaborar com o time na resolução rápida de problemas, aplicando a metodologia Kanban para manter o fluxo de entregas ágil e organizado.
                </p>
              </div>

              {/* Grid de Competências e Especialidades */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Projetos e Automações</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Especialidade em transformar rotinas manuais repetitivas em workflows automatizados. Diversos projetos em produção, automações ativas e em andamento utilizando <strong>N8N</strong>, <strong>Power Automate</strong>, scripts em <strong>Python</strong> e requisições via <strong>Postman</strong>, além de Front-End com HTML e CSS para interfaces amigáveis.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Database className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Data Integration (SQL e Excel)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Responsável pela movimentação, carga, tratamento e manipulação de grandes volumes de informações, realizando a exportação pesada de dados entre banco relacional, ferramentas de BI e Excel de forma performática para garantir melhoria de processos e SLA rápida.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Advanced Querying (PostgreSQL / PgAdmin)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Criação, otimização e manutenção diária de consultas SQL complexas utilizando múltiplos relacionamentos (INNER JOIN e LEFT JOIN), agregações e filtros avançados no sistema <strong>LIS (Laboratory Information System)</strong>, garantindo consultas rápidas e extração correta de dados analíticos de saúde.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Layout className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Tratamento Avançado em Excel</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Manipulação e cruzamento de bases de dados complexas de exames e atendimentos através de fórmulas estruturadas (<strong>PROCV</strong> e <strong>ÍNDICE/CORRESP</strong>), garantindo validação, integridade e correta estruturação das informações antes de disponibilizá-las para os sistemas ou áreas solicitantes.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Automação com IA Generativa</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Implementação de ferramentas de IA (Claude, Gemini) no cotidiano técnico para aceleração do desenvolvimento de scripts, documentação de queries complexas e automação de tarefas operacionais repetitivas.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/10 text-[#1569EF]">
                        <Server className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Sustentação de Sistemas LIS e Infraestrutura</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Monitoramento proativo e sustentação das plataformas médicas hospitalares, gerenciamento de servidores corporativos via ferramentas RMM/RDP, além do gerenciamento de firewalls e do ambiente Office 365.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção "Sobre Mim" */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#1569EF]/20 text-[#1569EF] border border-[#1569EF]/30">
                    <UserCheck className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#1569EF] uppercase tracking-wider font-bold">Apresentação Pessoal</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Sobre Mim</h3>
                  </div>
                </div>

                <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                  <p>
                    Olá! Sou o <strong className="text-white font-semibold">Crystian</strong>, um profissional apaixonado por tecnologia, dados e inovação, com forte atuação corporativa internacional (Brasil e Espanha) no exigente setor de Saúde e Diagnósticos Laboratoriais.
                  </p>
                  <p>
                    Minha jornada é impulsionada pelo desejo constante de resolver problemas complexos e otimizar processos operacionais que antes pareciam engessados. Acredito que a combinação entre uma engenharia de dados sólida, automações inteligentes com ferramentas modernas e o uso estratégico de Inteligência Artificial é o segredo para entregar valor real aos negócios.
                  </p>
                  <p>
                    Seja construindo ecossistemas web performáticos em Next.js, estruturando queries avançadas em PostgreSQL para sistemas de missão crítica (LIS), ou desenvolvendo fluxos automatizados em N8N e Python, meu compromisso é sempre unir alta técnica, empatia no trabalho em equipe e agilidade através do Kanban.
                  </p>
                </div>
              </div>

            </motion.div>
          )}

          {currentTab === 'formatura' && (
            <motion.div key="formatura" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Marco Acadêmico</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Galeria de Formatura</h2>
                <p className="text-slate-600 mt-2">Clique em qualquer foto para visualizá-la em tela cheia.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {formaturaImages.map((img, idx) => (
                  <div key={idx} className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 cursor-pointer group" onClick={() => setSelectedImage(img.src)}>
                    <div className="h-72 overflow-hidden">
                      <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" title="Clique para ampliar" />
                    </div>
                    <div className="p-4 text-center">
                      <span className="text-xs font-mono bg-[#1569EF]/80 text-white px-3 py-1 rounded-full">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* --- RODAPÉ --- */}
      <footer id="contato" className="border-t border-slate-200 bg-slate-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-mono font-bold text-lg text-white mb-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#1569EF]" /> DEV<span className="text-[#1569EF]">.</span> CRYSTIAN
            </div>
            <p className="text-slate-400 text-xs font-mono">© {new Date().getFullYear()} — Desenvolvido com foco em alta performance e sigilo.</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/crystianjs" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/crystian-jesus-a66622219" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:crystianjs09@gmail.com" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="E-mail"><Mail className="w-5 h-5" /></a>
            <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="WhatsApp"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}