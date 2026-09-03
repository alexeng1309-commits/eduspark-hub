import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/courses", label: "Courses" },
  { to: "/syllabus", label: "Syllabus" },
  { to: "/materials", label: "Materials" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-[10px] bg-forest font-serif text-lg font-semibold text-paper">
              E
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-medium tracking-tight text-ink">EduHub</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-forest">
                Class XII
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 font-sans text-sm text-ink/70 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-ink"
                activeProps={{ className: "text-ink font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/pricing" className="btn-forest hidden sm:inline-flex">
              Enroll now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="grid size-9 place-items-center rounded-[8px] ring-1 ring-ink/15 md:hidden"
            >
              <span className="font-mono text-xs text-ink">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="grid gap-1 border-t border-ink/10 py-3 font-sans text-sm text-ink/80 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </Link>
            ))}
            <Link to="/pricing" onClick={() => setOpen(false)} className="btn-forest mt-2">
              Enroll now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
