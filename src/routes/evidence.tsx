import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpenCheck, Building2, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import evidenceHero from "@/assets/medical-ai-hero-3d.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

const publicationUrl = "https://www.nature.com/articles/s41598-024-71346-x";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence - Dectrocel" },
      {
        name: "description",
        content:
          "Clinical evidence, regulatory alignment, and research credibility behind Dectrocel products.",
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
        image={evidenceHero}
        imageClassName="object-center"
      />

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2">
          {evidence.map((item) => {
            const content = (
              <article className="group h-full border border-[#c8dff8] bg-[#f7fbff] p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,127,237,0.12)] sm:p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center bg-white text-[#177fed] shadow-sm ring-1 ring-[#c8dff8] transition-colors duration-200 group-hover:bg-[#177fed] group-hover:text-white">
                    <item.icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#177fed]">
                      {item.label}
                    </div>
                    <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#061a63] sm:text-3xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-6 max-w-[56ch] text-base font-medium leading-7 text-[#52617f]">{item.text}</p>
                {item.href && (
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[#061a63] transition-colors duration-200 group-hover:text-[#177fed]">
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
