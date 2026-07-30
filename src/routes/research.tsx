import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/hero-dashboard.jpg";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research - Dectrocel ai" },
      {
        name: "description",
        content:
          "Peer-reviewed research, multi-site clinical validation, and regulatory readiness for Dectrocel.",
      },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

const stats = [
  ["40M+", "medical images processed"],
  ["50+", "healthcare partners"],
  ["99.9%", "platform uptime"],
  ["30s", "avg AI result time"],
  ["95%+", "detection accuracy"],
  ["10+", "disease workflows"],
  ["1M+", "images processed"],
  ["2s", "seconds-level analysis"],
];

const timeline = [
  ["2022", "Clinical validation", "Multi-site validation programs across hospital partners."],
  ["2023", "Research publications", "Peer-reviewed work and clinical evaluation programs."],
  ["2024", "AI benchmarks", "Performance benchmarking across imaging workflows and modalities."],
  ["2025", "Deployment readiness", "Enterprise rollout patterns for secure healthcare environments."],
];

function ResearchPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Research"
        title="Evidence-based, clinically validated progress."
        subtitle="Research and validation are part of the product lifecycle, from model development to post-deployment monitoring."
        image={dashboardImg}
      />

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-px overflow-hidden bg-slate-200 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[#f5f9ff] p-8">
              <div className="text-5xl font-extrabold">{value}</div>
              <div className="mt-3 text-sm font-extrabold uppercase text-[#52617f]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#061a63] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            A clear path from research to deployment.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden bg-white/18 md:grid-cols-4">
            {timeline.map(([year, title, text]) => (
              <article key={year} className="min-h-[260px] bg-[#061a63] p-7">
                <div className="text-sm font-extrabold uppercase text-[#177fed]">{year}</div>
                <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 font-medium leading-7 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
