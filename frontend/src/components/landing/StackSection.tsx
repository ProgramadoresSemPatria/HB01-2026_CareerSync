const stacks = [
  "React",
  "FastAPI",
  "OpenAI",
  "Postgres",
  "Supabase",
  "Railway",
  "Vercel",
];

export default function StackSection() {
  return (
    <div className="bg-[#171717] py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-xs text-white font-bold uppercase tracking-wide mb-3">
          Stack utilizada
        </div>
        <div className="flex gap-6 items-center justify-center flex-wrap">
          {stacks.map((s) => (
            <div key={s} className="text-gray-400 hover:text-primary-500">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
