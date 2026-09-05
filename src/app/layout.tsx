import React from 'react';
import './globals.css';

export const metadata = {
  title: 'DevOps - Crystian',
  description: 'Desenvolvedor Full Stack & Soluções Corporativas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0a0f1e] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}