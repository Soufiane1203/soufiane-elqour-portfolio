"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Mail, Phone, Download, Linkedin, Github, Sparkles, Code, Database, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"
          style={{
            top: "10%",
            right: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "2s",
            bottom: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "4s",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        ></div>

        <div className="absolute inset-0 pointer-events-none">
          <Code
            className="absolute top-1/4 left-1/4 h-6 w-6 text-slate-400/30 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <Database
            className="absolute top-3/4 right-1/4 h-8 w-8 text-slate-400/30 animate-float"
            style={{ animationDelay: "3s" }}
          />
          <Globe
            className="absolute top-1/2 right-1/3 h-5 w-5 text-slate-400/30 animate-float"
            style={{ animationDelay: "5s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-5xl font-bold text-white dark:text-slate-900 shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-3xl relative overflow-hidden group border-4 border-slate-800 dark:border-slate-200">
                  <span className="relative z-10 font-black tracking-tight">SE</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-3 -right-3 animate-bounce">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="h-5 w-5 text-white drop-shadow-sm" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 animate-pulse">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-1.5 shadow-lg">
                    <Code className="h-4 w-4 text-white drop-shadow-sm" />
                  </div>
                </div>
              </div>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Soufiane El Qour
            </h1>

            <h2
              className={`text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-bold mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t("hero.title")} | {t("hero.subtitle")}
            </h2>

            <p
              className={`text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-10 text-pretty leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t("hero.description")}
            </p>

            <div
              className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{t("hero.location")}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{t("hero.remote")}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-slate-700 dark:text-slate-200 font-medium">{t("hero.age")}</span>
              </div>
            </div>

            <div
              className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
                {t("hero.contact")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Download className="h-5 w-5" />
                {t("hero.download")}
              </Button>
            </div>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="p-8 text-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-100">{t("contact.email")}</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">soufianeelqour15@gmail.com</p>
            </Card>

            <Card className="p-8 text-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-100">{t("contact.phone")}</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">+212 7 53 66 93 42</p>
            </Card>

            <Card className="p-8 text-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="h-6 w-6 text-white drop-shadow-sm" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Github className="h-6 w-6 text-white drop-shadow-sm" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-100">Social</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">@Soufiane EL QOUR</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
