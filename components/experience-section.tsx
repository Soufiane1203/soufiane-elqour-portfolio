"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Calendar, Building, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index])
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const experiences = [
    {
      title: t("experience.sap.title"),
      company: t("experience.sap.company"),
      period: t("experience.sap.period"),
      location: t("experience.sap.location"),
      descriptions: [
        t("experience.sap.desc1"),
        t("experience.sap.desc2"),
        t("experience.sap.desc3"),
        t("experience.sap.desc4"),
      ],
      technologies: ["SAP Analytics Cloud", "Data Visualization", "Business Intelligence", "Reporting"],
      icon: <Building className="h-6 w-6" />,
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: t("experience.consultant.title"),
      company: t("experience.consultant.company"),
      period: t("experience.consultant.period"),
      location: t("experience.consultant.location"),
      descriptions: [
        t("experience.consultant.desc1"),
        t("experience.consultant.desc2"),
        t("experience.consultant.desc3"),
        t("experience.consultant.desc4"),
      ],
      technologies: ["Access", "SQL Server", "VBA", "Macros", "ERP"],
      icon: <Building className="h-6 w-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: t("experience.erp.title"),
      company: t("experience.erp.company"),
      period: t("experience.erp.period"),
      location: t("experience.erp.location"),
      descriptions: [t("experience.erp.desc1"), t("experience.erp.desc2"), t("experience.erp.desc3")],
      technologies: ["Java", "PHP", "SQL", "ERP"],
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: t("experience.frontend.title"),
      company: t("experience.frontend.company"),
      period: t("experience.frontend.period"),
      location: t("experience.frontend.location"),
      descriptions: [t("experience.frontend.desc1"), t("experience.frontend.desc2"), t("experience.frontend.desc3")],
      technologies: ["HTML", "CSS", "JavaScript", "AngularJS"],
      icon: <Building className="h-6 w-6" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance gradient-primary bg-clip-text text-transparent">
              {t("experience.title")}
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ${
                    visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 animate-pulse"></div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"}`}>
                    <Card className="glass-effect hover-lift transition-all duration-300 group overflow-hidden">
                      <CardHeader className={`bg-gradient-to-r ${exp.color} relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 opacity-10">{exp.icon}</div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className={index % 2 === 0 ? "md:text-right" : ""}>
                            <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <h3 className="text-lg font-semibold gradient-primary bg-clip-text text-transparent mb-2">
                              {exp.company}
                            </h3>
                            <div
                              className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}
                            >
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-6">
                        <ul className="space-y-3 mb-6">
                          {exp.descriptions.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start gap-3 group/item">
                              <span className="text-primary mt-1 group-hover/item:animate-pulse">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              </span>
                              <span className="text-muted-foreground leading-relaxed">{desc}</span>
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift cursor-default"
                              style={{ animationDelay: `${techIndex * 100}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
