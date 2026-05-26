import React from "react";
import { ArrowRight, Sparkles, TrendingUp, Target, Database, Plus } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToDiagnostic: () => void;
}

export default function Hero({ onOpenConsultation, onScrollToDiagnostic }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden bg-dark-950"
    >
      {/* Cinematic grid background with glowing orbits */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16161a_1px,transparent_1px),linear-gradient(to_bottom,#16161a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Sales Statement */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Custom tag */}
          <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-emerald-500/0 border border-emerald-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[10px] md:text-xs text-emerald-300 uppercase tracking-widest font-semibold">
              SISTEMA INTEGRADO DE CRESCIMENTO E ADQUISIÇÃO
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-[#f3f4f6] leading-[1.05]">
            Não dependa de conteúdo aleatório.
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-200 to-emerald-400 bg-clip-text text-transparent">
              Construa sistemas.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Paramos de brincar de agência tradicional. Desenhamos e operamos o 
            <strong className="text-gray-200"> Full-Stack Growth Engine™</strong> para negócios High-Ticket: Posicionamento prêmio, tráfego cirúrgico, funis autônomos e automação avançada de Inteligência Artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
            <button
              onClick={onScrollToDiagnostic}
              className="group px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold rounded-lg text-base tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer flex items-center justify-center gap-2"
            >
              Scale Your Business
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-4 bg-dark-900 hover:bg-dark-800 border border-dark-800 hover:border-dark-700 text-[#f3f4f6] font-semibold rounded-lg text-base tracking-wide transition-all duration-305 cursor-pointer flex items-center justify-center gap-1"
            >
              Book a Strategy Call
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-dark-900 max-w-lg">
            <div>
              <div className="flex items-center text-emerald-400 font-display font-extrabold text-2xl md:text-3xl">
                R$42M<Plus className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-1">Gerados para clientes</p>
            </div>
            <div>
              <div className="flex items-center text-white font-display font-extrabold text-2xl md:text-3xl">
                37%
              </div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-1">Redução média CAC</p>
            </div>
            <div>
              <div className="flex items-center text-white font-display font-extrabold text-2xl md:text-3xl">
                100%
              </div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-1">Estratégia + Execução</p>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Cybernetic Console HUD */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="w-full max-w-sm bg-dark-900 border border-dark-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Ambient gold glow glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Header tags */}
            <div className="flex justify-between items-center border-b border-dark-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] text-[#f3f4f6]">SYSTEM: ONLINE</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest bg-emerald-400/15 px-2 py-0.5 rounded">
                Acquisition Core
              </span>
            </div>

            {/* Simulated Live Analytics feeds */}
            <div className="space-y-4">
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800/40">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-gray-500">MÁQUINA DE LEADS</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-display font-bold text-2xl text-white">412 leads</span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold">+41% este mês</span>
                </div>
              </div>

              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800/40">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-gray-500">CONVERSÃO DE STRATEGY CALL</span>
                  <Target className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-display font-bold text-2xl text-white">18.4%</span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold">+2.1% esta semana</span>
                </div>
              </div>

              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800/40">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-gray-500">SISTEMA INTEGRADO DE IA</span>
                  <Database className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-300">12 Clones Rodando Ativos</span>
                  <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-[9px] text-emerald-400 uppercase rounded">
                    Escalando
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Teaser Button */}
            <button
              onClick={onScrollToDiagnostic}
              className="mt-6 w-full py-3 bg-dark-800 hover:bg-dark-700/80 border border-dark-700 hover:border-emerald-500/30 text-white font-mono text-xs text-center font-bold tracking-widest uppercase rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
            >
              Rodar Diagnóstico IA Grátis
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
