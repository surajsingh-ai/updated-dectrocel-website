import { motion, useScroll, useTransform } from "framer-motion";

type Variant = "hero" | "products" | "solutions" | "testimonials" | "page";

export function MedicalBackdrop({ variant = "page" }: { variant?: Variant }) {
  const { scrollYProgress } = useScroll();
  const slowY = useTransform(scrollYProgress, [0, 1], [0, variant === "hero" ? -60 : -36]);
  const reverseY = useTransform(scrollYProgress, [0, 1], [0, variant === "hero" ? 46 : 28]);
  const heroScale = variant === "hero" ? "size-[38rem]" : "size-[30rem]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: slowY }}
        className={`absolute -left-28 top-10 ${heroScale} rounded-full bg-cyan-200/14 blur-3xl`}
      />
      <motion.div
        style={{ y: reverseY }}
        className="absolute -right-28 top-28 size-[32rem] rounded-full bg-teal-200/12 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.34),transparent_34%),radial-gradient(circle_at_84%_30%,rgba(20,184,166,0.10),transparent_32%),radial-gradient(circle_at_48%_74%,rgba(59,130,246,0.08),transparent_36%)]" />
    </div>
  );
}
