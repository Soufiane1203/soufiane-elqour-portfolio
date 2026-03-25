"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".skill-fill").forEach((el) => {
        const width = el.dataset.width || "0"
        el.style.width = `${width}%`
      })
    }, 600)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = "1"
            target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".card").forEach((card) => {
      observer.observe(card)
    })

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="wrapper">
        <div className="hero">
          <div>
            <div className="hero-badge">Disponible · CDI / Freelance France</div>
            <h1 className="hero-name">
              Soufiane
              <br />
              <span>El Qour</span>
            </h1>
            <p className="hero-title">Consultant SAP BI · BW/4HANA · SAP Datasphere · SAC</p>

            <div className="hero-contacts">
              <a className="contact-item" href="mailto:soufianelqour15@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                soufianelqour15@gmail.com
              </a>
              <a className="contact-item" href="tel:+212703236408">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.92-8.27A2 2 0 0 1 3.68 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +212 07 03 23 64 08
              </a>
              <span className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Rabat, Maroc
              </span>
              <a className="contact-item" href="https://linkedin.com/in/soufiane-el-qour" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn @Soufiane EL QOUR
              </a>
            </div>

            <div className="hero-pills">
              <span className="pill">Permis B</span>
              <span className="pill">Mobilite France</span>
              <span className="pill">DELF B2</span>
              <span className="pill">Anglais B1</span>
            </div>
          </div>

          <div className="hero-avatar-wrap">
            <div className="avatar-placeholder">SE</div>
          </div>
        </div>

        <div className="grid">
          <div>
            <div className="card delay-2">
              <div className="card-title">Profil</div>
              <p className="profile-text">
                Consultant SAP BI avec une experience operationnelle sur des projets reels couvrant la chaine analytique SAP : CDS Views,
                flux BW/4HANA et SAP Datasphere, livraison de tableaux de bord sur SAC et Embedded Analytics. Domaines : Finance, RH,
                Logistique.
                <br />
                <br />
                Profil oriente resultats, capable de comprendre les enjeux d'architecture de donnees et de les traduire en restitutions a
                valeur ajoutee. Experience professionnelle a Paris et diplome CY Cergy Paris Universite.
              </p>
            </div>

            <div className="card delay-3">
              <div className="card-title">Reporting & Viz</div>
              <div className="skill-item">
                <div className="skill-top">
                  <span className="skill-name">SAP Analytics Cloud</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width="92"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-top">
                  <span className="skill-name">Embedded Analytics S/4</span>
                  <span className="skill-level">Avance</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width="82"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-top">
                  <span className="skill-name">Power BI</span>
                  <span className="skill-level">Avance</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width="78"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-top">
                  <span className="skill-name">Tableau / Oracle BI</span>
                  <span className="skill-level">Intermediaire</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-width="60"></div>
                </div>
              </div>

              <div className="divider"></div>
              <div className="card-title">Modelisation BI</div>
              <div className="tags">
                <span className="tag">SAP BW/4HANA</span>
                <span className="tag">aDSO / CP</span>
                <span className="tag">Datasphere</span>
                <span className="tag">CDS Views</span>
                <span className="tag">ODP / ETL</span>
                <span className="tag">Talend</span>
                <span className="tag">SQL avance</span>
                <span className="tag">HANA Modeling</span>
              </div>

              <div className="divider"></div>
              <div className="card-title">ERP & CRM</div>
              <div className="tags">
                <span className="tag purple">SAP S/4HANA</span>
                <span className="tag purple">Salesforce</span>
                <span className="tag purple">Odoo</span>
              </div>

              <div className="divider"></div>
              <div className="card-title">Developpement</div>
              <div className="tags">
                <span className="tag amber">Java / Spring Boot</span>
                <span className="tag amber">Python / Pandas</span>
                <span className="tag amber">JS / Angular / React</span>
                <span className="tag amber">Docker / CI-CD</span>
                <span className="tag amber">Git</span>
              </div>
            </div>

            <div className="card delay-4">
              <div className="card-title">Langues</div>
              <div className="lang-item">
                <span className="lang-name">Francais</span>
                <div className="lang-dots">
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="lang-item">
                <span className="lang-name">Anglais</span>
                <div className="lang-dots">
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="lang-item">
                <span className="lang-name">Arabe</span>
                <div className="lang-dots">
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                  <div className="dot filled"></div>
                </div>
              </div>
            </div>

            <div className="card delay-5">
              <div className="card-title">Atouts</div>
              <div className="atout-grid">
                <div className="atout">Adaptabilite</div>
                <div className="atout">Orient. solution</div>
                <div className="atout">Esprit d'analyse</div>
                <div className="atout">Travail en equipe</div>
                <div className="atout atout-full" style={{ gridColumn: "span 2" }}>
                  Gestion des priorites
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card delay-2">
              <div className="card-title">Experiences Professionnelles</div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="exp-role">Consultant SAP BI</div>
                  <div className="exp-company">Inetum</div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Janvier 2026 - Present
                    </span>
                    <span className="exp-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Casablanca, Maroc
                    </span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Intervention sur des flux SAP BW/4HANA (aDSO, Composite Providers) et SAP Datasphere dans un contexte projet client
                    reel
                  </li>
                  <li>
                    Mise en oeuvre de CDS Views (Basic, Composite, Consumption) pour l'exposition et la transformation des donnees metier
                    dans SAP S/4HANA
                  </li>
                  <li>Configuration de flux ODP pour l'extraction incrementale vers les couches BI</li>
                  <li>Developpement et publication de tableaux de bord SAC - Finance, Logistique, RH</li>
                  <li>Contribution a la mise en oeuvre d'Embedded Analytics directement dans les fiches et transactions SAP</li>
                  <li>Echanges reguliers avec les equipes metier pour valider les KPIs et ajuster les restitutions</li>
                </ul>
                <div className="tags" style={{ marginTop: "12px" }}>
                  <span className="tag">BW/4HANA</span>
                  <span className="tag">Datasphere</span>
                  <span className="tag">SAC</span>
                  <span className="tag">CDS Views</span>
                  <span className="tag">Embedded Analytics</span>
                </div>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="exp-role">Consultant BI - SAP Analytics Cloud</div>
                  <div className="exp-company">Handle IT</div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Mai 2025 - Sept. 2025
                    </span>
                    <span className="exp-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Casablanca, Maroc
                    </span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>Implementation complete de SAP Analytics Cloud - couche semantique et structuration des modeles de donnees</li>
                  <li>Preparation et transformation des donnees sources : nettoyage, normalisation, hierarchies et indicateurs</li>
                  <li>Creation de modeles analytiques (Live Data Connection vs Import) selon les contraintes de performance</li>
                  <li>Developpement de tableaux de bord interactifs : performances commerciales, logistiques et financieres</li>
                  <li>Optimisation des modeles et accompagnement des equipes internes a l'appropriation de l'outil</li>
                </ul>
                <div className="tags" style={{ marginTop: "12px" }}>
                  <span className="tag">SAC</span>
                  <span className="tag">Live Connection</span>
                  <span className="tag">Data Modeling</span>
                </div>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="exp-role">Developpeur Data - MS Access & VBA</div>
                  <div className="exp-company">Handle IT</div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Mai 2024 - Sept. 2024
                    </span>
                    <span className="exp-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Casablanca, Maroc
                    </span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>Developpement d'une application de gestion de donnees et de bases de donnees relationnelles</li>
                  <li>Creation de requetes SQL avancees pour l'analyse, le filtrage et l'exploitation des donnees</li>
                  <li>Automatisation de traitements repetitifs via macros et scripts VBA</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="exp-role">Developpeur Back-End - Systeme ERP</div>
                  <div className="exp-company">QUI Manage</div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Mars 2023 - Juil. 2023
                    </span>
                    <span className="exp-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Paris, France (Teletravail / hybride)
                    </span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>Developpement d'un module de gestion du Service Client (tickets, taches, workflows) au sein d'un ERP metier</li>
                  <li>Conception d'un systeme de gestion des contrats, lettres et tickets avec suivi du workflow</li>
                  <li>Integration d'un systeme de push mail dans les outils CRM pour rationaliser la communication client</li>
                </ul>
                <div className="tags" style={{ marginTop: "12px" }}>
                  <span className="tag amber">QML</span>
                  <span className="tag amber">JavaScript</span>
                  <span className="tag amber">MySQL</span>
                  <span className="tag amber">Eclipse</span>
                </div>
              </div>
            </div>

            <div className="card delay-4">
              <div className="card-title">Projets Techniques Notables</div>

              <div className="project-item">
                <div className="project-name">Analyse de Sentiments NLP</div>
                <div className="project-desc">
                  Pipeline complet : collecte reseaux sociaux, analyse NLP et visualisation - deployee via Flask (Python / Flask)
                </div>
              </div>
              <div className="project-item">
                <div className="project-name">Application ERP - Gestion de Reparations</div>
                <div className="project-desc">Clients, interventions, suivi - architecture MVC, base relationnelle (J2EE)</div>
              </div>
              <div className="project-item">
                <div className="project-name">Plateforme E-Commerce</div>
                <div className="project-desc">
                  Produits, commandes, paiements - API REST, MVC, securite applicative (Django / Python)
                </div>
              </div>
            </div>

            <div className="card delay-5">
              <div className="card-title">Formation</div>

              <div className="edu-item">
                <div className="edu-degree">Cycle Ingenieur - Genie Informatique</div>
                <div className="edu-school">Ecole Marocaine des Sciences de l'Ingenieur (EMSI)</div>
                <div className="edu-meta">Oct. 2023 - En cours · Rabat, Maroc</div>
                <div className="edu-detail">
                  Specialisation : ERP/SAP · Data Analytics · IA & Machine Learning · Architecture logicielle · Securite
                </div>
                <div className="tags" style={{ marginTop: "10px" }}>
                  <span className="tag green">En cours</span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="edu-item">
                <div className="edu-degree">Licence Informatique - Developpement Full-Stack</div>
                <div className="edu-school">CY Cergy Paris Universite</div>
                <div className="edu-meta">Oct. 2020 - Juil. 2021 · Cergy-Pontoise, France</div>
                <div className="edu-detail">C++ · Python · SQL · HTML5/CSS/JS · UML · UNIX/Linux · Gestion et securisation des bases de donnees</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap");

        :root {
          --bg: #0a0c10;
          --surface: #111318;
          --surface2: #181c24;
          --border: rgba(255, 255, 255, 0.07);
          --accent: #00d4ff;
          --accent2: #7c3aed;
          --accent3: #f59e0b;
          --text: #e8eaf0;
          --muted: #6b7280;
          --tag-bg: rgba(0, 212, 255, 0.08);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: "DM Sans", sans-serif;
          font-size: 15px;
          line-height: 1.65;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
          animation: orb-drift 12s ease-in-out infinite alternate;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 212, 255, 0.06);
          top: -200px;
          right: -100px;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: rgba(124, 58, 237, 0.07);
          bottom: 100px;
          left: -150px;
          animation-delay: -5s;
        }

        @keyframes orb-drift {
          from {
            transform: translate(0, 0) scale(1);
          }

          to {
            transform: translate(30px, 30px) scale(1.1);
          }
        }

        .wrapper {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
          padding: 64px 56px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fade-up 0.7s 0.1s ease forwards;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3));
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--tag-bg);
          border: 1px solid rgba(0, 212, 255, 0.2);
          color: var(--accent);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .hero-badge::before {
          content: "●";
          font-size: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.3;
          }
        }

        .hero-name {
          font-family: "Syne", sans-serif;
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 8px;
        }

        .hero-name span {
          color: var(--accent);
        }

        .hero-title {
          font-size: 17px;
          color: var(--muted);
          font-weight: 300;
          letter-spacing: 0.01em;
          margin-bottom: 24px;
        }

        .hero-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 13.5px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-item:hover {
          color: var(--accent);
        }

        .contact-item svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 12.5px;
          font-weight: 500;
          border: 1px solid var(--border);
          background: var(--surface2);
          color: var(--text);
          transition: all 0.2s;
        }

        .pill:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .avatar-placeholder {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent2), var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Syne", sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          border: 3px solid transparent;
          flex-shrink: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 24px;
          align-items: start;
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }

        .card + .card {
          margin-top: 24px;
        }

        .card-title {
          font-family: "Syne", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-title::before {
          content: "";
          width: 3px;
          height: 14px;
          background: var(--accent);
          border-radius: 2px;
          display: block;
        }

        .skill-item {
          margin-bottom: 16px;
        }

        .skill-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .skill-name {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text);
        }

        .skill-level {
          font-size: 11px;
          color: var(--muted);
        }

        .skill-bar {
          height: 4px;
          background: var(--surface2);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          width: 0%;
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tag {
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 8px;
          background: var(--tag-bg);
          border: 1px solid rgba(0, 212, 255, 0.12);
          color: var(--accent);
        }

        .tag.purple {
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.2);
          color: #a78bfa;
        }

        .tag.amber {
          background: rgba(245, 158, 11, 0.08);
          border-color: rgba(245, 158, 11, 0.2);
          color: var(--accent3);
        }

        .tag.green {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.2);
          color: #34d399;
        }

        .lang-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .lang-name {
          font-size: 13.5px;
        }

        .lang-dots {
          display: flex;
          gap: 5px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--surface2);
          border: 1px solid var(--border);
          transition: background 0.3s;
        }

        .dot.filled {
          background: var(--accent);
          border-color: var(--accent);
        }

        .exp-item {
          border-left: 1px solid var(--border);
          padding-left: 24px;
          margin-bottom: 36px;
          position: relative;
        }

        .exp-item::before {
          content: "";
          position: absolute;
          left: -5px;
          top: 8px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }

        .exp-item:last-child {
          margin-bottom: 0;
        }

        .exp-header {
          margin-bottom: 10px;
        }

        .exp-role {
          font-family: "Syne", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
        }

        .exp-company {
          font-size: 13px;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 5px;
        }

        .exp-meta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .exp-date,
        .exp-location {
          font-size: 12px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .exp-bullets {
          margin-top: 12px;
          padding-left: 0;
          list-style: none;
        }

        .exp-bullets li {
          font-size: 13.5px;
          color: #b0b8c8;
          padding: 4px 0 4px 18px;
          position: relative;
        }

        .exp-bullets li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 10px;
          top: 6px;
        }

        .edu-item {
          margin-bottom: 24px;
        }

        .edu-item:last-child {
          margin-bottom: 0;
        }

        .edu-degree {
          font-family: "Syne", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
        }

        .edu-school {
          font-size: 13px;
          color: var(--accent2);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .edu-meta {
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 6px;
        }

        .edu-detail {
          font-size: 12.5px;
          color: #8898b0;
        }

        .project-item {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 18px 20px;
          margin-bottom: 14px;
          transition: border-color 0.25s, transform 0.25s;
          cursor: default;
        }

        .project-item:hover {
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-2px);
        }

        .project-item:last-child {
          margin-bottom: 0;
        }

        .project-name {
          font-family: "Syne", sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .project-desc {
          font-size: 12.5px;
          color: #8898b0;
        }

        .profile-text {
          font-size: 14px;
          color: #9aabbe;
          line-height: 1.75;
        }

        .atout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .atout {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 12.5px;
          color: var(--muted);
          text-align: center;
          transition: all 0.2s;
        }

        .atout:hover {
          color: var(--text);
          border-color: var(--accent);
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1 {
          animation-delay: 0.15s;
        }

        .delay-2 {
          animation-delay: 0.25s;
        }

        .delay-3 {
          animation-delay: 0.35s;
        }

        .delay-4 {
          animation-delay: 0.45s;
        }

        .delay-5 {
          animation-delay: 0.55s;
        }

        .delay-6 {
          animation-delay: 0.65s;
        }

        .divider {
          height: 1px;
          background: var(--border);
          margin: 24px 0;
        }

        @media (max-width: 760px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 36px 28px;
          }

          .hero-avatar-wrap {
            display: none;
          }

          .wrapper {
            padding: 32px 16px 60px;
          }
        }
      `}</style>
    </>
  )
}
