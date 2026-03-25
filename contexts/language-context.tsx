"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "nav.certificates": "Certificats",

    // Hero Section
    "hero.title": "Développeur Full-Stack",
    "hero.subtitle": "Junior Consultant SAP | Ingénieur Informatique",
    "hero.description":
      "Ingénieur diplômé de l'EMSI Rabat (2025), spécialisé en développement Full-Stack, ERP et gestion de bases de données. Rigoureux, curieux, autonome et doté d'un fort esprit d'équipe.",
    "hero.location": "Rabat, Maroc",
    "hero.remote": "Télétravail uniquement",
    "hero.age": "25 ans",
    "hero.contact": "Me contacter",
    "hero.download": "Télécharger CV",

    // Experience
    "experience.title": "Expérience Professionnelle",
    "experience.sap.title": "Stagiaire – Mise en place d'une solution de reporting sur SAP Cloud Analytics",
    "experience.sap.company": "HANDLE IT",
    "experience.sap.period": "Juillet 2025 - Septembre 2025",
    "experience.sap.location": "Casablanca et périphérie · Hybride",
    "experience.sap.desc1":
      "Participation à la conception et à la mise en place d'une solution de reporting sur SAP Cloud Analytics",
    "experience.sap.desc2": "Analyse des besoins métiers et traduction en rapports et tableaux de bord interactifs",
    "experience.sap.desc3":
      "Découverte des bonnes pratiques en matière de data visualization et d'optimisation du reporting",
    "experience.sap.desc4": "Collaboration avec l'équipe projet pour assurer la qualité et la pertinence des livrables",
    "experience.consultant.title": "Consultant Junior – Bases de Données & Automatisation",
    "experience.consultant.company": "HANDLE IT",
    "experience.consultant.period": "Mai 2023 - Septembre 2024",
    "experience.consultant.location": "Casablanca, Maroc",
    "experience.consultant.desc1": "Gestion de bases Access et SQL Server",
    "experience.consultant.desc2": "Automatisation de processus métier via VBA/Macros",
    "experience.consultant.desc3": "Participation à l'intégration de l'ERP interne",
    "experience.consultant.desc4": "Optimisation des performances et diagnostics",

    "experience.erp.title": "Développeur ERP junior",
    "experience.erp.company": "QUI MANAGE",
    "experience.erp.period": "Mars 2022 - Novembre 2022",
    "experience.erp.location": "Paris, Orly",
    "experience.erp.desc1": "Développement de modules ERP (Java, PHP, SQL)",
    "experience.erp.desc2": "Automatisation des tâches métier",
    "experience.erp.desc3": "Collaboration avec les équipes fonctionnelles",

    "experience.frontend.title": "Stage - Développeur Frontend",
    "experience.frontend.company": "COLAS",
    "experience.frontend.period": "Mai 2020 - Août 2020",
    "experience.frontend.location": "Casablanca",
    "experience.frontend.desc1": "Développement d'interfaces web dynamiques (HTML, CSS, JS, AngularJS)",
    "experience.frontend.desc2": "Collaboration avec l'équipe de développement",
    "experience.frontend.desc3": "Contribution aux tests, débogage, et amélioration continue",

    // Skills
    "skills.title": "Compétences Techniques",
    "skills.languages": "Langages",
    "skills.web": "Développement Web",
    "skills.frameworks": "Frameworks JavaScript",
    "skills.databases": "Bases de Données",
    "skills.tools": "Outils & Environnements",
    "skills.methodologies": "Méthodologies",
    "skills.other": "Autres Compétences",

    // Projects
    "projects.title": "Projets Académiques",
    "projects.sentiment.title": "Application d'analyse de sentiments",
    "projects.sentiment.tech": "Python, Flask, NLP",
    "projects.ecommerce.title": "Site e-commerce",
    "projects.ecommerce.tech": "Python, Django, JavaScript",
    "projects.library.title": "Application de gestion de bibliothèque",
    "projects.library.tech": "Java, JavaFX, MySQL",
    "projects.hotel.title": "Site web d'hôtel",
    "projects.hotel.tech": "Java, JavaScript, HTML/CSS",
    "projects.memory.title": "Système d'allocation mémoire dynamique",
    "projects.memory.tech": "C, Java",
    "projects.restaurant.title": "Gestion d'un service de restauration",
    "projects.restaurant.tech": "Optimisation des processus",
    "projects.communication.title": "Plateforme de communication inter-entreprises",
    "projects.communication.tech": "Réseaux informatiques",
    "projects.insurance.title": "Application de gestion de véhicules d'assurance",
    "projects.insurance.tech": "Java, SQL",

    // Education
    "education.title": "Formation",
    "education.engineer.title": "Ingénieur en informatique (Bac+5)",
    "education.engineer.school": "École Marocaine des Sciences de l'Ingénieur (EMSI) Rabat",
    "education.engineer.period": "Depuis 2025",
    "education.engineer.desc":
      "Durant mes études en cycle d'ingénieur, j'ai renforcé ma base en programmation, conception de systèmes informatiques, et résolution de problèmes complexes.",

    "education.bac.title": "Baccalauréat science physique",
    "education.bac.school": "Avicenne Rabat",
    "education.bac.period": "Septembre 2016 - Septembre 2017",

    "education.english.title": "Centre de langue américaine",
    "education.english.school": "Centre Américain Rabat",
    "education.english.period": "Juin 2014 - Juillet 2018",
    "education.english.desc": "Cours d'anglais, niveau B1",

    // Languages & Interests
    "languages.title": "Langues",
    "languages.french": "Français",
    "languages.french.level": "DELF B2 en Français",
    "languages.english": "Anglais",
    "languages.english.level": "Niveau B1 en Anglais",

    "interests.title": "Centres d'intérêt",
    "interests.cybersecurity": "Cybersécurité",
    "interests.technologies": "Technologies",
    "interests.travel": "Voyages",
    "interests.volunteer": "Volontariat",

    // Contact
    "contact.title": "Contactez-moi",
    "contact.description": "N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // Certificates
    "certificates.title": "Certificats & Formations",
    "certificates.description": "Mes certifications professionnelles et formations continues",
    "certificates.oracle": "Oracle Database Fundamentals",
    "certificates.coursera": "Coursera - Machine Learning",
    "certificates.aws": "AWS Cloud Practitioner",
    "certificates.google": "Google Analytics Certified",
    "certificates.microsoft": "Microsoft Azure Fundamentals",
    "certificates.close": "Fermer",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.certificates": "Certificates",

    // Hero Section
    "hero.title": "Full-Stack Developer",
    "hero.subtitle": "Junior SAP Consultant | Computer Engineer",
    "hero.description":
      "Computer Engineer graduated from EMSI Rabat (2025), specialized in Full-Stack development, ERP and database management. Rigorous, curious, autonomous and with a strong team spirit.",
    "hero.location": "Rabat, Morocco",
    "hero.remote": "Remote work only",
    "hero.age": "25 years old",
    "hero.contact": "Contact me",
    "hero.download": "Download CV",

    // Experience
    "experience.title": "Professional Experience",
    "experience.sap.title": "Intern – SAP Cloud Analytics Reporting Solution Implementation",
    "experience.sap.company": "HANDLE IT",
    "experience.sap.period": "July 2025 - September 2025",
    "experience.sap.location": "Casablanca area · Hybrid",
    "experience.sap.desc1":
      "Participation in the design and implementation of a reporting solution on SAP Cloud Analytics",
    "experience.sap.desc2": "Business requirements analysis and translation into interactive reports and dashboards",
    "experience.sap.desc3": "Discovery of best practices in data visualization and reporting optimization",
    "experience.sap.desc4": "Collaboration with the project team to ensure quality and relevance of deliverables",
    "experience.consultant.title": "Junior Consultant – Databases & Automation",
    "experience.consultant.company": "HANDLE IT",
    "experience.consultant.period": "May 2023 - September 2024",
    "experience.consultant.location": "Casablanca, Morocco",
    "experience.consultant.desc1": "Management of Access and SQL Server databases",
    "experience.consultant.desc2": "Business process automation via VBA/Macros",
    "experience.consultant.desc3": "Participation in internal ERP integration",
    "experience.consultant.desc4": "Performance optimization and diagnostics",

    "experience.erp.title": "Junior ERP Developer",
    "experience.erp.company": "QUI MANAGE",
    "experience.erp.period": "March 2022 - November 2022",
    "experience.erp.location": "Paris, Orly",
    "experience.erp.desc1": "ERP module development (Java, PHP, SQL)",
    "experience.erp.desc2": "Business task automation",
    "experience.erp.desc3": "Collaboration with functional teams",

    "experience.frontend.title": "Internship - Frontend Developer",
    "experience.frontend.company": "COLAS",
    "experience.frontend.period": "May 2020 - August 2020",
    "experience.frontend.location": "Casablanca",
    "experience.frontend.desc1": "Development of dynamic web interfaces (HTML, CSS, JS, AngularJS)",
    "experience.frontend.desc2": "Collaboration with the development team",
    "experience.frontend.desc3": "Contribution to testing, debugging, and continuous improvement",

    // Skills
    "skills.title": "Technical Skills",
    "skills.languages": "Languages",
    "skills.web": "Web Development",
    "skills.frameworks": "JavaScript Frameworks",
    "skills.databases": "Databases",
    "skills.tools": "Tools & Environments",
    "skills.methodologies": "Methodologies",
    "skills.other": "Other Skills",

    // Projects
    "projects.title": "Academic Projects",
    "projects.sentiment.title": "Sentiment Analysis Application",
    "projects.sentiment.tech": "Python, Flask, NLP",
    "projects.ecommerce.title": "E-commerce Website",
    "projects.ecommerce.tech": "Python, Django, JavaScript",
    "projects.library.title": "Library Management Application",
    "projects.library.tech": "Java, JavaFX, MySQL",
    "projects.hotel.title": "Hotel Website",
    "projects.hotel.tech": "Java, JavaScript, HTML/CSS",
    "projects.memory.title": "Dynamic Memory Allocation System",
    "projects.memory.tech": "C, Java",
    "projects.restaurant.title": "Restaurant Service Management",
    "projects.restaurant.tech": "Process Optimization",
    "projects.communication.title": "Inter-company Communication Platform",
    "projects.communication.tech": "Computer Networks",
    "projects.insurance.title": "Insurance Vehicle Management Application",
    "projects.insurance.tech": "Java, SQL",

    // Education
    "education.title": "Education",
    "education.engineer.title": "Computer Engineer (Master's Degree)",
    "education.engineer.school": "Moroccan School of Engineering Sciences (EMSI) Rabat",
    "education.engineer.period": "Since 2025",
    "education.engineer.desc":
      "During my engineering studies, I strengthened my foundation in programming, computer systems design, and complex problem solving.",

    "education.bac.title": "Baccalaureate in Physical Sciences",
    "education.bac.school": "Avicenne Rabat",
    "education.bac.period": "September 2016 - September 2017",

    "education.english.title": "American Language Center",
    "education.english.school": "American Center Rabat",
    "education.english.period": "June 2014 - July 2018",
    "education.english.desc": "English courses, B1 level",

    // Languages & Interests
    "languages.title": "Languages",
    "languages.french": "French",
    "languages.french.level": "DELF B2 in French",
    "languages.english": "English",
    "languages.english.level": "B1 level in English",

    "interests.title": "Interests",
    "interests.cybersecurity": "Cybersecurity",
    "interests.technologies": "Technologies",
    "interests.travel": "Travel",
    "interests.volunteer": "Volunteering",

    // Contact
    "contact.title": "Contact Me",
    "contact.description": "Feel free to contact me to discuss opportunities or collaborations.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // Certificates
    "certificates.title": "Certificates & Training",
    "certificates.description": "My professional certifications and continuous learning",
    "certificates.oracle": "Oracle Database Fundamentals",
    "certificates.coursera": "Coursera - Machine Learning",
    "certificates.aws": "AWS Cloud Practitioner",
    "certificates.google": "Google Analytics Certified",
    "certificates.microsoft": "Microsoft Azure Fundamentals",
    "certificates.close": "Close",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
