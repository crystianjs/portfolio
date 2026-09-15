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
  Clock,
  Send,
  FileText,
  HeartHandshake,
  Server
} from 'lucide-react';

export default function Portfolio() {
  const [hubViewMode, setHubViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [ialeViewMode, setIaleViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formaturaImages = [
    { src: "/formatura(1).jpeg", caption: "Momentos da Colação de Grau - ADS Unicesumar" },
    { src: "/formatura(2).jpeg", caption: "Colação de Grau - Recebimento de Diploma" },
    { src: "/formatura(3).jpeg", caption: "Celebração de Conclusão de Curso Superior" },
    { src: "/formatura(4).jpeg", caption: "Registro Especial da Formatura" },
  ];

  // Prints de Experiência atualizados com as imagens solicitadas
  const experiencePrints = [
    { 
      src: "/photo_cerba_1.png", 
      title: "Atuação em Sistemas e Suporte Técnico", 
      desc: "Registro de rotinas de atendimento, sistemas corporativos e chamados de alta criticidade no setor de tecnologia e saúde." 
    },
    { 
      src: "/PostgreSQL-Logo.jpg", 
      title: "Manipulação de Dados e Consultas SQL", 
      desc: "Ambiente de desenvolvimento e testes de consultas em bancos relacionais, Supabase e tratamento de dados diários." 
    },
    { 
      src: "/python.png", 
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

          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Início</button>
            <button onClick={() => scrollToSection('projetos')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Projetos</button>
            <button onClick={() => scrollToSection('stack')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Stack</button>
            <button onClick={() => scrollToSection('servicos')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Serviços</button>
            <button onClick={() => scrollToSection('curriculo')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Currículo</button>
            <button onClick={() => scrollToSection('competencias')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Competências</button>
            <button onClick={() => scrollToSection('formatura')} className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all">Colação</button>
          </nav>

          <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#FF7A00] hover:bg-[#e06c00] text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Contato Direto
          </a>
        </div>
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
                  <h4 className="text-2xl sm:text-3xl font-black text-white">10+</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Sistemas Desenvolvidos</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">100%</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Foco no Processo</p>
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
                  <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Sistema de Missão Crítica & Gestão</span>
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
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Automação, Fila & Monitoramento Corporativo</span>
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
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Ecossistema Web & Comunidade</span>
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

        {/* 3. SEÇÃO STACK TECH */}
        <section id="stack" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Ferramentas & Tecnologias</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Stack Tecnológica</h2>
            <p className="text-neutral-400 mt-2">Tecnologias de ponta utilizadas na arquitetura e construção de soluções corporativas e web apps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Layout className="w-8 h-8 text-[#FF7A00]" />
                  <img src="/claude.ia.png" alt="Claude AI" className="w-7 h-7 object-contain opacity-80" />
                  <img src="/gemini.png" alt="Gemini" className="w-7 h-7 object-contain opacity-80" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Front-end & Web</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">Next.js • React • TypeScript • Tailwind CSS • Framer Motion • Desenvolvimento Web moderno e responsivo.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-[#FF7A00]" />
                  <img src="/projeto/postman.png" alt="Postman" className="w-7 h-7 object-contain opacity-80" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dados, SQL & APIs</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">PostgreSQL • Supabase • Consultas SQL diárias • Modelagem relacional • Postman • Requisições HTTP e automações.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-[#FF7A00]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#FF7A00]" />
                  <img src="/projeto/python.png" alt="Python" className="w-7 h-7 object-contain opacity-80" />
                  <img src="/projeto/git_github.png" alt="Git & GitHub" className="w-7 h-7 object-contain opacity-80" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automação & Processos</h3>
                <p className="text-sm text-neutral-400 font-mono leading-relaxed">Python (Robôs & Scripts) • Sistema de Logs de Integração • FileZilla Server • Git & GitHub CLI • PowerShell.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEÇÃO SERVIÇOS */}
        <section id="servicos" className="scroll-mt-28">
          <div className="mb-12">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Trabalhe Comigo</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Serviços e Contato Direto</h2>
            <p className="text-neutral-400 mt-2">Soluções sob medida, automações e inteligência aplicada ao seu negócio.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:border-[#FF7A00] transition-all">
              <div>
                <span className="text-xs font-mono text-[#FF7A00] bg-[#FF7A00]/10 border border-[#FF7A00]/30 px-3 py-1 rounded-full font-bold inline-block mb-4">Desenvolvimento Web</span>
                <h3 className="text-2xl font-bold text-white mb-3">Sites e Sistemas</h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">Desenvolvimento de sites profissionais e sistemas web modernos utilizando Next.js, Vercel e Supabase. Foco total em alta performance, usabilidade e entrega de ponta a ponta.</p>
              </div>
              <a href="https://wa.me/5515981149404?text=Olá%20Crystian,%20gostaria%20de%20um%20orçamento%20para%20desenvolvimento%20de%20sites%20e%20sistemas." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-neutral-800 hover:bg-[#FF7A00] text-white font-semibold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2 shadow-md">
                Solicitar Orçamento <Send className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:border-[#FF7A00] transition-all">
              <div>
                <span className="text-xs font-mono text-[#FF7A00] bg-[#FF7A00]/10 border border-[#FF7A00]/30 px-3 py-1 rounded-full font-bold inline-block mb-4">Engenharia de Dados & Automação</span>
                <h3 className="text-2xl font-bold text-white mb-3">Dados, SQL & Automações</h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">Criação e manipulação de consultas SQL, modelagem de banco de dados, desenvolvimento de sistemas de logs para captação de erros de integração e robôs em Python para eliminação de tarefas repetitivas.</p>
              </div>
              <a href="https://wa.me/5515981149404?text=Olá%20Crystian,%20tenho%20interesse%20em%20serviços%20de%20banco%20de%20dados,%20SQL%20e%20automações." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-neutral-800 hover:bg-[#FF7A00] text-white font-semibold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2 shadow-md">
                Solicitar Orçamento <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Tem um projeto em mente? Vamos conversar!</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">Clique no botão abaixo para falar diretamente comigo pelo WhatsApp e tirar suas dúvidas sobre prazos e escopo.</p>
            <a href="https://wa.me/5515981149404?text=Olá%20Crystian,%20vi%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold rounded-2xl transition-all shadow-xl hover:scale-105">
              <MessageSquare className="w-5 h-5" /> Abrir WhatsApp Agora
            </a>
          </div>
        </section>

        {/* 5. SEÇÃO CURRÍCULO (COM OS PRINTS ATUALIZADOS) */}
        <section id="curriculo" className="scroll-mt-28">
          <div className="mb-10">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Perfil Profissional</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Currículo Resumido & Experiência</h2>
            <p className="text-neutral-400 mt-2">Analista de TI, Dados e Desenvolvedor Web | Graduado em ADS com vivência prática diária.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-neutral-900 p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#FF7A00]" /> Resumo Executivo & Experiência de Mercado (+2 anos)
                </h3>
                <p className="text-neutral-300 leading-relaxed text-base">
                  Profissional de tecnologia com atuação sólida no setor de saúde (incluindo suporte e integração com o <strong>Sistema de Saúde SIL</strong>), desenvolvimento web, automações e engenharia de dados.
                </p>
                
                <div className="space-y-3 pt-2 text-sm text-neutral-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A00] mt-1">▸</span>
                    <span><strong>Sistema de Logs e Erros:</strong> Desenvolvimento de um sistema próprio de logs focado em captar falhas de integração e garantir confiabilidade e rastreabilidade dos dados.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A00] mt-1">▸</span>
                    <span><strong>Robôs em Python:</strong> Criação de scripts e robôs automatizados em Python para eliminar tarefas repetitivas (disparos de informativos, requisições HTTP e rotinas).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A00] mt-1">▸</span>
                    <span><strong>SQL e Manipulação de Dados:</strong> Sólida vivência prática diária na criação de consultas SQL, manipulação de bancos relacionais e integração com Supabase/PostgreSQL.</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <HeartHandshake className="w-6 h-6 text-[#FF7A00]" /> Trabalhos Voluntários & Comunidade
                </h3>
                <div className="relative pl-6 border-l-2 border-[#FF7A00] space-y-2">
                  <span className="text-xs font-mono text-[#FF7A00] font-bold">Colaboração & Open Source</span>
                  <h4 className="text-lg font-bold text-white">DIO.ME (Digital Innovation One)</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Atuação em desafios de código, projetos colaborativos e imersões técnicas na comunidade de desenvolvedores, participando ativamente de code reviews e compartilhamento de conhecimento.
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-neutral-900 p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#FF7A00]" /> Formação & Extracurricular
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-[#FF7A00]">
                    <span className="text-xs font-mono text-[#FF7A00] font-bold">2026</span>
                    <h4 className="text-lg font-bold text-white mt-1">Análise e Desenvolvimento de Sistemas</h4>
                    <p className="text-neutral-400 text-sm mt-1">Ensino Superior Completo — Unicesumar</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-orange-400">
                    <span className="text-xs font-mono text-orange-400 font-bold">Curso Especializado</span>
                    <h4 className="text-lg font-bold text-white mt-1">Banco de Dados & SQL</h4>
                    <p className="text-neutral-400 text-sm mt-1">Capacitação teórica e prática com experiência diária em consultas e manipulação de dados.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-cyan-400">
                    <span className="text-xs font-mono text-cyan-400 font-bold">Bagagem de Negócios (Extracurricular)</span>
                    <h4 className="text-lg font-bold text-white mt-1">Marketing para Negócios & E-commerce</h4>
                    <p className="text-neutral-400 text-sm mt-1">Visão estratégica aplicada a conversão, posicionamento digital e vendas para pequenas e médias empresas.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-neutral-700">
                    <span className="text-xs font-mono text-neutral-400 font-bold">Setor de Atuação</span>
                    <h4 className="text-lg font-bold text-white mt-1">Tecnologia em Saúde & Corporativo</h4>
                    <p className="text-neutral-400 text-sm mt-1">Desenvolvimento de soluções, integrações e suporte técnico especializado.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GALERIA DE PRINTS DE EXPERIÊNCIA ATUALIZADA */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
            <div className="mb-8 border-b border-neutral-800 pb-6">
              <span className="text-xs font-mono text-[#FF7A00] bg-[#FF7A00]/10 border border-[#FF7A00]/30 px-3 py-1 rounded-full font-bold inline-block mb-3">Evidências Práticas</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Registros e Prints de Experiência</h3>
              <p className="text-neutral-400 text-sm sm:text-base mt-2">Imagens de sistemas, rotinas de dados e ambientes de trabalho reais. Clique em qualquer imagem para ampliar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {experiencePrints.map((item, idx) => (
                <div key={idx} className="bg-neutral-950/80 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group">
                  <div className="p-4 cursor-pointer overflow-hidden flex justify-center items-center bg-black/40 h-48" onClick={() => setSelectedImage(item.src)}>
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="p-6 pt-4">
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO COMPETÊNCIAS */}
        <section id="competencias" className="scroll-mt-28">
          <div className="mb-10">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Hard Skills & Domínio Técnico</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Principais Competências</h2>
            <p className="text-neutral-400 mt-2">Visão consolidada das tecnologias e ferramentas dominadas no dia a dia profissional.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl hover:border-[#FF7A00] transition-all">
              <Code2 className="w-8 h-8 text-[#FF7A00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Desenvolvimento Web</h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">Next.js, React, TypeScript, Tailwind CSS, HTML5 e JavaScript moderno.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl hover:border-[#FF7A00] transition-all">
              <Database className="w-8 h-8 text-[#FF7A00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Dados & SQL</h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">Consultas SQL diárias, manipulação de dados, PostgreSQL e banco de dados Supabase.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl hover:border-[#FF7A00] transition-all">
              <Terminal className="w-8 h-8 text-[#FF7A00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Automação & Python</h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">Desenvolvimento de robôs em Python, scripts de tarefas repetitivas e requisições.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl hover:border-[#FF7A00] transition-all">
              <Server className="w-8 h-8 text-[#FF7A00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Sistemas & Infra</h3>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">Sistema de logs de integração, FileZilla, Postman, Git/GitHub CLI e Sistema SIL.</p>
            </div>
          </div>
        </section>

        {/* 7. SEÇÃO COLAÇÃO DE GRAU */}
        <section id="formatura" className="scroll-mt-28">
          <div className="mb-10">
            <div className="text-[#FF7A00] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Conquista Acadêmica</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Colação de Grau - ADS Unicesumar</h2>
            <p className="text-neutral-400 mt-2">Registros especiais da formatura em Análise e Desenvolvimento de Sistemas.</p>
          </div>

          <div className="bg-neutral-900 p-6 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-neutral-800 mb-6 flex justify-center min-h-[400px] sm:min-h-[500px] items-center">
              <img 
                src={formaturaImages[currentSlide].src} 
                alt="Formatura" 
                className="max-h-[500px] w-auto object-contain cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => setSelectedImage(formaturaImages[currentSlide].src)}
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-mono text-white border border-neutral-800 shadow-lg">
                {formaturaImages[currentSlide].caption} ({currentSlide + 1} de {formaturaImages.length})
              </div>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + formaturaImages.length) % formaturaImages.length)}
                className="px-5 py-2.5 bg-neutral-800 hover:bg-[#FF7A00] text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border border-neutral-700 shadow-md"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              
              <div className="flex gap-2">
                {formaturaImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-[#FF7A00] w-8' : 'bg-neutral-700'}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % formaturaImages.length)}
                className="px-5 py-2.5 bg-neutral-800 hover:bg-[#FF7A00] text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border border-neutral-700 shadow-md"
              >
                Próxima <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* --- RODAPÉ --- */}
      <footer className="border-t border-neutral-800/80 bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono font-bold text-white text-base">
            <span className="text-[#FF7A00]">&lt;</span> Crystian.Dev <span className="text-[#FF7A00]">/&gt;</span>
          </div>
          <p className="text-neutral-500 text-xs font-mono">© 2026 Crystian. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF7A00] transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF7A00] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:contato@crystian.dev" className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF7A00] transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}