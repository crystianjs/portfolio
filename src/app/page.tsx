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
  Monitor,
  Smartphone,
  Code2,
  Terminal,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  X,
  Menu,
  Clock,
  Send,
  FileText,
  HeartHandshake,
  Server,
  Users,
  Palette,
  Lock,
  Key,
  CheckCircle2
} from 'lucide-react';

export default function Portfolio() {
  const [hubViewMode, setHubViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [ialeViewMode, setIaleViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formaturaImages = [
    { src: "/formatura(1).jpeg", caption: "Colação de Grau - ADS Unicesumar" },
    { src: "/formatura(2).jpeg", caption: "Colação de Grau - ADS Unicesumar" },
    { src: "/formatura(3).jpeg", caption: "Colação de Grau - ADS Unicesumar" },
    { src: "/formatura(4).jpeg", caption: "Colação de Grau - ADS Unicesumar" },
  ];

  const experiencePrints = [
    { 
      src: "/photo_cerba_2.png", 
      title: "Atuação em Sistemas e Suporte Técnico", 
      desc: "Atuação em sistemas corporativos, suporte técnico e desenvolvimento de consultas complexas utilizando query e inner join para extração e análise de dados no setor de tecnologia e saúde." 
    },
    { 
      src: "/PostgreSQL-Logo.jpg", 
      title: "Manipulação de Dados e Consultas SQL", 
      desc: "Manipulação de dados utilizando Excel e PostgreSQL, além de automações de processos com Power Automate, n8n e Python." 
    },
    { 
      src: "/projeto/power_automate.png", 
      title: "Automação e Monitoramento", 
      desc: "Execução de rotinas automatizadas, scripts e acompanhamento de logs de integração em tempo real." 
    }
  ];

  const hubDesktopPrints = [
    { 
      src: "/projeto/headi_tarefa_subtaref_funcoes.png", 
      title: "Tarefas, Subtarefas e Registro de Atividades", 
      desc: "Gerenciamento completo onde cada tarefa principal possui subtarefas detalhadas, controle de tempo dedicado, anotações técnicas e rastreabilidade de status em tempo real." 
    },
    { 
      src: "/projeto/Dashboard_Projeto1.png", 
      title: "Dashboard Analítico e Evolução de Projetos", 
      desc: "Acompanhamento visual de status operacionais com barra de progresso, total de tarefas concluídas, em andamento, pendentes e métricas consolidadas da equipe." 
    },
    { 
      src: "/projeto/torre_ao_vivo.png", 
      title: "Torre de Controle ao Vivo", 
      desc: "Visão geral em tempo real da disponibilidade da equipe técnica em campo e escritórios, permitindo despacho rápido e monitoramento de chamados críticos." 
    }
  ];

  const hubMobilePrints = [
    { src: "/projetohub_mobile/cadastrar_usuario.jpeg", title: "Cadastro de Usuário", desc: "Fluxo simplificado e responsivo para cadastro e gestão de novos colaboradores no sistema HEADI." },
    { src: "/projetohub_mobile/dashboard.jpeg", title: "Dashboard Mobile", desc: "Visão geral e resumida das métricas de produtividade e status de projetos na palma da mão." },
    { src: "/projetohub_mobile/Headi_cabeçalho.jpeg", title: "Cabeçalho e Menu Principal", desc: "Navegação adaptada para telas touch, garantindo acesso rápido aos módulos operacionais em campo." },
    { src: "/projetohub_mobile/tarefa.jpeg", title: "Gestão de Tarefas e Apontamento", desc: "Interface otimizada para abertura e apontamento de horas em tarefas e subtarefas por dispositivos móveis." },
    { src: "/projetohub_mobile/torre.jpeg", title: "Torre de Controle Mobile", desc: "Monitoramento da equipe em tempo real adaptado para visualização vertical em smartphones." },
  ];

  const ialeDesktopPrints = [
    { src: "/projetoiale_desktop/agenda.png", title: "Agenda da Comunidade", desc: "Gestão unificada de eventos, cultos e reuniões com visualização interativa em calendário corporativo." },
    { src: "/projetoiale_desktop/comunicados.png", title: "Central de Comunicados", desc: "Módulo robusto para envio e leitura de notícias, diretrizes e avisos importantes para os membros." },
    { src: "/projetoiale_desktop/curso_estudo.png", title: "Módulo de Estudos Bíblicos", desc: "Plataforma para disponibilização de materiais didáticos, cursos e estudos teológicos online." },
    { src: "/projetoiale_desktop/navbar.png", title: "Navbar de Navegação", desc: "Barra lateral intuitiva para acesso rápido a todos os módulos do ecossistema IALE." },
    { src: "/projetoiale_desktop/oracao.png", title: "Mural de Orações", desc: "Espaço colaborativo e seguro para pedidos e agradecimentos da comunidade em tempo real." },
  ];

  const ialeMobilePrints = [
    { src: "/projetoiale_mobile/agenda.jpeg", title: "Agenda Mobile", desc: "Eventos e programações da igreja organizados para acesso rápido e fluido no celular." },
    { src: "/projetoiale_mobile/album.jpeg", title: "Álbum de Mídias", desc: "Galeria de fotos e vídeos dos principais eventos, batismos e atividades da comunidade." },
    { src: "/projetoiale_mobile/comunicado.jpeg", title: "Comunicados Mobile", desc: "Visualização otimizada de avisos institucionais e mensagens pastorais em formato responsivo." },
    { src: "/projetoiale_mobile/comunidade.jpeg", title: "Painel da Comunidade", desc: "Visão geral da área do membro com acesso a aniversariantes do mês e mural interativo." },
    { src: "/projetoiale_mobile/louvor.jpeg", title: "Painel de Louvor", desc: "Repertório de músicas, cifras e arquivos de áudio para o ministério de música da igreja." },
    { src: "/projetoiale_mobile/oracao.jpeg", title: "Orações Mobile", desc: "Mural de orações interativo adaptado para toque e engajamento em dispositivos móveis." },
  ];

  const dashboardPrints = [
    { src: "/projetodashboard/monitoramento_logs.png", title: "Monitoramento em Tempo Real", desc: "Visão geral das últimas 24h contabilizando logs na fila e tabela dinâmica de movimentação de dados com status e horários precisos." },
    { src: "/projetodashboard/ultimos_logs.png", title: "Gerenciamento e Fila de Registros", desc: "Cards detalhados por ID de paciente e pedido, permitindo alternar status (Em verificação / Resolvido) e ações de exclusão com total segurança." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % formaturaImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [formaturaImages.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-slate-100 font-sans antialiased selection:bg-[#FF7A00]/20 selection:text-[#FF7A00]">
      
      {/* --- NAVBAR FIXA COM ÂNCORAS --- */}
      <header className="fixed top-0 w-full z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('home')}
            className="font-mono font-extrabold text-base sm:text-lg text-white tracking-tight cursor-pointer flex items-center gap-1 hover:text-[#FF7A00] transition-colors"
          >
            <span className="text-[#FF7A00]">&lt;</span>
            <span>Crystian.Dev</span>
            <span className="text-[#FF7A00]">/&gt;</span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Início</button>
            <button onClick={() => scrollToSection('projetos')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Projetos</button>
            <button onClick={() => scrollToSection('estudo-de-caso')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Estudo de Caso</button>
            <button onClick={() => scrollToSection('stack')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Stack</button>
            <button onClick={() => scrollToSection('servicos')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Serviços</button>
            <button onClick={() => scrollToSection('curriculo')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Currículo</button>
            <button onClick={() => scrollToSection('competencias')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Competências</button>
            <button onClick={() => scrollToSection('formatura')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Colação</button>
          </nav>

          {/* Botões do Topo (Contato + Menu Mobile) */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2.5 bg-[#FF7A00] hover:bg-[#e06c00] text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> 
              <span className="hidden sm:inline">Contato Direto</span>
              <span className="sm:hidden">Contato</span>
            </a>

            {/* Botão Navbar Mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-neutral-900 border border-neutral-800 text-white rounded-xl hover:border-[#FF7A00] transition-all shadow-md"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF7A00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-4 flex flex-col gap-2 shadow-2xl">
            <button onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Início</button>
            <button onClick={() => { scrollToSection('projetos'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Projetos</button>
            <button onClick={() => { scrollToSection('estudo-de-caso'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Estudo de Caso</button>
            <button onClick={() => { scrollToSection('stack'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Stack</button>
            <button onClick={() => { scrollToSection('servicos'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Serviços</button>
            <button onClick={() => { scrollToSection('curriculo'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Currículo</button>
            <button onClick={() => { scrollToSection('competencias'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Competências</button>
            <button onClick={() => { scrollToSection('formatura'); setMobileMenuOpen(false); }} className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all">Colação</button>
          </div>
        )}
      </header>

      {/* --- MODAL DE ZOOM DE IMAGENS --- */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-neutral-800"
          />
        </div>
      )}

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-36 relative z-10">

        {/* 1. SEÇÃO INÍCIO (HERO) */}
        <section id="home" className="pt-8 scroll-mt-28">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 text-[#FF7A00] text-xs font-mono mb-6 border border-[#FF7A00]/30">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping"></span>
                <span>Disponível para novos projetos e contratos corporativos</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]">Desenvolvedor Web <br /><span className="text-[#FF7A00]">com IA e Dados.</span></h1>
              <p className="text-neutral-400 text-lg sm:text-xl font-light mb-10 max-w-xl leading-relaxed">
                Especialista em construir ecossistemas web robustos, sites e sistemas corporativos. Utilizo Inteligência Artificial como ferramenta de suporte e aceleração de desenvolvimento, unindo alta performance, automação e experiência de usuário.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('projetos')} className="px-8 py-4 bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold rounded-2xl flex items-center gap-3 transition-all shadow-lg hover:scale-[1.02]">
                  Ver Projetos <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection('servicos')} className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-2xl flex items-center gap-3 transition-all border border-neutral-700">
                  <Briefcase className="w-4 h-4 text-[#FF7A00]" /> Contratar Serviços
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-800">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">3+</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Anos em Tech</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">3+</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Sistemas Desenvolvidos</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">100%</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Segurança e Qualidade</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-800 group cursor-pointer" onClick={() => setSelectedImage("/avatar-fullstack.jpg")}>
                <img src="/avatar-fullstack.jpg" alt="Crystian Foto" className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO PROJETOS */}
        <section id="projetos" className="scroll-mt-28">
          <div className="mb-10">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Portfólio de Soluções</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Projetos em Destaque</h2>
            <p className="text-neutral-400 mt-2">Documentação visual completa das telas Desktop e Mobile de sistemas reais em produção. Clique em qualquer imagem para ampliar.</p>
          </div>

          <div className="space-y-20">
            
            {/* HUB OPERACIONAL */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-neutral-800 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-8">
                <div>
                  <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Sistema de Missão Crítica e Gestão</span>
                  <h3 className="text-3xl font-black tracking-tight">Hub Operacional - Gestão e Pendências</h3>
                  <p className="text-neutral-400 text-base mt-2 max-w-3xl leading-relaxed">Gerenciamento avançado de grandes projetos com controle rigoroso de pendências, horas por subtarefas, dashboards gerenciais e torre de controle ao vivo.</p>
                </div>
                <a href="https://analiza-ata.vercel.app/login" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shrink-0">
                  Acessar Online <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-neutral-950 p-3 rounded-2xl border border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 pl-2">// Alternar Visão do Sistema</span>
                <div className="flex gap-2">
                  <button onClick={() => setHubViewMode('desktop')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${hubViewMode === 'desktop' ? 'bg-[#FF7A00] text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}>
                    <Monitor className="w-4 h-4" /> Desktop ({hubDesktopPrints.length})
                  </button>
                  <button onClick={() => setHubViewMode('mobile')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${hubViewMode === 'mobile' ? 'bg-[#FF7A00] text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}>
                    <Smartphone className="w-4 h-4" /> Mobile ({hubMobilePrints.length})
                  </button>
                </div>
              </div>

              {hubViewMode === 'desktop' ? (
                <div className="space-y-10">
                  {hubDesktopPrints.map((item, idx) => (
                    <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full font-bold inline-block">Módulo Desktop</span>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="lg:col-span-7 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                        <img src={item.src} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  {hubMobilePrints.map((item, idx) => (
                    <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Mobile</span>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-xl flex justify-center p-4 cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                        <img src={item.src} alt={item.title} className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DASHBOARD DE LOGS */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-neutral-800 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-8">
                <div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Automação, Fila e Monitoramento Corporativo</span>
                  <h3 className="text-3xl font-black tracking-tight">Dashboard de Monitoramento de Logs (Fila)</h3>
                  <p className="text-neutral-400 text-base mt-2 max-w-3xl leading-relaxed">Painel corporativo em tempo real para rastreamento de filas de integração, status de processamento e gerenciamento seguro de registros.</p>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-mono font-bold shrink-0">
                  <Clock className="w-4 h-4 animate-spin" /> Em Andamento / Produção
                </div>
              </div>

              <div className="space-y-10">
                {dashboardPrints.map((item, idx) => (
                  <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800">
                    <div className="lg:col-span-5 space-y-3">
                      <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full font-bold inline-block">Módulo de Logs</span>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="lg:col-span-7 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                      <img src={item.src} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IALE COMUNIDADE */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-neutral-800 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-8">
                <div>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Ecossistema Web e Comunidade</span>
                  <h3 className="text-3xl font-black tracking-tight">IALE - Comunidade</h3>
                  <p className="text-neutral-400 text-base mt-2 max-w-3xl leading-relaxed">Plataforma de gestão integrada com painel de música, repertório, bate-papo, central de comunicados, base de aniversariantes e agenda.</p>
                </div>
                <a href="https://iale.vercel.app/login" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-lg shrink-0">
                  Acessar Online <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-neutral-950 p-3 rounded-2xl border border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 pl-2">// Versões Disponíveis do IALE</span>
                <div className="flex gap-2">
                  <button onClick={() => setIaleViewMode('desktop')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${ialeViewMode === 'desktop' ? 'bg-[#FF7A00] text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}>
                    <Monitor className="w-4 h-4" /> Desktop ({ialeDesktopPrints.length})
                  </button>
                  <button onClick={() => setIaleViewMode('mobile')} className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${ialeViewMode === 'mobile' ? 'bg-[#FF7A00] text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}>
                    <Smartphone className="w-4 h-4" /> Mobile ({ialeMobilePrints.length})
                  </button>
                </div>
              </div>

              {ialeViewMode === 'desktop' ? (
                <div className="space-y-10">
                  {ialeDesktopPrints.map((item, idx) => (
                    <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Desktop</span>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-xl flex justify-center p-4 cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                        <img src={item.src} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  {ialeMobilePrints.map((item, idx) => (
                    <div key={idx} className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/60 p-6 sm:p-8 rounded-3xl border border-neutral-800">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block">Visão Mobile</span>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-xl flex justify-center p-4 cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                        <img src={item.src} alt={item.title} className="max-h-[380px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 3. SEÇÃO ESTUDO DE CASO / IDEIAS MINHAS: UPQUEST-ES */}
        <section id="estudo-de-caso" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Estudo de Caso & Ideias Minhas</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">UpQuest-es - Portal de Estudos TJSP</h2>
            <p className="text-neutral-400 mt-2">Plataforma de alta performance desenvolvida para acompanhamento de questões, desempenho analítico e treinamento focado em concursos públicos.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 text-red-400 text-xs font-mono border border-red-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Interface Dark Mode Exclusiva (Vermelho e Preto)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Sobre o Sistema & Funcionalidades</h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  O <strong className="text-white">UpQuest-es</strong> nasceu da necessidade de criar um ecossistema focado na preparação para o concurso de Escrevente do TJSP. A aplicação conta com recursos avançados de rastreamento de estudos, contagem de acertos/erros e treinamento de redação com temporizador.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Registro de Questões por Matéria</h4>
                      <p className="text-xs text-neutral-400 mt-1">Lançamento diário de blocos de estudo com contagem de acertos, erros e apontamento rigoroso de pontos de melhoria.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Painel de Desempenho Analítico</h4>
                      <p className="text-xs text-neutral-400 mt-1">Gráficos e indicadores consolidados com filtro dinâmico por disciplina do edital.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Treinador de Redação</h4>
                      <p className="text-xs text-neutral-400 mt-1">Módulo de redação cronometrado com contagem de palavras e salvamento automatizado em banco de dados.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mídia: Vídeo (Loop 3s) e Imagem de Preview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden group">
                  <p className="text-xs font-mono text-neutral-400 mb-2">// Demonstração em Vídeo</p>
                  <video 
                    src="/video.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto rounded-xl object-cover shadow-md border border-neutral-800"
                  />
                </div>

                <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden group cursor-pointer" onClick={() => setSelectedImage("/imagem-upquestoes.jpg")}>
                  <p className="text-xs font-mono text-neutral-400 mb-2">// Tela de Acesso e Interface (Clique para ampliar)</p>
                  <img 
                    src="/imagem-upquestoes.jpg" 
                    alt="UpQuest-es Preview" 
                    className="w-full h-auto rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* CALLOUT DE ACESSO E TESTE DO USUÁRIO */}
            <div className="bg-red-950/30 border border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Key className="w-4 h-4" /> Acesso de Testes Disponível para Visitantes
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Teste o sistema agora mesmo com usuário dedicado!</h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-xl">
                  Criamos um usuário e senha exclusivos para que qualquer avaliador ou visitante possa entrar, navegar e testar todas as funcionalidades do UpQuest-es antes de fazer o login principal.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono text-neutral-300">
                  <span className="bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800">👤 Usuário de Teste: <strong className="text-white">visitante@upquestoes.com</strong></span>
                  <span className="bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800">🔑 Senha: <strong className="text-white">tjsp2026</strong></span>
                </div>
              </div>

              <a 
                href="https://upquestoes.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl flex items-center gap-3 transition-all shadow-lg hover:scale-105 shrink-0"
              >
                Acessar UpQuest-es <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

        {/* 4. SEÇÃO STACK TECH */}
        <section id="stack" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Ferramentas e Tecnologias</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Stack Tecnológica</h2>
            <p className="text-neutral-400 mt-2">Tecnologias de ponta utilizadas na arquitetura e construção de soluções corporativas e web apps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Layout className="w-8 h-8 text-[#FF7A00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Front-end e Web</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">Next.js • React • TypeScript • Tailwind CSS • Framer Motion • Desenvolvimento Web moderno e responsivo.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-[#FF7A00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dados, SQL e APIs</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">PostgreSQL • Supabase • Consultas SQL diárias • Modelagem relacional • Postman • Requisições HTTP e automações.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-8 h-8 text-[#FF7A00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Backend, IA & Automação</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">Node.js • Python • Power Automate • n8n • Integração de APIs • Scripts de Automação e IA como ferramenta de suporte.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SEÇÃO SERVIÇOS */}
        <section id="servicos" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Como Posso Ajudar</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Serviços Especializados</h2>
            <p className="text-neutral-400 mt-2">Soluções focadas em transformar processos manuais em sistemas escaláveis e eficientes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desenvolvimento Full-Stack</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Criação de sistemas web sob medida, landing pages de alta conversão e aplicações robustas usando Next.js, React e TypeScript.</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Banco de Dados & SQL</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Modelagem relacional, estruturação de tabelas, otimização de consultas complexas e suporte a bancos de dados PostgreSQL e Supabase.</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automação de Processos</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Integração de sistemas, criação de fluxos automatizados com Power Automate, n8n, Python e scripts para ganho de produtividade.</p>
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO CURRÍCULO E EXPERIÊNCIA */}
        <section id="curriculo" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Experiência Profissional</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Trajetória e Experiência</h2>
            <p className="text-neutral-400 mt-2">Atuação técnica em ambientes corporativos e de saúde, unindo suporte avançado, análise de dados e desenvolvimento.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {experiencePrints.map((exp, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="h-48 rounded-2xl overflow-hidden bg-neutral-950 mb-6 border border-neutral-800 cursor-pointer group" onClick={() => setSelectedImage(exp.src)}>
                    <img src={exp.src} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. SEÇÃO COMPETÊNCIAS */}
        <section id="competencias" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Habilidades Técnicas</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Competências Corporativas</h2>
            <p className="text-neutral-400 mt-2">Pilares de atuação que garantem entregas de alto nível e confiabilidade em projetos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl flex items-start gap-4">
              <div className="p-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl border border-[#FF7A00]/30 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Resolução de Problemas Complexos</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Diagnóstico rápido de falhas em sistemas de missão crítica, mitigação de riscos e garantia de estabilidade operacional.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl flex items-start gap-4">
              <div className="p-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl border border-[#FF7A00]/30 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Comunicação e Suporte Técnico</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Atendimento a equipes e clientes com clareza, documentação técnica detalhada e foco em usabilidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SEÇÃO FORMATURA */}
        <section id="formatura" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Conquista Acadêmica</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Colação de Grau - ADS Unicesumar</h2>
            <p className="text-neutral-400 mt-2">Formação superior em Análise e Desenvolvimento de Sistemas.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/15 text-[#FF7A00] text-xs font-mono border border-[#FF7A00]/30">
                <GraduationCap className="w-4 h-4" /> Ensino Superior Concluído
              </div>
              <h3 className="text-2xl font-bold text-white">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Consolidação da base teórica e prática em engenharia de software, arquitetura de sistemas, algoritmos e gestão de tecnologia.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span>Clique nas fotos para ampliar</span>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl group cursor-pointer" onClick={() => setSelectedImage(formaturaImages[currentSlide].src)}>
                <img 
                  src={formaturaImages[currentSlide].src} 
                  alt={formaturaImages[currentSlide].caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-sm font-semibold">{formaturaImages[currentSlide].caption}</p>
                </div>
              </div>

              {/* Botões do Carrossel */}
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? formaturaImages.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all border border-neutral-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {formaturaImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-[#FF7A00] w-6' : 'bg-neutral-700'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % formaturaImages.length)}
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all border border-neutral-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- RODAPÉ --- */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-mono font-bold text-white text-lg">&lt;Crystian.Dev /&gt;</span>
            <p className="text-xs text-neutral-400 mt-1">Desenvolvimento Web, IA e Sistemas Corporativos.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#FF7A00] transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#FF7A00] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}