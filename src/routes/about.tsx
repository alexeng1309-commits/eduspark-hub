import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";
import personAnanya from "../assets/person-ananya.jpg";
import personRahul from "../assets/person-rahul.jpg";
import personIbrahim from "../assets/person-ibrahim.jpg";
import heroStudy from "../assets/hero-study.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EduHub — Learning Built for Students & Professionals" },
      {
        name: "description",
        content:
          "EduHub is a Class 12 science learning library for students, corporate employees and working professionals, built on clear notes and worked solutions.",
      },
      { property: "og:title", content: "About EduHub" },
      {
        property: "og:description",
        content:
          "Why EduHub teaches Class 12 Math, Physics and Chemistry through structured notes, PPTs and worked solutions.",
      },
    ],
  }),
  component: About,
});

const testimonials = [
  {
    quote: "The PPT solutions took my physics score from 68 to 91. Clean and to the point.",
    name: "Ananya R.",
    role: "Class XII, Science",
    image: personAnanya,
  },
  {
    quote:
      "I work full-time. The notes let me revise calculus in 20-minute gaps. Worth every rupee.",
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

function About() {
  return (
    <>
      <PageHeader
        eyebrow="06 — About"
        title="Built by teachers who mark board papers."
        intro="EduHub started as a shared notes folder between three Class 12 teachers. Today it is one structured library used by school students, corporate employees returning to study, and working professionals filling gaps in their science fundamentals."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
                How we teach
              </p>
              <h2 className="max-w-[24ch] text-balance font-serif text-3xl text-ink md:text-4xl">
                Clear structure beats more content.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
                <p>
                  Every chapter follows the same shape: concept notes, a lecture PPT, then worked
                  solutions in board answer format. You always know where you are and what comes
                  next.
                </p>
                <p>
                  Nothing is padded. If a topic carries four marks in the exam, it gets four marks of
                  attention — not a forty-minute video.
                </p>
              </div>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  ["2018", "Founded"],
                  ["9,400+", "Learners"],
                  ["3", "Subjects"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-serif text-3xl text-ink">{value}</dt>
                    <dd className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="md:col-span-6">
              <img
                src={heroStudy}
                alt="Student working through Class 12 notes at a desk"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-forest">
            Who studies here
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
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/courses" className="btn-forest">
              Explore courses
            </Link>
            <Link to="/contact" className="btn-forest">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
