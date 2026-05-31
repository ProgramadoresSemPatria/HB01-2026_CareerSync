export default function PitchSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0d1117] to-[#085041] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pare de chegar despreparado.
        </h2>
        <p className="opacity-90 mb-6">
          A maioria dos candidatos não sabe onde estão seus gaps antes da
          entrevista. O CareerSync muda isso — com dados reais, plano concreto e
          prática guiada.
        </p>
        <a
          href="/new"
          className="inline-block bg-primary-500 text-black px-5 py-3 rounded-md font-semibold hover:bg-primary-600 transition-colors"
        >
          Quero me preparar agora
        </a>
      </div>
    </section>
  );
}
