import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import contactHero from "@/assets/medical-ai-product-3d.png";
import { HarrisonHero } from "@/components/site/HarrisonHero";
import { submitContactMessage } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Dectrocel" },
      {
        name: "description",
        content: "Talk to Dectrocel about deploying healthcare AI in your organization.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      await submitContactMessage({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          org: String(formData.get("org") ?? ""),
          role: String(formData.get("role") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });
      setSent(true);
    } catch (submitError) {
      console.error(submitError);
      setError("We could not send your message right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-[#061a63]">
      <HarrisonHero
        eyebrow="Contact"
        title="Bring healthcare AI to your team."
        subtitle="Tell us about your organization and we'll help map the right Dectrocel workflow."
        image={contactHero}
        imageClassName="object-center"
        cta="Book a demo"
      />

      <section className="bg-[#f5f9ff] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            {[
              { icon: Mail, label: "Email", value: "support@dectrocel.com" },
              { icon: Phone, label: "Phone", value: "+91 9005172201\n+91 9807194222" },
              {
                icon: MapPin,
                label: "Address",
                value:
                  "MedTech CoE, Third Floor, Opposite Admin Block, Sanjay Gandhi PostGraduate Institute of Medical Sciences, Raebareli Road, Lucknow, Uttar Pradesh - 226014",
              },
            ].map((item) => (
              <article key={item.label} className="bg-white p-6">
                <item.icon className="size-7 text-[#177fed]" />
                <div className="mt-6 text-sm font-extrabold uppercase text-[#52617f]">
                  {item.label}
                </div>
                <div className="mt-2 whitespace-pre-line text-lg font-extrabold leading-8">
                  {item.value}
                </div>
              </article>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-7 md:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid size-14 place-items-center bg-[#177fed] text-white">
                  <Send className="size-6" />
                </div>
                <h2 className="mt-7 text-3xl font-extrabold">Thanks, we'll be in touch.</h2>
                <p className="mt-3 text-lg font-medium text-[#52617f]">
                  A member of our team will reach out within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold">How can we help?</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" type="email" name="email" required />
                  <Field label="Organization" name="org" />
                  <Field label="Role" name="role" />
                </div>
                <div className="mt-5">
                  <label className="text-sm font-extrabold">Mention your requirement</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full border border-slate-200 bg-[#f5f9ff] px-4 py-3 text-sm font-medium outline-none focus:border-[#177fed]"
                  />
                </div>
                {error && (
                  <div className="mt-5 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#061a63] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#177fed]"
                >
                  {submitting ? "Sending..." : "Send message"} <Send className="size-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-extrabold">
        {label}
        {required && <span className="text-[#177fed]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-slate-200 bg-[#f5f9ff] px-4 py-3 text-sm font-medium outline-none focus:border-[#177fed]"
      />
    </div>
  );
}
