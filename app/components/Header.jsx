"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

const menuItems = [
  { name: "ABOUT", href: "#about", key: "about", icon: "👤" },
  { name: "EDUCATION", href: "#education", key: "education", icon: "🎓" },
  //{ name: "WORK", href: "#experience", key: "work", icon: "💼" },
  { name: "STACK", href: "#skills", key: "stack", icon: "⚡" },
  { name: "PROJECT", href: "#projects", key: "project", icon: "📁" },
  { name: "CERTIFICATE", href: "#certification", key: "certificate", icon: "📜" },
  { name: "CONTACT", href: "#contact", key: "contact", icon: "📞" },
]

const themeOptions = [
  { name: "Light", key: "light" },
  { name: "Dark", key: "dark" },
  { name: "System", key: "system" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("about")
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const savedActive = localStorage.getItem("activeNavigation")
    if (savedActive) {
      setActive(savedActive)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    localStorage.setItem("activeNavigation", active)
  }, [active])

  const handleNavigation = (href, key) => {
    setActive(key)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const headerHeight = document.querySelector("nav")?.offsetHeight || 0
      const top = el.offsetTop - headerHeight
      window.scrollTo({
        top: top,
        behavior: "smooth",
      })
    }
  }

  const handleThemeChange = (themeKey) => {
    setTheme(themeKey)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:bg-background dark:border-gray-700/50"
          : "bg-white/95 backdrop-blur-sm shadow-md dark:bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("#home", "home")
            }}
          >
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">SADDY</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === item.key
                    ? "bg-blue-100 dark:bg-blue-900/30 font-bold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href, item.key)
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {active === item.key && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-1 ml-4">
            {themeOptions.map((option) => (
              <motion.button
                key={option.key}
                onClick={() => handleThemeChange(option.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  mounted && theme === option.key
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={menuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-5 h-0.5 bg-gray-700 block mb-1.5 origin-center transition-all"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-5 h-0.5 bg-gray-700 block mb-1.5 transition-all"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-5 h-0.5 bg-gray-700 block origin-center transition-all"
              />
            </motion.div>
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
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-50 lg:hidden bg-white/95 border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden dark:bg-gray-900/95 dark:border-gray-700/50"
            >
              <div className="p-6">
                {/* Mobile Navigation Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl text-center transition-all ${
                        active === item.key
                          ? "bg-blue-50 border-2 border-blue-200 dark:text-gray-800"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(item.href, item.key)
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl mb-2">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-center space-x-2">
                    {themeOptions.map((option, index) => (
                      <motion.button
                        key={option.key}
                        onClick={() => handleThemeChange(option.key)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          mounted && theme === option.key
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {option.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
