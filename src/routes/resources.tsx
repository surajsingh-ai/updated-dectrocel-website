import { createFileRoute } from "@tanstack/react-router";
import { FileText, GraduationCap, Newspaper, Video } from "lucide-react";
import resourcesHero from "@/assets/resources-hero-generated.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources - Dectrocel" },
      {
        name: "description",
        content:
          "Whitepapers, customer stories, webinars, and clinical guides on deploying medical imaging AI in real-world workflows.",
      },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const resources = [
  {
    icon: FileText,
    title: "Whitepapers",
    text: "Deep dives into AI model design, validation methodology, and deployment.",
  },
  {
    icon: Newspaper,
    title: "Customer Stories",
    text: "How hospitals and diagnostic networks operationalize Dectrocel at scale.",
  },
  {
    icon: Video,
    title: "Webinars",
    text: "On-demand sessions with radiologists, CIOs, and our clinical team.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Guides",
    text: "Playbooks for integrating AI triage into chest, CT, and MSK workflows.",
  },
];

function ResourcesPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Resources"
        title="Guidance for healthcare AI teams."
        subtitle="Practical research, customer stories, and clinical playbooks for radiologists, administrators, and IT leaders deploying medical imaging AI."
        image={resourcesHero}
        imageClassName="object-center"
      />

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-4">
          {resources.map((resource) => (
            <article key={resource.title} className="min-h-[280px] bg-white p-7">
              <resource.icon className="size-8 text-[#177fed]" />
              <h2 className="mt-8 text-2xl font-extrabold">{resource.title}</h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#52617f]">
                {resource.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
