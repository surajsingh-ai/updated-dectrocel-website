import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

import aiimsLogo from "@/assets/aiims.png";
import cdscoLogo from "@/assets/CDSCO.png";
import chandniHospitalLogo from "@/assets/chandni-hospital.png";
import chestImg from "@/assets/chest.png";
import ctAbdomenImg from "@/assets/CT_abdomen.png";
import fortuneHealthcareLogo from "@/assets/fortune-healthcare.png";
import govindHospitalLogo from "@/assets/govind-hospital.png";
import gsvmMedicalCollegeLogo from "@/assets/gsvm-medical-college.png";
import heroDoctor from "@/assets/hero-indian-doctor-radiology.png";
import hipaaLogo from "@/assets/HIPAA.png";
import kgmuLogo from "@/assets/KGMU.png";
import kmcLogo from "@/assets/kmc.png";
import madhurajHospitalLogo from "@/assets/madhuraj-hospital.png";
import mammographyImg from "@/assets/memmography.png";
import mriScanImg from "@/assets/MRI_scan.png";
import pgimerLogo from "@/assets/pgimer.png";
import ramaMedicalLogo from "@/assets/rama-medical.png";
import regencyHospitalLogo from "@/assets/regency-hospital.png";
import scopeLogo from "@/assets/scope.png";
import sgpgiLogo from "@/assets/SGPGI.png";
import tataLogo from "@/assets/Tata.png";
import wellsunMedicityLogo from "@/assets/wellsun-medicity.png";
import yashodaLogo from "@/assets/yashoda.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dectrocel - Healthcare AI" },
      {
        name: "description",
        content:
          "Dectrocel builds AI-powered radiology products for healthcare providers and clinical networks.",
      },
      { property: "og:title", content: "Dectrocel - Healthcare AI" },
      {
        property: "og:description",
        content: "Reimagining the future of healthcare with AI.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Hero() {
  const modalities = [
    { label: "CT Abdomen", src: ctAbdomenImg },
    { label: "Brain MRI", src: mriScanImg },
    { label: "Chest X-Ray", src: chestImg },
    { label: "Mammography", src: mammographyImg },
  ];

  return (
    <section className="bg-white px-4 pb-14 pt-20 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative h-[430px] overflow-hidden rounded-[5px] bg-slate-200 shadow-sm sm:h-[460px] md:h-[600px]">
          <img
            src={heroDoctor}
            alt="Indian doctor beside radiology monitors using healthcare AI"
            className="size-full object-cover object-[58%_18%] md:object-[56%_12%]"
          />
          <div className="absolute inset-0 bg-slate-900/34" />
          <div className="absolute left-[5.6%] top-[46%] hidden h-28 w-28 -translate-y-1/2 bg-[#1d7fe8]/20 md:block" />
          <div className="absolute right-[12%] top-[58%] hidden h-20 w-20 bg-[#147eea]/82 md:block" />
          <div className="absolute bottom-[15%] right-0 hidden h-14 w-[20%] bg-[#87b9e7]/34 md:block" />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-5 pb-7 pt-8 text-center sm:justify-center sm:pb-8 md:px-8">
            <h1 className="max-w-[860px] text-[28px] font-extrabold leading-[1.12] text-white drop-shadow-md min-[390px]:text-[30px] sm:text-[40px] md:text-[66px]">
              Reimagining the future of healthcare with AI
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] font-semibold leading-6 text-white/90 drop-shadow sm:mt-4 sm:text-base sm:leading-7 md:mt-5 md:text-lg md:leading-8">
              AI support for CT thorax and abdomen, MRI brain, skeletal imaging, mammography,
              PET-CT, X-ray workflows, and clinical decision support.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 bg-white/42 px-4 py-2.5 text-sm font-extrabold text-white backdrop-blur-[2px] transition-colors hover:bg-white/55 sm:mt-6 sm:py-3 sm:text-base md:mt-8 md:px-5 md:text-xl"
            >
              Get started
              <span className="grid size-8 place-items-center bg-[#1683eb] text-white">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {modalities.map((modality) => (
            <article key={modality.label} className="relative h-36 overflow-hidden bg-slate-100 md:h-44">
              <img src={modality.src} alt="" aria-hidden className="size-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/24" />
              <span className="absolute bottom-3 left-3 bg-white/86 px-3 py-1.5 text-xs font-extrabold uppercase text-[#061a63]">
                {modality.label}
              </span>
            </article>
          ))}
        </div>

        <h2 className="mx-auto mt-14 max-w-[650px] text-center text-[28px] font-extrabold leading-[1.2] text-[#061a63] md:text-[34px]">
          Trusted by leading public and private healthcare providers globally.
        </h2>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    ["40M+", "Medical Images Processed"],
    ["50+", "Healthcare Partners"],
    ["99.9%", "Platform Uptime"],
    ["30s", "Avg AI Result Time"],
  ];

  return (
    <section className="bg-[#f5f9ff] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-px overflow-hidden bg-slate-200 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <article key={label} className="bg-white p-8 text-center">
            <div className="text-5xl font-extrabold text-[#061a63]">{value}</div>
            <div className="mt-3 text-sm font-extrabold uppercase text-[#52617f]">{label}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = [
    { src: tataLogo, label: "Tata" },
    { src: yashodaLogo, label: "Yashoda" },
    { src: sgpgiLogo, label: "SGPGI" },
    { src: kgmuLogo, label: "KGMU" },
    { src: cdscoLogo, label: "CDSCO" },
    { src: hipaaLogo, label: "HIPAA" },
  ];
  const validation = [
    "CDSCO",
    "HIPAA Compliant",
    "Clinical Validation",
    "Nature Scientific Reports",
  ];

  return (
    <section className="bg-[#eef6ff] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#177fed]">
            Clinical network
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[34px] font-extrabold leading-tight text-[#061a63] md:text-[48px]">
            Trusted by leading public and private healthcare providers globally.
          </h2>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-4 md:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.label}
            className="flex h-32 items-center justify-center border border-[#c8dff8] bg-white px-5 shadow-[0_18px_44px_rgba(6,26,99,0.10)] ring-1 ring-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(6,26,99,0.16)] md:h-36"
          >
            <img
              src={logo.src}
              alt={logo.label}
              className="max-h-20 max-w-40 object-contain opacity-100 grayscale contrast-150 md:max-h-24"
            />
          </div>
        ))}
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-[1240px] gap-px overflow-hidden bg-[#b8d2ef] md:grid-cols-4">
        {validation.map((item) => (
          <div key={item} className="bg-white/86 p-6 text-center text-sm font-extrabold uppercase text-[#061a63] shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function PartnerLogoMarquee() {
  const partnerLogos = [
    {
      src: ramaMedicalLogo,
      label: "Rama Medical College Hospital & Research Centre",
    },
    {
      src: madhurajHospitalLogo,
      label: "Madhuraj Hospital (P) Ltd.",
    },
    {
      src: fortuneHealthcareLogo,
      label: "Fortune Healthcare Ltd.",
    },
    {
      src: chandniHospitalLogo,
      label: "Chandni Hospital Pvt. Ltd.",
    },
    {
      src: kmcLogo,
      label: "Kanpur Medical Centre Pvt. Ltd.",
    },
    {
      src: regencyHospitalLogo,
      label: "Regency Hospital",
    },
    {
      src: wellsunMedicityLogo,
      label: "Wellsun Medicity",
    },
    {
      src: scopeLogo,
      label: "SCOPE",
    },
    {
      src: govindHospitalLogo,
      label: "Govind Hospital",
    },
    {
      src: aiimsLogo,
      label: "All India Institute of Medical Sciences",
    },
    {
      src: gsvmMedicalCollegeLogo,
      label: "G.S.V.M. Medical College Kanpur",
    },
    {
      src: pgimerLogo,
      label: "PGIMER Chandigarh",
    },
  ];
  const marqueeLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#177fed]">
              Partner hospitals
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#061a63] md:text-[42px]">
              Expanding across the clinical ecosystem.
            </h2>
          </div>
        </div>

        <div className="logo-marquee overflow-hidden border-y border-[#c8dff8] bg-[#f7fbff] py-4 shadow-[0_18px_50px_rgba(6,26,99,0.08)]">
          <div className="flex w-max animate-logo-marquee-ltr gap-4 px-4">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.label}-${index}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center border border-[#d8e8fa] bg-white px-1 shadow-sm md:h-24 md:w-52"
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="max-h-20 max-w-44 object-contain md:max-h-24 md:max-w-52"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerNameDirectory() {
  const partnerGroups = [
    {
      title: "Diagnostic centers",
      names: [
        "Pitamber Diagnostics",
        "Swastik Diagnostics",
        "Meher Diagnostics",
        "Shree Krishna Pathology",
        "National Jaanch Kendra",
      ],
    },
    {
      title: "Hospitals and clinics",
      names: [
        "Corpus Hospital",
        "Ujala Hospital",
        "Dr. Pariwar Health Clinic",
        "JP Clinic",
        "Care Nursing Home",
        "Relief Hospital",
        "Sanjivani Hospital",
        "Sudha Hospital",
      ],
    },
  ];
  const partnerNames = partnerGroups.flatMap((group) =>
    group.names.map((name) => ({
      name,
      category: group.title === "Diagnostic centers" ? "Diagnostic" : "Hospital / clinic",
    })),
  );
  const marqueeNames = [...partnerNames, ...partnerNames];

  return (
    <section className="bg-[#f5f9ff] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#177fed]">
            Extended care network
          </p>
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-[#061a63] md:text-[42px]">
            Supporting diagnostic centers, hospitals, and local care teams.
          </h2>
        </div>

        <div className="logo-marquee overflow-hidden border-y border-[#c8dff8] bg-white py-5 shadow-[0_18px_50px_rgba(6,26,99,0.08)]">
          <div className="flex w-max animate-logo-marquee-ltr gap-4 px-4">
            {marqueeNames.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex min-h-16 w-72 shrink-0 flex-col justify-center border border-[#d8e8fa] bg-[#f7fbff] px-5 py-3 shadow-sm"
              >
                <span className="text-[11px] font-extrabold uppercase text-[#177fed]">
                  {partner.category}
                </span>
                <span className="mt-1 text-base font-extrabold leading-5 text-[#061a63]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const items = [
    "AI products for radiology teams and clinical networks.",
    "Fast deployment into hospital, diagnostic, and screening workflows.",
    "Secure, auditable systems built for healthcare environments.",
  ];

  return (
    <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-extrabold uppercase text-[#197fe5]">Dectrocel</p>
          <h2 className="mt-4 text-[40px] font-extrabold leading-tight text-[#061a63] md:text-[54px]">
            Clinical AI for better, faster imaging decisions.
          </h2>
        </div>
        <div className="grid content-center gap-5">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-4 bg-white p-5 text-lg font-bold text-[#061a63]">
              <CheckCircle2 className="mt-1 size-6 shrink-0 text-[#197fe5]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTiles() {
  const tiles = [
    ["Radiology AI", "Support CT, MRI, X-ray, mammography, and PET-CT workflows."],
    ["Workflow AI", "Prioritize studies and bring AI results into reporting systems."],
    ["Evidence", "Clinical validation, compliance, and deployment governance."],
  ];

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-[38px] font-extrabold leading-tight text-[#061a63] md:text-[52px]">
            Building foundation technology for healthcare AI.
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[#061a63]"
          >
            View products <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map(([title, body]) => (
            <article key={title} className="min-h-64 bg-[#061a63] p-7 text-white">
              <h3 className="text-2xl font-extrabold">{title}</h3>
              <p className="mt-5 text-base font-medium leading-7 text-white/76">{body}</p>
              <ArrowUpRight className="mt-12 size-7 text-[#197fe5]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main className="bg-white">
      <Hero />
      <StatsStrip />
      <LogoStrip />
      <PartnerLogoMarquee />
      <PartnerNameDirectory />
      <Mission />
      <ProductTiles />
    </main>
  );
}
