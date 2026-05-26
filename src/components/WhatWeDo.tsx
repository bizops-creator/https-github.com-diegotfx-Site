import React, { useState } from "react";
import { 
  Users, 
  Video, 
  TrendingUp, 
  Laptop, 
  Cpu, 
  FileText, 
  ArrowUpRight, 
  Plus, 
  Check, 
  X,
  Target
} from "lucide-react";
import { ServiceStrategic } from "../types";

interface WhatWeDoProps {
  onOpenConsultation: () => void;
}

export default function WhatWeDo({ onOpenConsultation }: WhatWeDoProps) {
  const [activeTab, setActiveTab] = useState<"all" | "acquisition" | "content" | "technology" | "strategy">("all");
  const [selectedService, setSelectedService] = useState<ServiceStrategic | null>(null);

  const services: ServiceStrategic[] = [
    {
      id: "social-brand",
      title: "Posicionamento do Premium Brand & Social Media",
      category: "content",
      description: "Construímos autoridade magnética. Transformamos o seu perfil e o de seus executivos em canais obrigatórios para o seu mercado Alvo.",
      strategicImpact: "Muda a percepção de preço do seu produto. Permite cobrar tickets mais altos (High-Ticket) sem objeção, pois constrói autoridade técnica intangível antes mesmo da reunião de vendas.",
      features: [
        "Design de Feed com padrão internacional de estética (Cool & Premium)",
        "Nivelamento de tom de voz corporativo (Corporate Tone Control)",
        "Gestão completa de redes com foco em engajamento qualificado",
        "Desenho estratégico de linhas editoriais que vendem em silêncio"
      ]
    },
    {
      id: "video-content",
      title: "Roteirização, Captação e Edição Cinematográfica",
      category: "content",
      description: "Vídeos curtos ou longos com retenção absurdamente alta. Criamos o seu 'Short-form Engine' para alimentar tráfego orgânico e pago de forma ininterrupta.",
      strategicImpact: "Retém a atenção dispersa do mercado atual. A estrutura cinematográfica transmite sofisticação imediata e filtra leads infantis, atraindo tomadores de decisão.",
      features: [
        "Scripts de altíssima conversão de atenção baseados em vieses cognitivos",
        "Direção de imagem inteligente e captação direcionada",
        "Edição padrão startup internacional (Dynamic Cut & Color)",
        "Distribuição inteligente multiplataforma (Reels, TikTok, YouTube, Shorts, LinkedIn)"
      ]
    },
    {
      id: "paid-traffic",
      title: "Gestão de Tráfego Pago & Micro-Targeting",
      category: "acquisition",
      description: "Anúncios cirúrgicos nas maiores plataformas do mundo. Sem queimar verba em cliques inúteis, direcionamos o dinheiro puramente para quem tem poder aquisitivo.",
      strategicImpact: "Garante fluxo previsível de novos leads interessados todas as semanas no seu pipeline comercial. O tráfego pago vira um ativo financeiro direto de alto ROI.",
      features: [
        "Campanhas customizadas em Meta Ads, Google Ads e LinkedIn Ads",
        "Garantia de segmentação real para públicos C-Level e de alta renda",
        "Testes contínuos A/B de criativos de quebra de padrão",
        "Análise em tempo real de KPI fiscais (CAC, LTV, ROI direto)"
      ]
    },
    {
      id: "web-funnels",
      title: "Desenvolvimento de Websites Premium & Funis de Conversão",
      category: "technology",
      description: "Substituímos sites estáticos institucionais chatos por máquinas interativas e ultra rápidas de captação de dados e conversão psicológica.",
      strategicImpact: "Eleva dramaticamente a taxa de conversão final do tráfego. O visitante entra, simula valores, gera diagnósticos e é redirecionado para a chamada de vendas.",
      features: [
        "Websites modernos Single-Page construídos em React rápido",
        "Páginas de vendas (VSL Hubs) desenhadas cientificamente",
        "Design ultra-responsivo, mobile-first e otimização extrema SEO",
        "Integrações de API diretas com seus CRMs (Hubspot, RD, Notion)"
      ]
    },
    {
      id: "ai-systems-consult",
      title: "Criação de AI Clones & Sistemas Escaláveis",
      category: "technology",
      description: "Clonamos o conhecimento estratégico de fundadores ou consultores seniores em sistemas customizados de IA para atendimento, geração editorial ou consultoria inicial.",
      strategicImpact: "Permite escala exponencial de conteúdo e atração de leads sem depender do tempo operacional dos fundadores. Multiplica a força de vendas por 10.",
      features: [
        "Treinamento de LLMs customizadas com materiais e tom de voz da empresa",
        "Roteiristas digitais baseados no seu repertório de conhecimento",
        "Agentes automatizados de qualificação inicial no WhatsApp/Direct",
        "Sistemas integrados de automação de Growth (Webhooks inteligentes)"
      ]
    },
    {
      id: "growth-operations",
      title: "Estratégia de Growth Hub & Business Operations",
      category: "strategy",
      description: "Unificamos marketing e vendas. Olhamos para os processos internos, funis comerciales e integrações técnicas para que nenhuma venda se perca.",
      strategicImpact: "Evita o vazamento de leads no funil de vendas. Transforma o marketing de um centro de custos para um motor de crescimento operacional previsível.",
      features: [
        "Auditoria completa de processos comerciais e ferramentas",
        "Modelagem matemática de taxas de conversão de funil de vendas",
        "Implementação de SDR e fluxos de qualificação automatizados",
        "Acompanhamento consultivo estratégico de longo prazo do C-Level"
      ]
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  const getIcon = (id: string) => {
    switch (id) {
      case "social-brand": return <Users className="w-5 h-5 text-emerald-400" />;
      case "video-content": return <Video className="w-5 h-5 text-emerald-400" />;
      case "paid-traffic": return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case "web-funnels": return <Laptop className="w-5 h-5 text-emerald-400" />;
      case "ai-systems-consult": return <Cpu className="w-5 h-5 text-emerald-400" />;
      default: return <Target className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="what-we-do" className="py-24 bg-dark-900 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3">
              WHAT WE DO & HOW IT SELLS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Sistemas Completos de Crescimento Digital
            </h2>
            <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              Não fazemos apenas postagens ou otimização de campanhas genéricas. Desenhamos ativos estratégicos integrados que removem gargalos comerciais e multiplicam o seu faturamento.
            </p>
          </div>
          
          {/* Tabs filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Todos", id: "all" },
              { label: "Aquisição", id: "acquisition" },
              { label: "Conteúdo", id: "content" },
              { label: "Tecnologia", id: "technology" },
              { label: "Estratégia", id: "strategy" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 font-semibold"
                    : "bg-dark-950/40 text-gray-400 border-dark-800 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="group bg-dark-950 p-6 rounded-2xl border border-dark-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className="w-10 h-10 bg-dark-900 border border-dark-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {getIcon(service.id)}
                </div>
                
                <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors text-left">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-400 mt-3 text-left leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-dark-900 flex justify-between items-center">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  Foco: {service.category.toUpperCase()}
                </span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="font-mono text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Ver Impacto <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Showcase of Innovation (Banner) */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500/5 to-transparent border border-dark-800/60 p-8 rounded-3xl text-left flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase bg-emerald-500/15 px-2 py-0.5 rounded">
              High-Ticket System Blueprint
            </span>
            <h3 className="font-display font-medium text-xl text-white mt-3">
              Precisa de uma estratégia híbrida adaptada ao seu produto específico?
            </h3>
            <p className="font-sans text-sm text-gray-400 mt-2">
              Unimos as 5 forças em um mapa de ação exclusivo para sua operação bater recordes de vendas com previsibilidade estatística.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-900 border border-dark-800 hover:border-emerald-500/30 hover:text-emerald-400 text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shrink-0 cursor-pointer group"
          >
            Falar com Growth Strategist
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Strategic Impact Modal popup */}
        {selectedService && (
          <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-md flex items-center justify-center p-6 z-[100] animate-fade-in">
            <div className="bg-dark-900 border border-dark-800 max-w-lg w-full rounded-2xl p-6 relative shadow-2xl">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-dark-800 pb-4 mb-5">
                <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                  {getIcon(selectedService.id)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base text-left">
                    {selectedService.title}
                  </h4>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block text-left">
                    IMPACTO COMERCIAL HIGH-TICKET
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-dark-950 p-4 rounded-xl border border-dark-800/50 text-left">
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                    Como impacta seu crescimento e vendas?
                  </span>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed">
                    {selectedService.strategicImpact}
                  </p>
                </div>

                <div className="text-left">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2.5">
                    O que está integrado na entrega operacional:
                  </span>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-dark-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 border border-dark-800 hover:bg-dark-950 text-gray-400 text-xs font-mono uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-mono font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer"
                >
                  Implementar Isso
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
