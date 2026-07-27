"use client";

import { useEffect, useMemo, useState } from "react";

const projects = [
  { name: "BellaCity Factory ERP", type: "Industrial ERP / MES", cat: "Industry", status: "IN PRODUCTION", num: "01", text: "A unified operating system for three plastics factories—production, machines, materials, maintenance, inventory and HR.", stack: ["Flutter", "Node.js", "PostgreSQL", "Docker"], accent: "violet" },
  { name: "QuickServe", type: "Multi-Restaurant Platform", cat: "Hospitality", status: "AVAILABLE", num: "02", text: "Real-time, offline-first restaurant operations across POS, web ordering, branches, delivery, printing and analytics.", stack: ["Flutter", "TypeScript", "Socket.IO", "Prisma"], accent: "cyan" },
  { name: "Sports Print Store", type: "Commerce + Operations", cat: "Retail", status: "IN DEVELOPMENT", num: "03", text: "A complete sportswear customization journey connected to POS, inventory, design review, print queue and delivery.", stack: ["Flutter Web", "NestJS", "RBAC", "WebSocket"], accent: "amber" },
  { name: "Super Cachir", type: "Supermarket POS", cat: "Retail", status: "LAUNCHING", num: "04", text: "Arabic offline POS with weight barcode parsing, dual-location stock, FEFO expiry batches and smart shelf transfers.", stack: ["Flutter Windows", "Drift", "ESC/POS", "Riverpod"], accent: "green" },
  { name: "PharmaPOS", type: "Pharmacy Management", cat: "Healthcare", status: "COMPLETED", num: "05", text: "Expiry-aware pharmacy POS with prescription tracking, purchase orders, supplier credit and Arabic thermal printing.", stack: ["Flutter", "SQLite", "Win32 FFI", "Inno Setup"], accent: "rose" },
  { name: "Suit Rental", type: "Rental Operations", cat: "Services", status: "COMPLETED", num: "06", text: "Cross-platform rental and sales management with conflict-free bookings, item states, payments, penalties and reports.", stack: ["Flutter", "Android", "Windows", "SQLite"], accent: "blue" },
  { name: "Overnice Travel", type: "Hotel Discovery", cat: "Web", status: "LIVE", num: "07", text: "Arabic hotel discovery and comparison experience with seasonal pricing, reviews, galleries and a lightweight CMS.", stack: ["JavaScript", "Netlify", "Vitest", "Responsive UI"], accent: "cyan" },
  { name: "Selected Web Experiences", type: "Menus + Invitations", cat: "Web", status: "LIVE", num: "08", text: "Fast digital restaurant menus and cinematic event invitations with bilingual content, maps, motion and countdowns.", stack: ["HTML", "CSS", "JavaScript", "Motion"], accent: "violet" },
];

