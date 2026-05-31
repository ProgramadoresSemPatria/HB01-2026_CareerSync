import StepItem from "./StepItem";

const steps = [
  {
    title: "Envie seu currículo",
    desc: "Faça o upload do seu PDF. A IA extrai suas experiências e habilidades automaticamente.",
  },
  {
    title: "Cole a descrição da vaga",
    desc: "Informe para qual posição você está se candidatando para obter uma análise de aderência real.",
  },
  {
    title: "Estude com seu plano",
    desc: "Siga o roadmap de 7 dias com tarefas, problemas de código e explicações objetivas.",
  },
  {
    title: "Simule a entrevista",
    desc: "Responda perguntas em áudio, pratique seus pitches e receba feedback instantâneo por IA.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#171717]">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-white">Como funciona</h2>
          <p className="text-neutral-300 mt-2">
            Quatro passos para chegar pronto na entrevista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="p-4">
              <StepItem number={i + 1} title={s.title} desc={s.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
