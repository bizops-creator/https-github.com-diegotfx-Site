import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";
import ScaleCalculator from "./components/ScaleCalculator";
import Process from "./components/Process";
import Results from "./components/Results";
import AISystems from "./components/AISystems";
import Founder from "./components/Founder";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { 
  MessageSquare, 
  X, 
  Calendar, 
  Clock, 
  Info, 
  Globe, 
  Check, 
  ArrowRight,
  Database,
  UserCheck,
  ChevronRight
} from "lucide-react";
import { CRMLead } from "./types";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [liveLeads, setLiveLeads] = useState<CRMLead[]>([]);
  const [showLiveCrmRail, setShowLiveCrmRail] = useState(true);

  // Quick state for custom appointment booking modal
  const [prefDay, setPrefDay] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [bkName, setBkName] = useState("");
  const [bkEmail, setBkEmail] = useState("");
  const [bkSuccess, setBkSuccess] = useState(false);
  const [bkStep, setBkStep] = useState(1);

  // Poll server for captured leads to show operational system status in real-time
  const fetchLiveLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLiveLeads(data.leads || []);
      }
    } catch (e) {
      console.warn("Could not query server pipeline leads:", e);
    }
  };

  useEffect(() => {
    fetchLiveLeads();
    const interval = setInterval(() => {
      fetchLiveLeads();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const submitAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bkName || !bkEmail || !prefDay) return;

    try {
      // Also register this appointment booking directly as a qualified lead
      const payload = {
        name: bkName,
        email: bkEmail,
        phone: "Agendamento de Chamada",
        businessName: "Agendamento Direto",
        website: "",
        message: `Agendado para o dia ${prefDay} às ${prefTime || "A combinar"}.`,
        bottleneck: "Agendamento via Modal"
      };

      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      setBkSuccess(true);
      fetchLiveLeads();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#050505] text-[#f3f4f6] min-h-screen relative font-sans antialiased select-none">
      
      {/* Background Ambient element (Vortex theme design guidelines) */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[40%] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[50%] rounded-full bg-zinc-800/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-500/[0.015] blur-[160px] pointer-events-none z-0" />

      {/* Main Header */}
      <Navbar 
        onOpenConsultation={() => {
          setBkSuccess(false);
          setBkStep(1);
          setModalOpen(true);
        }} 
        onScrollToSection={handleScrollTo} 
      />

      {/* Hero */}
      <Hero 
        onOpenConsultation={() => {
          setBkSuccess(false);
          setBkStep(1);
          setModalOpen(true);
        }} 
        onScrollToDiagnostic={() => handleScrollTo("contact-diagnostic")} 
      />

      {/* What We Do */}
      <WhatWeDo 
        onOpenConsultation={() => {
          setBkSuccess(false);
          setBkStep(1);
          setModalOpen(true);
        }} 
      />

      {/* Why Us / Comparison Matrix */}
      <WhyUs />

      {/* Growth ROI Scale Calculator */}
      <ScaleCalculator />

      {/* Strategic Process */}
      <Process />

      {/* Results & Proofs */}
      <Results />

      {/* Innovation AI Systems */}
      <AISystems />

      {/* Founder Pitch */}
      <Founder />

      {/* Editorial FAQ section focusing on high ticket objection architecture */}
      <Faq />

      {/* Interactive Contact Form + Diagnostic tool */}
      <Contact />

      {/* Custom styled luxurious footer */}
      <footer className="bg-dark-950 border-t border-dark-900/80 py-16 px-6 relative z-10 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-extrabold tracking-widest text-[#f3f4f6] text-lg">
              TORRES<span className="text-emerald-500">.</span>GROWTH
            </h3>
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Desenhamos e operamos o Full-Stack Growth Engine™ para produtos High-Ticket e marcas corporativas líderes de categoria. Sem enrolação de curtidas ou vaidade. Puramente focado no seu ROI.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="font-mono text-[9px] text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded uppercase">
                Tom Premium
              </span>
              <span className="font-mono text-[9px] text-[#ffffff40] border border-white/10 px-2 py-0.5 rounded uppercase">
                Estética Internacional
              </span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-mono font-bold text-gray-400 tracking-wider uppercase">SISTEMAS OPERACIONAIS</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-500">
              <a onClick={() => handleScrollTo("what-we-do")} className="hover:text-emerald-400 transition-colors cursor-pointer">What We Do</a>
              <a onClick={() => handleScrollTo("why-us")} className="hover:text-emerald-400 transition-colors cursor-pointer">The Difference</a>
              <a onClick={() => handleScrollTo("process")} className="hover:text-emerald-400 transition-colors cursor-pointer">Our Process</a>
              <a onClick={() => handleScrollTo("results")} className="hover:text-emerald-400 transition-colors cursor-pointer">Cases & Metrics</a>
              <a onClick={() => handleScrollTo("ai-systems")} className="hover:text-emerald-400 transition-colors cursor-pointer">AI Clones Hub</a>
              <a onClick={() => handleScrollTo("founder")} className="hover:text-emerald-400 transition-colors cursor-pointer">About Founder</a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3.5 text-xs">
            <h4 className="font-mono font-bold text-gray-400 tracking-wider uppercase">CONTATOS DIRETOS</h4>
            <p className="text-gray-550 font-mono text-[11px] text-gray-550 leading-relaxed">
              Disponibilidade global. Reuniões agendadas via Calendly com pré-requisito de qualificação C-Level.
            </p>
            <div className="space-y-1.5 font-mono text-[11px] text-gray-400">
              <p>Email: <span className="text-white">contato@diegotorres.growth</span></p>
              <p>WhatsApp: <span className="text-emerald-400 font-bold">+55 11 99999-9999</span></p>
              <p>Atendimento: <span className="text-white">São Paulo / Miami / Londres</span></p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-dark-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Torres Growth System. Todos os direitos reservados. Personalizado para Diego Silva Torres.</p>
          <div className="flex gap-4">
            <a className="hover:underline cursor-pointer">Termos de NDA</a>
            <a className="hover:underline cursor-pointer">Segurança de Dados de IA</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Trigger Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Real Live CRM Status Indicator */}
        <button
          onClick={() => setShowLiveCrmRail(!showLiveCrmRail)}
          className="bg-dark-900/90 hover:bg-dark-800 border border-dark-800 hover:border-emerald-500/20 text-white p-3 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all cursor-pointer group relative"
          title="Ver Atividade CRM"
        >
          <Database className={`w-5 h-5 ${liveLeads.length > 0 ? "text-emerald-400 animate-pulse" : "text-gray-400"}`} />
          {liveLeads.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-dark-950 font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {liveLeads.length}
            </span>
          )}
        </button>

        {/* WhatsApp Floating button */}
        <a
          href="https://wa.me/5541920023824?text=Olá,%20vi%20o%20seu%20site%20e%20gostaria%20de%20conversar%20com%20Diego%20Silva%20Torres%20sobre%20mentoria%20e%20crescimento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(37,211,102,0.45)]"
          title="Falar no WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
        </a>

      </div>

      {/* Live CRM Indicator sidebar overlay */}
      {showLiveCrmRail && liveLeads.length > 0 && (
        <div className="fixed bottom-24 left-6 z-40 w-72 bg-dark-950/95 backdrop-blur-lg border border-dark-800 rounded-2xl p-4 shadow-2xl animate-fade-in text-left">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[9px] tracking-wider text-gray-400 uppercase font-bold">CRM LEADS CAPTURED (LIVE)</span>
            </div>
            <button
              onClick={() => setShowLiveCrmRail(false)}
              className="text-gray-500 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {liveLeads.map((ld) => (
              <div key={ld.id} className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display font-bold text-gray-200">{ld.name}</span>
                  <span className="font-mono text-[9px] text-[#ffffff30]">{ld.id}</span>
                </div>
                <div className="text-[10px] text-gray-400 mb-0.5">Empresa: {ld.businessName}</div>
                <div className="text-[9px] text-emerald-400 font-mono tracking-wide">{ld.bottleneck}</div>
              </div>
            ))}
          </div>

          <p className="text-[8px] text-gray-650 font-mono mt-2 pt-2 border-t border-dark-900 leading-normal">
            * Leads simulam a persistência em pipeline imediata das estratégias do Diego Silva Torres.
          </p>
        </div>
      )}


      {/* Luxurious Appointment Calendar Popup modal (Calendly Integration Simulation) */}
      {modalOpen && (
        <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-md flex items-center justify-center p-6 z-[100] animate-fade-in">
          <div className="bg-dark-900 border border-dark-800 max-w-lg w-full rounded-3xl p-6 md:p-8 relative shadow-2xl text-left">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {bkSuccess ? (
              <div className="space-y-4 py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-2">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="font-display font-medium text-xl text-white">
                  Seu Pre-Booking foi Solicitado!
                </h3>
                <p className="font-sans text-xs text-gray-405 leading-relaxed max-w-xs">
                  Anotamos seu interesse para o dia <strong>{prefDay}</strong>. O assistente de Diego Silva Torres entrará em contato via WhatsApp e Email nas próximas horas para o convite oficial do Google Meet.
                </p>
                
                <a
                  href={`https://wa.me/5541920023824?text=Olá,%20acabei%20de%20solicitar%20meu%20Pre-Booking%20para%20o%20dia%20${prefDay}.%20Gostaria%20de%20confirmar%20minha%20data%20com%20o%20Diego%20Silva%20Torres!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 shadow-lg mt-4"
                >
                  Confirmar Imediato via WhatsApp <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={submitAppointment} className="space-y-4">
                
                <div className="border-b border-dark-800 pb-4">
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest bg-emerald-500/15 px-2 py-0.5 rounded">
                    SISTEMA DE AGENDAMENTO TORRES.GROWTH
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-2">
                    Book Your High-Ticket Consultation
                  </h3>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Durabilidade: 30 minutos. Foco: Mapeamento de gargalos e plano de ação.
                  </p>
                </div>

                {bkStep === 1 ? (
                  /* Step 1: Select Day and Time Slot */
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                      1. Selecione a Data Desejada:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Terça-feira (Amanhã)",
                        "Quarta-feira (Próximo)",
                        "Quinta-feira",
                        "Sexta-feira"
                      ].map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setPrefDay(day)}
                          className={`p-3 rounded-xl border text-xs font-sans text-center cursor-pointer transition-all ${
                            prefDay === day
                              ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/40 font-bold"
                              : "bg-dark-950 border-white/5 text-gray-400 hover:border-white/10"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    <span className="font-mono text-[10px] text-gray-400 uppercase block mb-1 pt-2">
                      2. Selecione o Horário (Fuso de São Paulo):
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {["09:00", "11:00", "14:00", "15:30", "17:00"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setPrefTime(time)}
                          className={`p-2 rounded-lg border text-xs font-sans text-center cursor-pointer transition-all ${
                            prefTime === time
                              ? "bg-[#ffffff10] text-emerald-300 border-emerald-500/40 font-bold"
                              : "bg-dark-950 border-white/5 text-gray-400 hover:border-white/10"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled={!prefDay || !prefTime}
                      onClick={() => setBkStep(2)}
                      className="mt-4 w-full py-3 bg-white text-dark-950 font-mono text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1 disabled:opacity-30"
                    >
                      Continuar para Dados <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Step 2: Information Capture */
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20 flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-sans">
                        Sua Data: <strong>{prefDay}</strong> às <strong>{prefTime}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setBkStep(1)}
                        className="text-emerald-400 underline font-mono text-[10px]"
                      >
                        Alterar
                      </button>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-gray-400 block mb-1">Seu Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={bkName}
                        onChange={(e) => setBkName(e.target.value)}
                        placeholder="Ex: Carlos Albuquerque"
                        className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-gray-400 block mb-1">Email Corporativo de Trabalho *</label>
                      <input
                        type="email"
                        required
                        value={bkEmail}
                        onChange={(e) => setBkEmail(e.target.value)}
                        placeholder="Ex: carlos@empresa.com"
                        className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-mono text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer transition-colors"
                    >
                      Confirmar Horário de Consultoria
                    </button>
                  </div>
                )}

              </form>
            )}

            {/* Micro disclaimer notes */}
            <div className="mt-6 flex items-start gap-2 text-[10px] text-gray-500">
              <Info className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
              <p className="leading-normal">
                Nota de Exclusividade: Reuniões estão sujeitas a cancelamento caso ocorra incoerência nos dados cadastrados da empresa faturando abaixo das categorias selecionadas.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
