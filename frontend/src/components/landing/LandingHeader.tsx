import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";

import { useAuth } from "../../store/auth";
import { useAuthModal } from "../../store/authModal";

const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export default function LandingHeader() {
  const [open, setOpen] = useState(false);
  const token = useAuth((s) => s.token);
  const logout = useAuth((s) => s.logout);
  const show = useAuthModal((s) => s.show);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0d0d]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-7 w-auto" />
          <span className="font-display text-xl text-white">
            CareerSync<span className="text-primary-500">.</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono text-white/55 transition-colors hover:text-primary-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {token ? (
            <>
              <Link to="/new" className="btn-primary px-4 py-2 text-sm">
                Ir para plataforma
              </Link>
              <button
                type="button"
                onClick={logout}
                className="px-3 py-2 text-sm text-white/60 transition-colors hover:text-primary-500"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => show("register")}
              className="btn-primary px-4 py-2 text-sm"
            >
              Começar agora
            </button>
          )}
        </div>

        <button
          className="rounded-md p-2 text-white/80 transition-colors hover:text-primary-500 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d0d0d] md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="label-mono py-2 text-white/60 transition-colors hover:text-primary-500"
              >
                {l.label}
              </a>
            ))}
            {token ? (
              <>
                <Link
                  to="/new"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-3 px-3 py-2.5 text-sm"
                >
                  Ir para plataforma
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="mt-1 py-2 text-left text-sm text-white/60 transition-colors hover:text-primary-500"
                >
                  Sair
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  show("register");
                  setOpen(false);
                }}
                className="btn-primary mt-3 px-3 py-2.5 text-sm"
              >
                Começar agora
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
