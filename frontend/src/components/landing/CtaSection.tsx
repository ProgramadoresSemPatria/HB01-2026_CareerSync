export default function CtaSection() {
  return (
    <section className="py-20 bg-[#171717] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Sua próxima entrevista pode ser diferente.
        </h2>
        <p className="text-neutral-300 mb-6">
          Junte-se a quem está usando IA para chegar preparado, confiante e com
          estratégia.
        </p>
        <a
          href="/new"
          className="inline-block bg-primary-500 text-black px-5 py-3 rounded-md font-semibold hover:bg-primary-600 transition-colors"
        >
          Criar minha conta grátis
        </a>
        <div className="text-sm text-gray-400 mt-3">
          Sem cartão de crédito. Sem compromisso.
        </div>
      </div>
    </section>
  );
}
