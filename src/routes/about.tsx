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
  component: About;
});

function About() {
  return null;
}
