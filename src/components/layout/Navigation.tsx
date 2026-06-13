"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  brandMark?: string;
  links?: NavLink[];
  contactLabel?: string;
  contactHref?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Studio", href: "/studio" },
  { label: "Insights", href: "/insights" },
];

const Navigation = ({
  brandMark = "SLIIQQUE",
  links = defaultLinks,
  contactLabel = "Start a Project",
  contactHref = "/contact",
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Focus the first menu item when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  const getFocusableElements = useCallback((container: HTMLElement): HTMLElement[] => {
    const selectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll<HTMLElement>(selectors));
  }, []);

  const handleMenuKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    if (e.key === "Escape") {
      setIsMobileMenuOpen(false);
      mobileMenuToggleRef.current?.focus();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = getFocusableElements(mobileMenuRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [isMobileMenuOpen, getFocusableElements]);

  useEffect(() => {
    document.addEventListener("keydown", handleMenuKeyDown);
    return () => document.removeEventListener("keydown", handleMenuKeyDown);
  }, [handleMenuKeyDown]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "h-[70px] bg-background/80 backdrop-blur-xl border-b border-white/5" : "h-[100px]"
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-xl tracking-tighter uppercase text-white"
            >
              {brandMark}
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
                <motion.div
                  key={link.label}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`text-[10px] font-body font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-orange-500 to-blue-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX:
                        hoveredLink === link.label || isActive(link.href)
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={contactHref}
              className="group relative px-6 py-3 border border-white/20 rounded-full overflow-hidden focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors">
                {contactLabel}
              </span>
            </Link>
          </div>

          <motion.button
            ref={mobileMenuToggleRef}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col justify-center px-10"
            >
              <nav className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      ref={i === 0 ? firstFocusableRef : undefined}
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                    >
                      <span
                        className={`font-display font-bold text-4xl md:text-5xl tracking-tight uppercase transition-colors ${
                          isActive(link.href)
                            ? "text-white"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className={`w-6 h-6 transition-all ${
                          isActive(link.href)
                            ? "text-orange-500 translate-x-2"
                            : "text-white/30 group-hover:text-white group-hover:translate-x-2"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16"
              >
                <Link
                  href={contactHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                >
                  {contactLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
