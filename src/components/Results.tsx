import React, { useState } from "react";
import { CaseStudy } from "../types";
import { TrendingUp, ArrowUpRight, Award, Quote, CheckCircle2 } from "lucide-react";

export default function Results() {
  const [activeCase, setActiveCase] = useState<string>("saas-scale");

  const caseStudies: CaseStudy[] = [
    {
      id: "saas-scale",
      clientName: "Valora AI (SaaS High-Ticket)",
      niche: "Fintech & Automations",
      challenge: "CAC extremamente alto e leads desqualificados vindos de anúncios genéricos no Instagram.",
      strategy: "Implementação do funil de qualificação baseado em Diagnóstico Inteligente + Tráfego micro-segmentado focado em C-Level.",
      metrics: [
        { label: "CAC (Custo Aquisição)", before: "R$ 410", after: "R$ 145", gain: "-64%" },
        { label: "Taxa de Reuniões Qualificadas", before: "11%", after: "42%", gain: "+281%" },
        { label: "Maturidade de Leads", before: "Iniciante", after: "Enterprise C-Level", gain: "Alto Valor" }
      ],
      testimonial: {
        quote: "O sistema de aquisição que o Diego Torres desenhou mudou a dinâmica do nosso comercial. Não perdemos mais tempo com reuniões vazias.",
        author: "Eduardo Menezes",
        role: "Head of Growth, Valora",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
      }
    },
    {
      id: "tech-consulting",
      clientName: "Ross & Partners",
      niche: "Consultoria Tributária Internacional",
      challenge: "Dificuldade em vender contratos de 6 dígitos recorrentes usando conteúdo orgânico padrão.",
      strategy: "Posicionamento de autoridade técnica com vídeos cinematográficos de alto padrão técnico e automação de captação multiplataforma.",
      metrics: [
        { label: "Faturamento Direto", before: "R$ 80k/mês", after: "R$ 390k/mês", gain: "+387%" },
        { label: "Fechamento High-Ticket", before: "1 por mês", after: "6 por mês", gain: "+500%" },
        { label: "Reconhecimento de Marca", before: "Baixo", after: "Líder de Categoria", gain: "Absoluto" }
      ],
      testimonial: {
        quote: "O tom editorial e a produção cinematográfica criaram um valor intangível poderoso. Os leads chegam sabendo o preço e prontos para assinar.",
        author: "Guilherme Rossi",
        role: "Fundador e Managing Partner",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
      }
    }
  ];

  const currentCase = caseStudies.find(c => c.id === activeCase) || caseStudies[0];

  return (
    <section id="results" className="py-24 bg-dark-900 border-t border-dark-800 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3">
            PROVEN BENCHMARKS & ROI
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Nossos Resultados Falam Mais Alto do Que Promessas.
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Não celebramos 'seguidores' ou 'impressões'. Nos importamos com a única métrica que dita a sobrevivência e escala do seu negócio: <strong className="text-emerald-400 font-medium">Margem e Retorno de Investimento (ROI).</strong>
          </p>
        </div>

        {/* Case Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menu Column - Frosted Panel */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block text-left mb-2">
              SELECIONE O CASE STUDY:
            </span>
            {caseStudies.map(cs => (
              <button
                key={cs.id}
                onClick={() => setActiveCase(cs.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  activeCase === cs.id
                    ? "bg-white/5 backdrop-blur-md border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.02)]"
                    : "bg-dark-950/40 border-dark-800/80 hover:border-dark-700/80"
                }`}
              >
                <div>
                  <h3 className="font-display text-sm font-bold text-white mb-1">
                    {cs.clientName}
                  </h3>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                    Nicho: {cs.niche}
                  </span>
                </div>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                  activeCase === cs.id ? "text-emerald-400 rotate-45" : "text-gray-500"
                }`} />
              </button>
            ))}

            <div className="p-5 rounded-2xl border border-dashed border-dark-800 bg-emerald-500/[0.01] text-left mt-6">
              <Award className="w-5 h-5 text-emerald-400 mb-3" />
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Auditoria de Cases C-Level
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1.5 leading-relaxed">
                Todos os dados fiscais e de analytics de nossos cases são auditados e assinados em termos de confidencialidade NDA. Preservamos a integridade de sua operação.
              </p>
            </div>
          </div>

          {/* Dynamic Content Detail - Frosted Glass Container */}
          <div className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-left relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6 mb-6">
              <div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">
                  CASE STUDY EM FOCO
                </span>
                <h3 className="font-display font-medium text-2xl text-white">
                  {currentCase.clientName}
                </h3>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-mono text-xs">
                {currentCase.niche}
              </div>
            </div>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {currentCase.metrics.map((metric, idx) => (
                <div key={idx} className="bg-dark-950/60 border border-white/5 p-4 rounded-xl">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                    {metric.label}
                  </span>
                  <div className="flex justify-between items-baseline mt-1.5">
                    <span className="text-[11px] text-gray-400 line-through font-mono">
                      {metric.before}
                    </span>
                    <span className="font-mono text-lg text-white font-bold">
                      {metric.after}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-emerald-400 font-bold mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> {metric.gain}
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-white/5 pt-6">
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1.5 font-bold">
                  O Gargalo Inicial
                </span>
                <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed">
                  {currentCase.challenge}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1.5 font-bold">
                  A Solução Sistêmica
                </span>
                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  {currentCase.strategy}
                </p>
              </div>
            </div>

            {/* Testimonial block - frosted bubble */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex gap-4 items-start relative">
              <Quote className="w-8 h-8 text-emerald-500/20 shrink-0 absolute right-4 top-4" />
              <img
                src={currentCase.testimonial.avatarUrl}
                alt={currentCase.testimonial.author}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-white/10 object-cover shrink-0"
              />
              <div className="space-y-1">
                <p className="font-sans text-xs italic text-gray-300 leading-relaxed pr-8">
                  "{currentCase.testimonial.quote}"
                </p>
                <div className="pt-2">
                  <span className="font-display font-bold text-white text-xs block">
                    {currentCase.testimonial.author}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 uppercase">
                    {currentCase.testimonial.role}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
