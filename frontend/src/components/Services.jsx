const services = [
  {
    icon: "💻",
    title: "Développement Front-End",
    description: "Créez une présence web moderne et impactante pour votre entreprise avec des interfaces utilisateur intuitives et responsives.",
    features: [
      "Applications React/Next.js performantes",
      "Design responsive et adaptatif",
      "Optimisation des performances",
      "Intégration d'APIs modernes",
      "Animations et interactions fluides"
    ]
  },
  {
    icon: "⚙️",
    title: "Développement Back-End",
    description: "Architecture robuste et sécurisée pour vos applications, garantissant stabilité et scalabilité.",
    features: [
      "APIs RESTful et GraphQL",
      "Bases de données optimisées",
      "Authentification et sécurité",
      "Microservices architecture",
      "Déploiement et monitoring"
    ]
  },
  {
    icon: "📊",
    title: "Analyse de Données",
    description: "Transformez vos données en insights stratégiques pour une prise de décision éclairée.",
    features: [
      "Analyse statistique avancée",
      "Visualisations interactives",
      "Reporting automatisé",
      "Machine Learning basique",
      "Dashboards personnalisés"
    ]
  },
  {
    icon: "🚀",
    title: "Solutions FullStack",
    description: "Applications complètes de A à Z, de la conception au déploiement, avec un stack technologique moderne.",
    features: [
      "Développement end-to-end",
      "Intégration continue",
      "Tests automatisés",
      "Optimisation SEO",
      "Support et maintenance"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes Services</h2>
          <p className="section-subtitle">
            Transformons ensemble vos idées en solutions digitales innovantes. De la conception à la mise en production, je vous accompagne avec expertise et passion.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}