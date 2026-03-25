"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const { t } = useLanguage()

  const education = [
    {
      title: t("education.engineer.title"),
      school: t("education.engineer.school"),
      period: t("education.engineer.period"),
      description: t("education.engineer.desc"),
      icon: "🎓",
    },
    {
      title: t("education.bac.title"),
      school: t("education.bac.school"),
      period: t("education.bac.period"),
      icon: "📜",
    },
    {
      title: t("education.english.title"),
      school: t("education.english.school"),
      period: t("education.english.period"),
      description: t("education.english.desc"),
      icon: "🇺🇸",
    },
  ]

  const languages = [
    {
      language: t("languages.french"),
      level: t("languages.french.level"),
    },
    {
      language: t("languages.english"),
      level: t("languages.english.level"),
    },
  ]

  const interests = [
    t("interests.cybersecurity"),
    t("interests.technologies"),
    t("interests.travel"),
    t("interests.volunteer"),
  ]

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t("education.title")}</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{edu.icon}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 text-balance">{edu.title}</CardTitle>
                          <h3 className="text-primary font-semibold mb-2">{edu.school}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {edu.description && (
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="space-y-6">
              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {t("languages.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-sm">{lang.language}</h4>
                        <p className="text-xs text-muted-foreground">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">💡</span>
                    {t("interests.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-muted-foreground">{interest}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
