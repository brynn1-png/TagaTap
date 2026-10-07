import React, { useEffect, useRef, useState } from "react";

const demoUrl = "/demo/index.html";
const profile = {
  name: "Lloyd Pucyutan",
  phone: "+63 09163709474",
  phoneLink: "+639163709474",
  email: "lloydpucyutan01@gmail.com",
  address: "Brgy. San Antonio 2, San Pablo City, Laguna",
};
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`;

const capabilities = [
  { number: "01", title: "Save your details", description: "A contact file makes it easy for someone to keep your number and email." },
  { number: "02", title: "Start a conversation", description: "Call, text, email, or open Messenger from one place." },
  { number: "03", title: "Share more of your world", description: "Add a location and links to the places you want people to find." },
];

const packages = [
  { name: "Starter", price: "₱1,099", description: "1 NFC card with your contact information and social media accounts.", detail: "A simple profile for sharing the essentials.", demo: true },
  { name: "Business", price: "₱2,099", description: "Everything in Starter, plus a business showcase landing page with personalized business information.", detail: "Give your business more room to introduce itself.", demo: "/demo/business.html" },
  { name: "Executive", price: "₱3,999", description: "1 NFC card with a fully customized landing page, premium design, smooth animations, interactive effects, and a seamless mobile experience.", detail: "A tailored experience for a distinctive introduction." },
];

const questions = [
  { question: "Does someone need to install an app?", answer: "No. A SmarTap profile opens in a phone browser, so someone can view your details and choose how to connect." },
  { question: "What can I put on my profile?", answer: "The example card includes contact details, location, social links, and quick actions for getting in touch." },
  { question: "Can someone save my contact details?", answer: "Yes. Save contact downloads a contact file they can add to their phone." },
  { question: "Can I see a complete example?", answer: "Yes. Explore Lloyd’s Starter card or the fictional Morrow Coffee Business showcase to see what each page could look like." },
  { question: "Which package does Lloyd’s example show?", answer: "Lloyd’s profile shows Starter. Business keeps those contact actions and adds a personalized showcase, as shown by the fictional coffee shop demo. Executive includes a fully customized landing page." },
];

function Brand({ className = "" }) {
  return <a className={`brand ${className}`} href="#top" aria-label="SmarTap, back to top"><img src="/smartap-logo.svg" alt="" /></a>;
}

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);
  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (sectionId) window.requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" }));
  }, []);

  function saveContact() {
    const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:${profile.name}`, `TEL;TYPE=CELL:${profile.phoneLink}`, `EMAIL:${profile.email}`, `ADR;TYPE=HOME:;;${profile.address};;;;`, "ORG:SmarTap", "END:VCARD"].join("\r\n");
    const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "lloyd-pucyutan.vcf";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setToast("Contact card downloaded");
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2400);
  }

  function closeMenu() { setMenuOpen(false); }

  return (
    <div className="site" id="top">
      <main>
        <section className="hero-shell" aria-labelledby="hero-title">
          <div className="hero-frame">
            <img className="hero-image" src="/hero-editorial.png" alt="A professional holding a digital card and phone" />
            <div className="hero-shade" />
            <header className="site-header">
              <div className="nav-capsule">
                <Brand className="header-brand" />
                <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
                <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} id="site-nav" aria-label="Main navigation">
                  <a href="#about" onClick={closeMenu}>About</a>
                  <a href="#how-it-works" onClick={closeMenu}>How it works</a>
                  <a href="#example" onClick={closeMenu}>Example</a>
                  <a href="#packages" onClick={closeMenu}>Packages</a>
                  <a href="#questions" onClick={closeMenu}>FAQ</a>
                  <a className="nav-cta" href={demoUrl} onClick={closeMenu}>Open card <Arrow diagonal /></a>
                </nav>
              </div>
            </header>
            <div className="hero-content">
              <p className="hero-eyebrow">The digital business card for a better introduction</p>
              <h1 id="hero-title" className="sr-only">SmarTap — tap, share, connect</h1>
              <img className="hero-wordmark" src="/smartap-logo.svg" alt="" />
              <div className="hero-bottom">
                <p>Share your details, links, and next step with one simple tap. No app required.</p>
                <a className="hero-link" href="#about">Explore SmarTap <Arrow diagonal /></a>
              </div>
            </div>
            <div className="hero-side-note"><span>01 / 03</span><span>Tap. Share. Connect.</span></div>
          </div>
        </section>

        <section className="intro-section page-section" id="about" aria-labelledby="intro-title">
          <div className="section-marker"><span>01 / About</span><span>SmarTap</span></div>
          <h2 className="intro-statement" id="intro-title">“A brief hello can become a <em>lasting connection.</em>”</h2>
          <div className="intro-grid">
            <figure className="intro-photo"><img src="/card-editorial.png" alt="A contactless card beside a smartphone" /><figcaption>One card. More ways to connect.</figcaption></figure>
            <div className="intro-copy">
              <span className="micro-label">The idea</span>
              <p>A SmarTap card opens your digital profile in someone’s phone browser. They can save your contact, reach out, find your location, or follow a link while the conversation is still fresh.</p>
              <a className="underlined-link" href="#how-it-works">See how it works <Arrow diagonal /></a>
            </div>
          </div>
          <div className="capability-strip" aria-label="SmarTap essentials"><span>No app to install</span><span>Contact details in one place</span><span>Links ready to share</span><span>A follow-up made easy</span></div>
        </section>

        <section className="how-section page-section" id="how-it-works" aria-labelledby="how-title">
          <div className="section-marker"><span>02 / How it works</span><span>From card to connection</span></div>
          <div className="how-heading"><h2 id="how-title">One tap. <em>Everything they need.</em></h2><p>Keep the moment simple. Your card takes care of the details.</p></div>
          <div className="how-grid">
            <div className="how-item"><span>01</span><h3>Tap the card</h3><p>Bring your SmarTap card to a compatible smartphone.</p></div>
            <div className="how-item"><span>02</span><h3>Open the profile</h3><p>Your details appear in the phone’s browser.</p></div>
            <div className="how-item"><span>03</span><h3>Stay connected</h3><p>They can save your contact or choose how to follow up.</p></div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="feature-title">
          <div className="feature-inner page-section">
            <div className="feature-aside"><img src="/smartap-mark.svg" alt="" /><span>Designed for what happens after hello.</span></div>
            <div className="feature-main"><div className="section-marker"><span>03 / Your profile</span><span>Made to connect</span></div><h2 id="feature-title">More than a <em>name and number.</em></h2>
              <div className="feature-list">{capabilities.map((item) => <div className="feature-row" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><Arrow diagonal /></div>)}</div>
            </div>
          </div>
        </section>

        <section className="example-section page-section" id="example" aria-labelledby="example-title">
          <div className="section-marker"><span>04 / Example card</span><span>Meet Lloyd</span></div>
          <div className="example-heading"><h2 id="example-title">See the <em>possibilities.</em></h2><p>Lloyd’s Starter profile shows how useful details can live together in one place.</p></div>
          <div className="example-grid">
            <div className="example-photo"><img src="/hero-editorial.png" alt="A professional holding a contactless card" /><span>A simple introduction, ready to continue.</span></div>
            <div className="profile-preview">
              <div className="preview-top"><span>Starter example / 001</span><img src="/smartap-mark.svg" alt="" /></div>
              <h3>Lloyd Pucyutan</h3><p>Choose a way to connect.</p>
              <button className="preview-save" type="button" onClick={saveContact}>Save contact <Arrow diagonal /></button>
              <div className="preview-links">
                <a href={`tel:${profile.phoneLink}`}>Call <Arrow diagonal /></a>
                <a href={`sms:${profile.phoneLink}`}>Text / SMS <Arrow diagonal /></a>
                <a href={`mailto:${profile.email}`}>Email <Arrow diagonal /></a>
                <a href={mapUrl} target="_blank" rel="noreferrer">Location <Arrow diagonal /></a>
              </div>
            </div>
            <div className="example-detail"><span className="micro-label">Everything in one place</span><strong>Contact.<br />Location.<br /><em>More.</em></strong><p>A profile gives each new connection a clear next step.</p></div>
            <div className="example-still"><img src="/card-editorial.png" alt="A contactless card on a table" /></div>
          </div>
          <div className="example-bottom"><p>The social buttons and full contact details are available in the complete sample card.</p><a className="pill-link" href={demoUrl}>Open Lloyd’s full card <Arrow diagonal /></a></div>
        </section>

        <section className="packages-section" id="packages" aria-labelledby="packages-title">
          <div className="packages-inner page-section">
            <div className="section-marker"><span>05 / Packages</span><span>Find your fit</span></div>
            <div className="packages-heading"><h2 id="packages-title">A card for <em>your next step.</em></h2><p>Start with the essentials or make your introduction entirely your own.</p></div>
            <div className="packages-grid">
              {packages.map((offer, index) => <article className="package-card" key={offer.name}>
                <div className="package-card-top"><span className="micro-label">0{index + 1} / SmarTap</span><span className="package-number">0{index + 1}</span></div>
                <div className="package-card-main"><h3>{offer.name} <span>Package</span></h3><p className="package-price">{offer.price}</p><p className="package-description">{offer.description}</p></div>
                <div className="package-card-foot"><p>{offer.detail}</p>{offer.demo && <a href={offer.demo === true ? demoUrl : offer.demo}>Explore the {offer.name} demo <Arrow diagonal /></a>}</div>
              </article>)}
            </div>
            <p className="packages-note">Explore the Starter card and a fictional coffee shop Business page. Executive pages are customized for each client.</p>
          </div>
        </section>

        <section className="questions-section page-section" id="questions" aria-labelledby="questions-title">
          <div className="section-marker"><span>06 / FAQ</span><span>Good to know</span></div>
          <div className="questions-grid"><div><h2 id="questions-title">Frequently asked <em>questions.</em></h2><p>Just the essentials before you tap.</p></div><div className="questions-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title"><div className="closing-inner page-section"><div className="section-marker"><span>Keep the conversation going</span><span>SmarTap</span></div><div className="closing-main"><h2 id="closing-title">Make your next hello <em>last longer.</em></h2><a className="pill-link pill-link-light" href={demoUrl}>Explore the full card <Arrow diagonal /></a></div><div className="closing-foot"><span>Tap. Share. Connect.</span><a href="#top">Back to top ↑</a></div><img className="closing-wordmark" src="/smartap-logo.svg" alt="SmarTap" /></div></section>
      </main>
      <div className={`profile-toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </div>
  );
}

export default App;
