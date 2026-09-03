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
  component: Syllabus;
});

function Syllabus() {
  return null;
}
