"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Technology", id: "technology" },
  { label: "Applications", id: "applications" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const onScroll = () => {
      // At the very top — nothing active
      if (window.scrollY < 80) {
        setActiveSection("");
        return;
      }
      // Walk sections bottom-up; the last one whose top is above 40% of viewport wins
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo — scrolls to very top, no hash */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-semibold tracking-tight text-primary transition-colors hover:text-accent"
        >
          IntelliPharmiCA
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === link.id ? "text-accent" : "text-primary/80"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full rounded-full bg-accent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-primary/5 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary/10 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-0 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileOpen(false);
                  }}
                  className={`block w-full rounded-md px-4 py-3 text-left text-base font-medium transition-colors hover:bg-primary/5 hover:text-accent ${
                    activeSection === link.id ? "text-accent" : "text-primary"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
