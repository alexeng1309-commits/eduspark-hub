import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EduHub — Call 6766476378 or Email Us" },
      {
        name: "description",
        content:
          "Contact EduHub about Class 12 course enrollment, materials or group access. Phone 6766476378, email edu.hub@gmail.com.",
      },
      { property: "og:title", content: "Contact EduHub" },
      {
        property: "og:description",
        content:
          "Reach EduHub on 6766476378 or edu.hub@gmail.com for enrollment and study material access.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="05 — Contact"
        title="Questions before you enroll?"
        intro="Call or write to us and we will confirm your syllabus access within a day. We reply to every student, employee and working professional."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="max-w-[20ch] text-balance font-serif text-3xl text-ink">
                Direct lines, no ticket queues.
              </h2>
              <div className="mt-8 grid gap-4">
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
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                Mon–Sat · 9:00–20:00 IST
              </p>
            </div>

            <div className="md:col-span-7">
              <form
                className="rounded-[12px] bg-paper p-6 ring-1 ring-black/5 md:p-8"
                action="mailto:edu.hub@gmail.com"
                method="post"
                encType="text/plain"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-forest">
                  Enrollment enquiry
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-ink/70">
                    Full name
                    <input
                      name="name"
                      required
                      className="rounded-[8px] bg-paper px-3 py-2.5 text-ink ring-1 ring-ink/15 outline-none focus:ring-forest"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-ink/70">
                    Phone
                    <input
                      name="phone"
                      className="rounded-[8px] bg-paper px-3 py-2.5 text-ink ring-1 ring-ink/15 outline-none focus:ring-forest"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-ink/70 sm:col-span-2">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-[8px] bg-paper px-3 py-2.5 text-ink ring-1 ring-ink/15 outline-none focus:ring-forest"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-ink/70 sm:col-span-2">
                    I am a
                    <select
                      name="learner"
                      className="rounded-[8px] bg-paper px-3 py-2.5 text-ink ring-1 ring-ink/15 outline-none focus:ring-forest"
                    >
                      <option>Class 12 student</option>
                      <option>Working professional</option>
                      <option>Corporate employee</option>
                      <option>Parent / guardian</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-ink/70 sm:col-span-2">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      className="rounded-[8px] bg-paper px-3 py-2.5 text-ink ring-1 ring-ink/15 outline-none focus:ring-forest"
                    />
                  </label>
                </div>
                <button type="submit" className="btn-gold mt-6">
                  Send enquiry
                </button>
                <p className="mt-3 font-mono text-[11px] text-ink/50">
                  Prefer to talk? Call 6766476378 for an instant answer.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
