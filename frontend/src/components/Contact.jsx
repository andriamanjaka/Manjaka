export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contactez-moi</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>andriamanjaka2004@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Localisation</h3>
                <p>Disponible en remote</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h3>Disponibilité</h3>
                <p>Réponse sous 24h</p>
              </div>
            </div>
          </div>

          <div className="contact-socials" aria-label="Liens de contact">
            <a className="contact-social" href="mailto:andriamanjaka2004@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                <path d="m22 8-10 6L2 8" />
              </svg>
            </a>
            <a className="contact-social" href="https://wa.me/261344400644" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.5L3 20l1.1-4A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8.7 9.4c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.3l.8 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3 0 .5.2.3.8 1.3 1.9 2.1 1.4 1 1.8.8 2.1.7.3-.1.9-.8 1.1-1.1.2-.3.3-.3.5-.2l1.7.8c.2.1.4.2.4.4 0 .2 0 1-.4 1.5-.4.5-.9 1-2.1 1.2-1.2.2-2.6-.2-4.2-1.2-1.6-1-2.8-2.5-3.6-4-.8-1.6-1-2.8-.8-3.8.1-.6.6-1.3 1-1.6Z" />
              </svg>
            </a>
            <a className="contact-social" href="https://github.com/andriamanjaka" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.4-1-1.1-1.3-1.1-1.3-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.3-.2-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.1 9.1 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.7 5 .4.3.8 1 .8 2.1v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              className="contact-social"
              href="https://www.linkedin.com/in/andriamanjaka-bearimanda-fahaetantsoa-3819002b5/"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.9 8.6H3.8V20h3.1V8.6Zm0-3.3a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0ZM20.2 13.3c0-2.7-1.4-4-3.3-4-1.5 0-2.2.8-2.6 1.4V8.6h-3.1V20h3.1v-6.1c0-1.6.3-3.1 2.2-3.1 1.9 0 1.9 1.7 1.9 3.2V20h3.1v-6.7Z" />
              </svg>
            </a>
            <a className="contact-social" href="tel:+261344400644" aria-label="Téléphone">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.6 3.9a2 2 0 0 1 2-1.9h1.6c.7 0 1.4.4 1.7 1.1l1 2.3c.3.7.2 1.5-.3 2L9.8 8c-.3.3-.4.7-.2 1.1a12.2 12.2 0 0 0 5.4 5.4c.4.2.8.1 1.1-.2l.6-.6c.5-.5 1.3-.6 2-.3l2.3 1c.7.3 1.1 1 1.1 1.7v1.6a2 2 0 0 1-1.9 2c-8.8.5-16-6.7-15.6-15.6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

