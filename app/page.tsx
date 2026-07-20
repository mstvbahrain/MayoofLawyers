const Arrow = () => <span aria-hidden="true">↗</span>;
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a12 12 0 0 0 5.6 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4Zm-8.4 18.2c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.2-.1-.4-.2-.7-.4Z" />
  </svg>
);

const practices = [
  {
    number: "01",
    title: "Criminal Law",
    text: "Measured advice and vigorous representation through every stage of criminal proceedings.",
  },
  {
    number: "02",
    title: "Corporate & Commercial",
    text: "Practical legal support for businesses, agreements, transactions and day-to-day operations.",
  },
  {
    number: "03",
    title: "Construction Law",
    text: "Clear guidance for contractors, owners and stakeholders across projects and disputes.",
  },
  {
    number: "04",
    title: "Property Law",
    text: "Thoughtful counsel on property transactions, ownership matters and real-estate disputes.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mayoof Lawyers home">
          <img className="official-logo" src="/images/mayoof-lawyers-logo.png" alt="Mayoof Lawyers" />
        </a>
        <nav aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#lawyers">Our Lawyers</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="#about">About</a>
            <a href="#practice">Practice Areas</a>
            <a href="#lawyers">Our Lawyers</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow light">Established 2006 · Kingdom of Bahrain</p>
          <h1>Clear counsel.<br />Strong representation.</h1>
          <div className="gold-rule" />
          <p className="hero-intro">
            Trusted legal guidance delivered with clarity, discretion and a
            personal commitment to every client.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Book a Consultation <Arrow /></a>
            <a className="button secondary" href="#practice">Explore Our Practice <Arrow /></a>
          </div>
        </div>

        <div className="hero-lawyers" aria-label="Our lawyers">
          <a className="portrait-card" href="#bushra">
            <div className="portrait-placeholder has-photo">
              <img src="/images/bushra-mayoof.png" alt="Bushra Mayoof" />
            </div>
            <div className="portrait-name"><strong>Bushra Mayoof</strong><span>View profile</span></div>
          </a>
          <a className="portrait-card" href="#ahmed">
            <div className="portrait-placeholder has-photo">
              <img src="/images/ahmed-mayoof.jpg" alt="Ahmed Mayoof" />
            </div>
            <div className="portrait-name"><strong>Ahmed Mayoof</strong><span>View profile</span></div>
          </a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Practice highlights">
        <div><span>01</span><strong>Corporate & Commercial</strong></div>
        <div><span>02</span><strong>Dispute Resolution</strong></div>
        <div><span>03</span><strong>Private Client</strong></div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About the firm</p>
          <h2>Personal attention.<br />Professional resolve.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">A leading Bahrain law firm providing a wide range of legal consultancy and representation services since 2006.</p>
          <p>Our clients include corporations across diverse sectors, private individuals throughout the GCC and expatriate clients from Europe and India. We combine personal service with disciplined legal thinking, taking the time to understand what is at stake and explain the path ahead clearly.</p>
          <a className="text-link" href="#lawyers">Meet Bushra and Ahmed <Arrow /></a>
        </div>
      </section>

      <section className="section practice" id="practice">
        <div className="section-heading">
          <div><p className="eyebrow light">Practice areas</p><h2>Focused experience.<br />Practical advice.</h2></div>
          <p>From personal matters to complex business challenges, we provide clear, strategic legal support to clients in Bahrain and across the GCC.</p>
        </div>
        <div className="practice-grid">
          {practices.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact" aria-label={`Enquire about ${item.title}`}>Enquire <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section lawyers" id="lawyers">
        <div className="section-kicker"><p className="eyebrow">Our lawyers</p><h2>Two perspectives.<br />One standard.</h2></div>
        <div className="lawyer-profile pending" id="bushra">
          <div className="profile-photo has-photo">
            <img src="/images/bushra-mayoof.png" alt="Bushra Mayoof, founder of Mayoof Lawyers" />
          </div>
          <div className="profile-copy">
            <p className="profile-number">01</p>
            <h3>Bushra Mayoof</h3>
            <p className="role">Founder &amp; Lawyer</p>
            <p>Bushra Yousuf Ahmed Mayoof founded the firm after beginning her legal practice and consultancy career in 2006.</p>
            <p>Across her career, she has earned numerous certificates of appreciation, awards and professional recognitions, and has completed legal courses and seminars in both Arabic and English.</p>
            <div className="expertise"><span>Legal Consultancy</span><span>Arabic &amp; English</span><span>Private Client</span><span>Corporate Client</span></div>
            <div className="profile-actions">
              <a className="phone-action" href="tel:+97339919001">Call +973 3991 9001</a>
              <a className="whatsapp-action" href="https://wa.me/97339919001?text=Hello%20Ms.%20Bushra%2C%20I%20would%20like%20to%20request%20a%20legal%20consultation." target="_blank" rel="noreferrer" aria-label="WhatsApp Bushra Mayoof">
                <WhatsAppIcon /> WhatsApp Bushra
              </a>
            </div>
          </div>
        </div>
        <div className="lawyer-profile reverse" id="ahmed">
          <div className="profile-photo has-photo">
            <img src="/images/ahmed-mayoof.jpg" alt="Ahmed Mayoof, lawyer at Mayoof Lawyers" />
          </div>
          <div className="profile-copy">
            <p className="profile-number">02</p>
            <h3>Ahmed Mayoof</h3>
            <p className="role">Lawyer</p>
            <p>Ahmed is an experienced lawyer with a demonstrated history in legal practice. His work spans criminal, construction, property and corporate law.</p>
            <p>He holds an LLB focused on Criminal Justice and Corrections from Kingdom University in Bahrain.</p>
            <div className="expertise"><span>Criminal Law</span><span>Construction Law</span><span>Property Law</span><span>Corporate Law</span></div>
            <div className="profile-actions">
              <a className="phone-action" href="tel:+97338333101">Call +973 3833 3101</a>
              <a className="whatsapp-action" href="https://wa.me/97338333101?text=Hello%20Mr.%20Ahmed%2C%20I%20would%20like%20to%20request%20a%20legal%20consultation." target="_blank" rel="noreferrer" aria-label="WhatsApp Ahmed Mayoof">
                <WhatsAppIcon /> WhatsApp Ahmed
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light">Speak with us</p>
          <h2>Let’s discuss your<br />legal matter.</h2>
          <p>Share a few details and the firm can arrange a confidential consultation.</p>
          <address className="office-address">
            <strong>Our office</strong>
            ERA 58, Office 101, 10th Floor, Building 361<br />
            Road 1701, Block 317, Diplomatic Area<br />
            Kingdom of Bahrain
            <span className="office-contact-links">
              <a href="tel:+97317242434">+973 1724 2434</a>
              <a href="mailto:mayoof.lawyers@gmail.com">mayoof.lawyers@gmail.com</a>
            </span>
          </address>
        </div>
        <div className="contact-directory" aria-label="Contact numbers">
          <article>
            <div><span>Office</span><strong>Mayoof Lawyers</strong></div>
            <a className="directory-phone" href="tel:+97317242434">+973 1724 2434</a>
          </article>
          <article>
            <div><span>Founder &amp; Lawyer</span><strong>Bushra Mayoof</strong></div>
            <div className="directory-actions">
              <a className="directory-phone" href="tel:+97339919001">+973 3991 9001</a>
              <a className="directory-whatsapp" href="https://wa.me/97339919001?text=Hello%20Ms.%20Bushra%2C%20I%20would%20like%20to%20request%20a%20legal%20consultation." target="_blank" rel="noreferrer" aria-label="WhatsApp Bushra Mayoof from contact section"><WhatsAppIcon /></a>
            </div>
          </article>
          <article>
            <div><span>Lawyer</span><strong>Ahmed Mayoof</strong></div>
            <div className="directory-actions">
              <a className="directory-phone" href="tel:+97338333101">+973 3833 3101</a>
              <a className="directory-whatsapp" href="https://wa.me/97338333101?text=Hello%20Mr.%20Ahmed%2C%20I%20would%20like%20to%20request%20a%20legal%20consultation." target="_blank" rel="noreferrer" aria-label="WhatsApp Ahmed Mayoof from contact section"><WhatsAppIcon /></a>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><img className="official-logo" src="/images/mayoof-lawyers-logo.png" alt="Mayoof Lawyers" /></div>
        <p><a href="tel:+97317242434">+973 1724 2434</a> · <a href="mailto:mayoof.lawyers@gmail.com">mayoof.lawyers@gmail.com</a></p>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Mayoof Lawyers. All rights reserved.</p>
          <small>Managed by <a href="https://mstvmedia.com" target="_blank" rel="noreferrer">MSTV Media</a></small>
        </div>
      </footer>
    </main>
  );
}
