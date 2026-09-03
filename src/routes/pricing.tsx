import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";
import pricingStudy from "../assets/pricing-study.jpg";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Full Class 12 Course for ₹5,000 | EduHub" },
      {
        name: "description",
        content:
          "One EduHub course fee of ₹5,000 covers Class 12 Math, Physics and Chemistry syllabus, notes, PPTs and PPT solutions for a full academic year.",
      },
      { property: "og:title", content: "EduHub Pricing — ₹5,000 one-time" },
      {
        property: "og:description",
        content:
          "Full access to all three Class 12 subjects, notes, PPT decks and solutions for a single ₹5,000 fee.",
      },
    ],
  }),
  component: Pricing,
});

const faqs = [
  {
    q: "Is ₹5,000 a one-time fee?",
    a: "Yes. One payment covers all three subjects and every material for a full academic year — no monthly charges, no per-subject add-ons.",
  },
  {
    q: "Can working professionals join?",
    a: "Yes. Roughly a third of our learners study after work. All notes and PPTs are self-paced, so you can revise in short sessions.",
  },
  {
    q: "How do I pay?",
    a: "Call 6766476378 or email edu.hub@gmail.com and we will share payment options and confirm your access within a day.",
  },
];

function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="04 — One price"
        title="Full access, no add-ons."
        intro="A single fee for the entire Class 12 science library. Same price for students, corporate employees and working professionals."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="rounded-[14px] bg-forest p-8 ring-1 ring-forest-deep/40 md:p-10 lg:col-span-7">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl font-medium text-paper md:text-7xl">
                  ₹5,000
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-sage">
                  One-time
                </span>
              </div>
              <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-sage">
                Everything in the library — syllabus, notes, PPTs and solutions across all three
                subjects, for one full academic year.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Mathematics, Physics and Chemistry included",
                  "120+ chapter notes, updated each session",
                  "48 lecture PPT decks",
                  "Complete step-by-step PPT solutions",
                  "10 years of solved board papers",
                  "12-month access on all devices",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-paper/90">
                    <span className="size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-gold mt-9 w-full py-3.5">
                Enroll for ₹5,000
              </Link>
              <p className="mt-4 font-mono text-[11px] text-sage/70">
                Call 6766476378 · edu.hub@gmail.com
              </p>
            </div>

            <div className="lg:col-span-5">
              <img
                src={pricingStudy}
                alt="Learner studying EduHub material on a laptop"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>

          <div className="mt-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
              Common questions
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-[12px] bg-paper p-6 ring-1 ring-black/5">
                  <h3 className="font-serif text-xl text-ink">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
