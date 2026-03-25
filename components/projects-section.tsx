"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { Folder, Code2 } from "lucide-react"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.sentiment.title"),
      tech: t("projects.sentiment.tech"),
      icon: "🧠",
    },
    {
      title: t("projects.ecommerce.title"),
      tech: t("projects.ecommerce.tech"),
      icon: "🛒",
    },
    {
      title: t("projects.library.title"),
      tech: t("projects.library.tech"),
      icon: "📚",
    },
    {
      title: t("projects.hotel.title"),
      tech: t("projects.hotel.tech"),
      icon: "🏨",
    },
    {
      title: t("projects.memory.title"),
      tech: t("projects.memory.tech"),
      icon: "💾",
    },
    {
      title: t("projects.restaurant.title"),
      tech: t("projects.restaurant.tech"),
      icon: "🍽️",
    },
    {
      title: t("projects.communication.title"),
      tech: t("projects.communication.tech"),
      icon: "🌐",
    },
    {
      title: t("projects.insurance.title"),
      tech: t("projects.insurance.tech"),
      icon: "🚗",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("projects.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{project.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight text-balance">{project.title}</CardTitle>
                    </div>
                    <Folder className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.tech}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
