"use client";

import React from 'react';
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
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-white">DEV<span className="text-blue-500">.</span>FS</span>
          <div className="hidden md:flex gap-8 text-sm text-slate-400">
            <a href="#projetos" className="hover:text-blue-400">Projetos</a>
            <a href="#stack" className="hover:text-blue-400">Tecnologias</a>
            <a href="#contato" className="hover:text-blue-400">Contato</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <section className="mb-32">
          <h2 className="text-blue-500 font-mono mb-4 text-sm uppercase">Disponível para novos projetos</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Desenvolvedor Full Stack & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Especialista em Soluções Corporativas.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mb-10">
            Criando ecossistemas web robustos, seguros e de alta performance na nuvem.
          </p>
          <div className="flex gap-4">
            <a href="#projetos" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2">
              Ver Projetos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="projetos" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-6">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">IALE - Portal de Gestão</h3>
              <p className="text-slate-400 mb-6">Ecossistema corporativo completo com painel administrativo e gestão em tempo real.</p>
              <span className="text-blue-400 font-semibold">Next.js • Supabase • Tailwind</span>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Projeto X - Hub Operacional</h3>
              <p className="text-slate-400 mb-6">Plataforma de missão crítica com cronômetro persistente e Torre de Controle Ao Vivo.</p>
              <span className="text-emerald-400 font-semibold">Next.js • PostgreSQL • RBAC</span>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/5 bg-[#080c17] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} — Desenvolvido com foco em segurança e sigilo de dados.
        </div>
      </footer>
    </div>
  );
}