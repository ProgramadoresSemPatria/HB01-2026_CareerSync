export default function HeroMockup() {
  return (
    <div className="w-full lg:max-w-sm mx-auto lg:mx-0 bg-[#202020] border border-neutral-700 rounded-lg shadow-md p-6 transform -rotate-1">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-neutral-300">Match Score</div>
          <div className="text-3xl font-bold text-primary-500">87%</div>
        </div>
        <div className="text-right text-sm text-neutral-300">Plano 7 dias</div>
      </div>
      <div className="mt-4 h-36 bg-[#202020] border border-neutral-700 rounded-md truncate p-4 text-sm text-white">
        <p className="truncate mb-1">
          <b>Dia 1:</b> Estudar conceitos básicos de algoritmos e estruturas de
          dados.
        </p>
        <p className="truncate mb-1">
          <b>Dia 2:</b> Resolver os desafios técnicos sugeridos pela IA.
        </p>
        <p className="truncate mb-1">
          <b>Dia 3:</b> Participar do simulador de entrevista e receber
          feedback.
        </p>
        <p className="truncate mb-1">
          <b>Dia 4:</b> Revisar os gaps identificados e focar nos pontos fracos.
        </p>
        <p>...</p>
      </div>
    </div>
  );
}
