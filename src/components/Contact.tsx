import React, { useState } from "react";
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RefreshCw, 
  Terminal, 
  FileText,
  Clock, 
  Building
} from "lucide-react";
import { DiagnosticInput, GrowthBlueprint } from "../types";

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

export default function Contact() {
  // Simple form state
  const [formData, setFormData] = useState<DiagnosticInput>({
    businessName: "",
    website: "",
    industry: "",
    bottleneck: "CAC Alto / Leads Pouco Qualificados",
    currentRevenue: "R$ 50k - R$ 100k / mês",
    targetChannel: "Tráfego Pago & Ads Multicanal"
  });

  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadMessage, setLeadMessage] = useState("");

  const [generating, setGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<GrowthBlueprint | null>(null);
  const [submittingLead, setSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGenerateBlueprint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.industry) {
      setErrorMessage("Por favor, preencha o Nome da sua Empresa e o Nicho/Indústria.");
      return;
    }

    setGenerating(true);
    setErrorMessage("");
    setBlueprint(null);

    try {
      const response = await fetch("/api/generate-blueprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Erro desconhecido ao gerar o seu blueprint.");
      }

      setBlueprint(data.blueprint);
    } catch (err: any) {
      setErrorMessage(err.message || "Não foi possível conectar ao servidor de consultoria.");
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmitLeadAndForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) {
      setErrorMessage("Nome completo e Email são obrigatórios para agendamento.");
      return;
    }

    setSubmittingLead(true);
    setErrorMessage("");

    try {
      const payload = {
        name: leadName,
        email: leadEmail,
        phone: leadPhone,
        businessName: formData.businessName || "Confidencial",
        website: formData.website || "Não fornecido",
        message: leadMessage,
        bottleneck: formData.bottleneck,
        revenue: formData.currentRevenue,
        diagnosticResult: blueprint
      };

      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro ao capturar seu cadastro.");
      }

      setLeadSuccess(true);
      // Clean states
      setLeadName("");
      setLeadEmail("");
      setLeadPhone("");
      setLeadMessage("");
    } catch (err: any) {
      setErrorMessage(err.message || "Erro de rede ao salvar lead.");
    } finally {
      setSubmittingLead(false);
    }
  };

  return (
    <section id="contact-diagnostic" className="py-24 bg-dark-900 border-t border-dark-800 relative overflow-hidden">
      {/* Absolute Glow Backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Sales psychological headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block mb-3 animate-pulse">
            SISTEMA INTEGRADO DE CONVERSÃO & DIAGNÓSTICO DE IA
          </span>
          <h2 className="font-display font-medium text-4xl text-white tracking-widest">
            Ready to Build Your System?
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            "Businesses that scale today don’t rely on random content. They build systems." 
            <br />
            Insira os dados da sua operação abaixo para rodar nosso 
            <strong className="text-emerald-400 font-medium"> Diagnóstico de Growth Inteligente patrocinado pelo Gemini AI</strong> e monte seu blueprint imediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column A: Interactive Form Options */}
          <div className="lg:col-span-6 bg-[#ffffff05] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left flex flex-col justify-between">
            <form onSubmit={handleGenerateBlueprint} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
                <span className="p-1 px-2 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded">
                  STEP 01
                </span>
                <span className="font-display font-bold text-sm text-gray-300 uppercase">
                  Parâmetros de Diagnóstico da Empresa
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Ex: Torres Corp"
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                    Website Oficial (Opcional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="Ex: https://torres.growth"
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                  Nicho de Atuação / Indústria *
                </label>
                <input
                  type="text"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  placeholder="Ex: SaaS B2B, Consultoria de TI, Ecommerce Premium, Luxo"
                  className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                  Qual o Maior Gargalo Comercial Hoje?
                </label>
                <select
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                >
                  <option>CAC Alto / Leads Pouco Qualificados</option>
                  <option>Sem equipe interna qualificada de conteúdo & vídeo</option>
                  <option>Pouca previsibilidade de reuniões de fechamento</option>
                  <option>Processo comercial lento (baixo fechamento)</option>
                  <option>Falta de automações de IA e ferramentas do CRM</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                    Faturamento Atual da Operação
                  </label>
                  <select
                    value={formData.currentRevenue}
                    onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  >
                    <option>Até R$ 50k / mês</option>
                    <option>R$ 50k - R$ 100k / mês</option>
                    <option>R$ 100k - R$ 300k / mês</option>
                    <option>Mais de R$ 300k / mês (High-Ticket Core)</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-gray-400 uppercase block mb-1">
                    Canal Principal Alvo de Aquisição
                  </label>
                  <select
                    value={formData.targetChannel}
                    onChange={(e) => setFormData({ ...formData, targetChannel: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  >
                    <option>Tráfego Pago & Ads Multicanal</option>
                    <option>Produção Editorial (Social & Autoridade)</option>
                    <option>Sistemas Automatizados / AI Clones</option>
                    <option>Estratégia Híbrida Integrada</option>
                  </select>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={generating}
                className="w-full text-center py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-xl cursor-pointer disabled:opacity-40 flex items-center justify-center gap-2 border border-white/20 hover:border-white shadow-lg"
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Processando Blueprint...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" /> Gerar Diagnóstico AI Grátis
                  </>
                )}
              </button>
            </form>

            {/* Quick trust metrics indicator */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>INTEGRAÇÃO GEMINI 3.5 ACTIVE</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Média Gerada em 2.8s</span>
              </div>
            </div>
          </div>

          {/* Column B: Diagnostic Blueprint Console Result OR Direct Consult book */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-dark-950 border border-dark-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full text-left">
              
              {!blueprint && !generating ? (
                /* Showcase default message inviting to query */
                <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-gray-400" />
                  </div>
                  <h4 className="font-display font-medium text-lg text-white mb-2">
                    Aguardando Parâmetros de Sua Empresa
                  </h4>
                  <p className="font-sans text-xs text-gray-500 max-w-sm leading-relaxed">
                    Preencha o formulário ao lado com suas informações comerciais para o modelo de Inteligência Artificial da Torres Growth rodar o algoritmo de aceleração competitiva.
                  </p>
                </div>
              ) : generating ? (
                /* Dynamic Terminal Loading screen */
                <div className="flex-1 flex flex-col justify-center space-y-4 p-8">
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full"></div>
                      <div className="absolute inset-0 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <div className="text-center font-mono text-xs text-emerald-400 animate-pulse">
                    &gt; Simulando arquitetura de funil de aquisição...
                    <br />
                    &gt; Alinhando métricas de CAC com nicho de {formData.industry || "Crescimento"}...
                    <br />
                    &gt; Consultando banco de conhecimentos da Torres Growth...
                  </div>
                </div>
              ) : (
                /* The custom growth Blueprint resulting from Gemini AI! */
                <div className="flex-1 space-y-5 animate-fade-in overflow-y-auto max-h-[500px] pr-2">
                  <div className="flex items-center justify-between border-b border-dark-800 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-[10px] text-emerald-300 uppercase tracking-widest font-bold">
                        DIAGNÓSTICO GERADO COM SUCESSO
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#ffffff50]">ID: TORRES-GROWTH-92</span>
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase block mb-1">CONCEITO ESTRATÉGICO PRINCIPAL</span>
                      <p className="text-gray-200 uppercase tracking-wide leading-relaxed font-bold">
                        {blueprint.executiveConcept}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">ÂNGULO DE POSICIONAMENTO RECOMENDADO</span>
                      <p className="text-gray-300 font-sans leading-relaxed">
                        {blueprint.positioningAngle}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">ROTEIRO DE AQUISIÇÃO MULTICANAL</span>
                      <p className="text-gray-300 font-sans leading-relaxed">
                        {blueprint.acquisitionStrategy}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">INTEGRAÇÃO AI SYSTEMS</span>
                      <p className="text-gray-300 font-sans leading-relaxed">
                        {blueprint.aiSystemsEngine}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block mb-1">ARQUITETURA DO FUNIL DE CONVERSÃO</span>
                      <p className="text-gray-300 font-sans leading-relaxed">
                        {blueprint.funnelArchitecture}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-dark-800/80">
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase block">OUTLOOK DE ROI</span>
                        <span className="font-display font-bold text-white text-xs block mt-0.5">
                          {blueprint.projectedRoi}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-400 uppercase block font-bold font-mono">RECOMENDAÇÃO C-LEVEL</span>
                        <span className="font-sans italic text-emerald-300 text-[11px] block mt-0.5 font-mono">
                          {blueprint.consultantAdvice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Solidified CTA: Submit lead for the Strategy Call */}
              <div className="mt-8 pt-4 border-t border-dark-800">
                {leadSuccess ? (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-sm text-emerald-300 flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    <strong>Pre-Booking Solicitado com Sucesso!</strong>
                    <p className="text-xs text-gray-400">
                      Entraremos em contato no WhatsApp ou Email corporativo nas próximas 2 horas comerciais para fechar sua data exclusiva.
                    </p>
                    <a
                      href="https://wa.me/5541920023824?text=Olá,%20acabei%20de%20enviar%20as%20informações%20da%20minha%20empresa%20para%20o%20algoritmo%20de%20crescimento.%20Gostaria%20de%20acelerar%20minha%20marca%20com%20Diego%20Silva%20Torres!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-xs font-mono font-bold text-[#25D366] hover:text-[#20ba5a] underline flex items-center gap-1"
                    >
                      Acelerar via WhatsApp Imediato <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitLeadAndForm} className="space-y-3 text-left">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block font-bold mb-2">
                      FALE COM UM GROWTH STRATEGIST & GARANTA SUA VAGA
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Seu Nome Completo"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="bg-dark-900 border border-dark-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Seu Email Corporativo"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="bg-dark-900 border border-dark-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="tel"
                        placeholder="WhatsApp (com DDD)"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="bg-dark-900 border border-dark-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                      <input
                        type="text"
                        placeholder="Mensagem (Opcional)"
                        value={leadMessage}
                        onChange={(e) => setLeadMessage(e.target.value)}
                        className="bg-dark-900 border border-dark-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submittingLead}
                      className="w-full text-center py-3 bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submittingLead ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        "Book My Strategy Call Now"
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
