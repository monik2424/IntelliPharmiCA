"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  FlaskConical,
  Code2,
  Cpu,
  Binary,
  Dna,
  Heart,
  Send,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ----- A. Hero ----- */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6">
        {/* Live background: animated grid + gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background-light via-background to-primary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px),
                              linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "48px 48px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IntelliPharmi: Generative AI for Drug Discovery
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-primary/80 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Revolutionizing pharmaceuticals by merging code and biology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/solutions"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent/90"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ----- B. Technology Teaser ----- */}
      <section className="border-t border-primary/10 bg-background-light/50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI Analysis",
                description: "Data-driven insights from biological and chemical datasets.",
              },
              {
                icon: Sparkles,
                title: "Generative Models",
                description: "Novel molecular designs powered by state-of-the-art AI.",
              },
              {
                icon: FlaskConical,
                title: "Lab Validation",
                description: "Bridging in-silico predictions with real-world experiments.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="rounded-full bg-accent/10 p-4">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-center text-sm text-primary/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- C. Solutions Teaser ----- */}
      <section className="border-t border-primary/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Targeting Real-World Cures
          </motion.h2>
          <div className="mt-14 space-y-6">
            {[
              { label: "Discovery", percent: 80 },
              { label: "Pre-clinical", percent: 45 },
            ].map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex justify-between text-sm font-medium text-primary">
                  <span>{stage.label}</span>
                  <span>{stage.percent}%</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-primary/10">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stage.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- D. About & Team ----- */}
      <section className="border-t border-primary/10 bg-background-light/50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Driven by Science. Powered by Code.
          </motion.h2>
          <motion.div
            className="relative mt-14 grid gap-8 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary/5">
              <div className="flex gap-4">
                <Code2 className="h-10 w-10 text-accent" />
                <Cpu className="h-10 w-10 text-accent" />
                <Binary className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                The Coders
              </h3>
              <p className="mt-2 text-center text-sm text-primary/70">
                CS & AI — algorithms, models, and scalable systems.
              </p>
            </div>
            <div className="absolute left-1/2 top-1/2 hidden h-0.5 w-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent to-transparent sm:block" />
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary/5">
              <div className="flex gap-4">
                <Dna className="h-10 w-10 text-accent" />
                <FlaskConical className="h-10 w-10 text-accent" />
                <Heart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                The Healers
              </h3>
              <p className="mt-2 text-center text-sm text-primary/70">
                Biology & Pharma — discovery, validation, and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----- E. Contact ----- */}
      <section
        id="contact"
        className="border-t border-primary/10 px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-xl">
          <motion.h2
            className="text-center text-3xl font-bold text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Build the Future With Us
          </motion.h2>
          <motion.form
            className="mt-14 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1.5 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary placeholder:text-primary/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1.5 w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary placeholder:text-primary/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1.5 w-full resize-none rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary placeholder:text-primary/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="How can we collaborate?"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent/90"
            >
              <Send className="h-5 w-5" />
              Collaborate
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}