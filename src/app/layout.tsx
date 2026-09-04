import React from 'react';

export const metadata = {
  title: 'Portfólio Profissional',
  description: 'Desenvolvedor Full Stack & Soluções Corporativas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}