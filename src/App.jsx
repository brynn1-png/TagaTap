import React, { useEffect, useRef, useState } from "react";
import { siFacebook, siInstagram, siTiktok } from "simple-icons";

const demoUrl = "/demo/index.html";
const profile = {
  name: "Lloyd Pucyutan",
  phone: "+63 09163709474",
  phoneLink: "+639163709474",
  address: "Brgy. San Antonio 2, San Pablo City, Laguna",
  email: "lloydpucyutan01@gmail.com",
};
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(profile.address)}&z=15&output=embed`;

function SocialIcon({ icon, name }) {
  return <svg className={`profile-social ${name}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={icon.path} /></svg>;
}

const questions = [
  {
    question: "Does someone need to install an app?",
    answer: "No. Your TagaTap profile opens in their phone's browser, so they can see your details and choose how to connect.",
  },
  {
    question: "What can I put on my profile?",
    answer: "The example card shows contact details, location, social links, and quick actions.",
  },
  {
    question: "Can someone save my contact details?",
    answer: "Yes. The card includes a Save contact action that downloads a contact file they can add to their phone.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="TagaTap, back to top">
      <img className="brand-mark" src="/tagatap-mark.svg" alt="" />
      <span className="brand-word">TagaTap<span className="brand-period">°</span></span>
    </a>
  );
}

function Arrow({ diagonal = false }) {
  return <span className="button-arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ProfileIcon({ name, size = 22 }) {
  const shapes = {
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    person: <><path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M19 8v6M16 11h6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />,
    bolt: <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
    arrow: <path d="m9 18 6-6-6-6" />,
  };
  return <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{shapes[name]}</svg>;
}

function ProfileHeading({ icon, children }) {
  return <div className="profile-heading"><ProfileIcon name={icon} size={icon === "bolt" ? 25 : 22} /><h2>{children}</h2><span /></div>;
}

