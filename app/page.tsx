"use client";

import Link from "next/link";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const HeroProtein = lazy(() => import("@/components/HeroProtein"));
import {
  Brain,
  Sparkles,
  FlaskConical,
  Dna,
  Send,
  Microscope,
  Network,
  Layers,
  Server,
  Ribbon,
  ShieldPlus,
  Pill,
} from "lucide-react";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary placeholder:text-primary/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", org: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-2xl bg-accent/10 px-6 py-10 text-center ring-1 ring-accent/20">
        <p className="text-lg font-semibold text-primary">Message sent!</p>
        <p className="mt-2 text-sm text-primary/60">We&apos;ll be in touch soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">Name</label>
          <input
            id="name" type="text" required placeholder="Your name"
            className={inputClass} value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">Email</label>
          <input
            id="email" type="email" required placeholder="you@example.com"
            className={inputClass} value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="org" className="block text-sm font-medium text-primary">Organization</label>
        <input
          id="org" type="text" placeholder="Company / Institution"
          className={inputClass} value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">Message</label>
        <textarea
          id="message" rows={4} required placeholder="How can we collaborate?"
          className={`${inputClass} resize-none`} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        <Send className="h-5 w-5" />
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ----- A. Hero ----- */}
      <section
        className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6"
        style={{ backgroundColor: "#0A1929" }}
      >
        {/* 3D protein structure */}
        <Suspense fallback={null}>
          <HeroProtein />
        </Suspense>
        {/* Radial glow over protein */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent to-background" />

        <div className="relative z-10 max-w-4xl" style={{ zIndex: 10 }}>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Intelligence-Driven Biologics.
          </motion.h1>

          <motion.p
            className="mt-5 text-xl font-medium text-white/75 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Transforming how protein therapeutics and antibodies are designed,
            evaluated, and optimized.
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-white/50 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We integrate large-scale machine learning, computational biology,
            and structural bioinformatics to enable faster and more precise
            biologics development.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <button
              onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent/90"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Glow divider */}
      <div className="relative h-px w-full overflow-visible">
        <div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
          style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }}
        />
        <div
          className="absolute left-1/2 top-0 h-8 w-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl"
          style={{ background: "rgba(6,182,212,0.15)" }}
        />
      </div>

      {/* ----- A2. What We Do ----- */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "AI Protein Design",
                description:
                  "Generating novel proteins with desired functions using transformer-based language models.",
                graphic: (
                  <div className="w-full rounded-xl bg-primary/[0.04] p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary/40">Protein Structure</p>
                    {/* Protein backbone SVG */}
                    <svg viewBox="0 0 130 52" fill="none" className="w-full">
                      {/* Backbone chain */}
                      <polyline
                        points="8,38 22,18 36,32 50,12 64,26 78,10 92,24 106,14 120,22"
                        stroke="#06b6d4" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"
                      />
                      {/* Side chains */}
                      <line x1="22" y1="18" x2="18" y2="6" stroke="#06b6d4" strokeWidth="1.2" opacity="0.6"/>
                      <line x1="50" y1="12" x2="46" y2="2"  stroke="#06b6d4" strokeWidth="1.2" opacity="0.6"/>
                      <line x1="78" y1="10" x2="85" y2="1"  stroke="#06b6d4" strokeWidth="1.2" opacity="0.6"/>
                      <line x1="36" y1="32" x2="30" y2="44" stroke="#0f172a" strokeWidth="1.2" opacity="0.15"/>
                      <line x1="64" y1="26" x2="58" y2="38" stroke="#0f172a" strokeWidth="1.2" opacity="0.15"/>
                      {/* Main chain nodes */}
                      {([[8,38],[22,18],[36,32],[50,12],[64,26],[78,10],[92,24],[106,14],[120,22]] as [number,number][]).map(([x,y],i) => (
                        <circle key={i} cx={x} cy={y} r="3.5"
                          fill={[1,3,5].includes(i) ? "#06b6d4" : "#0f172a"}
                          opacity={[1,3,5].includes(i) ? 0.9 : 0.12}
                        />
                      ))}
                      {/* Side chain end nodes */}
                      <circle cx="18" cy="6"  r="2.5" fill="#06b6d4" opacity="0.8"/>
                      <circle cx="46" cy="2"  r="2.5" fill="#06b6d4" opacity="0.8"/>
                      <circle cx="85" cy="1"  r="2.5" fill="#06b6d4" opacity="0.8"/>
                    </svg>
                    {/* Confidence bar */}
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] text-primary/40">Model Confidence</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/8">
                        <div className="h-full w-[82%] rounded-full bg-accent/70" />
                      </div>
                      <span className="text-[11px] font-semibold text-accent">82%</span>
                    </div>
                  </div>
                ),
              },
              {
                title: "Antibody Engineering",
                description:
                  "Optimizing monoclonal and bispecific antibodies for affinity, specificity, and safety.",
                graphic: (
                  <div className="w-full rounded-xl bg-primary/[0.04] p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary/40">Candidate AB-07</p>
                    <div className="space-y-2.5">
                      {[
                        { label: "CDR-H3 Score", value: "94.2%", bar: 94 },
                        { label: "Affinity (KD)", value: "8.3 nM", bar: 78 },
                        { label: "Dev. Score", value: "87%", bar: 87 },
                      ].map((row) => (
                        <div key={row.label}>
                          <div className="mb-1 flex justify-between text-[10px]">
                            <span className="text-primary/50">{row.label}</span>
                            <span className="font-semibold text-accent">{row.value}</span>
                          </div>
                          <div className="h-1 overflow-hidden rounded-full bg-primary/8">
                            <div
                              className="h-full rounded-full bg-accent/60"
                              style={{ width: `${row.bar}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                title: "Therapeutic Screening",
                description:
                  "Evaluating candidates in silico to reduce early-stage failure risk before lab validation.",
                graphic: (
                  <div className="w-full rounded-xl bg-primary/[0.04] p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary/40">Candidate Ranking</p>
                    <div className="flex h-16 items-end gap-1.5">
                      {[
                        { px: 25, label: "C-D" },
                        { px: 35, label: "C-B" },
                        { px: 30, label: "C-E" },
                        { px: 45, label: "C-A" },
                        { px: 54, label: "C-C", top: true },
                      ].map((bar) => (
                        <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
                          <div
                            className={`w-full rounded-t-md ${bar.top ? "bg-accent" : "bg-accent/30"}`}
                            style={{ height: `${bar.px}px` }}
                          />
                          <span className="text-[9px] text-primary/40">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px]">
                      <span className="text-primary/40">5 candidates evaluated</span>
                      <span className="font-semibold text-accent">Top: C-C ↑</span>
                    </div>
                  </div>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="group relative h-64 [perspective:1000px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative h-full w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-primary/5 transition-shadow duration-300 group-hover:shadow-lg [backface-visibility:hidden]">
                    {card.graphic}
                    <div className="flex items-center justify-between pt-2">
                      <h3 className="text-base font-semibold text-primary">{card.title}</h3>
                      <span className="text-[10px] text-primary/30">Hover →</span>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-accent p-7 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                    <p className="mt-3 text-center text-base text-primary/80">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section
        id="technology"
        className="px-4 py-20 sm:px-6"
        style={{ backgroundColor: "#0A1929" }}
      >
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-x-0 h-[600px]"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">

          {/* — Intro banner — */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-accent"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Technology
            </motion.p>
            <motion.h2
              className="mt-2 text-3xl font-bold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              How It Works.
            </motion.h2>
            <motion.p
              className="mt-3 text-lg text-white/70"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our integrated AI platform unifies biological sequence generation,
              structural modeling, and in silico evaluation.
            </motion.p>
            <motion.p
              className="mt-4 text-base text-white/45"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              We treat amino acid sequences as biological language. Our
              transformer-based models learn structural, functional, and
              evolutionary constraints from massive protein datasets, enabling
              us to design therapeutically relevant proteins with precision.
            </motion.p>
          </div>

          {/* — Three Pillars — */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Network,
                title: "AI Architecture",
                points: [
                  "Transformer-based protein language models",
                  "Generative AI for de novo design",
                  "Diffusion-based modeling",
                  "Graph neural networks for structure prediction",
                ],
              },
              {
                icon: Layers,
                title: "Structural Bioinformatics",
                points: [
                  "Protein structure prediction",
                  "Molecular docking simulations",
                  "Stability modeling",
                  "Variant scoring and analysis",
                ],
              },
              {
                icon: Server,
                title: "Scalable Infrastructure",
                points: [
                  "High-performance computing (HPC)",
                  "Parallelized screening pipelines",
                  "Cloud-based deployment",
                  "Automated workflow orchestration",
                ],
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl p-7 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-accent/40"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <pillar.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {pillar.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-white/55">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* — Workflow Timeline — */}
          <div className="mt-20">
            <motion.h3
              className="text-center text-2xl font-bold text-white sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              End-to-End Workflow
            </motion.h3>
            <motion.p
              className="mx-auto mt-3 max-w-xl text-center text-sm text-white/45"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From target definition to delivery — one unified pipeline.
            </motion.p>

            <div className="relative mx-auto mt-12 max-w-2xl">
              {/* Vertical line */}
              <div className="absolute left-[21px] top-0 h-full w-px bg-white/10 sm:left-[27px]" />

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Problem Definition",
                    body: "Define therapeutic objectives, biological targets, and performance constraints in collaboration with partners.",
                  },
                  {
                    step: "02",
                    title: "AI-Driven Generation",
                    body: "Large-scale generative models produce diverse candidate sequences aligned with target design criteria.",
                  },
                  {
                    step: "03",
                    title: "In Silico Screening",
                    body: "Automated pipelines evaluate structural integrity, binding likelihood, stability metrics, developability indicators, and immunogenicity risk.",
                  },
                  {
                    step: "04",
                    title: "Optimization",
                    body: "Top-ranked candidates undergo iterative multi-objective refinement to improve performance and reduce downstream risk.",
                  },
                  {
                    step: "05",
                    title: "Delivery",
                    body: "Clients receive ranked candidates, computational evaluation reports, and technical documentation to support downstream R&D progression.",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    className="relative flex gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    {/* Step badge */}
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-bold text-primary shadow-sm">
                      {s.step}
                    </div>
                    {/* Info bubble */}
                    <div className="flex-1 rounded-2xl px-6 py-4 ring-1 ring-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                      <p className="text-sm font-semibold text-white">{s.title}</p>
                      <p className="mt-1 text-sm text-white/50">{s.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section
        id="applications"
        className="border-t border-primary/10 px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">

          {/* — Intro — */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-accent"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Applications
            </motion.p>
            <motion.h2
              className="mt-2 text-3xl font-bold text-primary sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Solutions.
            </motion.h2>
            <motion.p
              className="mt-3 text-base text-primary/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Applying artificial intelligence to real-world cures.
            </motion.p>
          </div>

          {/* — Therapeutic Areas grid — */}
          <motion.h3
            className="mt-16 text-center text-xl font-semibold text-primary"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Therapeutic Areas
          </motion.h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Ribbon,
                title: "Oncology",
                description: "Designing biologics targeted at cancer pathways.",
              },
              {
                icon: ShieldPlus,
                title: "Immunology",
                description: "Engineering antibodies for immune modulation.",
              },
              {
                icon: Dna,
                title: "Rare Diseases",
                description:
                  "Developing protein therapeutics for genetic disorders.",
              },
              {
                icon: Pill,
                title: "Enzyme Therapies",
                description:
                  "Creating optimized enzymes for replacement therapies.",
              },
            ].map((area, i) => (
              <motion.div
                key={area.title}
                className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <area.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-primary">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm text-primary/60">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* — Pipeline Progress Tracker — */}
          <div className="mt-20">
            <motion.h3
              className="text-center text-xl font-semibold text-primary"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              A Pipeline in Progress
            </motion.h3>
            <motion.p
              className="mx-auto mt-2 max-w-lg text-center text-sm text-primary/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              A preview of what partners can expect from an IntelliPharmiCA
              engagement — ranked therapeutic candidates at each stage.
            </motion.p>

            <div className="mx-auto mt-10 max-w-2xl space-y-10">
              {[
                {
                  category: "Oncology",
                  candidates: [
                    { label: "Candidate A", percent: 80, phase: "Optimization Phase" },
                    { label: "Candidate B", percent: 65, phase: "Screening Complete" },
                  ],
                },
                {
                  category: "Immunology",
                  candidates: [
                    { label: "Candidate C", percent: 50, phase: "In Silico Evaluation" },
                    { label: "Candidate D", percent: 35, phase: "Generation Phase" },
                  ],
                },
                {
                  category: "Enzyme Therapies",
                  candidates: [
                    { label: "Candidate E", percent: 95, phase: "Delivery Ready" },
                  ],
                },
              ].map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.1 }}
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                    {group.category}
                  </p>
                  <div className="space-y-5">
                    {group.candidates.map((c, ci) => (
                      <div key={c.label}>
                        <div className="flex items-center justify-between text-sm font-medium text-primary">
                          <span>{c.label}</span>
                          <span className="flex items-center gap-3">
                            <span className="text-xs text-primary/50">{c.phase}</span>
                            <span>{c.percent}%</span>
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-primary/8">
                          <motion.div
                            className="h-full rounded-full bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${c.percent}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: gi * 0.1 + ci * 0.15 + 0.3,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="border-t border-primary/10 bg-background-light/50 px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-xl">
          {/* Heading */}
          <motion.p
            className="text-center text-sm font-semibold uppercase tracking-widest text-accent"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="mt-2 text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Build the Future With Us
          </motion.h2>
          <motion.p
            className="mt-3 text-center text-base text-primary/60"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you are an investor, a researcher, or a pharmaceutical
            partner — we are ready to collaborate.
          </motion.p>

          {/* Form */}
          <ContactForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-primary/10 bg-primary px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Brand */}
            <span className="text-lg font-semibold text-white">
              IntelliPharmiCA
            </span>

            {/* Quick links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { id: "technology", label: "Technology" },
                { id: "applications", label: "Applications" },
                { id: "contact", label: "Contact" },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.73A1.77 1.77 0 1 1 8.27 6 1.77 1.77 0 0 1 6.5 7.73zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V9h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-white/60 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} IntelliPharmiCA. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-white/40">
              <a href="#" className="transition-colors hover:text-accent">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-accent">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}