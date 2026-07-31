import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Cpu, Network, ScanLine, Smartphone } from "lucide-react";

import ctProductImg from "@/assets/CT.png";
import ctAbdomenImg from "@/assets/CT_abdomen.png";
import ctPetImg from "@/assets/CT_pet.png";
import dashboardImg from "@/assets/hero-dashboard.jpg";
import lgpImg from "@/assets/my-lgp-health-liver-pancreas-card.jpg";
import mammographyImg from "@/assets/memmography.png";
import neuralBg from "@/assets/neural-bg.jpg";
import pipeline3d from "@/assets/medical-ai-pipeline-3d.png";
import productHero3d from "@/assets/medical-ai-product-3d.png";
import chestXrayImg from "@/assets/chest.png";
import mriScanImg from "@/assets/MRI_scan.png";
import sxProductImg from "@/assets/SX.png";
import ultrasoundProductImg from "@/assets/ultrasound-ai-product.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - Dectrocel" },
      {
        name: "description",
        content:
          "Dectrocel products for radiology AI, imaging workflows, PACS integration, and healthcare AI deployment.",
      },
      { property: "og:title", content: "Products - Dectrocel" },
      { property: "og:description", content: "AI products for clinical imaging teams." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const products = [
  {
    icon: ScanLine,
    name: "DecXpert MX",
    label: "AI-powered manual X-ray analysis",
    status: "Available now",
    description:
      "Desktop application where users can manually upload X-ray images for AI analysis and instant reporting.",
    image: chestXrayImg,
    features: [
      "Easy drag-and-drop upload",
      "Instant AI analysis",
      "Interactive reporting",
      "Manual review and editing",
      "Export reports in multiple formats",
    ],
  },
  {
    icon: Cpu,
    name: "DecXpert SX",
    label: "AI-powered X-ray suite with skeletal analysis",
    status: "Available now",
    description:
      "Advanced AI platform for automated detection of chest and skeletal conditions with real-time analysis and reporting.",
    image: sxProductImg,
    features: [
      "Provides MSK analysis",
      "Special X-ray support",
      "Chest X-ray reporting",
      "Detects 56+ chest conditions",
      "262 skeletal pathologies",
      "Head-to-toe skeletal analysis",
      "Real-time AI analysis and triage",
      "Explainable AI heatmaps",
      "Batch processing support",
      "Automated structured reporting",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert CT",
    label: "Advanced CT scan analysis",
    status: "Available now",
    description:
      "Desktop application for comprehensive CT scan analysis using advanced AI and machine learning algorithms.",
    image: ctProductImg,
    features: [
      "Provides head-to-toe CT analysis",
      "Multi-slice CT analysis",
      "AI-powered detection",
      "3D visualization support",
      "ML-based predictions",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert AI CT Abdomen",
    label: "Advanced abdominal CT analysis",
    status: "Available now",
    description:
      "Specialized AI for abdominal CT interpretation, organ segmentation, pathology detection, and structured reporting.",
    image: ctAbdomenImg,
    features: [
      "Multi-organ segmentation",
      "Automated pathology detection",
      "Liver analysis",
      "Kidney analysis",
      "Pancreas assessment",
      "Volumetric measurements",
      "Vascular mapping",
      "Comprehensive reporting",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert AI MRI",
    label: "Next-gen MRI analysis",
    status: "Available now",
    description:
      "Cutting-edge AI-powered MRI analysis platform for enhanced diagnostic accuracy and efficiency.",
    image: mriScanImg,
    features: [
      "Multi-sequence MRI analysis",
      "Advanced tissue characterization",
      "Automated lesion detection",
      "Quantitative imaging biomarkers",
      "Integrated 3D visualization",
    ],
  },
  {
    icon: Network,
    name: "DecXpert PACS Platform",
    label: "PACS integration and workflow automation",
    status: "Integration service",
    description:
      "Seamlessly integrate DecXpert AI into existing PACS, RIS, and hospital workflows without disrupting clinical operations.",
    image: dashboardImg,
    features: [
      "PACS integration",
      "RIS/HIS connectivity",
      "DICOM compatibility",
      "Automated study routing",
      "Worklist prioritization",
      "Across all modality and teleradiology",
      "Enterprise deployment support",
    ],
  },
  {
    icon: Network,
    name: "DecXpert API Platform",
    label: "AI API integration platform",
    status: "Developer platform",
    description:
      "Access DecXpert AI capabilities through secure REST APIs and integrate advanced diagnostic intelligence directly into your software products.",
    image: neuralBg,
    features: [
      "Secure API key access",
      "RESTful API endpoints",
      "X-Ray AI APIs",
      "CT analysis APIs",
      "Real-time inference",
      "Developer documentation",
      "SDK support",
      "Enterprise-grade security",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert AI Mammography",
    label: "Breast imaging AI",
    status: "Available now",
    description:
      "Mammography interpretation support for breast screening, lesion detection, density review, and structured reporting.",
    image: mammographyImg,
    features: [
      "Breast density assessment",
      "Mass and lesion detection",
      "Calcification pattern support",
      "Screening workflow triage",
      "Structured breast imaging reports",
    ],
  },
  {
    icon: Smartphone,
    name: "My LGP Health",
    label: "Chronic liver disease assessment",
    status: "Available now",
    description:
      "Mobile application for chronic liver disease assessment using Artificial Intelligence and Machine Learning algorithms to support early detection and clinical decision-making.",
    image: lgpImg,
    features: [
      "Multi-dimensional symptom index",
      "LDA and QDA classification",
      "Neural network-based analysis",
      "SVM-powered predictions",
      "Clinical population validated",
      "AI-assisted risk assessment",
      "Mobile-first healthcare experience",
    ],
  },
];

const upcomingProducts = [
  {
    name: "DecXpert AI PET CT",
    label: "Integrated PET-CT analysis",
    description:
      "Advanced fusion imaging analysis combining PET and CT for comprehensive oncological assessment.",
    image: ctPetImg,
    features: [
      "Automated SUV calculation",
      "Lesion detection and tracking",
      "Metabolic activity mapping",
      "Multi-timepoint comparison",
      "Oncology-focused reporting",
    ],
  },
  {
    name: "DecXpert AI Ultrasound",
    label: "Ultrasound imaging AI",
    description:
      "AI-assisted ultrasound workflow support for faster screening, measurements, and structured clinical reporting.",
    image: ultrasoundProductImg,
    features: [
      "Ultrasound study assistance",
      "Automated measurement support",
      "Screening workflow triage",
      "Structured ultrasound reporting",
      "Clinical review-ready outputs",
    ],
  },
];

function ProductsPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Products"
        title="Healthcare AI products built for clinical work."
        subtitle="A connected product suite for imaging teams, diagnostic centers, hospitals, and screening programs."
        image={productHero3d}
        cta="Book a demo"
      />

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-6">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`grid overflow-hidden border border-slate-200 bg-white md:grid-cols-2 ${
                index % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="min-h-[330px] overflow-hidden bg-[#eef5ff] md:min-h-[390px]">
                <img
                  src={product.image}
                  alt=""
                  aria-hidden
                  className="size-full object-cover opacity-92"
                />
              </div>
              <div className="flex min-h-[330px] flex-col justify-between p-8 md:min-h-[390px] md:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center bg-[#177fed] text-white">
                      <product.icon className="size-5" />
                    </span>
                    <span className="text-xs font-extrabold uppercase text-[#177fed]">
                      {product.label}
                    </span>
                    <span className="ml-auto bg-[#e9f3ff] px-3 py-1.5 text-xs font-extrabold uppercase text-[#061a63]">
                      {product.status}
                    </span>
                  </div>
                  <h2 className="mt-8 text-4xl font-extrabold leading-tight">{product.name}</h2>
                  <p className="mt-5 text-lg font-medium leading-8 text-[#52617f]">
                    {product.description}
                  </p>
                  <div className="mt-7 grid gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-bold">
                        <CheckCircle2 className="size-5 text-[#177fed]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 bg-[#061a63] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#177fed]"
                >
                  Book a demo <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f9ff] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-extrabold uppercase text-[#177fed]">Coming soon</p>
            <h2 className="mt-5 text-[38px] font-extrabold leading-[1.08] text-[#061a63] md:text-[58px]">
              Upcoming products in the Dectrocel pipeline.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#52617f]">
              The next wave of imaging AI products extends Dectrocel across PET-CT and ultrasound
              workflows.
            </p>
          </div>

          <div className="mt-14 h-[320px] overflow-hidden rounded-[5px] bg-white md:h-[430px]">
            <img
              src={pipeline3d}
              alt="3D medical AI pipeline with CT, MRI, PET-CT, and ultrasound panels"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>

          <div className="mt-14 grid gap-6">
            {upcomingProducts.map((product, index) => (
              <article
                key={product.name}
                className={`grid overflow-hidden border border-slate-200 bg-white md:grid-cols-2 ${
                  index % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[330px] overflow-hidden bg-[#ddecff] md:min-h-[390px]">
                  <img
                    src={product.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover opacity-92"
                  />
                  <div className="absolute bottom-6 right-6 h-16 w-16 bg-[#177fed]/80" />
                </div>
                <div className="flex min-h-[330px] flex-col justify-between p-8 md:min-h-[390px] md:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center bg-[#177fed] text-white">
                        <ScanLine className="size-5" />
                      </span>
                      <span className="text-xs font-extrabold uppercase text-[#177fed]">
                        {product.label}
                      </span>
                      <span className="ml-auto bg-[#177fed] px-3 py-1.5 text-xs font-extrabold uppercase text-white">
                        Upcoming
                      </span>
                    </div>
                    <h3 className="mt-8 text-4xl font-extrabold leading-tight text-[#061a63]">
                      {product.name}
                    </h3>
                    <p className="mt-5 text-lg font-medium leading-8 text-[#52617f]">
                      {product.description}
                    </p>
                    <div className="mt-7 grid gap-3">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm font-bold">
                          <CheckCircle2 className="size-5 text-[#177fed]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
