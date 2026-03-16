export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Disponible</div>
          <p className="hero-subtitle">Bienvenue sur mon portfolio</p>
          <h1 className="hero-title">
            Salut, moi c'est <br />ANRIAMANJAKA
          </h1>
          <p className="hero-highlight">
            Passionné par l'analyse de données et le développement FullStack
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-button primary">
              Voir mes projets
            </a>
            <a href="/cv.pdf" className="cta-button secondary" download>
              Telecharge mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
