import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Globe2, Hospital, Stethoscope } from "lucide-react";

import heroDoctor from "@/assets/hero-indian-doctor-radiology.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions - Dectrocel ai" },
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
  },
  {
    icon: Building2,
    title: "Diagnostic Centers",
    text: "Increase reporting speed and throughput with sub-second AI inference integrated directly into your PACS.",
  },
  {
    icon: Globe2,
    title: "Teleradiology Providers",
    text: "Scale operations across regions with AI triage that surfaces critical cases first and balances radiologist workload.",
  },
  {
    icon: Stethoscope,
    title: "Government Screening",
    text: "Enable population-scale disease detection programs with reliable, validated AI for tuberculosis, lung cancer, and more.",
  },
];

function SolutionsPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Solutions"
        title="AI for every healthcare setting."
        subtitle="Whether you operate a single clinic or a national screening program, Dectrocel deploys into your workflow."
        image={heroDoctor}
        imageClassName="object-[58%_18%] md:object-[56%_12%]"
        cta="Get started"
      />

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="bg-white p-8 md:p-10">
              <solution.icon className="size-8 text-[#177fed]" />
              <h2 className="mt-8 text-3xl font-extrabold">{solution.title}</h2>
              <p className="mt-4 text-lg font-medium leading-8 text-[#52617f]">{solution.text}</p>
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
    </main>
  );
}
