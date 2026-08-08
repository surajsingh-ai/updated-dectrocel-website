import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Cpu, ScanLine, Smartphone } from "lucide-react";

import ctProductImg from "@/assets/CT.png";
import ctAbdomenImg from "@/assets/CT_abdomen.png";
import ctPetImg from "@/assets/CT_pet.png";
import lgpImg from "@/assets/my-lgp-health-liver-pancreas-card.jpg";
import mammographyImg from "@/assets/memmography.png";
import allModalityHeroImg from "@/assets/all-modality-products-hero.png";
import pipeline3d from "@/assets/medical-ai-pipeline-3d.png";
import mxProductImg from "@/assets/mx1.png";
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
    image: mxProductImg,
    imageClassName: "object-contain bg-[#061a63]",
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
      "3D volumetric analysis",
      "ML-based predictions",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert CT Abdomen",
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
    name: "DecXpert MRI",
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
      "3D volumetric analysis",
    ],
  },
  {
    icon: ScanLine,
    name: "DecXpert Mammography",
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

const modalityCoverage = [
  "MRI Brain",
  "MRI Spine",
  "MRI Whole Abdomen",
  "MRI Screening",
  "CT Face",
  "CT Body without Contrast",
  "Triple Phase CT",
  "CT - Angiography & Venography",
  "X-Ray Other - per additional view",
  "MRI Brain w/ Contrast",
  "MRI Body - Head-Neck, Upper/Lower Abd, Pelvis",
  "MRI Joints / Limbs/ Fistulogram",
  "MRA / MRV / MRS",
  "CT Head with Contrast",
  "CT Body - with Contrast",
  "CT Angio - PA",
  "CT - Urography",
  "Special X-ray(contrast media)",
  "MRI Epilepsy",
  "MRCP",
  "MRI Prostate / Breast / Pituitary",
  "CT Brain / PNS / Orbit",
  "HRCT Temporal Bone",
  "CT Thorax",
  "CT Angio - CA",
  "X-Ray Chest",
  "Mammography",
];

function ProductsPage() {
  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Products"
        title="Healthcare AI products built for clinical work."
        afterTitle={
          <div className="mx-auto max-w-5xl bg-[#f5f9ff] px-5 py-6 text-left sm:px-7 md:px-8">
            <div className="grid grid-cols-1 gap-x-14 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {modalityCoverage.map((modality) => (
                <div
                  key={modality}
                  className="flex items-start gap-3 text-[13px] font-extrabold uppercase leading-snug text-[#061a63] sm:text-sm md:text-[15px]"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#177fed] md:size-2" />
                  <span className="min-w-0 break-words">{modality}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-[#c8dff8] pt-5 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#177fed]">
                Head-to-toe modality coverage
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-base font-extrabold leading-6 text-[#061a63] sm:text-lg">
                One product ecosystem for radiology teams across the full body.
              </p>
            </div>
          </div>
        }
        subtitle="A connected product suite for imaging teams, diagnostic centers, hospitals, and screening programs."
        image={allModalityHeroImg}
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
                  className={`size-full opacity-92 ${product.imageClassName ?? "object-cover"}`}
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
