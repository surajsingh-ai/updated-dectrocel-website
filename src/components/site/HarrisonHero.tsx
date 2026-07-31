import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function HarrisonHero({
  eyebrow,
  title,
  afterTitle,
  subtitle,
  image,
  imageClassName = "object-center",
  cta,
}: {
  eyebrow: string;
  title: string;
  afterTitle?: ReactNode;
  subtitle?: string;
  image: string;
  imageClassName?: string;
  cta?: string;
}) {
  return (
    <section className="bg-white px-4 pb-14 pt-24 sm:px-6 md:pb-16 md:pt-32 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative h-[260px] overflow-hidden rounded-[5px] bg-slate-200 sm:h-[320px] md:h-[520px]">
          <img src={image} alt="" aria-hidden className={`size-full object-cover ${imageClassName}`} />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute left-[6%] top-[42%] hidden h-24 w-24 bg-[#177fed]/18 md:block" />
          <div className="absolute right-[12%] top-[56%] hidden h-20 w-20 bg-[#177fed]/80 md:block" />
          <div className="absolute bottom-[15%] right-0 hidden h-14 w-[19%] bg-[#89bcec]/34 md:block" />
          {cta && (
            <div className="absolute inset-x-4 bottom-6 flex justify-center md:inset-x-0 md:bottom-8">
              <Link
                to="/contact"
                className="inline-flex max-w-full items-center justify-center gap-3 bg-white/42 px-4 py-3 text-base font-extrabold text-white backdrop-blur-[2px] transition-colors hover:bg-white/55 sm:px-5 md:text-lg"
              >
                {cta}
                <span className="grid size-8 place-items-center bg-[#177fed] text-white">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </div>
          )}
        </div>
        <div className="mx-auto mt-10 max-w-[900px] text-center md:mt-14">
          <p className="text-sm font-extrabold uppercase text-[#177fed]">{eyebrow}</p>
          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.12] text-[#061a63] sm:text-[42px] md:text-[68px]">
            {title}
          </h1>
          {afterTitle && <div className="mt-6">{afterTitle}</div>}
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-[#52617f] md:mt-6 md:text-lg md:leading-8">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
