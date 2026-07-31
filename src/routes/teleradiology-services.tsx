import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  PencilLine,
  Send,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import chestImg from "@/assets/disease-chest.jpg";
import ctWorkflowImg from "@/assets/disease-ct.jpg";
import brainImg from "@/assets/disease-brain.jpg";
import pipelineImg from "@/assets/medical-ai-pipeline-3d.png";
import mriScanImg from "@/assets/MRI_scan.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/teleradiology-services")({
  head: () => ({
    meta: [
      { title: "Teleradiology Services - Dectrocel" },
      {
        name: "description",
        content:
          "Dectrocel teleradiology services combine radiology workflow support, AI triage, PACS connectivity, and reporting operations for hospitals and diagnostic networks.",
      },
      { property: "og:title", content: "Teleradiology Services - Dectrocel" },
      {
        property: "og:description",
        content: "AI-enabled teleradiology workflow services for scalable remote reporting.",
      },
    ],
    links: [{ rel: "canonical", href: "/teleradiology-services" }],
  }),
  component: TeleradiologyServicesPage,
});

const servicePillars = [
  {
    icon: Clock3,
    title: "Priority-driven reporting",
    text: "AI triage highlights time-sensitive studies so emergency, critical, and high-volume queues stay organized.",
  },
  {
    icon: Workflow,
    title: "PACS-ready operations",
    text: "DICOM-compatible workflows connect with existing PACS, RIS, and review environments without replacing clinical systems.",
  },
  {
    icon: FileCheck2,
    title: "Structured report support",
    text: "Radiologists can work with AI-assisted findings, measurements, and consistent report formats across modalities.",
  },
  {
    icon: ShieldCheck,
    title: "Secure care network",
    text: "Designed for healthcare teams that need controlled access, audit-friendly processes, and dependable uptime.",
  },
];

const workflowSteps = [
  "Study ingestion from hospitals, diagnostic centers, or connected imaging locations",
  "AI pre-screening for prioritization, quality checks, and suspected findings",
  "Remote radiologist review with structured reporting and escalation paths",
  "Report delivery back into the referring workflow with operational visibility",
];

const useCases = [
  "After-hours emergency coverage",
  "Multi-site diagnostic center reporting",
  "Second-opinion and sub-specialty review",
  "Screening program scale-up",
  "Backlog reduction for CT, MRI, X-ray, and mammography",
  "Radiologist workload balancing across regions",
];

const modalityImages = [
  { label: "Chest triage", src: chestImg },
  { label: "CT workflow", src: ctWorkflowImg },
  { label: "Brain review", src: brainImg },
];

const reportWorkflow = [
  {
    icon: Bot,
    title: "AI Generates the Report",
    description: "Our AI analyzes the medical images and creates an initial report within minutes.",
  },
  {
    icon: Send,
    title: "Report Sent to Radiologist",
    description:
      "The AI-generated report is securely sent to an experienced radiologist for review.",
  },
  {
    icon: UserRoundCheck,
    title: "Radiologist Reviews the Report",
    description:
      "The radiologist carefully checks the findings and verifies the report for clinical accuracy.",
  },
  {
    icon: PencilLine,
    title: "Expert Updates",
    description:
      "If needed, the radiologist edits, corrects, and adds important clinical observations.",
  },
  {
    icon: FileText,
    title: "Final Report Delivered",
    description:
      "After expert approval, the final validated report is securely delivered to the client.",
  },
];

const workflowSupport = [
  "Emergency and routine study reporting",
  "CT, MRI, X-ray, and screening workflows",
  "Secure report handoff for hospitals and diagnostic centers",
];

