"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"

interface CertificatesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
  const { t } = useLanguage()

  const certificates = [
    {
      name: t("certificates.oracle"),
      issuer: "Oracle",
      date: "2024",
      status: "Certified",
      color: "from-red-500/20 to-orange-500/20",
      icon: <Award className="h-5 w-5 text-red-500" />,
    },
    {
      name: t("certificates.coursera"),
      issuer: "Coursera",
      date: "2024",
      status: "Completed",
      color: "from-blue-500/20 to-cyan-500/20",
      icon: <Award className="h-5 w-5 text-blue-500" />,
    },
    {
      name: t("certificates.aws"),
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Certified",
      color: "from-orange-500/20 to-yellow-500/20",
      icon: <Award className="h-5 w-5 text-orange-500" />,
    },
    {
      name: t("certificates.google"),
      issuer: "Google",
      date: "2023",
      status: "Certified",
      color: "from-green-500/20 to-emerald-500/20",
      icon: <Award className="h-5 w-5 text-green-500" />,
    },
    {
      name: t("certificates.microsoft"),
      issuer: "Microsoft",
      date: "2023",
      status: "Certified",
      color: "from-blue-600/20 to-indigo-500/20",
      icon: <Award className="h-5 w-5 text-blue-600" />,
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glass-effect">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-primary bg-clip-text text-transparent flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            {t("certificates.title")}
          </DialogTitle>
          <p className="text-muted-foreground">{t("certificates.description")}</p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="glass-effect hover-lift transition-all duration-300 group overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10 transform rotate-12">{cert.icon}</div>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                    <p className="text-sm font-semibold gradient-primary bg-clip-text text-transparent">
                      {cert.issuer}
                    </p>
                  </div>
                  {cert.icon}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{cert.date}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 bg-green-500/10 text-green-600 hover:bg-green-500/20"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {cert.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer">
                  <ExternalLink className="h-4 w-4" />
                  <span>Voir le certificat</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
