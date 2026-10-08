import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./starter.css";

export default function StarterDemo() {
  const [status, setStatus] = useState("");
  function saveContact() {
    const vcard = ['BEGIN:VCARD','VERSION:3.0','FN:Lloyd Pucyutan','TEL;TYPE=CELL:+639163709474','EMAIL:lloydpucyutan01@gmail.com','ADR;TYPE=HOME:;;Brgy. San Antonio 2, San Pablo City, Laguna;;;;','ORG:SmarTap','END:VCARD'].join('\r\n');
    const url = URL.createObjectURL(new Blob([vcard], { type: 'text/vcard' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'lloyd-pucyutan.vcf'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Contact card downloaded.');
  }
  async function shareCard() {
    try {
      if (navigator.share) await navigator.share({ title: 'Lloyd Pucyutan | SmarTap', url: location.href });
      else { await navigator.clipboard.writeText(location.href); setStatus('Card link copied.'); }
    } catch (error) { if (error.name !== 'AbortError') setStatus('Use your browser’s share or copy option.'); }
  }
  return (<>
<header className="topbar"><a className="back" href="/">← Back to SmarTap</a><a href="/" aria-label="SmarTap home"><img src="/smartap-logo.svg" alt="SmarTap" /></a></header>
  <main className="layout">
    <div className="portrait"><img src="/hero-editorial.png" alt="A professional holding a contactless card and phone" /><div className="portrait-caption"><span>Example card / Lloyd Pucyutan</span><span>Tap. Share. Connect.</span></div></div>
    <article className="card" aria-labelledby="profile-name">
      <div className="card-head"><span className="eyebrow">Digital business card / 001</span><img src="/smartap-mark.svg" alt="" /></div>
      <h1 id="profile-name">Lloyd Pucyutan</h1>
      <p className="lead">A simple way to turn an introduction into a <em>lasting connection.</em> Choose how you’d like to get in touch.</p>
      <button className="primary" type="button" onClick={saveContact}>Save Lloyd’s contact <span aria-hidden="true">↗</span></button>
      <h2 className="section-title">Contact <span>Quick actions</span></h2>
      <div className="links">
        <a href="tel:+639163709474"><span><strong>Call</strong><small>+63 09163709474</small></span><b aria-hidden="true">↗</b></a>
        <a href="sms:+639163709474"><span><strong>Text / SMS</strong><small>Start a conversation</small></span><b aria-hidden="true">↗</b></a>
        <a href="mailto:lloydpucyutan01@gmail.com"><span><strong>Email</strong><small>lloydpucyutan01@gmail.com</small></span><b aria-hidden="true">↗</b></a>
        <a href="https://m.me/lloydpucyutan" target="_blank" rel="noreferrer"><span><strong>Messenger</strong><small>Chat with Lloyd</small></span><b aria-hidden="true">↗</b></a>
        <a href="https://www.google.com/maps/search/?api=1&query=Brgy.%20San%20Antonio%202%2C%20San%20Pablo%20City%2C%20Laguna" target="_blank" rel="noreferrer"><span><strong>Location</strong><small>Brgy. San Antonio 2, San Pablo City, Laguna</small></span><b aria-hidden="true">↗</b></a>
      </div>
      <h2 className="section-title">Sample social links <span>Follow along</span></h2>
      <div className="social"><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok ↗</a></div>
      <button className="share" type="button" onClick={shareCard}>Share this card ↗</button><p className="status" role="status" aria-live="polite">{status}</p>
    </article>
  </main>
  <footer><div className="footer-inner"><div className="footer-top"><span>Tap. Share. Connect.</span><a href="/">Back to SmarTap ↑</a></div><img src="/smartap-logo.svg" alt="SmarTap" /></div></footer>
  </>);
}

createRoot(document.getElementById('root')).render(<StarterDemo />);
