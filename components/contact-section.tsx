"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "soufianeelqour15@gmail.com",
      href: "mailto:soufianeelqour15@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+212 7 53 66 93 42",
      href: "tel:+212753669342",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Rabat, Maroc",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      href: "https://www.linkedin.com/in/soufiane-e-9363b312b/",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: t("contact.github"),
      href: "https://github.com/Soufiane1203",
      color: "text-gray-800",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("contact.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("contact.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-muted-foreground">{contact.label}</h3>
                        {contact.href ? (
                          <a href={contact.href} className="text-foreground hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links & CTA */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start gap-3 bg-transparent"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <IconComponent className={`h-5 w-5 ${social.color}`} />
                          {social.label}
                          <ExternalLink className="h-4 w-4 ml-auto" />
                        </a>
                      </Button>
                    )
                  })}
                </div>

                <div className="pt-4 border-t border-border">
                  <Button size="lg" className="w-full" asChild>
                    <a href="mailto:soufianeelqour15@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      {t("hero.contact")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
