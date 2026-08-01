import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/products", label: "Products" },
    { to: "/solutions", label: "Solutions" },
    { to: "/teleradiology-services", label: "Teleradiology" },
    { to: "/evidence", label: "Evidence" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "Company" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Link
            to="/"
            className="max-w-[245px] shrink-0 font-display text-[18px] font-extrabold leading-tight text-[#061a63] sm:max-w-[360px] sm:text-[22px] md:max-w-[430px] md:text-[26px] lg:max-w-[260px] lg:text-[20px] xl:max-w-[340px] xl:text-[23px]"
            aria-label="Dectrocel Healthcare and Research Pvt. Ltd home"
            onClick={() => setOpen(false)}
          >
            <span className="block whitespace-nowrap">Dectrocel Healthcare</span>
            <span className="block whitespace-nowrap">and Research Pvt. Ltd</span>
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="whitespace-nowrap text-[13px] font-extrabold uppercase text-[#061a63] transition-colors hover:text-[#177fed] xl:text-sm"
                activeProps={{ className: "text-[#177fed]" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-5">
            <Link
              to="/contact"
              className="hidden items-center gap-2 whitespace-nowrap bg-white px-1 text-sm font-extrabold text-[#061a63] transition-colors hover:text-[#177fed] md:inline-flex"
            >
              Book a demo
              <span className="grid size-6 place-items-center bg-[#177fed] text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid size-10 place-items-center border border-slate-200 bg-white text-[#061a63] lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-base font-extrabold uppercase text-[#061a63] hover:bg-[#f5f9ff]"
                  activeProps={{ className: "text-[#177fed]" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#177fed] px-4 py-2 text-center text-sm font-extrabold text-white"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
