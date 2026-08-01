import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols = [
    {
      title: "Products",
      links: [
        { label: "Chest AI", to: "/products" as const },
        { label: "CT AI", to: "/products" as const },
        { label: "MRI AI", to: "/products" as const },
        { label: "Musculoskeletal AI", to: "/products" as const },
        { label: "Emergency AI", to: "/products" as const },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Hospitals", to: "/solutions" as const },
        { label: "Diagnostic Centers", to: "/solutions" as const },
        { label: "Teleradiology", to: "/teleradiology-services" as const },
        { label: "Government", to: "/solutions" as const },
      ],
    },
    {
      title: "Evidence",
      links: [
        { label: "Clinical Validation", to: "/evidence" as const },
        { label: "Publications", to: "/research" as const },
        { label: "Regulatory", to: "/evidence" as const },
        { label: "Case Studies", to: "/evidence" as const },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Whitepapers", to: "/resources" as const },
        { label: "Webinars", to: "/resources" as const },
        { label: "Guides", to: "/resources" as const },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" as const },
        { label: "Contact", to: "/contact" as const },
      ],
    },
  ];
  return (
    <footer className="relative border-t border-white/10 bg-[#061a63] pt-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-6">
        <div className="col-span-2 md:col-span-2">
          <Link
            to="/"
            className="font-display text-4xl font-extrabold leading-none text-white"
            aria-label="Dectrocel home"
          >
            Dectrocel
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/66">
            AI imaging products for radiology teams, hospitals, screening programs, and care
            networks.
          </p>
          <div className="mt-6 flex gap-3">
            {["X", "in", "GH"].map((label, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid size-10 place-items-center border border-white/18 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold text-white">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.links.map((i) => (
                <li key={i.label}>
                  <Link to={i.to} className="text-sm text-white/58 hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/14 px-6 py-8">
        <p className="text-xs leading-6 text-white/54">
          For use by qualified healthcare professionals. Dectrocel Healthcare and Research Pvt. Ltd
          products are intended to assist, not replace, clinical judgment. Product availability and
          regulatory status vary by region.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-white/54">
          <div>
            &copy; {new Date().getFullYear()} Dectrocel Healthcare and Research Pvt. Ltd. All
            rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
