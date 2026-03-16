import { useState } from "react";
import ge1 from "../image/Ge1.png";
import ge2 from "../image/Ge2.png";
import ge3 from "../image/Ge3.png";
import ge4 from "../image/Ge4.png";
import ge5 from "../image/Ge5.png";
import ge6 from "../image/Ge6.png";
import what1 from "../image/what1.png";
import what2 from "../image/what2.png";
import what3 from "../image/what3.png";
import what4 from "../image/what4.png";
import what5 from "../image/what5.png";
import plan1 from "../image/plan1.png";
import plan2 from "../image/plan2.png";
import plan3 from "../image/plan3.png";
import plan4 from "../image/plan4.png";
import plan5 from "../image/plan5.png";
import plan6 from "../image/plan6.png";
import plan7 from "../image/plan7.png";
import port1 from "../image/port1.png";
import port2 from "../image/port2.png";
import port3 from "../image/port3.png";
import port4 from "../image/port4.png";
import port5 from "../image/port5.png";
import port6 from "../image/port6.png";

const projects = [
  {
    title: "Application de Gestion d'Entreprise",
    description:
      "Plateforme complete de gestion d'entreprise avec dashboard analytique, gestion des employes et suivi des performances en temps reel.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    image: ge1,
    gallery: [ge1, ge2, ge3, ge4, ge5, ge6],
    links: {
      live: "#",
      github: "https://github.com/andriamanjaka/gestion-entreprise-app"
    }
  },
  {
    title: "Clone WhatsApp full‑stack en temps réel ",
    description:
      "Cette application de messagerie instantanée inspirée de WhatsApp propose une expérience utilisateur complète et sécurisée, intégrant des échanges privés ou de groupe en temps réel, la gestion des statuts de messages, le partage multimédia et une authentification JWT robuste.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    image: what1,
    gallery: [what1, what2, what3, what4, what5],
    links: {
      live: "#",
      github: "https://github.com/andriamanjaka/ManjakaApp1"
    }
  },
  {
    title: "Portfolio Personnel Moderne",
    description:
      "Portfolio moderne et interactif présentant mes projets et compétences avec des animations fluides et un design épuré optimisé pour la performance.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    image: port1,
    gallery: [port1, port2, port3, port4, port5, port6],
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Smart planning",
    description:
      "une application web intelligente qui aide les étudiants en informatique à organiser leur temps d’apprentissage, planifier leurs études et progresser dans de nouvelles compétences technologiques.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    image: plan1,
    gallery: [plan1, plan2, plan3, plan4, plan5, plan6, plan7],
    links: {
      live: "#",
      github: "#"
    }
  },
];

const fallbackGradients = [
  "linear-gradient(135deg, #00D4FF, #0099CC)",
  "linear-gradient(135deg, #6D5BFF, #4A3AFF)",
  "linear-gradient(135deg, #18C29C, #0D8F77)",
  "linear-gradient(135deg, #FF9E2C, #F97316)",
  "linear-gradient(135deg, #FF5D7D, #E11D48)",
  "linear-gradient(135deg, #23B5D3, #2A6F97)"
];

function getProjectInitials(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Projects() {
  const [galleryIndexes, setGalleryIndexes] = useState({});

  const getCurrentImageIndex = (projectIndex, galleryLength) => {
    const value = galleryIndexes[projectIndex] ?? 0;
    return Math.max(0, Math.min(value, galleryLength - 1));
  };

  const goToPrevImage = (projectIndex, galleryLength) => {
    setGalleryIndexes((prev) => {
      const current = prev[projectIndex] ?? 0;
      return {
        ...prev,
        [projectIndex]: (current - 1 + galleryLength) % galleryLength
      };
    });
  };

  const goToNextImage = (projectIndex, galleryLength) => {
    setGalleryIndexes((prev) => {
      const current = prev[projectIndex] ?? 0;
      return {
        ...prev,
        [projectIndex]: (current + 1) % galleryLength
      };
    });
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Decouvrez une selection de mes realisations les plus significatives
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {Array.isArray(project.gallery) && project.gallery.length > 0 ? (
                  <>
                    <div className="project-image-carousel">
                      {project.gallery.map((img, imageIndex) => (
                        <img
                          key={`${project.title}-gallery-${imageIndex}`}
                          src={img}
                          alt={`${project.title} capture ${imageIndex + 1}`}
                          className={`project-image-carousel-item${
                            imageIndex === getCurrentImageIndex(index, project.gallery.length) ? " is-active" : ""
                          }`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                    <div className="project-image-controls">
                      <button
                        type="button"
                        className="project-image-control-button"
                        onClick={() => goToPrevImage(index, project.gallery.length)}
                        aria-label="Image precedente"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="project-image-control-button"
                        onClick={() => goToNextImage(index, project.gallery.length)}
                        aria-label="Image suivante"
                      >
                        ›
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-media"
                    loading="lazy"
                  />
                )}
                <div
                  className="project-image-fallback"
                  style={{ background: fallbackGradients[index % fallbackGradients.length] }}
                >
                  {getProjectInitials(project.title)}
                </div>
                <div className="project-image-overlay">
                  <span className="project-image-label">
                    {project.gallery ? `${project.gallery.length} images` : "Apercu du projet"}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.github} className="project-link">
                    <span>Code source</span>
                    <span>⌗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
