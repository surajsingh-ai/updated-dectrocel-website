import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function HarrisonHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageClassName = "object-center",
  cta,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageClassName?: string;
  cta?: string;
}) {
  return (
    <section className="bg-white px-6 pb-16 pt-28 md:pt-32 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative h-[320px] overflow-hidden rounded-[5px] bg-slate-200 md:h-[520px]">
          <img src={image} alt="" aria-hidden className={`size-full object-cover ${imageClassName}`} />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute left-[6%] top-[42%] hidden h-24 w-24 bg-[#177fed]/18 md:block" />
          <div className="absolute right-[12%] top-[56%] hidden h-20 w-20 bg-[#177fed]/80 md:block" />
          <div className="absolute bottom-[15%] right-0 hidden h-14 w-[19%] bg-[#89bcec]/34 md:block" />
          {cta && (
            <div className="absolute inset-x-0 bottom-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/42 px-5 py-3 text-lg font-extrabold text-white backdrop-blur-[2px] transition-colors hover:bg-white/55"
              >
                {cta}
                <span className="grid size-8 place-items-center bg-[#177fed] text-white">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </div>
          )}
        </div>
        <div className="mx-auto mt-14 max-w-[900px] text-center">
          <p className="text-sm font-extrabold uppercase text-[#177fed]">{eyebrow}</p>
          <h1 className="mt-5 text-[42px] font-extrabold leading-[1.08] text-[#061a63] md:text-[68px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#52617f]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