function ProfileAction({ icon, href, onClick, children, description, variant = "" }) {
  const contents = <><span className="profile-action-icon">{icon}</span><span className="profile-action-label"><strong>{children}</strong>{description && <small>{description}</small>}</span><span className="profile-action-arrow"><ProfileIcon name="arrow" size={17} /></span></>;
  const className = `profile-action ${variant}`.trim();
  if (href) return <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{contents}</a>;
  return <button className={className} type="button" onClick={onClick}>{contents}</button>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = [stepsRef.current, ...document.querySelectorAll(".scroll-reveal")].filter(Boolean);
    targets.forEach((target) => target.classList.add("motion-ready"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function showToast(message) {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2400);
  }

  function saveContact() {
    const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:${profile.name}`, `TEL;TYPE=CELL:${profile.phoneLink}`, `EMAIL:${profile.email}`, `ADR;TYPE=HOME:;;${profile.address};;;;`, "ORG:TagaTap", "END:VCARD"].join("\r\n");
    const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "lloyd-pucyutan.vcf";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Contact card downloaded");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} id="site-nav" aria-label="Main navigation">
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#live-card" onClick={closeMenu}>Live card</a>
            <a href="#questions" onClick={closeMenu}>Questions</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href={demoUrl} onClick={closeMenu}>Open demo <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-media">
            <img src="/hero.jpg" alt="A person holding a card and smartphone" />
            <div className="mobile-hero-copy"><p>Tap. Share. Connect.</p><h1 id="hero-title">TAGATAP</h1></div>
          </div>
          <div className="mobile-card-intro">
            <div className="mobile-logo"><img src="/tagatap-mark.svg" alt="TagaTap" /></div>
            <p className="mobile-intro">The modern Filipino business card. Share your contact details, social links, and location instantly with a single tap of your TagaTap card to any smartphone—no app required.</p>
            <div className="profile-details">
              <section className="profile-section" aria-labelledby="actions-title">
                <ProfileHeading icon="bolt"><span id="actions-title">Quick Actions</span></ProfileHeading>
                <div className="profile-action-list">
                  <ProfileAction icon={<ProfileIcon name="person" />} onClick={saveContact} description="Add Lloyd to your phone" variant="is-primary">Save contact</ProfileAction>
                  <ProfileAction icon={<ProfileIcon name="phone" />} href={`tel:${profile.phoneLink}`} description={profile.phone}>Call</ProfileAction>
                  <ProfileAction icon={<ProfileIcon name="message" />} href={`sms:${profile.phoneLink}`} description="Start a text conversation">Text / SMS</ProfileAction>
                  <ProfileAction icon={<ProfileIcon name="mail" />} href={`mailto:${profile.email}`} description={profile.email}>Email</ProfileAction>
                  <ProfileAction icon={<ProfileIcon name="message" />} href="https://m.me/lloydpucyutan" description="Chat with Lloyd">Messenger</ProfileAction>
                  <div className="profile-map-card">
                    <div className="profile-map-preview">
                      <iframe src={mapEmbedUrl} title="Map preview of Brgy. San Antonio 2, San Pablo City, Laguna" loading="lazy" tabIndex="-1" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <a className="profile-map-link" href={mapUrl} target="_blank" rel="noreferrer">
                      <span className="profile-action-icon"><ProfileIcon name="pin" /></span>
                      <span className="profile-action-label"><strong>Google Maps</strong><small>Brgy. San Antonio 2 · San Pablo City</small></span>
                      <span className="profile-action-arrow"><ProfileIcon name="arrow" size={17} /></span>
                    </a>
                  </div>
                </div>
              </section>
              <section className="profile-section" aria-labelledby="social-title">
                <ProfileHeading icon="share"><span id="social-title">Social Media &amp; Links</span></ProfileHeading>
                <div className="profile-social-list">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><SocialIcon icon={siFacebook} name="facebook" /><span>Facebook</span></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><SocialIcon icon={siInstagram} name="instagram" /><span>Instagram</span></a>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer"><SocialIcon icon={siTiktok} name="tiktok" /><span>TikTok</span></a>
                </div>
              </section>
            </div>
            <div className="hero-actions">
              <a className="button button-lime" href={demoUrl}>Open the full card <Arrow diagonal /></a>
              <a className="text-link" href="#how-it-works">See how it works <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="steps-section container" id="how-it-works" aria-labelledby="steps-title" ref={stepsRef}>
          <div className="steps-heading scroll-reveal">
            <p className="section-kicker">How it works</p>
            <h2 id="steps-title">From introduction to connection in three easy moves.</h2>
          </div>
          <div className="steps-list">
            <div className="step"><span className="step-number">01</span><div><h3>Tap your card</h3><p>Bring your TagaTap card to a smartphone when you meet.</p></div></div>
            <div className="step"><span className="step-number">02</span><div><h3>Open your profile</h3><p>Your digital card brings your details and links into one place in the browser.</p></div></div>
            <div className="step"><span className="step-number">03</span><div><h3>Keep the conversation going</h3><p>They can save your contact, call, message, email, or follow a link.</p></div></div>
          </div>
        </section>

        <section className="promise-section" aria-labelledby="promise-title">
          <div className="container promise-grid scroll-reveal">
            <p className="section-kicker">What you can share</p>
            <div>
              <h2 id="promise-title">Your details. Their next step.</h2>
              <p>One profile gives people a place to save your details, start a conversation, and find your social links when they are ready to reconnect.</p>
            </div>
          </div>
        </section>

        <section className="demo-section" id="live-card" aria-labelledby="demo-title">
          <div className="container demo-cta">
            <div className="demo-copy scroll-reveal">
              <p className="section-kicker">Full card example</p>
              <h2 id="demo-title">See the whole card.</h2>
              <p>Open Lloyd’s standalone card to see the full profile someone receives after a tap.</p>
            </div>
            <a className="button button-lime" href={demoUrl}>Open Lloyd’s card <Arrow diagonal /></a>
          </div>
        </section>

        <section className="questions-section container" id="questions" aria-labelledby="questions-title">
          <div className="questions-heading scroll-reveal"><p className="section-kicker">Good to know</p><h2 id="questions-title">A few quick answers.</h2></div>
          <div className="questions-list">
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-copy scroll-reveal">
              <p className="section-kicker">Contact</p>
              <h2 id="contact-title">Let's keep in touch.</h2>
              <p>Reach Lloyd directly or save these details for later.</p>
            </div>
            <div className="contact-methods">
              <a href={`tel:${profile.phoneLink}`}>
                <span className="contact-method-icon"><ProfileIcon name="phone" /></span>
                <span><small>Mobile number</small><strong>{profile.phone}</strong></span>
                <Arrow diagonal />
              </a>
              <a href={`mailto:${profile.email}`}>
                <span className="contact-method-icon"><ProfileIcon name="mail" /></span>
                <span><small>Email</small><strong>{profile.email}</strong></span>
                <Arrow diagonal />
              </a>
              <a href={mapUrl} target="_blank" rel="noreferrer">
                <span className="contact-method-icon"><ProfileIcon name="pin" /></span>
                <span><small>Location</small><strong>{profile.address}</strong></span>
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner"><Brand /><p>Tap. Share. Connect.</p><a href={demoUrl}>View the live card <Arrow diagonal /></a></div>
      </footer>
      <div className={`profile-toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </div>
  );
}

export default App;
