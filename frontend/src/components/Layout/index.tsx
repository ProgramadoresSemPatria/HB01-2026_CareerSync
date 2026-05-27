import { Link, Outlet } from "react-router-dom";

export function Layout() {
  const sessions = [
    {
      id: "s1",
      description: "Desenvolvedor Frontend - React/TypeScript (vaga remota)",
    },
    {
      id: "s2",
      description:
        "Engenheiro de Dados - Python, ETL e Big Data (Tempo integral)",
    },
    {
      id: "s3",
      description: "Product Manager - Produto de IA com foco em NLP e ML",
    },
  ];
  return (
    <div className="min-h-screen flex bg-[#171717] text-[#ffffff]">
      <aside className="w-64 border-r border-gray-700 p-6 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-[#3ecf8e]">Prep AI</h1>
          <p className="text-sm text-[#9a9a9a]">Seu assistente de preparação</p>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            to="/upload"
            className="text-[#ffffff] hover:text-[#3ecf8e] flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Nova análise</span>
          </Link>
          <Link to="/roadmap" className="text-[#ffffff] hover:text-[#3ecf8e]">
            Roadmap
          </Link>
          <Link to="/leetcode" className="text-[#ffffff] hover:text-[#3ecf8e]">
            LeetCode
          </Link>
          <Link to="/pitch" className="text-[#ffffff] hover:text-[#3ecf8e]">
            Pitch
          </Link>
          <Link to="/interview" className="text-[#ffffff] hover:text-[#3ecf8e]">
            Interview
          </Link>
        </nav>

        <div>
          <h2 className="text-sm text-[#9a9a9a]">Histórico</h2>
          <div className="flex flex-col gap-2 mt-2">
            {sessions.map((s) => (
              <Link
                key={s.id}
                to={`/upload?session_id=${s.id}`}
                className="text-[#ffffff] hover:text-[#3ecf8e] block w-full"
              >
                <span className="truncate block text-sm">{s.description}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto text-xs text-[#9a9a9a]">&copy; Prep AI</div>
      </aside>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
