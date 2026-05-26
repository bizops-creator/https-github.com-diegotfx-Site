import React from "react";
import { Compass, Lightbulb, Clapperboard, Forward, Target, Zap } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Diagnóstico & Design de Estratégia",
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      tagline: "Engenharia de Posicionamento",
      description: "Analisamos sua concorrência, precificação de mercado e público-alvo para desenhar um ângulo editorial e de tráfego com atração high-ticket garantida."
    },
    {
      step: "02",
      title: "Planejamento de Funil de Aquisição",
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />,
      tagline: "Arquitetura Conversiva",
      description: "Criamos o protótipo do sistema de vendas: fluxos de automação de CRM, páginas de diagnóstico inteligente e parametrização de tráfego."
    },
    {
      step: "03",
      title: "Roteiros & Produção Cinematográfica",
      icon: <Clapperboard className="w-5 h-5 text-emerald-400" />,
      tagline: "Estética Premium de Autoridade",
      description: "Produzimos e refinamos vídeos de alta retenção baseados em estruturas psicológicas americanas. Direto ao ponto, com polidez cinematográfica de luxo."
    },
    {
      step: "04",
      title: "Distribuição Multicanal Inteligente",
      icon: <Forward className="w-5 h-5 text-emerald-400" />,
      tagline: "Tráfego Pago & Orgânico Ativos",
      description: "Configuramos seus orçamentos no Meta, Google e LinkedIn com hiper-segmentação para diretores, C-Levels e públicos qualificados de alta renda."
    },
    {
      step: "05",
      title: "Qualificação & Conversão Automatizada",
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      tagline: "Conversão Silenciosa de Leads",
      description: "Seus leads passam por sistemas de score inteligente, triagem de SDR ou agendamentos diretos via Calendly pré-qualificados."
    },
    {
      step: "06",
      title: "Estatística de Escala & IA Co-Pilot",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      tagline: "Multiplicação do ROI",
      description: "Análise contínua de custos de CAC, desenvolvimento de AI Clones e expansão para novos canais para manter seu pipeline com demanda reprimida constante."
    }
  ];

  return (
    <section id="process" className="py-24 bg-dark-950 border-t border-dark-900 relative">
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3">
            THE METHODOLOGY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Como Operamos Seu Ativo de Crescimento de Ponta a Ponta.
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            Eliminamos o achismo do marketing digital tradicional. Criamos planos de execução previsíveis, guiando o cliente através de seis marcos essenciais de excelência.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#ffffff05] backdrop-blur-md border border-white/5 hover:border-white/15 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_4px_30px_rgba(255,255,255,0.01)] text-left"
            >
              {/* Absolutes for absolute design control */}
              <div className="absolute top-4 right-6 font-mono text-4xl font-extrabold text-[#ffffff06] group-hover:text-emerald-500/10 transition-colors pointer-events-none select-none">
                {item.step}
              </div>

              {/* Icon container with border */}
              <div className="w-10 h-10 bg-dark-900 border border-dark-800 rounded-lg flex items-center justify-center mb-6 group-hover:border-emerald-500/30 transition-all">
                {item.icon}
              </div>

              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-semibold block mb-1">
                {item.tagline}
              </span>

              <h3 className="font-display font-bold text-lg text-white mb-3">
                {item.title}
              </h3>

              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic callout - strategy comparison */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            Tem interesse em ver como isso se aplica à sua empresa?
          </p>
          <div className="inline-flex items-center gap-1.5 mt-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-emerald-300 font-sans font-medium">
              Agendando Strategy Calls para o próximo trimestre com limite de vagas
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
