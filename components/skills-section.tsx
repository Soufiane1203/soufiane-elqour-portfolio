"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { Code, Globe, Database, Settings, GitBranch, Zap } from "lucide-react"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.languages"),
      icon: Code,
      skills: ["Java", "Python", "C", "C#", "C++"],
    },
    {
      title: t("skills.web"),
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "XML"],
    },
    {
      title: t("skills.frameworks"),
      icon: Zap,
      skills: ["Angular", "React", "Vue.js"],
    },
    {
      title: t("skills.databases"),
      icon: Database,
      skills: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Oracle", "Microsoft Access"],
    },
    {
      title: t("skills.tools"),
      icon: Settings,
      skills: ["IntelliJ IDEA", "Eclipse", "GitHub", "Postman"],
    },
    {
      title: t("skills.methodologies"),
      icon: GitBranch,
      skills: ["UML", "Merise", "Scrum"],
    },
  ]

  const otherSkills = [
    "Web services",
    "Sécurité des applications web",
    "Architecture logicielle",
    "Science des données",
  ]

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("skills.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Other Skills */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                {t("skills.other")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
