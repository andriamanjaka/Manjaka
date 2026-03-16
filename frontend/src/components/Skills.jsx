const skillsData = {
  frontend: {
    title: "Front-End",
    skills: ["ReactJS", "NextJS", "VueJS", "Tailwind CSS", "Typescript"],
    count: "5 compétences maîtrisées"
  },
  backend: {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "PHP", "Laravel","Java Spring boot"],
    count: "5 compétences maîtrisées"
  },
  database: {
    title: "Bases de données & Outils",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "UML", "Git & GitHub"],
    count: "7 compétences maîtrisées"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">
            Découvrez mes compétences techniques acquises au fil de mes projets et expériences
          </p>
        </div>
        <div className="skills-categories">
          {Object.entries(skillsData).map(([key, category]) => (
            <div key={key} className="skill-category">
              <div className="skill-header">
                <h3 className="skill-title">{category.title}</h3>
                <span className="skill-count">{category.count}</span>
              </div>
              <div className="skill-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}