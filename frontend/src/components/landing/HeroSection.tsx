import { ArrowRight } from "lucide-react";
import HeroMockup from "./HeroMockup";
import AnimatedSection from "../common/AnimatedSection";
import { useAuthModal } from "../../store/authModal";

export default function HeroSection() {
  const show = useAuthModal((s) => s.show);

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Atmosfera de fundo: grade blueprint + brilho fosforescente + grão */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary-500/20 blur-[140px] animate-glow-pulse" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-screen" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna editorial */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-down" delay={0} duration={500}>
              <div className="inline-flex items-center gap-2 label-mono text-primary-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
                Preparação com IA
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={120} duration={700}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Chegue{" "}
                <span className="relative italic text-primary-500">
                  pronto
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-primary-500 to-transparent" />
                </span>{" "}
                para a vaga
                <br className="hidden sm:block" /> dos seus sonhos.
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={280} duration={600}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                O CareerSync lê seu currículo, expõe seus gaps e monta um plano
                de 7 dias sob medida — com LeetCode personalizado e um simulador
                de entrevista que te dá feedback em tempo real.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={420} duration={600}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => show("register")}
                  className="btn-primary group px-6 py-3.5 text-sm"
                >
                  Começar gratuitamente
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
                <a href="#how-it-works" className="btn-ghost px-6 py-3.5 text-sm">
                  Ver como funciona
                </a>
              </div>
            </AnimatedSection>

            {/* Faixa de prova social estilo terminal */}
            <AnimatedSection animation="fade" delay={620} duration={500}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 label-mono text-white/40">
                <span className="text-white/60">~ 87% match médio</span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" />
                <span>Plano de 7 dias</span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" />
                <span>Hackathon HB01 · PSP</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Coluna visual */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-left" delay={300} duration={800}>
              <div className="relative mx-auto max-w-sm">
                {/* Moldura com brilho */}
                <div className="absolute -inset-4 rounded-2xl bg-primary-500/10 blur-2xl" />
                <div className="relative animate-float">
                  <HeroMockup />
                </div>
                {/* Badge flutuante */}
                <div className="absolute -right-3 -top-4 rotate-3 rounded-md border border-primary-500/30 bg-[#0d0d0d]/90 px-3 py-1.5 label-mono text-primary-500 backdrop-blur-sm">
                  ● live feedback
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
