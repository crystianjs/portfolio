"use client";

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Layout, 
  Database, 
  Cpu, 
  MessageCircle,
  ArrowRight,
  Terminal,
  Sparkles,
  Layers,
  CheckCircle2,
  Monitor
} from 'lucide-react';

export default function Portfolio() {
  // Estado para controlar o projeto selecionado na seção de apresentação dinâmica/funcionalidades
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "IALE - Portal de Gestão",
      category: "Ecossistema Corporativo",
      description: "Plataforma completa para gestão integrada, painel administrativo dinâmico, controle de agenda e mural interativo de avisos.",
      imagePlaceholder: "/projeto-iale.png", // Coloque o print na pasta public/ com este nome
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
      imagePlaceholder: "/projeto-x.png", // Coloque o print na pasta public/ com este nome
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
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/35 selection:text-cyan-200 font-sans antialiased relative overflow-hidden">
      
      {/* Luzes de Fundo Futuristas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* --- Header / Navegação --- */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg tracking-wider text-white font-mono">
              DEV<span className="text-cyan-400">.</span>FS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos & Prints</a>
            <a href="#funcionalidades" className="hover:text-cyan-400 transition-colors">Apresentação Dinâmica</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack Tech</a>
          </nav>

          <a 
            href="#contato" 
            className="hidden sm:inline-flex px-4 py-2 text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            // status: online
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-44 pb-24 relative z-10">
        
        {/* --- Hero Section --- */}
        <section className="mb-32">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono mb-8 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-cyan-400 font-semibold">Disponível para novos desafios</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.08]">
            Interfaces imersivas e <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Sistemas de Alta Performance.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Portfólio interativo com apresentação detalhada de projetos, capturas visuais, links diretos e arquitetura focada em resultados corporativos.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projetos" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-cyan-500/20 hover:scale-[1.02]"
            >
              Ver Projetos com Prints <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contato" 
              className="px-8 py-4 bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 rounded-2xl font-semibold flex items-center gap-3 transition-all backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> Entre em Contato
            </a>
          </div>
        </section>

        {/* --- Seção de Projetos com Cards, Hover e URLs --- */}
        <section id="projetos" className="mb-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">// Galeria de Trabalhos</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Projetos & Capturas Visuais</h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm">Passe o mouse sobre os cards para interagir e acesse diretamente os links ou repositórios.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="group rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/60 transition-all duration-500 relative overflow-hidden flex flex-col justify-between backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Simulador de Print / Mockup visual com Efeito Hover */}
                <div className="w-full h-56 bg-slate-950/80 border-b border-slate-800 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                  
                  {/* Se você ainda não colocou o print, exibe um placeholder tecnológico bonito */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:scale-105 transition-transform duration-500">
                    <Monitor className="w-12 h-12 mb-2 text-slate-700 group-hover:text-cyan-400/60 transition-colors" />
                    <span className="text-xs font-mono">Preview / Print: {proj.title}</span>
                  </div>

                  {/* Botões flutuantes de URL que aparecem no Hover */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={proj.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-900/90 border border-slate-700 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                      title="Acessar URL do Projeto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-900/90 border border-slate-700 text-slate-200 rounded-xl hover:bg-white hover:text-slate-950 transition-all shadow-lg"
                      title="Ver Repositório GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block mb-4">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techs.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700/60 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    Acessar Projeto Online <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Apresentação Dinâmica de Funcionalidades (Tabs interativas) --- */}
        <section id="funcionalidades" className="mb-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">// Detalhes de Engenharia</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Apresentação de Funcionalidades</h2>
            <p className="text-slate-400 text-sm">Selecione um projeto abaixo para visualizar o detalhamento dinâmico das funcionalidades implementadas.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-xl">
            
            {/* Seletor de Projetos (Botões) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(proj.id)}
                  className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                    activeProject === proj.id 
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/5' 
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono text-cyan-400 block mb-1">Módulo 0{proj.id + 1}</span>
                    <span className="font-bold text-base">{proj.title}</span>
                  </div>
                  <Layers className={`w-5 h-5 ${activeProject === proj.id ? 'text-cyan-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Painel Dinâmico de Exibição */}
            <div className="lg:col-span-8 bg-slate-950/60 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Funcionalidades em Destaque</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
              <p className="text-slate-300 text-base mb-8 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="space-y-4 mb-8">
                {projects[activeProject].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800/80">
                <a 
                  href={projects[activeProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Testar Aplicação <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* --- Stack Tecnológica --- */}
        <section id="stack" className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">// Ferramentas</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Stack Tecnológica</h2>
            <p className="text-slate-400 text-sm">Estrutura robusta para suportar alta escalabilidade.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/80">
              <Layout className="w-6 h-6 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Front-end</h3>
              <p className="text-sm text-slate-400 font-mono">Next.js • React • TypeScript • Tailwind CSS</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/80">
              <Database className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Back-end & Dados</h3>
              <p className="text-sm text-slate-400 font-mono">Supabase • PostgreSQL • Node.js APIs</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/80">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">DevOps & Deploy</h3>
              <p className="text-sm text-slate-400 font-mono">Vercel Cloud • Git CI/CD • Segurança</p>
            </div>
          </div>
        </section>

      </main>

      {/* --- Rodapé --- */}
      <footer id="contato" className="border-t border-slate-800/80 bg-[#010409] py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-mono font-bold text-lg text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> DEV<span className="text-cyan-400">.</span>FS
            </div>
            <p className="text-slate-500 text-xs font-mono">
              © {new Date().getFullYear()} — Desenvolvido com foco em alta performance e sigilo.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/crystianjs" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contato@exemplo.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}