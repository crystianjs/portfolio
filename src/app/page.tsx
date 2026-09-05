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
  UserCheck,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState<'home' | 'projetos' | 'funcionalidades' | 'stack'>('home');
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "IALE - Portal de Gestão",
      category: "Ecossistema Corporativo",
      description: "Plataforma completa para gestão integrada, painel administrativo dinâmico, controle de agenda e mural interativo de avisos.",
      url: "https://seu-link-de-demo.com",
      githubUrl: "https://github.com/crystianjs/portfolio",
      techs: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      features: [
        "Painel administrativo em tempo real com controle de permissões.",
        "Mural interativo de avisos e gestão de mídias corporativas.",
        "Arquitetura focada em performance e sigilo de dados."
      ]
    },
    {
      id: 1,
      title: "Projeto X - Hub Operacional",
      category: "Sistema de Missão Crítica",
      description: "Torre de controle operacional avançada com cronômetros persistentes no servidor, logs detalhados e segurança RBAC.",
      url: "https://seu-link-de-demo-2.com",
      githubUrl: "https://github.com/crystianjs/portfolio",
      techs: ["Next.js", "PostgreSQL", "RBAC Security", "Node.js"],
      features: [
        "Torre de controle ao vivo para monitoramento de operações.",
        "Cronômetro persistente gerenciado via server-side.",
        "Controle de acesso rigoroso baseado em funções (RBAC)."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#041634] selection:bg-[#1569EF]/20 selection:text-[#1569EF] font-sans antialiased relative overflow-hidden">
      
      {/* --- NAVBAR SUPERIOR --- */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="w-10"></div>

          <nav className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'home' ? 'bg-[#041634] text-white shadow-md' : 'text-slate-600 hover:text-[#041634]'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentTab('projetos')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'projetos' ? 'bg-[#041634] text-white shadow-md' : 'text-slate-600 hover:text-[#041634]'}`}
            >
              Projetos & Prints
            </button>
            <button 
              onClick={() => setCurrentTab('funcionalidades')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'funcionalidades' ? 'bg-[#041634] text-white shadow-md' : 'text-slate-600 hover:text-[#041634]'}`}
            >
              Apresentação
            </button>
            <button 
              onClick={() => setCurrentTab('stack')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentTab === 'stack' ? 'bg-[#041634] text-white shadow-md' : 'text-slate-600 hover:text-[#041634]'}`}
            >
              Stack Tech
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="block text-xs font-bold text-[#041634]">Crystian JS</span>
              <span className="block text-[10px] text-emerald-600 font-mono">● Online</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#1569EF] overflow-hidden bg-slate-200 shadow-sm flex items-center justify-center relative">
              <img 
                src="/avatar-fullstack.png" 
                alt="Avatar FullStack" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <UserCheck className="w-5 h-5 text-[#041634] absolute" />
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTEÚDO DINÂMICO --- */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          
          {currentTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 mb-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1569EF]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-xl z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1569EF]/10 text-[#1569EF] text-xs font-mono mb-6 border border-[#1569EF]/20">
                    <span className="w-2 h-2 rounded-full bg-[#1569EF] animate-ping"></span>
                    <span>Engenharia de Software & Full Stack</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl font-black text-[#041634] mb-4 tracking-tight leading-tight">
                    Transformando ideias em <span className="text-[#1569EF]">sistemas de alta performance.</span>
                  </h1>
                  
                  <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                    Especialista em arquiteturas web robustas, seguras e escaláveis. Desenvolvendo soluções corporativas com foco total em experiência e confiabilidade.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setCurrentTab('projetos')}
                      className="px-7 py-3.5 bg-[#1569EF] hover:bg-[#0A3F94] text-white font-bold rounded-xl flex items-center gap-2.5 transition-all shadow-md hover:scale-[1.02]"
                    >
                      Ver Portfólio de Projetos <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setCurrentTab('funcionalidades')}
                      className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#041634] font-semibold rounded-xl flex items-center gap-2.5 transition-all border border-slate-200"
                    >
                      <Code2 className="w-4 h-4 text-[#1569EF]" /> Ver Funcionalidades
                    </button>
                  </div>
                </div>

                <div className="relative z-10 shrink-0">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-[#041634] to-[#0A3F94] p-2 shadow-2xl relative">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-700 relative">
                      <img 
                        src="/avatar-fullstack.png" 
                        alt="Banner FullStack IA" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-slate-400">
                        <Terminal className="w-12 h-12 text-[#1569EF] mb-3" />
                        <span className="text-xs font-mono text-slate-300">Sua Foto FullStack (IA)</span>
                        <span className="text-[10px] text-slate-500 mt-1">Coloque a imagem em /public/avatar-fullstack.png</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentTab === 'projetos' && (
            <motion.div 
              key="projetos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Galeria Interativa</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041634] tracking-tight">Projetos & Capturas Visuais</h2>
                <p className="text-slate-600 mt-2">Cards organizados com links diretos para demonstração e repositório.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="group rounded-3xl bg-white border border-slate-200 hover:border-[#1569EF]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-slate-100 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-full h-56 bg-slate-900 border-b border-slate-200 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                        <Monitor className="w-12 h-12 mb-2 text-slate-500 group-hover:text-[#1569EF] transition-colors" />
                        <span className="text-xs font-mono text-slate-300">Preview / Print: {proj.title}</span>
                      </div>

                      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-[#041634] rounded-xl hover:bg-[#1569EF] hover:text-white transition-all shadow-lg">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-[#041634] rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-lg">
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="p-8">
                      <span className="text-xs font-mono text-[#1569EF] bg-[#1569EF]/10 px-3 py-1 rounded-full font-semibold inline-block mb-4">
                        {proj.category}
                      </span>
                      <h3 className="text-2xl font-bold text-[#041634] mb-3 group-hover:text-[#1569EF] transition-colors">{proj.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{proj.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.techs.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-100 text-[#072B64] text-xs font-mono font-medium rounded-md border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-0">
                      <a href={proj.url} target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#1569EF] hover:text-white text-[#041634] font-semibold text-sm flex items-center justify-center gap-2 transition-all">
                        Acessar Projeto Online <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentTab === 'funcionalidades' && (
            <motion.div 
              key="funcionalidades"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Detalhes Técnicos</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041634] tracking-tight">Apresentação de Funcionalidades</h2>
                <p className="text-slate-600 mt-2">Selecione o sistema para ver o detalhamento dinâmico das regras de negócio.</p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="lg:col-span-4 flex flex-col gap-3">
                  {projects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProject(proj.id)}
                      className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${activeProject === proj.id ? 'bg-[#041634] text-white border-[#041634] shadow-md' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                    >
                      <div>
                        <span className={`text-xs font-mono block mb-1 ${activeProject === proj.id ? 'text-[#1569EF]' : 'text-slate-500'}`}>Módulo 0{proj.id + 1}</span>
                        <span className="font-bold text-base">{proj.title}</span>
                      </div>
                      <Layers className={`w-5 h-5 ${activeProject === proj.id ? 'text-[#1569EF]' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-[#041634] mb-4">{projects[activeProject].title}</h3>
                  <p className="text-slate-600 text-base mb-8 leading-relaxed">{projects[activeProject].description}</p>
                  <div className="space-y-4 mb-8">
                    {projects[activeProject].features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#1569EF] shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <a href={projects[activeProject].url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1569EF] hover:bg-[#0A3F94] text-white font-bold rounded-xl text-sm inline-flex items-center gap-2 transition-all shadow-md">
                    Testar Aplicação <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {currentTab === 'stack' && (
            <motion.div 
              key="stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-12">
                <div className="text-[#1569EF] font-mono text-xs uppercase tracking-widest mb-2 font-bold">// Ferramentas</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041634] tracking-tight">Stack Tecnológica</h2>
                <p className="text-slate-600 mt-2">Tecnologias de ponta utilizadas na construção dos projetos.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <Layout className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-[#041634] mb-3">Front-end</h3>
                  <p className="text-sm text-slate-600 font-mono">Next.js • React • TypeScript • Tailwind CSS</p>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <Database className="w-6 h-6 text-[#0A3F94] mb-4" />
                  <h3 className="text-lg font-bold text-[#041634] mb-3">Back-end & Dados</h3>
                  <p className="text-sm text-slate-600 font-mono">Supabase • PostgreSQL • Node.js APIs</p>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#1569EF] mb-4" />
                  <h3 className="text-lg font-bold text-[#041634] mb-3">DevOps & Deploy</h3>
                  <p className="text-sm text-slate-600 font-mono">Vercel Cloud • Git CI/CD • Segurança</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* --- RODAPÉ --- */}
      <footer id="contato" className="border-t border-slate-200 bg-[#041634] text-white py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
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