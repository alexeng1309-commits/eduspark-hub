import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";
import pricingStudy from "../assets/pricing-study.jpg";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Study Materials — Notes, PPT & Solutions | EduHub" },
      {
        name: "description",
        content:
          "Download Class 12 syllabus PDFs, chapter notes, lecture PPT decks and step-by-step PPT solutions for Math, Physics and Chemistry.",
      },
      { property: "og:title", content: "EduHub Study Materials" },
      {
        property: "og:description",
        content:
          "Syllabus, revision notes, lecture PPTs and worked PPT solutions for Class 12 science subjects.",
      },
    ],
  }),
  component: Materials,
});

const materials = [
  {
    n: "01",
    title: "Subject Syllabus",
    copy: "Unit-wise NCERT & board syllabus breakdown for all three subjects",
    file: "PDF · 2.1 MB",
  },
  {
    n: "02",
    title: "Revision Notes",
    copy: "Chapter-wise handwritten-style notes with key formulas and derivations",
    file: "PDF · 8.4 MB",
  },
  {
    n: "03",
    title: "Lecture PPT",
    copy: "48 slide decks mirroring every classroom lesson, ready to present",
    file: "PPTX · 24 MB",
  },
  {
    n: "04",
    title: "PPT Solutions",
    copy: "Step-by-step solutions to every practice slide set, exam-format",
    file: "PDF · 5.7 MB",
  },
  {
    n: "05",
    title: "Previous Year Papers",
    copy: "Last 10 years of board papers with marking-scheme answers",
    file: "PDF · 11 MB",
  },
  {
    n: "06",
    title: "Formula Sheets",
    copy: "One-page formula sheets per chapter for last-week revision",
    file: "PDF · 1.6 MB",
  },
];

function Materials() {
  return (
    <>
      <PageHeader
        eyebrow="03 — Study materials"
        title="Everything you download, everything you keep."
        intro="All materials unlock the moment your enrollment is confirmed. Download once, revise on any device for a full academic year."
      />

      <section className="bg-forest-deep">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
          <div className="divide-y divide-sage/15 border-y border-sage/15">
            {materials.map((m) => (
              <div key={m.n} className="flex items-center justify-between gap-4 py-5">
                <div className="flex items-center gap-4">
                  <span className="w-8 font-mono text-sm text-gold">{m.n}</span>
                  <div>
                    <div className="font-serif text-xl text-paper">{m.title}</div>
                    <div className="text-sm text-sage/70">{m.copy}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden font-mono text-[11px] text-sage/60 sm:inline">
                    {m.file}
                  </span>
                  <Link to="/contact" className="btn-outline-sage px-3 py-2 text-xs">
                    Request
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
                How access works
              </p>
              <h2 className="max-w-[22ch] text-balance font-serif text-3xl text-ink md:text-4xl">
                Enroll, confirm, download.
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  "Call 6766476378 or email edu.hub@gmail.com to reserve a seat.",
                  "Pay the one-time ₹5,000 course fee and share the reference.",
                  "We confirm within a day and send your full material library.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-forest">{`0${i + 1}`}</span>
                    <span className="text-sm leading-relaxed text-ink/75">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-6">
              <img
                src={pricingStudy}
                alt="Study desk with laptop, notes and coffee"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/3] w-full rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
