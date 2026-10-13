import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Github, Linkedin, Mail, MapPin, Send, Loader2, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [sendError, setSendError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: typeof errors = {};
      result.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof typeof form;
        errs[k] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSendError(null);
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/belginlino485@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New portfolio inquiry from ${form.name}`,
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && (data.success === "false" || data.success === false))) {
        throw new Error(data?.message || "Email service returned an error");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Email send failed:", error);
      const message = error instanceof Error && error.message
        ? error.message
        : "Unable to send message right now. Please email directly or try again later.";
      setSendError(message);
      setStatus("idle");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="CONTACT ME"
      title={
        <>
          LET'S WORK <span className="text-[#FF6A1A]">TOGETHER</span>
        </>
      }
      description="Have a project in mind, an internship opportunity, or want to discuss AI & web development? Send a message below!"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-start w-full max-w-full min-w-0">
        
        {/* LEFT COLUMN: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-[#141414] p-4 sm:p-6 lg:p-8 shadow-2xl w-full max-w-full min-w-0 overflow-hidden"
        >
          <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
            <MessageSquare className="h-5 w-5 text-[#FF6A1A]" />
            <h3 className="font-hero text-lg sm:text-xl font-bold uppercase text-white">Send a Message</h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]"
              >
                Your Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full max-w-full min-h-[44px] rounded-xl border border-white/10 bg-[#0A0A0A] px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-[#737373] outline-none transition-all duration-200 focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]"
                placeholder="John Doe"
              />
              {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full max-w-full min-h-[44px] rounded-xl border border-white/10 bg-[#0A0A0A] px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-[#737373] outline-none transition-all duration-200 focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]"
                placeholder="john@example.com"
              />
              {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-400 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]"
              >
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full max-w-full resize-none rounded-xl border border-white/10 bg-[#0A0A0A] px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-[#737373] outline-none transition-all duration-200 focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]"
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-400 font-medium">{errors.message}</p>}
            </div>
          </div>

          {sendError && <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">{sendError}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex min-h-[48px] w-full max-w-full items-center justify-center gap-2 rounded-xl bg-[#FF6A1A] px-4 py-3.5 sm:px-6 sm:py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,106,26,0.35)] transition-all duration-300 hover:bg-[#FF7B2E] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,106,26,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending message…
              </>
            ) : status === "sent" ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message Sent Successfully!
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>
        </motion.form>

        {/* RIGHT COLUMN: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-full"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-xs font-bold uppercase text-emerald-400">
                Current Availability
              </p>
              <p className="text-xs text-[#9A9A9A]">
                Open for internships, freelance projects, and full-time junior tech roles.
              </p>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 sm:p-6 lg:p-8 space-y-4">
            <h3 className="font-hero text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-4">
              Direct Channels
            </h3>

            {[
              {
                Icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                Icon: Github,
                label: "GitHub",
                value: "@belginlino",
                href: personalInfo.github,
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                value: "Belgin Lino SP",
                href: personalInfo.linkedin,
              },
              {
                Icon: MapPin,
                label: "Location",
                value: "India (Open for relocation & remote)",
              },
            ].map(({ Icon, label, value, href }) => {
              const content = (
                <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-[#1a1a1a] p-4 transition-all duration-300 hover:border-[#FF6A1A]/40 hover:bg-[#1e1e1e]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6A1A] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#9A9A9A]">
                      {label}
                    </p>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF6A1A] transition-colors break-words leading-snug">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
