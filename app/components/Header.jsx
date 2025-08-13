"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "ABOUT", href: "#about", key: "about" },
  { name: "EXPERIENCE", href: "#experience", key: "experience" },
  { name: "EDUCATION", href: "#education", key: "education" },
  { name: "STACK", href: "#skills", key: "skills" },
  { name: "PROJECT", href: "#projects", key: "project" },
  { name: "CERTIFICATION", href: "#certification", key: "certification" },
  { name: "CONTACT", href: "#contact", key: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href, key) => {
    setActive(key);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = document.querySelector('nav').offsetHeight;
      const top = el.offsetTop - headerHeight;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#home", "home");
            }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Mohiuddin Sadik
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === item.key
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href, item.key);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {active === item.key && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="grid gap-2">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium ${
                        active === item.key
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href, item.key);
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}