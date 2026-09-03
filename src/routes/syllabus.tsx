import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "Class 12 Syllabus — Math, Physics, Chemistry | EduHub" },
      {
        name: "description",
        content:
          "Unit-wise Class 12 syllabus for Mathematics, Physics and Chemistry with chapter counts and board exam weightage.",
      },
      { property: "og:title", content: "Class 12 Syllabus — EduHub" },
      {
        property: "og:description",
        content:
          "Unit-wise Class 12 Math, Physics and Chemistry syllabus with marks weightage from EduHub.",
      },
    ],
  }),
  component: Syllabus,
});

const syllabus = [
  {
    subject: "Mathematics",
    total: "80 marks",
    units: [
      { name: "Relations and Functions", marks: "08" },
      { name: "Algebra — Matrices & Determinants", marks: "10" },
      { name: "Calculus — Continuity, AOD, Integrals", marks: "35" },
      { name: "Vectors and 3D Geometry", marks: "14" },
      { name: "Linear Programming", marks: "05" },
      { name: "Probability", marks: "08" },
    ],
  },
  {
    subject: "Physics",
    total: "70 marks",
    units: [
      { name: "Electrostatics & Current Electricity", marks: "16" },
      { name: "Magnetic Effects and Magnetism", marks: "17" },
      { name: "Electromagnetic Induction & AC", marks: "17" },
      { name: "Optics", marks: "18" },
      { name: "Dual Nature of Radiation and Matter", marks: "12" },
      { name: "Atoms, Nuclei & Electronic Devices", marks: "12" },
    ],
  },
  {
    subject: "Chemistry",
    total: "70 marks",
    units: [
      { name: "Solutions", marks: "07" },
      { name: "Electrochemistry & Chemical Kinetics", marks: "13" },
      { name: "d- and f-Block Elements", marks: "07" },
      { name: "Coordination Compounds", marks: "07" },
      { name: "Haloalkanes, Alcohols, Aldehydes, Acids", marks: "24" },
      { name: "Amines and Biomolecules", marks: "12" },
    ],
  },
];

function Syllabus() {
  return (
    <>
      <PageHeader
        eyebrow="02 — Syllabus"
        title="The full Class 12 syllabus, unit by unit."
        intro="Board-aligned unit breakdown with marks weightage so you always know what to study next and how much it is worth in the exam."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {syllabus.map((s) => (
              <div key={s.subject} className="rounded-[12px] bg-paper p-6 ring-1 ring-black/5">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-serif text-2xl text-ink">{s.subject}</h2>
                  <span className="font-mono text-[11px] text-forest">{s.total}</span>
                </div>
                <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                  {s.units.map((u) => (
                    <li key={u.name} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-sm text-ink/75">{u.name}</span>
                      <span className="font-mono text-[11px] text-ink/50">{u.marks}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-[11px] text-ink/50">
                  Practical / internal assessment counted separately.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/materials" className="btn-forest">
              See study materials
            </Link>
            <Link to="/pricing" className="btn-forest">
              Enroll · ₹5,000
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