const aiAssistedBlocks = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description:
      "Our AI analyzes CT, MRI, and X-ray images and generates an initial report within minutes, helping reduce reporting time.",
  },
  {
    icon: UserRoundCheck,
    title: "Expert Radiologist Review",
    description:
      "The AI-generated report is securely sent to an experienced radiologist for a detailed clinical review and verification.",
  },
  {
    icon: FileCheck2,
    title: "Clinical Validation",
    description:
      "The radiologist reviews every finding, applies necessary corrections, and adds important clinical observations to ensure accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Each report goes through a final quality check to maintain high clinical standards and consistency.",
  },
  {
    icon: Send,
    title: "Secure Report Delivery",
    description:
      "The final approved report is securely delivered to hospitals, diagnostic centers, and healthcare providers.",
  },
];

const whyChoosePoints = [
  "AI-assisted faster reporting",
  "Expert radiologist validation",
  "High clinical accuracy",
  "Secure patient data handling",
  "24x7 reporting support",
  "Quick turnaround time",
  "Reliable and consistent reporting",
  "Scalable solution for hospitals and diagnostic centers",
];

function TeleradiologyServicesPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Teleradiology Services"
        title="Teleradiology workflows built for speed, quality, and scale."
        subtitle="Dectrocel provides teleradiology services for providers, hospitals, and diagnostic networks with AI-enabled triage, PACS connectivity, and reporting operations."
        image={pipelineImg}
        imageClassName="object-center"
        cta="Book a demo"
      />

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase text-[#177fed]">AI-Assisted Teleradiology</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#061a63] sm:text-[34px] md:text-[48px]">
              AI-Assisted Teleradiology
            </h2>
            <p className="mt-5 text-base font-semibold leading-7 text-[#52617f] md:text-lg md:leading-8">
              Delivering faster, accurate, and reliable radiology reports by combining Artificial
              Intelligence with expert radiologist review.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl bg-[#f5f9ff] p-6 text-center sm:p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-[#061a63]">About the Service</h3>
            <p className="mt-4 text-base font-medium leading-7 text-[#52617f] md:text-lg md:leading-8">
              Our AI-assisted teleradiology platform helps healthcare providers receive high-quality
              diagnostic reports with a fast turnaround time. AI performs the initial image analysis,
              while experienced radiologists carefully review, validate, and approve every report
              before it is delivered to the client.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {aiAssistedBlocks.map((block) => (
              <article
                key={block.title}
                className="border border-[#c8dff8] bg-white p-6 shadow-[0_18px_48px_rgba(6,26,99,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(6,26,99,0.13)]"
              >
                <div className="grid size-12 place-items-center bg-[#177fed] text-white">
                  <block.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-snug text-[#061a63]">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#52617f]">
                  {block.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <article className="bg-[#061a63] p-6 text-white sm:p-8 md:p-10">
              <h3 className="text-[28px] font-extrabold leading-tight md:text-3xl">
                Why Choose Our Teleradiology Service?
              </h3>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {whyChoosePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8bc4ff]" />
                    <span className="text-sm font-semibold leading-7 text-white/82">{point}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-12 bg-[#eef6ff] p-6 text-center sm:p-8 md:p-10">
            <h3 className="text-[28px] font-extrabold leading-tight text-[#061a63] sm:text-[32px] md:text-[44px]">
              Experience Smarter Teleradiology
            </h3>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-[#52617f] md:text-lg md:leading-8">
              Combine the speed of AI with the expertise of experienced radiologists to deliver
              accurate, reliable, and timely diagnostic reports for your healthcare organization.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex max-w-full items-center justify-center gap-3 bg-[#177fed] px-5 py-4 text-sm font-extrabold uppercase text-white transition-colors hover:bg-[#061a63] sm:px-6"
            >
              Request a Demo <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9ff] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#177fed]">Service model</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[34px] md:text-[48px]">
              Keep remote reporting moving without losing clinical control.
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-[#52617f] md:mt-6 md:text-lg md:leading-8">
              From study routing to report turnaround, Dectrocel helps imaging teams create
              reliable teleradiology operations around their existing clinical stack.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex max-w-full items-center justify-center gap-3 bg-[#177fed] px-5 py-3 text-sm font-extrabold uppercase text-white transition-colors hover:bg-[#061a63]"
            >
              Discuss your workflow <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {servicePillars.map((pillar) => (
              <article key={pillar.title} className="bg-white p-7 shadow-sm">
                <pillar.icon className="size-8 text-[#177fed]" />
                <h3 className="mt-6 text-2xl font-extrabold">{pillar.title}</h3>
                <p className="mt-3 text-base font-medium leading-7 text-[#52617f]">{pillar.text}</p>
              </article>
            ))}
            <div className="grid gap-3 md:col-span-2 md:grid-cols-3">
              {modalityImages.map((modality) => (
                <figure key={modality.label} className="relative h-36 overflow-hidden bg-slate-100">
                  <img src={modality.src} alt="" aria-hidden className="size-full object-cover" />
                  <figcaption className="absolute bottom-3 left-3 bg-white/88 px-3 py-1.5 text-xs font-extrabold uppercase text-[#061a63]">
                    {modality.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase text-[#177fed]">How it works</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#061a63] sm:text-[34px] md:text-[48px]">
              How Our Teleradiology Workflow Works
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-[#52617f] md:text-lg md:leading-8">
              A clean review path that keeps AI speed and radiologist expertise in the same
              diagnostic workflow.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {reportWorkflow.map((step, index) => (
                <article
                  key={step.title}
                  className="relative border border-[#b9d8ff] bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(6,26,99,0.12)] lg:min-h-[308px]"
                >
                  {index < reportWorkflow.length - 1 && (
                    <div className="absolute -right-5 top-10 z-10 hidden size-9 place-items-center bg-white text-[#177fed] lg:grid">
                      <ArrowRight className="size-5" />
                    </div>
                  )}
                  <div>
                    <div className="grid size-[46px] place-items-center bg-[#177fed] text-white">
                      <step.icon className="size-5" />
                    </div>
                    <div className="mt-1 text-xs font-extrabold uppercase text-[#177fed]">
                      Step {index + 1}
                    </div>
                    <div>
                      <h3 className="mt-3 text-[22px] font-extrabold leading-[1.18] text-[#061a63]">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-[15px] font-medium leading-7 text-[#344572]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflowSupport.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border border-[#c8dff8] bg-[#f5f9ff] p-5"
              >
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#177fed]" />
                <span className="text-sm font-extrabold leading-7 text-[#061a63]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl border-l-4 border-[#177fed] bg-[#f5f9ff] px-5 py-5 text-center text-base font-extrabold leading-7 text-[#061a63] md:px-6 md:text-lg md:leading-8">
            Combining AI speed with expert radiologist review to deliver fast, accurate, and
            reliable diagnostic reports.
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden bg-slate-100">
            <img
              src={mriScanImg}
              alt="MRI imaging used in remote radiology reporting"
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase text-[#177fed]">Connected workflow</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[34px] md:text-[48px]">
              One operating layer for distributed radiology teams.
            </h2>
            <div className="mt-8 grid gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex gap-4 border-t border-slate-200 pt-5">
                  <span className="grid size-9 shrink-0 place-items-center bg-[#061a63] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="text-base font-semibold leading-7 text-[#52617f] md:text-lg md:leading-8">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061a63] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#8bc4ff]">Where it fits</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[34px] md:text-[48px]">
              Coverage for everyday volume, urgent studies, and growth periods.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#8bc4ff]" />
                  <span className="text-base font-semibold leading-7 text-white/78">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden bg-white/8">
            <img
              src={ctWorkflowImg}
              alt="CT imaging used in teleradiology reporting"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-sm font-extrabold uppercase text-[#177fed]">
              <Globe2 className="size-5" />
              Teleradiology network
            </div>
            <h2 className="mt-4 max-w-3xl text-[28px] font-extrabold leading-tight sm:text-[32px] md:text-[44px]">
              Build a dependable remote reporting service around your clinical needs.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex max-w-full shrink-0 items-center justify-center gap-3 bg-[#177fed] px-5 py-4 text-sm font-extrabold uppercase text-white transition-colors hover:bg-[#061a63] sm:px-6"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
