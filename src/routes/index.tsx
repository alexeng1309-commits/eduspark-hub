import { createFileRoute, Link } from "@tanstack/react-router";

import heroStudy from "../assets/hero-study.jpg";
import subjectMath from "../assets/subject-math.jpg";
import subjectPhysics from "../assets/subject-physics.jpg";
import subjectChemistry from "../assets/subject-chemistry.jpg";
import personAnanya from "../assets/person-ananya.jpg";
import personRahul from "../assets/person-rahul.jpg";
import personIbrahim from "../assets/person-ibrahim.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduHub — Class 12 Math, Physics & Chemistry Study Library" },
      {
        name: "description",
        content:
          "Class 12 syllabus, notes, lecture PPTs and worked PPT solutions for Mathematics, Physics and Chemistry. One course, ₹5,000. Call 6766476378.",
      },
      { property: "og:title", content: "EduHub — Class 12 Study Library" },
      {
        property: "og:description",
        content:
          "Syllabus, notes, PPTs and PPT solutions for Class 12 Math, Physics and Chemistry — built for students and working professionals.",
      },
    ],
  }),
  component: Home,
});

const subjects = [
  {
    code: "MATH",
    name: "Mathematics",
    image: subjectMath,
    copy: "Calculus, vectors, probability and 3D geometry — full NCERT coverage with solved papers.",
    meta: "42 chapters · 18 PPT",
  },
  {
    code: "PHY",
    name: "Physics",
    image: subjectPhysics,
    copy: "Mechanics, optics, electromagnetism and modern physics with numeric-heavy practice.",
    meta: "36 chapters · 16 PPT",
  },
  {
    code: "CHEM",
    name: "Chemistry",
    image: subjectChemistry,
    copy: "Organic, inorganic and physical chemistry with reaction maps and named reactions.",
    meta: "30 chapters · 14 PPT",
  },
];

const materials = [
  {
    n: "01",
    title: "Subject Syllabus",
    copy: "Unit-wise NCERT & board syllabus breakdown",
    file: "PDF · 2.1 MB",
  },
  {
    n: "02",
    title: "Revision Notes",
    copy: "Chapter-wise handwritten-style notes with key formulas",
    file: "PDF · 8.4 MB",
  },
  {
    n: "03",
    title: "Lecture PPT",
    copy: "48 slide decks mirroring every classroom lesson",
    file: "PPTX · 24 MB",
  },
  {
    n: "04",
    title: "PPT Solutions",
    copy: "Step-by-step solutions to every practice slide set",
    file: "PDF · 5.7 MB",
  },
];

const testimonials = [
  {
    quote: "The PPT solutions took my physics score from 68 to 91. Clean and to the point.",
    name: "Ananya R.",
    role: "Class XII, Science",
    image: personAnanya,
  },
  {
    quote: "I work full-time. The notes let me revise calculus in 20-minute gaps. Worth every rupee.",
    name: "Rahul M.",
    role: "Working professional",
    image: personRahul,
  },
  {
    quote: "The organic chemistry reaction maps made revision feel possible the night before boards.",
    name: "Ibrahim K.",
    role: "Class XII, Science",
    image: personIbrahim,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-gold">
                Physics · Chemistry · Mathematics
              </p>
              <h1 className="max-w-[18ch] text-balance font-serif text-4xl font-medium leading-tight text-paper sm:text-5xl md:text-6xl">
                Master the boards, not the noise.
              </h1>
              <p className="mt-6 max-w-[44ch] text-pretty text-base leading-relaxed text-sage">
                Class 12 syllabus, hand-checked notes, lecture PPTs and worked solutions — one
                structured library built for students and professionals preparing for the same exam.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/pricing" className="btn-gold">
                  Enroll for ₹5,000
                </Link>
                <Link to="/materials" className="btn-outline-sage">
                  Browse materials
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["120+", "Notes"],
                  ["48", "PPT decks"],
                  ["3", "Subjects"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-serif text-3xl text-paper">{value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={heroStudy}
                alt="Student revising Class 12 physics equations under a desk lamp"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
                01 — Curriculum
              </p>
              <h2 className="max-w-[24ch] text-balance font-serif text-3xl text-ink md:text-4xl">
                Three subjects, one standard.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {subjects.map((s) => (
              <div key={s.code} className="rounded-[12px] bg-paper p-6 ring-1 ring-black/5">
                <div className="mb-4 font-mono text-xs text-forest">{s.code}</div>
                <img
                  src={s.image}
                  alt={`${s.name} study material`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="mb-5 aspect-[4/3] w-full rounded-[10px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="font-serif text-2xl text-ink">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.copy}</p>
                <div className="mt-4 font-mono text-[11px] text-forest">{s.meta}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/courses" className="btn-forest">
              See all courses
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-forest-deep">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-gold">
            02 — Study materials
          </p>
          <h2 className="max-w-[22ch] text-balance font-serif text-3xl text-paper md:text-4xl">
            Everything you download, everything you keep.
          </h2>
          <div className="mt-10 divide-y divide-sage/15 border-y border-sage/15">
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
                  <Link to="/materials" className="btn-outline-sage px-3 py-2 text-xs">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
            03 — One price
          </p>
          <h2 className="mb-10 max-w-[24ch] text-balance font-serif text-3xl text-ink md:text-4xl">
            Full access, no add-ons.
          </h2>
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
                  "120+ chapter notes, updated",
                  "48 lecture PPT decks",
                  "Complete PPT solutions",
                  "12-month access, all devices",
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
            </div>
            <div className="lg:col-span-5">
              <img
                src={require0}
                alt=""
                aria-hidden
                className="hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
            04 — Outcomes
          </p>
          <h2 className="mb-10 max-w-[24ch] text-balance font-serif text-3xl text-ink md:text-4xl">
            What learners say.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-[12px] bg-paper p-6 ring-1 ring-black/5">
                <blockquote className="font-serif text-xl leading-snug text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-10 shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/5"
                  />
                  <div>
                    <div className="text-sm font-medium text-ink">{t.name}</div>
                    <div className="font-mono text-[11px] text-ink/50">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-forest-deep">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-gold">
                05 — Contact
              </p>
              <h2 className="max-w-[20ch] text-balance font-serif text-3xl text-paper md:text-4xl">
                Questions before you enroll?
              </h2>
              <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-sage">
                Call or write to us and we will confirm your syllabus access within a day. We reply
                to every student and professional.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="grid gap-4">
                <a
                  href="tel:6766476378"
                  className="flex items-center justify-between gap-4 rounded-[10px] bg-forest p-5 ring-1 ring-forest-deep/40"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
                      Phone
                    </div>
                    <div className="font-serif text-xl text-paper">6766476378</div>
                  </div>
                  <span className="btn-outline-sage px-3 py-2 text-xs">Call</span>
                </a>
                <a
                  href="mailto:edu.hub@gmail.com"
                  className="flex items-center justify-between gap-4 rounded-[10px] bg-forest p-5 ring-1 ring-forest-deep/40"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
                      Email
                    </div>
                    <div className="font-serif text-xl text-paper">edu.hub@gmail.com</div>
                  </div>
                  <span className="btn-outline-sage px-3 py-2 text-xs">Write</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
