import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Code2, Network, Workflow } from "lucide-react";

import integrationHero from "@/assets/solutions-hero-generated.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/modes-of-integration")({
  head: () => ({
    meta: [
      { title: "Integration - Dectrocel" },
      {
        name: "description",
        content:
          "Flexible integration for deploying Dectrocel across PACS, RIS, APIs, teleradiology, and hospital imaging workflows.",
      },
    ],
    links: [{ rel: "canonical", href: "/modes-of-integration" }],
  }),
  component: ModesOfIntegrationPage,
});

const integrationModes = [
  {
    icon: Network,
    title: "DecXpert AI for PACS",
    text: "Seamlessly integrate DecXpert into existing PACS, RIS, and hospital workflows without disrupting clinical operations.",
    points: [
      "PACS integration",
      "RIS/HIS connectivity",
      "DICOM compatibility",
      "Automated study routing",
      "Worklist prioritization",
      "Enterprise deployment support",
    ],
  },
  {
    icon: Code2,
    title: "DecXpert API integration",
    text: "Access DecXpert capabilities through secure REST APIs and integrate diagnostic intelligence directly into software products.",
    points: [
      "Secure API key access",
      "RESTful API endpoints",
      "X-Ray and CT analysis APIs",
      "Real-time inference",
      "Developer documentation",
      "Enterprise-grade security",
    ],
  },
  {
    icon: Workflow,
    title: "Teleradiology Workflow",
    text: "Support remote reporting operations by combining AI-assisted triage, radiologist validation, and secure report delivery.",
    points: ["Remote reporting support", "Radiologist review flow", "Fast turnaround operations"],
  },
];

function ModesOfIntegrationPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Integration"
        title="Flexible integration for clinical imaging workflows."
        subtitle="Dectrocel can be deployed through PACS/RIS connections, secure APIs, and teleradiology operations."
        image={integrationHero}
        imageClassName="object-center"
        cta="Book a demo"
      />

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5">
          {integrationModes.map((mode) => (
            <article
              key={mode.title}
              className="group grid gap-6 border border-[#c8dff8] bg-white p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,127,237,0.12)] md:grid-cols-[72px_1fr] md:p-9"
            >
              <span className="grid size-12 place-items-center bg-[#177fed] text-white">
                <mode.icon className="size-6" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                  {mode.title}
                </h2>
                <p className="mt-4 max-w-4xl text-base font-medium leading-7 text-[#52617f]">{mode.text}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {mode.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm font-bold text-[#24365f]">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#177fed]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px] border border-[#c8dff8] bg-white p-8 text-center shadow-[0_18px_50px_rgba(23,127,237,0.10)] md:p-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#177fed]">
            Deployment planning
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
            Choose the integration that fits your clinical workflow.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#061a63] px-6 py-4 text-sm font-extrabold text-white transition-colors hover:bg-[#177fed]"
          >
            Request integration support <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
