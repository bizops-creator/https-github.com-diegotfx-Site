import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, ShieldCheck, Mail, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  badge?: string;
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("complex-product");

  const faqItems: FAQItem[] = [
    {
      id: "complex-product",
      question: "Meu produto ou serviço é extremamente nichado e complexo. O método funciona para mim?",
      answer: "Sim. Na verdade, produtos complexos e nichados são perfeitos para o ecossistema High-Ticket. O Torres.Growth foca na construção de autoridade intangível e copywriting editorial refinado. Traduzimos termos altamente técnicos em valor óbvio de negócios e estruturamos funis de qualificação que separam curiosos de tomadores de decisão C-Level com real poder de compra.",
      badge: "Autoridade e Nicho"
    },
    {
      id: "agency-difference",
      question: "Qual é a real diferença entre vocês e as agências de tráfego tradicionais que 'apertam botões'?",
      answer: "Agências tradicionais são especialistas em entregar métricas de vaidade: likes, impressões e um volume imenso de leads frios desqualificados que destroem a produtividade comercial. Nós operamos como um parceiro de Growth de ponta a ponta. Isso significa que implementamos a estratégia de posicionamento editorial, os funis de altíssima conversão, a integração profunda de CRMs e, principalmente, AI Clones automatizados para atendimento imediato.",
      badge: "Modelo Exclusivo"
    },
    {
      id: "crm-integration",
      question: "Vocês desenvolvem os AI Clones e automatizações dentro do nosso próprio CRM?",
      answer: "Absolutamente. Nós não criamos sistemas isolados ou proprietários que deixam você refém de nós. Adaptamos e construímos o motor completo de automação e inteligência artificial (como triagem inteligente, notificações em tempo real e assistentes baseados em Gemini) diretamente nas ferramentas que sua empresa já utiliza, garantindo portabilidade, governança completa e segurança de dados sob NDA.",
      badge: "Infraestrutura de IA"
    },
    {
      id: "time-to-results",
      question: "Qual é o tempo médio estimado para vermos os primeiros resultados tangíveis?",
      answer: "O blueprint estratégico e a engenharia de conexões iniciais de CRM são concluídos logo nas primeiras semanas de implantação. Usualmente, os primeiros canais de tráfego de alta intenção e as automações de qualificação começam a tracionar entre 30 a 45 dias, permitindo a identificação e o fechamento de oportunidades que antes simplesmente 'vazavam' no comercial.",
      badge: "Rampa de ROI"
    },
    {
      id: "minimum-requirement",
      question: "Existe algum faturamento mínimo exigido para parcerias ou mentorias?",
      answer: "Para a operação de assessoria integrada (Growth Engine), focamos em empresas focadas em conversões high-ticket, contratos corporativos complexos, ou vendas de alto valor que buscam estruturar canais de aquisição previsíveis. Nossos sistemas exigem maturidade de entrega para sustentar o volume gerado.",
      badge: "Critérios de Entrada"
    },
    {
      id: "nda-protection",
      question: "Quão seguro está o sigilo das estratégias e processos de vendas da minha empresa?",
      answer: "Adotamos segurança de nível corporativo e o sigilo total é resguardado sob um contrato de confidencialidade mútuo (NDA) desde o primeiro dia. Não divulgamos funis internos ou processos estratégicos que representem o diferencial competitivo dos nossos parceiros para o mercado aberto.",
      badge: "Segurança & LGPD"
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="editorial-faq" className="py-24 bg-dark-900 border-t border-dark-900 relative overflow-hidden text-left">
      {/* Editorial glowing golden background highlights to match the company logo standard */}
      <div className="absolute top-[30%] right-[-15%] w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Editorial Subheading & Intro Banner */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-flex items-center gap-1.5 mb-4 select-none">
            <HelpCircle className="w-3.5 h-3.5" /> Objeções Comuns & Engenharia Comercial
          </span>
          <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
            FAQ <span className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-300">Editorial Estratégico</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-4 leading-relaxed">
            Elimine as dúvidas mais frequentes de tomadores de decisão de alto padrão antes de colocar o Growth Engine para funcionar em perfeição no seu negócio.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`border rounded-2xl transition-all duration-350 overflow-hidden ${
                  isOpen 
                    ? "bg-dark-950/90 border-emerald-500/20 shadow-xl" 
                    : "bg-dark-900/50 border-dark-800/80 hover:border-white/10"
                }`}
              >
                {/* Header click target */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-5 px-6 flex justify-between items-center gap-4 text-left font-display cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1 pr-2">
                    {item.badge && (
                      <span className={`font-mono text-[9px] uppercase tracking-wide px-2 py-0.5 rounded ${
                        isOpen ? "bg-emerald-500/15 text-emerald-300" : "bg-white/5 text-gray-400"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <h3 className={`font-sans font-medium text-sm md:text-base leading-snug transition-colors ${
                      isOpen ? "text-emerald-300 font-bold" : "text-gray-200"
                    }`}>
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Subtle vector indicator */}
                  <span className={`p-1.5 rounded-lg border shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 rotate-180" 
                      : "bg-dark-950/60 border-dark-800 text-gray-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Collapsible Answer container with native layout transitions */}
                <div 
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-80 opacity-100 border-t border-dark-800/60" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-xs md:text-sm text-gray-400 leading-relaxed font-sans bg-emerald-500/[0.005]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Call-To-Action below Accordion */}
        <div className="mt-16 p-6 md:p-8 bg-dark-900/40 border border-dark-800/80 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 max-w-3xl mx-auto backdrop-blur-sm">
          <div className="space-y-1 flex-1">
            <h4 className="font-display font-semibold text-sm md:text-base text-gray-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Tem alguma questão altamente específica?
            </h4>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Agende uma mentoria rápida de diagnóstico e debata sigilosamente cada gargalo estratégico com Diego Silva Torres.
            </p>
          </div>
          <a
            href="https://wa.me/5541920023824?text=Olá Diego! Vi a seção de FAQ com as objeções e gostaria de tirar uma dúvida específica sobre se meu modelo de negócios se encaixa no Torres.Growth."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 font-sans text-xs font-bold uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer select-none"
          >
            Conversar Direto <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
