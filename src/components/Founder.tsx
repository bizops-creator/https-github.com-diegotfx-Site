import React, { useState } from "react";
import { Award, Globe, MessageSquare, Compass, ShieldCheck } from "lucide-react";

export default function Founder() {
  const [imageSrc, setImageSrc] = useState("/src/assets/images/diego_silva_torres_1779821257536.png");

  return (
    <section id="founder" className="py-24 bg-dark-950 border-t border-dark-900 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Headshot Illustration & Experience HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-2 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-md">
              <img
                src={imageSrc}
                onError={() => {
                  // Fallback to high quality modern premium advisor if local file is missing
                  setImageSrc("https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop");
                }}
                referrerPolicy="no-referrer"
                alt="Diego Silva Torres - Mentor de Growth & Negócios"
                className="w-full h-[450px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-[600ms] ease-out shadow-2xl"
              />
              
              {/* Dynamic tag positioned over the image */}
              <div className="absolute bottom-6 left-6 right-6 bg-dark-950/90 backdrop-blur-md border border-dark-800 p-4 rounded-xl flex items-center justify-between gap-4 text-left">
                <div>
                  <span className="font-mono text-[9px] text-[#ffffff50] uppercase tracking-widest block">FOUNDER & STRATEGIST</span>
                  <span className="font-display font-bold text-white text-base">Diego Silva Torres</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold">Atendimento Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core qualifications, strategic mindset, and personal vision */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded inline-block">
              THE STRATEGIST BEHIND THE ENGINE
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Acelerando Marcas de Alto Padrão com Visão Estratégica.
            </h2>
            
            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed">
              Com ampla atuação e liderança no ecossistema de <strong className="text-gray-200 font-medium">empreendedorismo, mentorias de negócios e growth</strong>, Diego Silva Torres construiu um ecossistema independente baseado em uma premissa clara: negócios que de fato escalam necessitam de processos integrados de aquisição e conversão guiados por dados, não de postagens vazias.
            </p>

            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed">
              Trabalhando ao lado de empresas de alta performance, desenhamos e refinamos o método <strong>Torres Growth Engine™</strong>. Integrando tráfego pago ultra-segmentado, posicionado editorial estético, e sistemas de inteligência artificial de última geração para vendas corporativas.
            </p>

            {/* Quick credentials / bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-dark-900/80">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs md:text-sm">Experiência Multi-mercados</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Operações fluentes estruturadas em múltiplos mercados comerciais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs md:text-sm">Fluência Idiomática Dinâmica</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Atendimento corporativo bilíngue (Português, Inglês e Espanhol).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                  <Compass className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs md:text-sm">Arquitetura de Conversão</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Focado no design racional de funis que reduzem o custo de CAC.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs md:text-sm">Mentoria & Consultoria Executiva</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Acompanhamento direto e consultoria para o C-Level corporativo.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium sign-off quote */}
            <div className="p-5 border-l-2 border-emerald-500 bg-emerald-500/[0.01] rounded-r-xl mt-6 text-left">
              <span className="font-sans text-xs md:text-sm text-emerald-300 italic">
                "Não dependa da sorte de um algoritmo. Traga a sua marca para ser exposta aos olhos de quem realmente tem o poder de compra absoluto do mercado."
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
