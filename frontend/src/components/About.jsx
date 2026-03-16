export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A propos de moi</h2>
        </div>
        <div className="about-content">
          <div className="about-intro">
            <p className="about-text">
              Je suis <strong style={{color: '#00D4FF'}}>ANRIAMANJAKA Bearimanda Faharetantsoa</strong>, développeur FullStack passionné avec plus de 3 ans d'expérience. 
              J'aime créer des applications web performantes, intuitives et scalables.
            </p>
          </div>
          
          <div className="about-stack">
            <h3>Mon stack préféré tourne autour de :</h3>
            <div className="stack-tags">
              {['React.js', 'Next.js', 'Node.js/Express.js', 'Laravel', 'Python'].map((tech, index) => (
                <span key={index} className="stack-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <p className="about-text">
            Je m'intéresse également à la science des données, à l'analyse de données ainsi qu'à l'automatisation, 
            domaines que j'explore avec enthousiasme. J'adore apprendre de nouvelles technologies et relever des défis complexes.
          </p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Performance & Scalabilité</h3>
              <p className="feature-description">
                Développement d'applications optimisées pour des performances maximales 
                et une scalabilité adaptée à votre croissance.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Résolution de Problèmes</h3>
              <p className="feature-description">
                Approche analytique pour identifier et résoudre les défis techniques 
                avec des solutions innovantes et efficaces.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Innovation Continue</h3>
              <p className="feature-description">
                Veille technologique constante et adoption des meilleures pratiques 
                pour des solutions modernes et durables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}