import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";
import subjectMath from "../assets/subject-math.jpg";
import subjectPhysics from "../assets/subject-physics.jpg";
import subjectChemistry from "../assets/subject-chemistry.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Class 12 Math, Physics & Chemistry | EduHub" },
      {
        name: "description",
        content:
          "Three Class 12 courses at EduHub: Mathematics, Physics and Chemistry, each with syllabus, notes, lecture PPTs and worked solutions.",
      },
      { property: "og:title", content: "EduHub Courses — Class 12 Science" },
      {
        property: "og:description",
        content:
          "Mathematics, Physics and Chemistry courses with notes, PPTs and PPT solutions for Class 12.",
      },
    ],
  }),
  component: Courses,
});

const courses = [
  {
    code: "MATH",
    name: "Mathematics",
    image: subjectMath,
    copy: "Calculus, vectors, probability and 3D geometry — full NCERT coverage with solved papers.",
    meta: "42 chapters · 18 PPT",
    units: [
      "Relations, functions & inverse trigonometry",
      "Matrices and determinants",
      "Continuity, differentiability & applications",
      "Integrals and differential equations",
      "Vectors, 3D geometry, linear programming",
      "Probability and Bayes' theorem",
    ],
  },
  {
    code: "PHY",
    name: "Physics",
    image: subjectPhysics,
    copy: "Mechanics, optics, electromagnetism and modern physics with numeric-heavy practice.",
    meta: "36 chapters · 16 PPT",
    units: [
      "Electrostatics and current electricity",
      "Magnetic effects & magnetism",
      "Electromagnetic induction and AC",
      "Optics: ray and wave",
      "Dual nature of matter and radiation",
      "Atoms, nuclei and semiconductor devices",
    ],
  },
  {
    code: "CHEM",
    name: "Chemistry",
    image: subjectChemistry,
    copy: "Organic, inorganic and physical chemistry with reaction maps and named reactions.",
    meta: "30 chapters · 14 PPT",
    units: [
      "Solutions and electrochemistry",
      "Chemical kinetics and surface chemistry",
      "d- and f-block elements",
      "Coordination compounds",
      "Haloalkanes, alcohols, aldehydes and acids",
      "Amines, biomolecules and polymers",
    ],
  },
];

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="01 — Courses"
        title="Three courses, one board standard."
        intro="Each course covers the complete Class 12 syllabus with chapter notes, lecture PPTs and step-by-step PPT solutions. Study at school pace or at professional pace — the library is the same."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] space-y-8 px-5 py-20 sm:px-8">
          {courses.map((c) => (
            <article
              key={c.code}
              className="grid gap-8 rounded-[12px] bg-paper p-6 ring-1 ring-black/5 md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-5">
                <img
                  src={c.image}
                  alt={`${c.name} course material`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full rounded-[10px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="md:col-span-7">
                <div className="font-mono text-xs text-forest">{c.code}</div>
                <h2 className="mt-3 font-serif text-3xl text-ink">{c.name}</h2>
                <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-ink/60">{c.copy}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {c.units.map((u) => (
                    <li key={u} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {u}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-[11px] text-forest">{c.meta}</span>
                  <Link to="/pricing" className="btn-forest">
                    Enroll · ₹5,000
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
