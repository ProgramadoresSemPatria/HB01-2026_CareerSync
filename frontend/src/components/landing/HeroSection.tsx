import { Link } from "react-router-dom";
import HeroMockup from "./HeroMockup";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-6 pt-28 pb-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#202020] border border-gray-700 text-gray-50 px-3 py-1 rounded-full text-sm mb-4">
            <span>⚡</span>
            <span>Powered by AI</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Chegue pronto para a vaga dos seus sonhos.
          </h1>

          <p className="text-gray-400 mb-6">
            O CareerSync analisa seu currículo, identifica seus gaps e monta um
            plano de estudo de 7 dias sob medida — com LeetCode personalizado e
            simulador de entrevista com feedback em tempo real.
          </p>

          <div className="flex gap-3 items-center">
            <Link
              to="/new"
              className="bg-primary-500 hover:bg-primary-600 text-black px-5 py-3 rounded-md text-sm font-semibold"
            >
              Começar gratuitamente
            </Link>
            <a
              href="#how-it-works"
              className="text-sm text-primary-600 hover:underline"
            >
              Ver como funciona
            </a>
          </div>

          <div className="text-sm text-gray-400 mt-4">
            🚀 Criado no Hackathon HB01-2026 · Programadores Sem Pátria
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
