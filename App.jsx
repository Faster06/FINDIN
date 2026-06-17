import React, { useState } from 'react';
import './App.css';

const NAV_ITEMS = [
  { id: 'features', label: 'Features' },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
];

function Logo() {
  return (
    <div className="logo" aria-hidden>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#071127" />
        <path d="M6 12H18" stroke="#00c896" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 8H18" stroke="#00c896" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
      <span>FINDIN</span>
    </div>
  );
}

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className={`nav ${open ? 'open' : ''}`}>
          <ul>
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <button className="nav-link" onClick={() => { setOpen(false); onNavigate(n.id); }}>
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">Discover insights faster with FINDIN</h1>
          <p className="hero-sub">Unified search, instant analytics, and reliable security for modern teams.</p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('product')}>Get Started</button>
            <button className="btn btn-ghost btn-lg" onClick={() => onNavigate('features')}>Learn More</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="device-mock">
            <div className="mock-top" />
            <div className="mock-body">
              <div className="mock-left" />
              <div className="mock-right">
                <div className="stat-row">
                  <div className="stat">Users <strong>1.2k</strong></div>
                  <div className="stat">Searches <strong>24k</strong></div>
                </div>
                <div className="chart" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-decor" />
    </section>
  );
}

function Features() {
  const items = [
    { title: 'Smart Search', desc: 'Contextual, lightning-fast search across all your data.' },
    { title: 'AI Analysis', desc: 'Actionable insights powered by advanced models.' },
    { title: 'Fast Results', desc: 'Instant responses optimized for performance.' },
    { title: 'Security', desc: 'Enterprise-grade protection and access controls.' },
    { title: 'Analytics', desc: 'Clear metrics and visual reporting.' },
    { title: 'Integration', desc: 'Connect with tools you already use.' },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Powerful features for modern teams</h2>
        <p className="section-sub">Everything you need to search, analyze, and act on your data.</p>

        <div className="cards">
          {items.map((it) => (
            <div key={it.title} className="card feature-card">
              <div className="icon" />
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="product" id="product">
      <div className="container product-inner">
        <div className="product-visual">
          <div className="dash-mock">
            <div className="dash-top" />
            <div className="dash-content">
              <div className="dash-left">
                <div className="menu-item active">Overview</div>
                <div className="menu-item">Search</div>
                <div className="menu-item">Analytics</div>
                <div className="menu-item">Settings</div>
              </div>
              <div className="dash-main">
                <div className="cards-row">
                  <div className="mini-card">Searches</div>
                  <div className="mini-card">Success</div>
                  <div className="mini-card">Latency</div>
                </div>
                <div className="big-chart" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-copy">
          <h2 className="section-title">A product built for speed and clarity</h2>
          <p className="section-sub">Monitor activity, analyze trends, and take action — all from one beautiful, fast interface.</p>
          <div className="product-ctas">
            <button className="btn btn-primary">Try FINDIN</button>
            <button className="btn btn-ghost">See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { k: 'Users', v: '1.2K' },
    { k: 'Searches', v: '24K' },
    { k: 'Projects', v: '320' },
    { k: 'Accuracy', v: '98.7%' },
  ];
  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.k} className="stat-card">
              <div className="stat-key">{s.k}</div>
              <div className="stat-val">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-copy">
          <h2 className="section-title">About FINDIN</h2>
          <p className="section-sub">FINDIN brings together search, analytics, and integrations so your team can answer questions faster and build with confidence.</p>
          <ul className="about-list">
            <li>Unified platform to reduce context switching</li>
            <li>Secure by design with robust controls</li>
            <li>Designed for teams of all sizes</li>
          </ul>
        </div>

        <div className="about-visual">
          <div className="about-card" />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>Ready to explore FINDIN?</h2>
          <p className="section-sub">Start your free trial and see how FINDIN can transform your workflow.</p>
        </div>
        <div className="cta-actions">
          <button className="btn btn-primary btn-xl">Get Started</button>
          <button className="btn btn-ghost btn-xl">Learn More</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p className="muted">© {new Date().getFullYear()} FINDIN. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul className="socials">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-root">
      <Header onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <Features />
        <Product />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
