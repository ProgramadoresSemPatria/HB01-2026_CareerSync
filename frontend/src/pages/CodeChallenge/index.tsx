import { useEffect, useState } from "react";
import {
  useAnalysisCodeChallenges,
  useChallenge,
  useChallengeHint,
  useChallenges,
  useSubmitChallenge,
  type ChallengeSummary,
  type LeetCodeProblem,
} from "../../lib/api";
import { useSession } from "../../store/session";

const difficultyClass = (difficulty: "Easy" | "Medium" | "Hard") =>
  difficulty === "Easy"
    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
    : difficulty === "Medium"
      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
      : "bg-red-500/10 text-red-400 border border-red-500/20";

const formatValue = (value: unknown) => JSON.stringify(value, null, 2);

function ChallengeCard({
  challenge,
  isActive,
  onSelect,
}: {
  challenge: ChallengeSummary;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
        isActive
          ? "border-[#3ecf8e] bg-[#3ecf8e]/10 shadow-[0_0_15px_rgba(62,207,142,0.15)]"
          : "border-gray-700 bg-[#202020] hover:border-gray-500 hover:bg-[#2a2a2a]"
      }`}
    >
      <div className="flex justify-between items-start mb-4 gap-3">
        <h3 className="font-bold text-white leading-tight flex-1">
          {challenge.title}
        </h3>
        <span
          className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider whitespace-nowrap shrink-0 ${difficultyClass(
            challenge.difficulty,
          )}`}
        >
          {challenge.difficulty}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block bg-[#171717] border border-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-md">
          {challenge.category}
        </span>
      </div>
      <p className="text-sm text-[#9a9a9a] line-clamp-2">
        {challenge.reason}
      </p>
    </button>
  );
}

