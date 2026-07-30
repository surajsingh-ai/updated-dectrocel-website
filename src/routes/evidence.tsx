import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpenCheck, Building2, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import heroDoctor from "@/assets/hero-indian-doctor-radiology.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

const publicationUrl = "https://www.nature.com/articles/s41598-024-71346-x";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence - Dectrocel ai" },
      {
        name: "description",
        content:
          "Clinical evidence, regulatory alignment, and research credibility behind Dectrocel ai products.",
      },
    ],
    links: [{ rel: "canonical", href: "/evidence" }],
  }),
  component: EvidencePage,
});

const evidence = [
  {
    icon: Building2,
    label: "CDSCO",
    title: "CDSCO Aligned",
    text: "Designed in accordance with healthcare technology and medical device regulatory requirements in India.",
  },
  {
    icon: ShieldCheck,
    label: "HIPAA",
    title: "HIPAA Compliant",
    text: "Built with secure healthcare data handling practices to support patient privacy and information security.",
  },
  {
    icon: GraduationCap,
    label: "Academic Research",
    title: "Research Driven",
    text: "Developed using evidence-based AI methodologies, machine learning research, and clinical validation studies.",
  },
  {
    icon: BookOpenCheck,
    label: "Nature Scientific Reports",
    title: "Published Research",
    text: "Research associated with DecXpert's AI and healthcare innovations has been published in Nature Scientific Reports.",
    href: publicationUrl,
  },
];

const trustSignals = [
  "Research-Based AI Models",
  "Privacy & Security Focused",
  "Clinical Workflow Ready",
  "Enterprise Deployment Support",
];

function EvidencePage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Evidence"
        title="Built on clinical evidence and regulatory standards."
        subtitle="DecXpert AI solutions are developed with a strong focus on scientific research, regulatory compliance, data privacy, and clinical validation."
        image={heroDoctor}
        imageClassName="object-[58%_18%] md:object-[56%_12%]"
      />

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-px overflow-hidden bg-slate-200 md:grid-cols-2">
          {evidence.map((item) => {
            const content = (
              <article className="min-h-[320px] bg-[#f5f9ff] p-8 md:p-10">
                <item.icon className="size-9 text-[#177fed]" />
                <div className="mt-10 text-xs font-extrabold uppercase text-[#177fed]">{item.label}</div>
                <h2 className="mt-3 text-3xl font-extrabold">{item.title}</h2>
                <p className="mt-5 text-lg font-medium leading-8 text-[#52617f]">{item.text}</p>
                {item.href && (
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[#061a63]">
                    Read publication <ArrowUpRight className="size-4" />
                  </span>
                )}
              </article>
            );

            return item.href ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.title}>{content}</div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 grid max-w-[1240px] gap-4 md:grid-cols-4">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-3 bg-[#f5f9ff] p-5 text-sm font-extrabold">
              <CheckCircle2 className="size-5 shrink-0 text-[#177fed]" />
              {signal}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
