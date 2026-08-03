import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import heroDoctor from "@/assets/hero-indian-doctor-radiology.png";
import kgmuLogo from "@/assets/KGMU.png";
import ncgLogo from "@/assets/NCG.png";
import sgpgiLogo from "@/assets/SGPGI.png";
import tataLogo from "@/assets/Tata.png";
import yashodaLogo from "@/assets/yashoda.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company - Dectrocel" },
      {
        name: "description",
        content:
          "Dectrocel Healthcare and Research Pvt. Ltd is building healthcare AI products for radiology and clinical imaging teams.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  ["SS", "Saumya Shukla", "CEO, Dectrocel Healthcare and Research Pvt. Ltd"],
  ["AS", "Dr. Ankit Shukla", "Technical Director, Dectrocel Healthcare and Research Pvt. Ltd"],
  ["NM", "Nikhil Mishra", "CTO, Dectrocel Healthcare and Research Pvt. Ltd"],
];

const principles = [
  ["Clinician-led", "Built with radiologists at every step, from dataset curation to UI design."],
  ["Globally validated", "Models tested across continents, ethnicities, scanner vendors, and care settings."],
  ["Responsibly deployed", "Transparent performance reports, continuous monitoring, and human-in-the-loop workflows."],
];

const partners = [
  {
    name: "SGPGIMS Lucknow",
    logo: sgpgiLogo,
    highlights: [
      "Premier tertiary care and medical research institute in India",
      "Expertise in advanced diagnostics and patient care",
      "Supporting innovation in AI-assisted healthcare",
    ],
  },
  {
    name: "KGMU Lucknow",
    logo: kgmuLogo,
    highlights: [
      "One of India's leading medical universities and teaching hospitals",
      "Renowned for clinical excellence and research",
      "Enabling the adoption of next-generation medical AI technologies",
    ],
  },
  {
    name: "Yashoda Hospitals Hyderabad",
    logo: yashodaLogo,
    highlights: [
      "Multi-specialty healthcare network with advanced diagnostic facilities",
      "Committed to delivering high-quality patient care",
      "Leveraging AI-driven solutions for improved clinical workflows",
    ],
  },
  {
    name: "National Cancer Grid (NCG) India",
    logo: ncgLogo,
    highlights: [
      "Nationwide network of leading cancer centers and research institutions",
      "Dedicated to improving the quality, accessibility, and standards of cancer care across India",
      "Driving collaboration in cancer research, education, and clinical excellence",
    ],
  },
  {
    name: "Tata Memorial Hospital Mumbai",
    logo: tataLogo,
    highlights: [
      "India's premier comprehensive cancer center",
      "Internationally recognized for excellence in oncology care, research, and education",
      "Pioneering advancements in cancer diagnostics and treatment",
    ],
  },
];

const certificateHighlights = [
  "Successfully implemented and operational under TB Mukt Bharat Abhiyan - National Tuberculosis Elimination Programme (NTEP).",
  "Routinely used for AI-assisted chest X-ray analysis supporting detection and assessment of 19 pulmonary conditions.",
  "Integrated into the diagnostic workflow with reported ease of use, processing efficiency, image interpretation, and report generation.",
  "Recognized as an effective clinical decision-support tool for active TB and potential latent TB identification.",
];

function AboutPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Company"
        title="Making accurate diagnostics accessible everywhere."
        subtitle="Dectrocel Healthcare and Research Pvt. Ltd was founded by clinicians and engineers to bring trustworthy medical AI into every imaging workflow, from leading academic hospitals to rural screening programs."
        image={heroDoctor}
        imageClassName="object-[58%_18%] md:object-[56%_12%]"
      />

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-3">
          {principles.map(([title, text]) => (
            <article key={title} className="bg-[#f5f9ff] p-8">
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#52617f]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-4xl font-extrabold md:text-6xl">Technical team</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map(([initials, name, role]) => (
              <article key={name} className="bg-white p-8">
                <div className="grid size-16 place-items-center bg-[#177fed] text-2xl font-extrabold text-white">
                  {initials}
                </div>
                <h3 className="mt-8 text-2xl font-extrabold">{name}</h3>
                <p className="mt-2 text-base font-bold text-[#52617f]">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            Trusted by leading healthcare institutions.
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#52617f]">
            Collaborating with premier hospitals and medical institutions to advance AI-powered
            healthcare solutions and improve clinical outcomes.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="flex min-h-[330px] flex-col bg-white p-7 transition-shadow duration-200 hover:shadow-[0_18px_48px_rgba(6,26,99,0.12)]"
              >
                <div className="flex h-28 w-40 items-center justify-center border border-[#c8dff8] bg-[#f7fbff] p-4 shadow-[0_12px_30px_rgba(6,26,99,0.10)]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-32 object-contain opacity-100 contrast-125"
                  />
                </div>
                <h3 className="mt-8 text-2xl font-extrabold">{partner.name}</h3>
                <div className="mt-5 grid gap-3">
                  {partner.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm font-medium leading-6 text-[#52617f]">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#177fed]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-10 bg-[#061a63] p-7 text-white shadow-[0_24px_70px_rgba(6,26,99,0.18)] sm:p-9 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#72b7ff]">Implementation Certificate</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Certified successful implementation in public health workflow.
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-white/70">
              The Office of the Chief Medical Officer, Bilaspur, District Bilaspur (HP)
              certified that DecXpert AI Software, developed by Dectrocel Healthcare and Research
              Pvt. Ltd, has been successfully implemented and is currently operational.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="bg-white/8 p-5">
                <div className="text-xs font-extrabold uppercase text-[#72b7ff]">Issued by</div>
                <div className="mt-2 font-bold">Chief Medical Officer, Bilaspur</div>
              </div>
              <div className="bg-white/8 p-5">
                <div className="text-xs font-extrabold uppercase text-[#72b7ff]">Date</div>
                <div className="mt-2 font-bold">24 Apr 2026</div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {certificateHighlights.map((item) => (
              <div key={item} className="flex gap-4 bg-white/8 p-5 font-medium leading-7">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#177fed]" />
                <span>{item}</span>
              </div>
            ))}
            <p className="text-sm font-medium leading-6 text-white/58">
              Certificate reference: HFW-BLP/NTEP (DTC) 2025-7850.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
