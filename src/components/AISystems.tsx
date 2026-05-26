import React, { useState } from "react";
import { Cpu, Play, Command, Sparkles, RefreshCw, Send, CheckCircle2 } from "lucide-react";

export default function AISystems() {
  const [activeTab, setActiveTab] = useState<"clones" | "pipeline" | "content">("clones");
  const [inputText, setInputText] = useState("");
  const [cloneRef, setCloneRef] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);

  // Simulated AI workflow interactive generator
  const runSimulatedClone = () => {
    if (!inputText.trim()) return;
    setGenerating(true);
    setTimeout(() => {
      setCloneRef(prev => [
        `[IA Clone Output] Gerei rascunho de vídeo para C-Level: "${inputText}" com tom elegante de exclusividade em 1.4s.`,
        ...prev
      ]);
      setGenerating(false);
      setInputText("");
    }, 1500);
  };

  const systemsPoints = {
    clones: {
      title: "AI Business Clones",
      summary: "Treinamos Large Language Models (LLMs) proprietárias com base em todas as suas consultorias virtuais, discursos, emails e livros. O resultado é um avatar estratégico digital capaz de guiar a montagem inicial de conteúdo e interagir com seu time comercial.",
      benefit: "Reduz o tempo de roteirização do C-Level de 8 horas semanais para apenas 30 minutos.",
      metric: "94% de similaridade de tom de voz capturada"
    },
    pipeline: {
      title: "Automação Inteira de Leads & CRMs",
      summary: "Sistemas automáticos que capturam dados de redes, simulam fit de receita e qualificam leads. Conectamos APIs do WhatsApp, RD Station, Notion e Salesforce com inteligência artificial para que nenhum lead high-ticket esfrie no funil.",
      benefit: "Evita o vazamento de contatos e acelera o primeiro contato comercial para menos de 4 minutos.",
      metric: "-50% no tempo gasto pelos SDRs em triagem"
    },
    content: {
      title: "Sistemas Escaláveis de Conteúdo",
      summary: "Transformamos 1 vídeo longo de podcast ou webinar em até 20 micro-vídeos por mês de forma integrada estruturada por IA. Tudo parametrizado com criativos estéticos validados e legendas automatizadas premium.",
      benefit: "Sua marca passa a impactar todos os dias o feed de seus principais prospects sem esforço extra.",
      metric: "1M+ visualizações orgânicas em 90 dias"
    }
  };

  return (
    <section id="ai-systems" className="py-24 bg-dark-900 border-t border-dark-800 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl text-left mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3">
            CO-PILOT INTUITIVO DE GROWTH
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Fusão de IA Aplicada de Última Geração e Growth.
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            IA não substitui bons estrategistas, mas multiplica a capacidade de execução deles infinitamente. Integramos sistemas que dão velocidade operacional à sua empresa de forma proprietária.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Tab selectors and systems details */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Tab selector */}
              <div className="flex gap-2 p-1.5 bg-dark-950/80 border border-dark-800/80 rounded-xl mb-8">
                {(Object.keys(systemsPoints) as Array<keyof typeof systemsPoints>).map(key => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 text-center py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === key
                        ? "bg-emerald-500/15 text-emerald-300 font-bold border-dark-800"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="space-y-4 animate-fade-in">
                <div className="inline-flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400 font-mono text-[9px] uppercase tracking-wider">
                  <Cpu className="w-3 h-3 animate-spin-slow" /> Sistema Operacional Ativo
                </div>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {systemsPoints[activeTab].title}
                </h3>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {systemsPoints[activeTab].summary}
                </p>

                <div className="border-t border-dark-800/80 pt-4 mt-6">
                  <span className="font-mono text-[10px] text-gray-500 uppercase block mb-1">
                    Impacto de Eficiência Estimado:
                  </span>
                  <p className="font-sans text-xs italic text-emerald-300">
                    "{systemsPoints[activeTab].benefit}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] text-[#ffffff50] uppercase">MÉTRICA PROJETADA</span>
                <span className="font-display font-medium text-lg text-white block mt-0.5">
                  {systemsPoints[activeTab].metric}
                </span>
              </div>
              <div className="p-2.5 bg-emerald-500/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal with Clones Output Simulator */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-dark-950 border border-dark-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full text-left">
              <div>
                <div className="flex items-center justify-between border-b border-dark-800/60 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 tracking-wider">
                    TORRES-CLONE-STATION // Terminal v3.2
                  </span>
                </div>

                <p className="font-mono text-xs text-gray-500 mb-4 leading-relaxed">
                  // Digite o assunto do seu produto abaixo para simular como a IA gera um roteiro premium corporativo focado em gatilhos de alto ticket.
                </p>

                {/* Input simulator */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ex: Consultoria tributária corporativa ou Automação industrial"
                    className="flex-1 bg-dark-900 border border-dark-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/40 font-sans"
                    onKeyDown={(e) => e.key === "Enter" && runSimulatedClone()}
                  />
                  <button
                    onClick={runSimulatedClone}
                    disabled={generating || !inputText.trim()}
                    className="px-4 bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold rounded-xl transition-all flex items-center justify-center cursor-pointer disabled:opacity-40"
                  >
                    {generating ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Simulated outputs console log */}
                <div className="mt-6 space-y-2 max-h-48 overflow-y-auto font-mono text-xs">
                  {generating && (
                    <div className="text-gray-500 animate-pulse">
                      &gt; Processando conteúdo proprietário com modelo de IA customizado...
                    </div>
                  )}
                  {cloneRef.length === 0 ? (
                    <div className="text-[#ffffff30] italic">
                      &gt; Nenhum roteiro simulado rodado ainda. Faça um teste acima para qualificar.
                    </div>
                  ) : (
                    cloneRef.map((log, i) => (
                      <div key={i} className="text-[#f3f4f6] flex items-start gap-1.5 leading-relaxed bg-[#ffffff02] p-2 rounded border border-white/5">
                        <span className="text-emerald-400 font-bold shrink-0">&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-dark-800/80 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                <span>ESTADO: DISPONÍVEL</span>
                <span>LATÊNCIA: ~2.4s</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