function RecommendedProblemCard({ problem }: { problem: LeetCodeProblem }) {
  return (
    <div className="p-4 rounded-xl border border-gray-800 bg-[#171717]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-white leading-tight">
          {problem.title}
        </h3>
        <span
          className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider whitespace-nowrap ${difficultyClass(
            problem.difficulty,
          )}`}
        >
          {problem.difficulty}
        </span>
      </div>
      <p className="text-xs text-[#3ecf8e] mb-2">{problem.category}</p>
      <p className="text-sm text-[#9a9a9a]">{problem.reason}</p>
    </div>
  );
}

export function CodeChallengePage() {
  const analysisId = useSession((s) => s.analysisId);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [solutionCode, setSolutionCode] = useState("");

  const { data: challenges, isLoading: isLoadingChallenges } = useChallenges();
  const { data: selectedChallenge, isLoading: isLoadingChallenge } =
    useChallenge(selectedSlug);
  const { data: recommendedProblems, isLoading: isLoadingRecommended } =
    useAnalysisCodeChallenges(analysisId);

  const {
    mutate: submitChallenge,
    data: submitResult,
    error: submitError,
    isPending: isSubmitting,
    reset: resetSubmit,
  } = useSubmitChallenge();
  const {
    mutate: requestHint,
    data: hintResult,
    error: hintError,
    isPending: isRequestingHint,
    reset: resetHint,
  } = useChallengeHint();

  useEffect(() => {
    if (!selectedSlug && challenges?.length) {
      setSelectedSlug(challenges[0].slug);
    }
  }, [challenges, selectedSlug]);

  useEffect(() => {
    if (selectedChallenge) {
      setSolutionCode(selectedChallenge.signature);
      resetSubmit();
      resetHint();
    }
  }, [resetHint, resetSubmit, selectedChallenge]);

  const selectChallenge = (slug: string) => {
    setSelectedSlug(slug);
    resetSubmit();
    resetHint();
  };

  const handleSubmit = () => {
    if (!selectedSlug || !solutionCode.trim()) return;
    submitChallenge({ slug: selectedSlug, code: solutionCode });
  };

  const handleHint = () => {
    if (!selectedSlug || !solutionCode.trim()) return;
    requestHint({ slug: selectedSlug, code: solutionCode });
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col pb-6">
      <header className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white">Laboratório de Código</h1>
        <p className="text-[#9a9a9a] mt-2">
          Resolva desafios em Python com testes reais e dicas guiadas por IA.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[700px]">
        <aside className="w-full lg:w-1/3 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-white">
            Desafios de Treino
          </h2>

          <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
            {isLoadingChallenges ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3ecf8e]"></div>
                <p className="text-sm text-gray-500">Carregando desafios...</p>
              </div>
            ) : (
              challenges?.map((challenge) => (
                <ChallengeCard
                  key={challenge.slug}
                  challenge={challenge}
                  isActive={selectedSlug === challenge.slug}
                  onSelect={() => selectChallenge(challenge.slug)}
                />
              ))
            )}
          </div>

          {analysisId && (
            <section className="border-t border-gray-800 pt-4">
              <h2 className="text-sm font-semibold text-white mb-3">
                Recomendados pela análise
              </h2>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                {isLoadingRecommended ? (
                  <p className="text-sm text-gray-500">Buscando recomendações...</p>
                ) : (
                  recommendedProblems?.map((problem) => (
                    <RecommendedProblemCard key={problem.slug} problem={problem} />
                  ))
                )}
              </div>
            </section>
          )}
        </aside>

        <main className="w-full lg:w-2/3 flex flex-col gap-6">
          {!selectedChallenge || isLoadingChallenge ? (
            <div className="flex-1 flex flex-col items-center justify-center text-[#9a9a9a] bg-[#202020] rounded-2xl border border-gray-800 border-dashed p-8 text-center">
              <p>Selecione um desafio para começar.</p>
            </div>
          ) : (
            <>
              <section className="bg-[#202020] border border-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedChallenge.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${difficultyClass(
                          selectedChallenge.difficulty,
                        )}`}
                      >
                        {selectedChallenge.difficulty}
                      </span>
                      <span className="bg-[#171717] border border-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-md">
                        {selectedChallenge.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {selectedChallenge.description}
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="bg-[#171717] border border-gray-800 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-white mb-3">
                      Exemplos
                    </h3>
                    <div className="space-y-3">
                      {selectedChallenge.examples.map((example, index) => (
                        <div key={index} className="text-sm">
                          <pre className="whitespace-pre-wrap text-gray-300 font-mono bg-[#0d0d0d] rounded-lg p-3 overflow-x-auto">
                            {`Input: ${formatValue(example.input)}\nExpected: ${formatValue(example.expected)}`}
                          </pre>
                          {example.explanation && (
                            <p className="text-[#9a9a9a] mt-2">
                              {example.explanation}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#171717] border border-gray-800 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-white mb-3">
                      Regras
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                      <li>
                        Implemente exatamente{" "}
                        <code className="text-[#3ecf8e]">
                          {selectedChallenge.function_name}
                        </code>
                        .
                      </li>
                      {selectedChallenge.constraints.map((constraint) => (
                        <li key={constraint}>{constraint}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="flex-1 bg-[#202020] border border-gray-800 rounded-2xl p-6 flex flex-col shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Editor Python
                    </h2>
                    <p className="text-sm text-[#9a9a9a] mt-1">
                      Use a assinatura obrigatória e retorne o resultado.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleHint}
                      disabled={isRequestingHint || !solutionCode.trim()}
                      className="border border-[#3ecf8e]/40 hover:border-[#3ecf8e] disabled:border-gray-700 disabled:text-gray-500 text-[#3ecf8e] font-bold py-2.5 px-5 rounded-xl transition-colors shrink-0"
                    >
                      {isRequestingHint ? "Gerando dica..." : "Pedir dica"}
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !solutionCode.trim()}
                      className="bg-[#3ecf8e] hover:bg-[#36b37e] disabled:bg-gray-700 disabled:text-gray-500 text-black font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0"
                    >
                      {isSubmitting ? "Rodando testes..." : "Submeter"}
                    </button>
                  </div>
                </div>

                <textarea
                  value={solutionCode}
                  onChange={(event) => setSolutionCode(event.target.value)}
                  className="min-h-[360px] flex-1 w-full bg-[#0d0d0d] text-[#3ecf8e] font-mono p-5 rounded-xl border border-gray-800 focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] resize-y transition-colors"
                  spellCheck={false}
                />
              </section>

              {(submitResult || submitError || hintResult || hintError) && (
                <section className="bg-[#202020] border border-gray-800 rounded-2xl p-6 shadow-lg">
                  {submitResult && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-4 mb-4 border-b border-gray-800 pb-4">
                        <h3 className="text-lg font-bold text-white">
                          Resultado dos testes
                        </h3>
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                            submitResult.passed
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-red-500/10 text-red-400 border-red-500/20"
                          }`}
                        >
                          {submitResult.passed ? "Aprovado" : "Revisar"}
                        </span>
                      </div>

                      <p className="text-sm text-gray-300 mb-4">
                        {submitResult.passed_count} de{" "}
                        {submitResult.total_tests} testes passaram.
                      </p>

                      {submitResult.error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-200 mb-4">
                          {submitResult.error}
                        </div>
                      )}

                      {submitResult.first_failure && (
                        <div className="bg-[#171717] border border-gray-800 rounded-xl p-4">
                          <h4 className="text-sm font-bold text-amber-400 mb-3">
                            Primeiro caso que falhou
                          </h4>
                          <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono overflow-x-auto">
                            {`Input: ${formatValue(submitResult.first_failure.input)}\nExpected: ${formatValue(submitResult.first_failure.expected)}\nActual: ${formatValue(submitResult.first_failure.actual)}`}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {submitError instanceof Error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-200 mb-4">
                      {submitError.message}
                    </div>
                  )}

                  {hintResult && (
                    <div className="bg-[#3ecf8e]/5 border border-[#3ecf8e]/20 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-[#3ecf8e] mb-2">
                        Dica da IA
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {hintResult.hint}
                      </p>
                    </div>
                  )}

                  {hintError instanceof Error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-200">
                      {hintError.message}
                    </div>
                  )}
                </section>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