const expertise = [
  { n: "01", title: "Smart POS", text: "Fast, Arabic-first point-of-sale systems built around the real flow of Egyptian businesses.", meta: "OFFLINE · BARCODE · PRINT" },
  { n: "02", title: "Operational Intelligence", text: "Systems that turn production, inventory and sales activity into clear operational decisions.", meta: "ERP · MES · ANALYTICS" },
  { n: "03", title: "Connected Experiences", text: "One coherent product across Windows, web and mobile with secure real-time synchronization.", meta: "DESKTOP · WEB · MOBILE" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const categories = ["All", "Hospitality", "Retail", "Industry", "Healthcare", "Services", "Web"];
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter(p => p.cat === filter), [filter]);

  useEffect(() => {
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const move = (e: MouseEvent) => {
      if (dot) dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      if (ring) ring.animate({ transform: `translate(${e.clientX}px,${e.clientY}px)` }, { duration: 380, fill: "forwards" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main>
      <div className="cursor-dot" /><div className="cursor-ring" />
      <div className="noise" aria-hidden="true" />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Cortex Studio home"><span className="brand-mark">C</span><span>CORTEX <b>STUDIO</b></span></a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? "×" : "☰"}</button>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          <a href="#solutions" onClick={() => setMenu(false)}>Solutions</a>
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#studio" onClick={() => setMenu(false)}>Studio</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenu(false)}>Start a project <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="neural" aria-hidden="true">
          <i className="n n1" /><i className="n n2" /><i className="n n3" /><i className="n n4" /><i className="n n5" /><i className="n n6" />
          <span className="l l1" /><span className="l l2" /><span className="l l3" /><span className="l l4" /><span className="l l5" />
          <div className="brain-core"><span>CS</span></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Egyptian software engineering studio</p>
          <h1>Where intelligence<br />meets <em>operations.</em></h1>
          <p className="hero-lead">We engineer Arabic-first operational systems for restaurants, retail and industry—built to keep businesses moving, even when the internet doesn&apos;t.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore our work <span>↓</span></a>
            <a className="button ghost" href="#contact">Discuss a system <span>↗</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>12</strong><span>Products &<br />experiences</span></div>
            <div><strong>03</strong><span>Platforms<br />Web · Mobile · Desktop</span></div>
            <div><strong>24/7</strong><span>Offline-first<br />reliability</span></div>
          </div>
        </div>
        <div className="scroll-note">SCROLL TO ENTER <span>↓</span></div>
      </section>

      <section className="manifesto" id="studio">
        <p className="section-code">[ 00 — THE STUDIO ]</p>
        <p className="big-copy">We don&apos;t build software that simply <span>records work.</span> We build systems that understand it, protect it and make it <i>flow.</i></p>
        <div className="manifesto-foot">
          <p>Founded in Benha, Egypt by systems engineer Mohamed Elrefaey, Cortex Studio combines local operational understanding with global engineering standards.</p>
          <p className="arabic">أنظمة تفكر. تشغيل يُبدع.</p>
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-head">
          <div><p className="section-code">[ 01 — SOLUTIONS ]</p><h2>Intelligence, applied.</h2></div>
          <p>Technology shaped around the way your team actually works—not the other way around.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((e) => <article className="expertise-card" key={e.n}>
            <div className="card-top"><span>{e.n}</span><b>↗</b></div>
            <div className={`glyph glyph-${e.n}`}><i /><i /><i /></div>
            <h3>{e.title}</h3><p>{e.text}</p><small>{e.meta}</small>
          </article>)}
        </div>
      </section>

      <section className="system-reel">
        <div className="reel-copy">
          <p className="section-code">[ OPERATIONAL CORE — LIVE ]</p>
          <h2>One system.<br /><em>Every signal.</em></h2>
          <p>From the first barcode scan to the final production report, our products create one clear, resilient flow of operational data.</p>
          <ul><li><span>01</span> Local-first data protection</li><li><span>02</span> Real-time synchronization</li><li><span>03</span> Role-based control</li><li><span>04</span> Actionable reporting</li></ul>
        </div>
        <div className="ops-panel">
          <div className="panel-bar"><span>OPERATIONS / CONTROL</span><span className="live">● LIVE</span></div>
          <div className="metrics">
            <div><small>API RESPONSE</small><strong>184<sup>ms</sup></strong><i style={{width:"72%"}} /></div>
            <div><small>SYNC STATUS</small><strong>100<sup>%</sup></strong><i style={{width:"100%"}} /></div>
            <div><small>LOCAL UPTIME</small><strong>24/7</strong><i style={{width:"94%"}} /></div>
          </div>
          <div className="data-flow">
            <div className="data-node"><b>POS</b><span>CAPTURE</span></div><i>→</i>
            <div className="data-node active"><b>CORE</b><span>PROCESS</span></div><i>→</i>
            <div className="data-node"><b>BI</b><span>DECIDE</span></div>
          </div>
          <div className="log"><span>09:41:02</span> ORDER_SYNC accepted / branch_03<br /><span>09:41:03</span> INVENTORY_UPDATE committed locally<br /><span>09:41:03</span> PRINT_JOB routed / kitchen_printer_02<br /><span>09:41:04</span> <b>ALL SYSTEMS NOMINAL</b></div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <div><p className="section-code">[ 02 — SELECTED SYSTEMS ]</p><h2>Built for the real world.</h2></div>
          <p>A selection of platforms designed around complex operations, local realities and measurable clarity.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? "active" : ""} onClick={() => setFilter(c)}>{c}</button>)}</div>
        <div className="project-grid">
          {filtered.map(p => <article className={`project-card ${p.accent}`} key={p.name}>
            <div className="project-visual">
              <div className="visual-grid" /><span className="project-num">{p.num}</span>
              <div className="mini-window"><div><i /><i /><i /></div><strong>{p.name.split(" ")[0]}</strong><span>OPERATIONAL SYSTEM</span><b>///</b></div>
              <span className="status">{p.status}</span>
            </div>
            <div className="project-body"><p>{p.type}</p><h3>{p.name}</h3><div className="project-desc">{p.text}</div><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="founder">
        <div className="founder-index">M//E</div>
        <div className="founder-copy"><p className="section-code">[ 03 — FOUNDER / SYSTEMS ENGINEER ]</p><h2>Mohamed<br />Elrefaey.</h2><p>Flutter developer and systems engineer with hands-on experience across mobile, desktop, web, backend infrastructure and factory operations.</p><div className="credentials"><span>B.Sc. Computer Science · 2023</span><span>Flutter · Node.js · Networks</span><span>Systems & Information Specialist</span></div></div>
        <blockquote>“The best system disappears into the operation—leaving only clarity, speed and control.”</blockquote>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" />
        <p className="section-code">[ 04 — INITIALIZE ]</p>
        <h2>Have an operation<br />ready to <em>evolve?</em></h2>
        <p>Tell us where the friction is. We&apos;ll engineer the system around it.</p>
        <div className="contact-actions"><a className="button primary" href="mailto:Mohamedahmed1422001@gmail.com?subject=Cortex Studio — Project inquiry">Start a conversation <span>↗</span></a><a className="button ghost" href="https://wa.me/201100508108" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div>
        <div className="contact-grid"><div><small>EMAIL</small><a href="mailto:Mohamedahmed1422001@gmail.com">Mohamedahmed1422001@gmail.com</a></div><div><small>LOCATION</small><span>Benha, Qalyubia, Egypt</span></div><div><small>LINKEDIN</small><a href="https://linkedin.com/in/mohamed-elrefaey-07b41b204" target="_blank" rel="noreferrer">mohamed-elrefaey ↗</a></div></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">C</span><span>CORTEX <b>STUDIO</b></span></a><p>© 2026 Cortex Studio. Intelligence in every line of code.</p><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
