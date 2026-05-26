import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Briefcase, 
  HelpCircle,
  ArrowRight,
  TrendingDown
} from "lucide-react";

export default function ScaleCalculator() {
  // Inputs
  const [adSpend, setAdSpend] = useState<number>(10000); // R$ Monthly
  const [ticketMedia, setTicketMedia] = useState<number>(3000); // R$ Ticket
  const [currentConv, setCurrentConv] = useState<number>(1.5); // % Conversion rate
  const [cpl, setCpl] = useState<number>(30); // R$ Cost Per Lead

  // Tooltip helper state
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Computations
  const results = useMemo(() => {
    // Current Baseline
    const totalLeads = Math.round(adSpend / Math.max(1, cpl));
    const currentSales = Math.max(0, (totalLeads * currentConv) / 100);
    const roundedCurrentSales = Math.round(currentSales * 10) / 10;
    const currentRevenue = currentSales * ticketMedia;
    const currentRoi = adSpend > 0 ? currentRevenue / adSpend : 0;

    // Torres.Growth Leveraged Scenario
    // 1. High-ticket copywriting and qualification filters double the qualified conversion rate (typically 2x to 2.5x increase)
    const improvedConv = Math.min(15, currentConv * 2.2); 
    // 2. CRM Automations reduce lead leakage, increasing effective leads by 12% (retention bonus)
    const activeLeadsTorres = Math.round(totalLeads * 1.12);
    const projectedSales = (activeLeadsTorres * improvedConv) / 100;
    const roundedProjectedSales = Math.round(projectedSales * 10) / 10;
    const projectedRevenue = projectedSales * ticketMedia;
    const projectedRoi = adSpend > 0 ? projectedRevenue / adSpend : 0;

    // Incrementals
    const incrementalRevenue = projectedRevenue - currentRevenue;
    const salesIncreasePercent = currentSales > 0 ? ((projectedSales - currentSales) / currentSales) * 100 : 0;

    return {
      totalLeads,
      currentSales: roundedCurrentSales,
      currentRevenue,
      currentRoi,
      improvedConv: Math.round(improvedConv * 100) / 100,
      activeLeadsTorres,
      projectedSales: roundedProjectedSales,
      projectedRevenue,
      projectedRoi,
      incrementalRevenue,
      salesIncreasePercent: Math.round(salesIncreasePercent)
    };
  }, [adSpend, ticketMedia, currentConv, cpl]);

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    }).format(value);
  };

  // Compile WhatsApp personalized message with calculated variables
  const waPrefix = "https://wa.me/5541920023824?text=";
  const waMessage = encodeURIComponent(
    `Olá Diego! Simulei o potencial de escala do meu negócio na calculadora de ROI de Growth:\n\n` +
    `• Investimento AdSpend: ${formatBRL(adSpend)}/mês\n` +
    `• Ticket Médio: ${formatBRL(ticketMedia)}\n` +
    `• CPL Atual: ${formatBRL(cpl)}\n` +
    `• Conversão Comercial: ${currentConv}%\n\n` +
    `O faturamento projetado escalável foi de ${formatBRL(results.projectedRevenue)}/mês (um aumento de ${formatBRL(results.incrementalRevenue)} mensal).\n\n` +
    `Gostaria de agendar um diagnóstico para entender como aplicar o método Torres.Growth e otimizar nosso CAC!`
  );

  return (
    <section id="roi-calculator" className="py-24 bg-dark-950 border-t border-dark-900 relative overflow-hidden">
      {/* Visual background anchors matching brand style guidelines */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-flex items-center gap-1.5 mb-4 animate-pulse">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Escala de Vendas
          </span>
          <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
            Descubra o Seu <span className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-300">Potencial Oculto de Escala</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed">
            Ajuste os parâmetros reais da sua empresa abaixo e veja a diferença de faturamento ao implementar processos automatizados e funis persuasivos do método <strong className="text-white font-medium">Torres.Growth</strong>.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Config Sliders & Inputs (7 Columns wide on large screens) */}
          <div className="lg:col-span-7 bg-dark-900/40 border border-dark-800/80 rounded-2xl p-6 md:p-8 space-y-8 backdrop-blur-sm shadow-xl">
            <div className="border-b border-dark-800 pb-4">
              <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" /> Parâmetros Atuais do Seu Funil
              </h3>
              <p className="font-sans text-xs text-gray-500 mt-1">
                Configure os valores médios mensais de tráfego pago e comercial da sua operação.
              </p>
            </div>

            {/* Input 1: Ad Spend Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-sans font-medium text-gray-300 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Investimento Mensal em Tráfego (AdSpend)
                </span>
                <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded text-xs">
                  {formatBRL(adSpend)}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="150000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full select-none accent-emerald-500 h-1.5 bg-dark-950 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                <span>R$ 2.000</span>
                <span>R$ 50.000</span>
                <span>R$ 100.000</span>
                <span>R$ 150.000+</span>
              </div>
            </div>

            {/* Input 2: Ticket Médio Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-sans font-medium text-gray-300 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  Ticket Médio de Venda
                </span>
                <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded text-xs">
                  {formatBRL(ticketMedia)}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="25000"
                step="100"
                value={ticketMedia}
                onChange={(e) => setTicketMedia(Number(e.target.value))}
                className="w-full select-none accent-emerald-500 h-1.5 bg-dark-950 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                <span>R$ 300</span>
                <span>R$ 5.000</span>
                <span>R$ 15.000</span>
                <span>R$ 25.000+</span>
              </div>
            </div>

            {/* Two Column Grid Inputs: CPL and Conversion Rate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Input 3: Cost Per Lead (CPL) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-sans font-medium text-gray-300 flex items-center gap-1.5">
                    Custo por Lead (CPL)
                    <button 
                      type="button"
                      onMouseEnter={() => setShowTooltip("cpl")}
                      onMouseLeave={() => setShowTooltip(null)}
                      className="text-gray-500 hover:text-gray-300 cursor-help"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {formatBRL(cpl)}
                  </span>
                </div>
                
                {showTooltip === "cpl" && (
                  <div className="bg-dark-950 border border-dark-800 text-gray-400 text-[11px] p-2.5 rounded-lg animate-fade-in absolute z-20 max-w-[240px] shadow-xl">
                    O valor médio investido para capturar um único lead (contato qualificado) nas plataformas de tráfego.
                  </div>
                )}

                <input
                  type="range"
                  min="5"
                  max="150"
                  step="1"
                  value={cpl}
                  onChange={(e) => setCpl(Number(e.target.value))}
                  className="w-full select-none accent-emerald-500 h-1.5 bg-dark-950 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>R$ 5</span>
                  <span>R$ 75</span>
                  <span>R$ 150</span>
                </div>
              </div>

              {/* Input 4: Current Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-sans font-medium text-gray-300 flex items-center gap-1.5">
                    Taxa de Conversão Comercial
                    <button 
                      type="button"
                      onMouseEnter={() => setShowTooltip("conv")}
                      onMouseLeave={() => setShowTooltip(null)}
                      className="text-gray-500 hover:text-gray-300 cursor-help"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {currentConv}%
                  </span>
                </div>

                {showTooltip === "conv" && (
                  <div className="bg-dark-950 border border-dark-800 text-gray-400 text-[11px] p-2.5 rounded-lg animate-fade-in absolute z-20 max-w-[240px] shadow-xl">
                    A taxa em que os leads gerados se transformam em clientes pagantes efetivos (vendas concluídas).
                  </div>
                )}

                <input
                  type="range"
                  min="0.2"
                  max="10"
                  step="0.1"
                  value={currentConv}
                  onChange={(e) => setCurrentConv(Number(e.target.value))}
                  className="w-full select-none accent-emerald-500 h-1.5 bg-dark-950 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>0.2%</span>
                  <span>5%</span>
                  <span>10%</span>
                </div>
              </div>

            </div>

            {/* Static Key Info Metrics under config */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dark-800 text-xs">
              <div className="p-3 bg-dark-950/60 rounded-xl border border-white/[0.02]">
                <span className="text-gray-500 block mb-0.5 uppercase tracking-wider font-mono text-[9px]">Leads Estimados:</span>
                <span className="font-mono font-bold text-gray-300 text-sm">{results.totalLeads} contatos</span>
              </div>
              <div className="p-3 bg-dark-950/60 rounded-xl border border-white/[0.02]">
                <span className="text-gray-500 block mb-0.5 uppercase tracking-wider font-mono text-[9px]">Seu CAC Atual Estimado:</span>
                <span className="font-mono font-bold text-gray-300 text-sm">
                  {results.currentSales > 0 ? formatBRL(adSpend / results.currentSales) : "N/A"}
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Computed Dynamic Results and Scenarios (5 Columns wide on large screens) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Leverage Card */}
            <div className="relative bg-gradient-to-b from-[#161619] to-dark-900 border border-emerald-500/20 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden group">
              {/* Golden side line to denote extreme high performance */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-emerald-400 to-amber-200" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-mono text-[9px] text-emerald-400 tracking-wider uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    MÉTODO TORRES.GROWTH
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-1">Faturamento Projetado</h4>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 animate-pulse">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Spectacular Large Metric */}
              <div className="my-5">
                <span className="text-[10px] text-gray-500 font-mono uppercase block tracking-widest">
                  Faturamento Mensal Estimado:
                </span>
                <div className="text-3xl md:text-4xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-300 tracking-tight select-none pt-1">
                  {formatBRL(results.projectedRevenue)}
                </div>
                <span className="text-xs text-gray-400 font-sans block mt-1">
                  Baseado em <strong className="text-emerald-300 font-medium font-mono">{results.projectedSales} vendas</strong> projetadas por mês.
                </span>
              </div>

              {/* Comparative Scenario list */}
              <div className="space-y-3.5 border-t border-dark-800 pt-5 mt-5">
                
                {/* Traditional Baseline */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-sans flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    Cenário Atual Comum:
                  </span>
                  <span className="font-mono text-gray-400 font-bold">
                    {formatBRL(results.currentRevenue)}
                  </span>
                </div>

                {/* Net Expansion Advantage */}
                <div className="flex justify-between items-center text-xs bg-emerald-500/[0.03] border border-emerald-500/10 p-2.5 rounded-xl">
                  <span className="text-emerald-300 font-sans font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Faturamento Incremental:
                  </span>
                  <span className="font-mono text-emerald-400 font-extrabold text-sm">
                    +{formatBRL(results.incrementalRevenue)} /mês
                  </span>
                </div>

                {/* ROI Gain comparison */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-sans">ROI Estimado (Atual vs Torres):</span>
                  <span className="font-mono text-gray-300 font-bold">
                    {results.currentRoi.toFixed(1)}x <span className="text-emerald-400 font-extrabold font-mono font-sans">➔ {results.projectedRoi.toFixed(1)}x</span>
                  </span>
                </div>

                {/* Sales growth conversion percent */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-sans">Eficiência Comercial:</span>
                  <span className="font-mono font-bold text-gray-200 flex items-center gap-1">
                    <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px]">
                      +{results.salesIncreasePercent}% Vendas
                    </span>
                  </span>
                </div>

              </div>

              {/* Conversion explanations highlights */}
              <div className="mt-6 pt-4 border-t border-dark-800 text-[11px] text-gray-400 space-y-2 leading-relaxed">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-250 font-bold">Aceleração de Conversão (2.2x):</strong> Copywriting de alto impacto aliada a automações de pré-atendimento (SDR IA).
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-250 font-bold">Zero Lead Leakage:</strong> Recuperação de contatos perdidos com disparos inteligentes sem desgaste manual.
                  </p>
                </div>
              </div>

              {/* Interactive instant action WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href={waPrefix + waMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-dark-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  Garantir Plano de Escala Grátis <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[9px] text-gray-500 text-center block mt-2.5 font-mono">
                  *A simulação envia com precisão os dados acima diretamente para Diego Silva Torres.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
