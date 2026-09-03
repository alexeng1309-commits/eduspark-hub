import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage/15 bg-forest-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-[9px] bg-forest font-serif text-base font-semibold text-paper">
              E
            </span>
            <span className="font-serif text-lg text-paper">EduHub</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-sage/80">
            <a href="tel:6766476378" className="hover:text-paper">
              6766476378
            </a>
            <a href="mailto:edu.hub@gmail.com" className="hover:text-paper">
              edu.hub@gmail.com
            </a>
          </div>
          <p className="font-mono text-[11px] text-sage/60">
            © 2026 EduHub · Class XII · Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
