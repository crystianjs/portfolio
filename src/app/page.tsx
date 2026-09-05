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
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState<'home' | 'projetos' | 'funcionalidades' | 'stack' | 'curriculo'>('home');
  const [activeProject, setActiveProject] = useState(0);

  const formaturaImages = [
    { src: "/formatura(1).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(2).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(3).jpeg", caption: "Momentos da Colação de Grau" },
    { src: "/formatura(4).jpeg", caption: "Momentos da Colação de Grau" },
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

  const projects = [
    {
      id: 0,
      title: "IALE - Portal de Gestão",
      category: "Ecossistema Corporativo e Igreja",
      description: "Plataforma completa para gestão integrada desenvolvida para a igreja que frequento. Contém painel de música, gestão de repertório, bate-papo em tempo real, central de comunicados e base de aniversariantes integrada via banco gerada por formulários.",
      url: "https://iale.vercel.app/login",
      githubUrl: "https://github.com/crystianjs/iale",
      techs: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      features: [
        "Painel de música e gestão avançada de repertório para cultos.",
        "Bate-papo integrado e central de comunicados para a comunidade.",
        "Módulo de aniversariantes integrado via banco a partir de formulários."
      ]
    },
    {
      id: 1,
      title: "Analiza Ata - Hub Operacional",
      category: "Sistema de Missão Crítica",
      description: "Ferramenta robusta para gerenciamento de grandes projetos onde você consegue adicionar pendências próprias ou de clientes, controlar o registro de horas trabalhadas por cada pessoa em cada subtarefa de uma tarefa principal, além de dashboards analíticos e barras de progresso.",
      url: "https://analiza-ata.vercel.app/login",
      githubUrl: "https://github.com/crystianjs/analiza-ata",
      techs: ["Next.js", "PostgreSQL", "Tailwind CSS", "Node.js"],
      features: [
        "Controle detalhado de pendências individuais e de clientes em grandes projetos.",
        "Registro e monitoramento do horário trabalhado por cada membro em subtarefas e tarefas principais.",
        "Dashboard dinâmico com barra de progresso e métricas de produtividade."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#1569EF]/20 selection:text-[#1569EF]">
      
      {/* Configuração da Aba (Favicon e Título) */}
      <head>
        <link rel="icon" href="/fivconq.png" type="image/png" />
      </head>

      {/* --- NAVBAR SUPERIOR (Centralizada) --- */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
          <nav className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto max-w-full">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'home' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentTab('projetos')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'projetos' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Projetos
            </button>
            <button 
              onClick={() => setCurrentTab('funcionalidades')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'funcionalidades' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => setCurrentTab('stack')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'stack' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Stack Tech
            </button>
            <button 
              onClick={() => setCurrentTab('curriculo')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${currentTab === 'curriculo' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Currículo e Formatura
            </button>
          </nav>
        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          
          {/* ABA: HOME COM BANNER E FOTO COM EFEITO HOVER */}
          {currentTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-4"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#1569EF] to-blue-700 rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="lg:col-span-7 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-mono mb-6 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Disponível para novos projetos</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                    Full Stack <br />Developer.
                  </h1>

                  <p className="text-blue-100 text-lg sm:text-xl font-light mb-10 max-w-xl leading-relaxed">
                    Especialista em construir ecossistemas web robustos, seguros e escaláveis com foco total em alta performance e experiência do usuário.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setCurrentTab('projetos')}
                      className="px-8 py-4 bg-white text-[#1569EF] font-bold rounded-2xl flex items-center gap-3 transition-all shadow-lg hover:bg-slate-100 hover:scale-[1.02]"
                    >
                      Meus Projetos <ArrowRight className="w-4 h-4" />
                    </button>
                    <a 
                      href="https://wa.me/5515981149404" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-blue-900/40 backdrop-blur-md text-white font-semibold rounded-2xl flex items-center gap-3 transition-all border border-white/20 hover:bg-blue-900/60"
                    >
                      <MessageSquare className="w-4 h-4 text-cyan-300" /> Entrar em Contato
                    </a>
                  </div>
                </div>

                {/* Bloco da Foto com Efeito Hover */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <img 
                      src="/avatar-fullstack.jpg" 
                      alt="Foto Profissional Crystian FullStack" 
                      className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ABA: PROJETOS E PRINTS COM LINKS REAIS */}
          {currentTab === 'projetos' && (
            <motion.div 
              key="projetos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Todos meus projetos</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Projetos</h2>
                <p className="text-slate-600 mt-2">Acesse diretamente os sistemas reais desenvolvidos.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="group rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#1569EF]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-slate-100 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-full h-56 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-b border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      </div>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                      
                      <div className="relative z-10 group-hover:scale-105 transition-transform duration-500 flex flex-col items-center">
                        <div className="p-3 bg-blue-600/20 border border-blue-400/30 rounded-2xl text-cyan-300 mb-3 shadow-lg backdrop-blur-md">
                          <Monitor className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-bold text-white tracking-wide">{proj.title}</span>
                        <span className="text-xs font-mono text-blue-300 mt-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">Ambiente de Produção Ativo</span>
                      </div>

                      <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-slate-900 rounded-xl hover:bg-[#1569EF] hover:text-white transition-all shadow-lg">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-slate-900 rounded-xl hover:bg-[#1569EF] hover:text-white transition-all shadow-lg">
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="p-8">
                      <span className="text-xs font-mono text-[#1569EF] bg-[#1569EF]/10 px-3 py-1 rounded-full font-semibold inline-block mb-4">
                        {proj.category}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1569EF] transition-colors">{proj.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{proj.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.techs.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white text-slate-700 text-xs font-mono font-medium rounded-md border border-slate-200 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-0">
                      <a href={proj.url} target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#1569EF] hover:text-white text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-slate-200 shadow-sm">
                        Acessar Projeto Online <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ABA: APRESENTAÇÃO DINÂMICA */}
          {currentTab === 'funcionalidades' && (
            <motion.div 
              key="funcionalidades"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Detalhes Técnicos</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Funcionalidades</h2>
                <p className="text-slate-600 mt-2">Selecione o sistema para ver o detalhamento dinâmico das regras de negócio.</p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="lg:col-span-4 flex flex-col gap-3">
                  {projects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProject(proj.id)}
                      className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${activeProject === proj.id ? 'bg-[#1569EF] text-white border-[#1569EF] shadow-md' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                    >
                      <div>
                        <span className={`text-xs font-mono block mb-1 ${activeProject === proj.id ? 'text-blue-100' : 'text-slate-500'}`}>Módulo 0{proj.id + 1}</span>
                        <span className="font-bold text-base">{proj.title}</span>
                      </div>
                      <Layers className={`w-5 h-5 ${activeProject === proj.id ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{projects[activeProject].title}</h3>
                  <p className="text-slate-600 text-base mb-8 leading-relaxed">{projects[activeProject].description}</p>
                  <div className="space-y-4 mb-8">
                    {projects[activeProject].features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-[#1569EF] shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <a href={projects[activeProject].url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1569EF] hover:bg-blue-700 text-white font-bold rounded-xl text-sm inline-flex items-center gap-2 transition-all shadow-md">
                    Testar Aplicação <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* ABA: STACK TECH */}
          {currentTab === 'stack' && (
            <motion.div 
              key="stack"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
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

          {/* ABA: CURRÍCULO E FORMATURA (Estrutura Exata Solicitada) */}
          {currentTab === 'curriculo' && (
            <motion.div 
              key="curriculo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Perfil Profissional e Conquistas</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Currículo e Formatura</h2>
                <p className="text-slate-600 mt-2">Analista de TI e Dados | Formado em Análise e Desenvolvimento de Sistemas (ADS) pela Unicesumar.</p>
              </div>

              {/* 1. TOPO: Card Formatura + Fotos em Slide */}
              <div className="grid lg:grid-cols-12 gap-8 mb-12 items-stretch">
                <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-80 h-80 bg-[#1569EF]/20 rounded-full blur-3xl pointer-events-none"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-[#1569EF]/30 text-cyan-300 border border-[#1569EF]/40">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold">Graduação e Marco Acadêmico</h3>
                    </div>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-6">
                      Formado em Análise e Desenvolvimento de Sistemas (ADS) pela Faculdade Unicesumar, consolidando a base acadêmica necessária para atuar com engenharia de dados, automação e sustentação de sistemas críticos em nível internacional.
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      Cada etapa desta jornada acadêmica reflete dedicação à tecnologia e busca constante por excelência técnica e resolução de problemas complexos.
                    </p>
                  </div>
                </div>

                {/* Carrossel de Formatura */}
                <div className="lg:col-span-5 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative flex flex-col justify-between group">
                  <div className="relative w-full h-72 sm:h-80 bg-slate-950 overflow-hidden flex items-center justify-center">
                    {formaturaImages.map((img, idx) => (
                      <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                      >
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                          <span className="text-xs font-mono bg-[#1569EF]/80 text-white px-3 py-1 rounded-full backdrop-blur-md">
                            {img.caption}
                          </span>
                        </div>
                      </div>
                    ))}

                    <button 
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#1569EF] transition-all backdrop-blur-sm z-20"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#1569EF] transition-all backdrop-blur-sm z-20"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4 bg-slate-900 flex justify-center gap-2 items-center border-t border-slate-800">
                    {formaturaImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-[#1569EF]' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
                        aria-label={`Ir para slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. MEIO: Card "Sobre Mim" */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800 mb-12">
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

              {/* 3. ABAIXO: Cards de Manipulação de Dados, SQL e Competências */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">// Competências e Atuação Técnica</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                
                {/* Projetos e Automações */}
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

                {/* Data Integration (SQL e Excel) */}
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

                {/* Advanced Querying (PostgreSQL) */}
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

                {/* Tratamento Avançado em Excel */}
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

                {/* Automação com IA Generativa */}
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

                {/* Sustentação de Sistemas LIS e Infraestrutura */}
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

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* --- RODAPÉ --- */}
      <footer id="contato" className="border-t border-slate-200 bg-slate-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-mono font-bold text-lg text-white mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#1569EF]" /> DEV<span className="text-[#1569EF]">.</span> CRYSTIAN
            </div>
            <p className="text-slate-400 text-xs font-mono">
              © {new Date().getFullYear()} — Desenvolvido com foco em alta performance e sigilo.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/crystianjs" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/crystian-jesus-a66622219/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:crystianjs09@gmail.com" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="E-mail">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5515981149404" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white" aria-label="WhatsApp">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}