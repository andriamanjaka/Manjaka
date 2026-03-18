const experiences = [
 
  {
    period: "2023 - 2024",
    title: "Développeur FullStack",
    company: "Polyclinique Ankadifotsy",
    description: "Conception et Réalisation d'une Application pour la Gestion Administrative des Patients",
    tags: ["JavaScript", "React.js", "Express","Mysql"]
  },
  {
    period: "2022 - 2023",
    title: "Développeur ",
    company: "Arc Hotel Fianarantsoa",
    description: "Conception et réalisation d’une application pour la gestion de réservation de chambre à l’arc hotel",
    tags: ["JAVA","PostGreSQL "]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mon Expérience</h2>
          <p className="section-subtitle">
            Découvrez mon parcours professionnel et les projets qui ont façonné mes compétences
          </p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-period">{exp.period}</div>
              <h3 className="timeline-title">{exp.title}</h3> 
              <div className="timeline-company">📍{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}