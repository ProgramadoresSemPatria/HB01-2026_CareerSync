const days = [
  "Algoritmos & estruturas de dados",
  "Desafios técnicos sugeridos pela IA",
  "Simulador de entrevista + feedback",
  "Revisão dos gaps prioritários",
];

export default function HeroMockup() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] glow-primary">
      {/* Barra de janela estilo terminal */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary-500/70" />
        <span className="label-mono ml-2 text-white/40">careersync ~ plano</span>
      </div>

      <div className="p-5">
        {/* Match score */}
        <div className="flex items-end justify-between">
          <div>
            <div className="label-mono text-white/40">match score</div>
            <div className="font-display text-5xl leading-none text-primary-500">
              87%
            </div>
          </div>
          <div className="label-mono text-right text-white/40">
            plano
            <br />
            <span className="text-white/70">7 dias</span>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary-600 to-primary-500" />
        </div>

        {/* Lista de dias */}
        <div className="mt-5 space-y-2.5">
          {days.map((label, i) => (
            <div key={label} className="flex items-center gap-3 text-sm">
              <span className="label-mono w-8 shrink-0 text-primary-500/80">
                D{i + 1}
              </span>
              <span className="truncate text-white/70">{label}</span>
            </div>
          ))}
          <div className="label-mono pl-11 text-white/30">+ 3 dias…</div>
        </div>
      </div>
    </div>
  );
}
