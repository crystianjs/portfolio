"use client";

import React, { useState } from 'react';
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
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState<'home' | 'projetos' | 'funcionalidades' | 'stack'>('home');
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "IALE - Portal de Gestão",
      category: "Ecossistema Corporativo / Igreja",
      description: "Plataforma completa para gestão integrada desenvolvida para a igreja que frequento, contando com painel administrativo dinâmico, controle de agenda e mural interativo de avisos.",
      url: "https://iale.vercel.app/login",
      githubUrl: "https://github.com/crystianjs/iale",
      techs: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      features: [
        "Painel administrativo em tempo real com controle de permissões.",
        "Mural interativo de avisos e gestão de mídias corporativas.",
        "Arquitetura focada em performance e sigilo de dados."
      ]
    },
    {
      id: 1,
      title: "Analiza Ata - Hub Operacional",
      category: "Sistema de Missão Crítica",
      description: "Sistema profissional para análise e gerenciamento de atas, oferecendo agilidade, controle de dados e interface altamente responsiva.",
      url: "https://analiza-ata.vercel.app/login",
      githubUrl: "https://github.com/crystianjs/analiza-ata",
      techs: ["Next.js", "PostgreSQL", "Tailwind CSS", "Node.js"],
      features: [
        "Interface otimizada para análise e gerenciamento rápido de atas.",
        "Segurança avançada e controle de acesso estruturado.",
        "Arquitetura moderna e altamente performática."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#1569EF]/20 selection:text-[#1569EF]">
      
      {/* --- NAVBAR SUPERIOR (Centralizada, Sem Logo e Sem Avatar) --- */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">

          {/* Menu Centralizado */}
          <nav className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'home' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentTab('projetos')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'projetos' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Projetos & Prints
            </button>
            <button 
              onClick={() => setCurrentTab('funcionalidades')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'funcionalidades' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Apresentação
            </button>
            <button 
              onClick={() => setCurrentTab('stack')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'stack' ? 'bg-[#1569EF] text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Stack Tech
            </button>
          </nav>

        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          
          {/* ABA: HOME COM BANNER E FOTO INTEGRADA */}
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
                      Explorar Projetos <ArrowRight className="w-4 h-4" />
                    </button>
                    <a 
                      href="#contato"
                      className="px-8 py-4 bg-blue-900/40 backdrop-blur-md text-white font-semibold rounded-2xl flex items-center gap-3 transition-all border border-white/20 hover:bg-blue-900/60"
                    >
                      <Briefcase className="w-4 h-4 text-cyan-300" /> Entrar em Contato
                    </a>
                  </div>
                </div>

                {/* Bloco da Foto Integrada Direto no Fundo Azul (Sem Card) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-cyan-400/10 pointer-events-none z-10"></div>
                    
                    <img 
                      src="/avatar-fullstack.png" 
                      alt="Foto Profissional Crystian FullStack" 
                      className="w-full h-full object-cover object-top relative z-0"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-slate-300 z-20">
                      <Terminal className="w-10 h-10 text-cyan-300 mb-2" />
                      <span className="text-xs font-mono font-bold">Coloque a imagem em</span>
                      <span className="text-[10px] text-slate-300 mt-1 font-mono">/public/avatar-fullstack.png</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ABA: PROJETOS & PRINTS COM LINKS REAIS */}
          {currentTab === 'projetos' && (
            <motion.div 
              key="projetos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Galeria Interativa</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Projetos & Capturas Visuais</h2>
                <p className="text-slate-600 mt-2">Acesse diretamente os sistemas reais desenvolvidos.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="group rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#1569EF]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-slate-100 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-full h-56 bg-slate-900 border-b border-slate-200 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                        <Monitor className="w-12 h-12 mb-2 text-slate-500 group-hover:text-[#1569EF] transition-colors" />
                        <span className="text-xs font-mono text-slate-300">Preview: {proj.title}</span>
                      </div>

                      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Apresentação de Funcionalidades</h2>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Back-end & Dados</h3>
                  <p className="text-sm text-slate-600 font-mono">Supabase • PostgreSQL • Node.js APIs</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">DevOps & Deploy</h3>
                  <p className="text-sm text-slate-600 font-mono">Vercel Cloud • Git CI/CD • Segurança</p>
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
              <Terminal className="w-4 h-4 text-[#1569EF]" /> DEV<span className="text-[#1569EF]">.</span>FS
            </div>
            <p className="text-slate-400 text-xs font-mono">
              © {new Date().getFullYear()} — Desenvolvido com foco em alta performance e sigilo.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/crystianjs" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contato@exemplo.com" className="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-[#1569EF] hover:text-[#1569EF] transition-all text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}