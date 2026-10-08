import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./business.css";

export default function BusinessDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  function saveContact() {
    const vcard = ['BEGIN:VCARD','VERSION:3.0','FN:Morrow Coffee','ORG:Morrow Coffee','TEL;TYPE=WORK:+639000000000','EMAIL:hello@morrow.example','ADR;TYPE=WORK:;;San Pablo City;Laguna;;;Philippines','URL:'+location.href,'NOTE:Fictional SmarTap Business package demo. Replace sample details with real business information.','END:VCARD'].join('\r\n');
    const url = URL.createObjectURL(new Blob([vcard], { type: 'text/vcard' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'morrow-coffee-sample.vcf'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Sample contact downloaded.');
  }
  async function sharePage() {
    try {
      if (navigator.share) await navigator.share({ title: 'Morrow Coffee | Business Demo', url: location.href });
      else { await navigator.clipboard.writeText(location.href); setStatus('Demo link copied.'); }
    } catch (error) { if (error.name !== 'AbortError') setStatus('Use your browser’s share or copy option.'); }
  }
  return (<>
<div className="demo-banner"><span>Business package demo <span aria-hidden="true">/</span> Fictional coffee shop</span><a href="/#packages">Explore SmarTap packages <span aria-hidden="true">↗</span></a></div>
  <main id="top">
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" src="/coffee-hero.png" alt="A barista preparing pour-over coffee in a warm, contemporary café" />
      <div className="hero-overlay"></div>
      <header className="site-header">
        <a className="shop-brand" href="#top" aria-label="Morrow Coffee, back to top"><span className="brand-symbol" aria-hidden="true">m<span>·</span></span><span>Morrow<br />Coffee</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="shop-nav" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <nav id="shop-nav" className={menuOpen ? "is-open" : ""} aria-label="Coffee shop navigation" onClick={() => setMenuOpen(false)}><a href="#our-story">Our story</a><a href="#menu">The menu</a><a href="#visit">Visit</a><a href="#connect">Connect</a></nav>
        <a className="header-action" href="#menu">Explore the menu <span aria-hidden="true">↗</span></a>
      </header>
      <div className="hero-content">
        <p className="eyebrow">Slow mornings, good coffee <span aria-hidden="true">✳</span> San Pablo City</p>
        <h1 id="hero-title">A little room<br />to <em>slow down.</em></h1>
        <p className="hero-intro">Coffee made with care, served with room to stay a while. Pull up a chair and make the day yours.</p>
        <a className="round-link" href="#our-story">Step inside <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-bottom"><span>Est. for the everyday</span><span>Scroll to explore ↓</span></div>
    </section>

    <section className="story section-wrap" id="our-story" aria-labelledby="story-title">
      <div className="section-index"><span>01 / Our story</span><span>Morrow Coffee</span></div>
      <div className="story-grid">
        <div className="story-copy"><p className="mini-label">Welcome in</p><h2 id="story-title">Good things take <em>a little time.</em></h2><p>Morrow is an imagined neighborhood coffee shop built for the in-between moments: the first cup before a full day, a conversation that runs long, and a quiet pause just for you.</p><a className="text-link" href="#menu">See what’s brewing <span aria-hidden="true">↗</span></a></div>
        <figure><img src="/coffee-table.png" alt="Two cappuccinos and a pastry in afternoon light" loading="lazy" /><figcaption>Made to be enjoyed, one cup at a time.</figcaption></figure>
      </div>
    </section>

    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="section-wrap menu-inner"><div className="section-index"><span>02 / The menu</span><span>Something for your moment</span></div>
        <div className="menu-heading"><h2 id="menu-title">From the <em>counter.</em></h2><p>A small sample menu showing how a Business page can give customers a taste of what you offer.</p></div>
        <div className="menu-grid">
          <article className="menu-item"><span>01 / Coffee</span><h3>House Espresso</h3><p>Rich, balanced, and ready when you are.</p><strong>₱120</strong></article>
          <article className="menu-item"><span>02 / Coffee</span><h3>Honey Oat Latte</h3><p>Soft espresso, oat milk, and a little honey.</p><strong>₱185</strong></article>
          <article className="menu-item"><span>03 / Coffee</span><h3>Slow Pour</h3><p>Hand-brewed to bring out the good details.</p><strong>₱170</strong></article>
          <article className="menu-item"><span>04 / Bake</span><h3>Butter Croissant</h3><p>Flaky, warm, and especially good with coffee.</p><strong>₱145</strong></article>
        </div>
        <p className="menu-note">Sample items and prices for demonstration only.</p>
      </div>
    </section>

    <section className="visit section-wrap" id="visit" aria-labelledby="visit-title"><div className="section-index"><span>03 / Visit</span><span>Find your place</span></div><div className="visit-grid"><div><p className="mini-label">See you soon</p><h2 id="visit-title">Your next cup <em>is waiting.</em></h2><p>This sample section shows where a business can share its real address and opening hours.</p></div><div className="visit-details"><div><span>Example location</span><strong>San Pablo City, Laguna</strong></div><div><span>Example hours</span><strong>Monday–Saturday<br />8:00 AM–7:00 PM</strong></div></div></div></section>

    <section className="connect-section" id="connect" aria-labelledby="connect-title"><div className="section-wrap connect-inner"><div className="section-index"><span>04 / Connect</span><span>Your digital business card</span></div><div className="connect-grid"><div className="connect-intro"><p className="mini-label">Take us with you</p><h2 id="connect-title">One tap. <em>Every way to connect.</em></h2><p>The Business package keeps the Starter card’s contact actions and adds this showcase for the shop’s story, menu, and details.</p></div><div className="contact-card"><div className="contact-card-head"><span>Example business profile / Morrow Coffee</span><span aria-hidden="true">↗</span></div><h3>Morrow Coffee</h3><p>Save the shop, get in touch, or share this page.</p><button className="save-contact" type="button" onClick={saveContact}>Save business contact <span aria-hidden="true">↗</span></button><div className="contact-actions" onClick={(event) => { const button = event.target.closest("[data-sample]"); if (button) setStatus(button.dataset.sample); }}><button type="button" data-sample="A real shop phone number would open your dialer."><strong>Call</strong><span>+63 900 000 0000</span></button><button type="button" data-sample="A real shop phone number would open your messages."><strong>Text / SMS</strong><span>Start a conversation</span></button><button type="button" data-sample="A real shop email would open your mail app."><strong>Email</strong><span>hello@morrow.example</span></button><button type="button" data-sample="A real Messenger profile would open here."><strong>Messenger</strong><span>Chat with the shop</span></button><button type="button" data-sample="A real shop address would open directions."><strong>Location</strong><span>San Pablo City, Laguna</span></button></div><div className="social-actions" onClick={(event) => { const button = event.target.closest("[data-sample]"); if (button) setStatus(button.dataset.sample); }}><span>Sample social links</span><div><button type="button" data-sample="A real Facebook page would open here.">Facebook ↗</button><button type="button" data-sample="A real Instagram page would open here.">Instagram ↗</button><button type="button" data-sample="A real TikTok page would open here.">TikTok ↗</button></div></div><button className="share-page" type="button" onClick={sharePage}>Share this page <span aria-hidden="true">↗</span></button><p className="sample-note">Contact details and social links are illustrative; replace them with the business’s real information.</p><p id="contact-status" role="status" aria-live="polite">{status}</p></div></div></div></section>
  </main>
  <footer><div className="footer-wrap"><div className="footer-top"><a className="shop-brand" href="#top"><span className="brand-symbol" aria-hidden="true">m<span>·</span></span><span>Morrow<br />Coffee</span></a><p>A fictional coffee shop showcase<br />for the SmarTap Business package.</p><a href="/#packages">Back to packages ↗</a></div><div className="footer-bottom"><span>Business showcase demo</span><a href="/" aria-label="Back to SmarTap"><img src="/smartap-logo.svg" alt="SmarTap" /></a></div></div></footer>
  </>);
}

createRoot(document.getElementById("root")).render(<BusinessDemo />);

