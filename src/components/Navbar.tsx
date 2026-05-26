import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Shield, Cpu, Activity } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenConsultation, onScrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", id: "what-we-do" },
    { label: "Diferencial", id: "why-us" },
    { label: "Simulador ROI", id: "roi-calculator" },
    { label: "Processo", id: "process" },
    { label: "Resultados", id: "results" },
    { label: "Sistemas IA", id: "ai-systems" },
    { label: "Objeções FAQ", id: "editorial-faq" },
    { label: "O Consultor", id: "founder" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/85 backdrop-blur-md border-b border-dark-800/80 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-9 h-9 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Cpu className="w-5 h-5 text-emerald-400 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-widest text-[#f3f4f6] text-lg leading-tight">
              TORRES<span className="text-emerald-500">.</span>GROWTH
            </span>
            <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">
              SISTEMAS DE ACELERAÇÃO & CONSULTORIA
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollToSection(link.id)}
              className="font-sans text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-dark-900 border border-dark-800 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
              Consultor Online
            </span>
          </div>
          <button
            onClick={onOpenConsultation}
            className="group relative px-5 py-2.5 bg-emerald-500 text-dark-950 font-semibold rounded-lg text-sm tracking-wide transition-all overflow-hidden cursor-pointer hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Book a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-400 hover:text-emerald-400 transition-colors md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-950 border-b border-dark-800/90 py-6 px-6 slide-in-top">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToSection(link.id);
                }}
                className="text-left font-sans text-base py-2 border-b border-dark-900 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex items-center gap-2 mt-2 py-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                Sistemas Prontos para Atender sua Empresa
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-3 bg-emerald-500 text-dark-950 font-bold rounded-lg tracking-wide hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
