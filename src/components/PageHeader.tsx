export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-forest-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h1 className="max-w-[22ch] text-balance font-serif text-4xl font-medium text-paper md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[52ch] text-pretty text-sm leading-relaxed text-sage md:text-base">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
