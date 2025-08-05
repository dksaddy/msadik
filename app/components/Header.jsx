"use client";
import { useState, useEffect } from "react";

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

  const menuItems = [
    { name: "About", href: "#about", key: "about" },
    { name: "Experience", href: "#experience", key: "experience" },
    { name: "Education", href: "#education", key: "education" },
    { name: "Skills", href: "#skills", key: "skills" },
    { name: "Projects", href: "#projects", key: "project" },
    { name: "Certification", href: "#certification", key: "certification" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg shadow-md border-b border-blue-100" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Logo + Name */}
        <a
          href="https://github.com/dksaddy"
          className="flex items-center gap-3"
        >
          <img
            src="./busy.gif"
            alt="Mohiuddin Mohammad Sadik"
            className="h-10 w-10 rounded border-2 border-blue-400 shadow"
          />
          <span className="text-2xl font-bold text-gray-900 hover:text-blue-500 transition">
            Mohiuddin Sadik
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-[64px] left-0 w-full md:static md:block md:w-auto z-50 bg-white md:bg-transparent transition-all`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6 p-4 md:p-0 rounded-lg md:rounded-none border md:border-0 border-blue-100">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`relative block w-full py-3 px-4 rounded-lg text-lg font-medium text-gray-800 hover:text-blue-500 transition-all
                    ${active === item.key ? "italic text-blue-500" : ""}
                    after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-[3px] after:bg-blue-400 after:rounded-full after:transition-all after:duration-300
                    ${active === item.key ? "after:w-[80%]" : "after:w-0"}
                    hover:after:w-[80%]`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.key);
                    setMenuOpen(false);
                    const el = document.querySelector(item.href);
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  aria-current={active === item.key ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Background overlay when mobile menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
