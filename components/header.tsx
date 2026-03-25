"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X, Globe, Award } from "lucide-react"
import { CertificatesModal } from "./certificates-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-2xl border-b border-white/10"
            : "bg-background/80 backdrop-blur-xl border-b border-border/50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer">
                Soufiane El Qour
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {[
                { key: "nav.about", id: "about" },
                { key: "nav.experience", id: "experience" },
                { key: "nav.skills", id: "skills" },
                { key: "nav.projects", id: "projects" },
                { key: "nav.education", id: "education" },
                { key: "nav.contact", id: "contact" },
              ].map(({ key, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative text-foreground/80 hover:text-foreground transition-all duration-300 focus-ring group py-2 px-1"
                >
                  <span className="relative z-10 font-medium">{t(key)}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  <span className="absolute inset-0 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCertificatesOpen(true)}
                className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Award className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">{t("nav.certificates")}</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-bold text-xs tracking-wider">{language}</span>
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 rounded-b-lg">
              {[
                { key: "nav.about", id: "about" },
                { key: "nav.experience", id: "experience" },
                { key: "nav.skills", id: "skills" },
                { key: "nav.projects", id: "projects" },
                { key: "nav.education", id: "education" },
                { key: "nav.contact", id: "contact" },
              ].map(({ key, id }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 w-full text-left rounded-lg font-medium transform hover:scale-[1.02] hover:shadow-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? "slideUp 0.4s ease-out forwards" : "none",
                  }}
                >
                  {t(key)}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsCertificatesOpen(true)
                  setIsMenuOpen(false)
                }}
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 w-full text-left rounded-lg font-medium transform hover:scale-[1.02] hover:shadow-sm"
                style={{
                  animationDelay: `${6 * 100}ms`,
                  animation: isMenuOpen ? "slideUp 0.4s ease-out forwards" : "none",
                }}
              >
                {t("nav.certificates")}
              </button>
            </div>
          </div>
        </div>
      </header>

      <CertificatesModal isOpen={isCertificatesOpen} onClose={() => setIsCertificatesOpen(false)} />
    </>
  )
}
