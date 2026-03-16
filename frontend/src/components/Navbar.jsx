import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "services", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme || (prefersLight ? "light" : "dark");
    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#home" className="logo">
              ANDRIAMANJAKA <span className="logo-accent"></span>
        </a>
        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className="nav-links">
          <li>
            <a href="#home" className={`nav-link ${activeSection === "home" ? "active" : ""}`}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}>
              A propos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            >
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`}>
              Competences
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeSection === "services" ? "active" : ""}`}
            >
              Services
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label="Changer le theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
        <div className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
          <button
            type="button"
            className="theme-toggle mobile"
            onClick={toggleTheme}
            aria-label="Changer le theme"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
              </svg>
            )}
          </button>
          <a href="#home" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </a>
          <a href="#about" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            A propos
          </a>
          <a href="#projects" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Projets
          </a>
          <a href="#skills" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Competences
          </a>
          <a href="#experience" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Experiences
          </a>
          <a href="#services" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#contact" className="nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
