import React from "react";
import { Check, X, Shield, Star, Globe, TrendingUp } from "lucide-react";

export default function WhyUs() {
  const comparisonItems = [
    {
      aspect: "Foco Principal",
      agency: "Likes, métricas de vaidade e volume de posts genéricos.",
      torres: "Geração de leads qualificados, funis high-ticket e faturamento.",
      isCrucial: true
    },
    {
      aspect: "Uso de Tecnologia & IA",
      agency: "Nulo. Copiar e colar de geradores de texto simples.",
      torres: "Criação de AI Clones, automatizações robustas de CRM e conteúdo escalável estratégico.",
      isCrucial: false
    },
    {
      aspect: "Estratégia vs Execução",
      agency: "Terceirização das campanhas ou falta de direcionamento C-Level.",
      torres: "União completa de consultoria de vendas interna + design e tráfego de alta performance.",
      isCrucial: false
    },
    {
      aspect: "Abordagem Editorial",
      agency: "Panfletagem digital. Posts padronizados de templates Canva.",
      torres: "Copywriting persuasivo high-ticket com tom editorial focado em autoridade intangível.",
      isCrucial: false
    },
    {
      aspect: "Nível de Atacamento (ROI)",
      agency: "Sem compromisso financeiro com CAC, custo por lead ou metas de pipeline.",
      torres: "Obsessão matemática por otimização do CAC, LTV e escalabilidade de conversão comercial.",
      isCrucial: true
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-dark-950 border-t border-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-3xl text-left mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3">
            THE TORRES ADVANTAGE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Não Somos uma Agência Comum. Somos um Motor de Aquisição.
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Agências comuns querem seu fee de retenção mensal para produzir posts que ninguém lê. Nós construímos sistemas integrados de tráfego, autoridade e vendas que sustentam e escalam marcas faturando multi-milhões.
          </p>
        </div>

        {/* Comparison Grid Board */}
        <div className="bg-dark-900 border border-dark-800 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-dark-800 bg-dark-950/40 font-mono text-xs font-bold text-[#f3f4f6] tracking-widest uppercase text-left">
            <div className="p-4 md:col-span-3 border-r border-dark-800">ASPECTO DA OPERAÇÃO</div>
            <div className="p-4 md:col-span-4 border-r border-dark-800 text-red-400 flex items-center gap-1.5ClassName">
              <X className="w-4 h-4" /> AGÊNCIAS TRADICIONAIS
            </div>
            <div className="p-4 md:col-span-5 text-emerald-400 flex items-center gap-1.5 bg-emerald-500/5">
              <Check className="w-4 h-4 animate-pulse" /> TORRES GROWTH CORE
            </div>
          </div>

          <div className="divide-y divide-dark-800">
            {comparisonItems.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-12 text-sm text-left ${
                  item.isCrucial ? "bg-emerald-500/[0.01]" : ""
                }`}
              >
                <div className="p-5 md:col-span-3 border-r border-dark-800 font-mono text-xs font-semibold text-gray-300">
                  {item.aspect}
                </div>
                <div className="p-5 md:col-span-4 border-r border-dark-800 text-gray-500 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                  <span>{item.agency}</span>
                </div>
                <div className={`p-5 md:col-span-5 text-gray-300 flex items-start gap-2.5 ${
                  item.isCrucial ? "bg-emerald-500/5" : "bg-dark-950/20"
                }`}>
                  <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-sans font-medium">
                    {item.torres}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights bento-grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl text-left">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-display font-semibold text-white text-base">Mentalidade Internacional</h4>
            <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
              Tudo o que construímos reflete tendências globais de design high-ticket dos EUA e Europa. Nada de cópias saturadas do mercado nacional.
            </p>
          </div>

          <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl text-left">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-display font-semibold text-white text-base">Foco em ROI Real</h4>
            <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
              Nossos relatórios mostram leads qualificados capturados, faturamento bruto adicionado e custos de CAC, conectando o marketing à saúde do seu fluxo de caixa.
            </p>
          </div>

          <div className="bg-dark-900 border border-dark-800 p-6 rounded-2xl text-left">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-display font-semibold text-white text-base">Sistemas Inteligentes de IA</h4>
            <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
              Integramos os mais recentes modelos da inteligência de IA em sua infraestrutura, reduzindo gargalos de escala humana de forma segura e proprietária.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
