import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";

import solutionsHero from "@/assets/solutions-hero-generated.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions - Dectrocel" },
      {
        name: "description",
        content:
          "Dectrocel solutions for hospitals, diagnostic centers, teleradiology providers, and government screening programs.",
      },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    icon: Hospital,
    title: "Hospitals",
    text: "Improve diagnostic efficiency across departments with AI-augmented worklists, prioritization, and reporting acceleration.",
    points: ["Emergency case prioritization", "Department-wide reporting support", "Easy PACS and RIS alignment"],
  },
  {
    icon: Building2,
    title: "Diagnostic Centers",
    text: "Increase reporting speed and throughput with sub-second AI inference integrated directly into your PACS.",
    points: ["Higher reporting throughput", "Consistent first-pass image review", "Scalable support for busy centers"],
  },
  {
    icon: Globe2,
    title: "Teleradiology Providers",
    text: "Scale operations across regions with AI triage that surfaces critical cases first and balances radiologist workload.",
    points: ["AI-assisted preliminary reporting", "Radiologist validation workflow", "Fast turnaround for remote clients"],
  },
  {
    icon: Stethoscope,
    title: "Government Screening",
    text: "Enable population-scale disease detection programs with reliable, validated AI for tuberculosis, lung cancer, and more.",
    points: ["Large-volume screening programs", "Early detection support", "Standardized reporting across sites"],
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Integration",
    text: "Dectrocel fits into existing clinical systems so teams can use AI insights without disrupting daily reporting operations.",
  },
  {
    icon: Clock3,
    title: "Faster Turnaround",
    text: "AI helps surface urgent studies, reduce manual review time, and support faster decision-making for care teams.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Operations",
    text: "Designed for healthcare environments where patient data protection, controlled access, and reliable delivery matter.",
  },
  {
    icon: FileCheck2,
    title: "Validated Reporting",
    text: "Reports can be reviewed, corrected, and approved by qualified clinicians before delivery to the requesting provider.",
  },
];

function SolutionsPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Solutions"
        title="AI for every healthcare setting."
        subtitle="Whether you operate a single clinic or a national screening program, Dectrocel deploys into your workflow."
        image={solutionsHero}
        imageClassName="object-center"
        cta="Get started"
      />

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="bg-white p-8 md:p-10">
              <solution.icon className="size-8 text-[#177fed]" />
              <h2 className="mt-8 text-3xl font-extrabold">{solution.title}</h2>
              <p className="mt-4 text-lg font-medium leading-8 text-[#52617f]">{solution.text}</p>
              <div className="mt-6 space-y-3">
                {solution.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm font-bold text-[#24365f]">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#177fed]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Link
                to={solution.title === "Teleradiology Providers" ? "/teleradiology-services" : "/contact"}
                className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[#061a63] hover:text-[#177fed]"
              >
                {solution.title === "Teleradiology Providers" ? "Explore service" : "Talk to sales"}{" "}
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#177fed]">Built for clinical scale</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Practical AI support from image intake to final report.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#52617f]">
              Our solutions are created for real healthcare workflows, helping providers improve speed, accuracy, and
              consistency while keeping clinical experts in control.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="border border-[#c9ddfb] bg-[#f8fbff] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#177fed] hover:bg-white"
              >
                <capability.icon className="size-8 text-[#177fed]" />
                <h3 className="mt-6 text-2xl font-extrabold">{capability.title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#52617f]">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
