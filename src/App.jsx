import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, Code2, GraduationCap,
  Menu, Network, ShieldCheck, X,
} from 'lucide-react'
import './styles.css'

const navigation = [['Écosystème', 'ecosysteme'], ['Technologies', 'technologies'], ['À propos', 'apropos']]
const products = [
  { number: '01', name: 'SYLIChange', category: 'ACCÈS · CONVERSION', description: 'Une passerelle entre les actifs numériques et les moyens de paiement locaux.', tags: ['Crypto-actifs', 'Mobile Money', 'Non-custodial'], logo: 'logos/sylichange-logo.jpg', url: 'https://sylichange.com/', tone: 'cyan' },
  { number: '02', name: 'SYLI Payments', category: 'INFRASTRUCTURE · API', description: 'Des outils de paiement crypto pensés pour s’intégrer aux services des entreprises.', tags: ['API REST', 'Paiements', 'B2B'], logo: 'logos/syli-payments-logo.jpg', url: 'https://sylipayments.com/', tone: 'blue' },
  { number: '03', name: 'Savoir Plus', category: 'ÉDUCATION · COMPÉTENCES', description: 'Une plateforme de formation en ligne pour apprendre, transmettre et progresser.', tags: ['E-learning', 'Formateurs', 'Entreprises'], Icon: GraduationCap, url: 'https://www.savoirplus.io/', tone: 'gold' },
]
const capabilities = [
  { number: '01', Icon: Code2, title: 'Infrastructure API', text: 'Des intégrations et des flux numériques conçus pour connecter les services.' },
  { number: '02', Icon: Blocks, title: 'Blockchain', text: 'Des technologies liées aux actifs numériques et aux nouveaux usages financiers.' },
  { number: '03', Icon: Network, title: 'Paiements numériques', text: 'Des solutions qui rapprochent les paiements des usages et marchés locaux.' },
  { number: '04', Icon: ShieldCheck, title: 'Éducation numérique', text: 'Des outils pour rendre les compétences et les ressources plus accessibles.' },
]

function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' brand-footer' : ''}`} href="#accueil" aria-label="SYLIPAY TECH, accueil">
    <img className="brand-logo" src={`${import.meta.env.BASE_URL}logos/sylipay-tech-logo.jpg`} alt="" />
    {!footer && <span className="brand-text"><strong>SYLIPAY TECH</strong><small>FINTECH · BLOCKCHAIN · DIGITAL</small></span>}
  </a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="location-bar"><span className="location-dot" /> CONAKRY, GUINÉE <span className="location-divider" /> LA FINANCE ÉVOLUE. L’AFRIQUE AUSSI.</div>
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="site-navigation" className={`navigation${menuOpen ? ' navigation-open' : ''}`} aria-label="Navigation principale">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Parlons de votre projet <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  </>
}

function Hero() {
  return <section className="hero section-width" id="accueil">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span /> DES IDÉES LOCALES. DES POSSIBILITÉS SANS FRONTIÈRES.</p>
      <h1>La finance évolue.<br />L’Afrique <em>aussi.</em></h1>
      <p className="hero-description">Nous créons des solutions numériques qui rapprochent les personnes, les entreprises et les nouvelles opportunités.</p>
      <div className="hero-actions"><a className="button button-primary" href="#ecosysteme">Explorer notre écosystème <ArrowRight size={17} /></a><a className="text-link" href="#apropos">Qui sommes-nous ?</a></div>
      <div className="hero-caption"><span className="caption-line" /> Pensé à Conakry. Conçu pour les usages d’aujourd’hui.</div>
    </div>
    <div className="hero-art reveal" aria-label="SYLIPAY TECH relie la fintech, les paiements, la blockchain et l’éducation." role="img">
      <div className="art-grid" /><div className="art-glow" />
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
      <span className="orbit-point point-one" /><span className="orbit-point point-two" /><span className="orbit-point point-three" />
      <div className="hero-core"><span className="core-icon">S</span><strong>SYLIPAY</strong><small>TECHNOLOGIES FOR ALL</small></div>
      <div className="orbit-label label-fintech"><span className="label-icon"><Network size={16} /></span><span>FINTECH<small>Des paiements plus simples</small></span></div>
      <div className="orbit-label label-blockchain"><span className="label-icon"><Blocks size={16} /></span><span>BLOCKCHAIN<small>De nouveaux usages</small></span></div>
      <div className="orbit-label label-learning"><span className="label-icon"><GraduationCap size={16} /></span><span>ÉDUCATION<small>Des compétences en mouvement</small></span></div>
      <div className="art-location"><span /> 09° 32′ N &nbsp; 13° 41′ W</div>
      <a className="art-scroll" href="#ecosysteme" aria-label="Faire défiler vers l’écosystème"><ArrowDown size={15} /></a>
    </div>
  </section>
}

function TrustStrip() {
  return <div className="trust-strip"><div className="section-width trust-inner">
    <span>UN ÉCOSYSTÈME</span><i /><strong>Conçu autour des usages numériques.</strong>
    <div className="trust-topics"><span>FINTECH</span><span>API</span><span>ÉDUCATION</span><span>AFRIQUE</span></div>
  </div></div>
}

function Ecosystem() {
  return <section className="ecosystem section-width section-space" id="ecosysteme">
    <div className="section-heading reveal">
      <div><p className="eyebrow">TROIS SOLUTIONS, UNE MÊME AMBITION</p><h2>Notre écosystème,<br />à votre <em>service.</em></h2></div>
      <p>Des services complémentaires pour accompagner les évolutions de la finance, du commerce et de l’apprentissage.</p>
    </div>
    <div className="product-grid">{products.map(product => {
      const Icon = product.Icon
      return <article className={`product-card product-${product.tone} reveal`} key={product.number}>
        <div className="product-card-top">
          {product.logo ? <img className="product-logo" src={`${import.meta.env.BASE_URL}${product.logo}`} alt={`Logo ${product.name}`} loading="lazy" /> : <span className="product-icon"><Icon size={34} /></span>}
          <span className="product-number">{product.number}</span>
        </div>
        <p className="product-category">{product.category}</p><h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="product-link" href={product.url} target="_blank" rel="noreferrer">Découvrir {product.name} <ArrowUpRight size={16} /></a>
      </article>
    })}</div>
    <p className="ecosystem-note">Les services, moyens de paiement et disponibilités dépendent de chaque solution et des marchés couverts.</p>
  </section>
}

function Technology() {
  return <section className="technology" id="technologies"><div className="section-width technology-inner">
    <div className="section-heading section-heading-light reveal">
      <div><p className="eyebrow">LE SOCLE TECHNOLOGIQUE</p><h2>La technologie, au plus près<br />des <em>besoins réels.</em></h2></div>
      <p>Nous faisons dialoguer les outils numériques pour imaginer des services utiles, accessibles et ancrés dans leur environnement.</p>
    </div>
    <div className="capability-grid">{capabilities.map(({ number, Icon, title, text }) => <article className="capability reveal" key={number}>
      <div className="capability-top"><Icon size={21} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p>
    </article>)}</div>
    <div className="technology-footer"><span className="technology-pulse" /> UNE VISION AFRICAINE. UNE PORTÉE NUMÉRIQUE.</div>
  </div></section>
}

function About() {
  return <section className="about section-width section-space" id="apropos">
    <div className="about-stamp reveal"><span>SYLIPAY</span><strong>GN</strong><small>CONAKRY · GUINÉE</small></div>
    <div className="about-copy reveal">
      <p className="eyebrow">QUI NOUS SOMMES</p><h2>Une ambition née ici,<br />tournée vers <em>demain.</em></h2>
      <p className="about-description">Basée à Conakry, SYLIPAY TECH développe et accompagne des solutions dans la fintech, les paiements numériques, la blockchain et l’éducation.</p>
      <p className="about-description">Notre conviction : la technologie prend tout son sens lorsqu’elle ouvre des possibilités et s’adapte aux réalités de celles et ceux qui l’utilisent.</p>
      <a className="text-link about-link" href="#contact">Construisons la suite ensemble <ArrowRight size={16} /></a>
    </div>
    <div className="about-aside reveal"><span className="aside-number">01 — 03</span><blockquote>« Créer des services numériques accessibles et adaptés aux usages africains. »</blockquote><span className="aside-rule" /><span className="aside-caption">NOTRE CONVICTION</span></div>
  </section>
}

function Contact() {
  return <section className="contact" id="contact"><div className="section-width contact-inner">
    <div><p className="eyebrow">ET SI ON AVANÇAIT ENSEMBLE ?</p><h2>Une idée en tête ?<br /><em>Parlons-en.</em></h2></div>
    <div className="contact-action"><p>Partenariat, projet ou simple prise de contact : notre équipe à Conakry est à votre écoute.</p>
      <a className="button button-light" href="tel:+224612166283">Appeler SYLIPAY TECH <ArrowUpRight size={17} /></a>
      <a className="contact-phone" href="tel:+224612166283">+224 612 166 283 <ArrowUpRight size={13} /></a>
    </div>
    <span className="contact-orbit contact-orbit-one" /><span className="contact-orbit contact-orbit-two" />
  </div></section>
}

function Footer() {
  return <footer className="footer">
    <div className="section-width footer-main">
      <div><Brand footer /><p>La finance évolue.<br />L’Afrique aussi.</p></div>
      <div className="footer-address"><span>RETROUVEZ-NOUS</span><strong>Conakry, République de Guinée</strong><a href="tel:+224612166283">+224 612 166 283</a></div>
      <div className="footer-links"><span>NOTRE ÉCOSYSTÈME</span>{products.map(product => <a key={product.name} href={product.url} target="_blank" rel="noreferrer">{product.name} <ArrowUpRight size={12} /></a>)}</div>
    </div>
    <div className="section-width footer-bottom"><span>© {new Date().getFullYear()} SYLIPAY TECH. Tous droits réservés.</span><a href="#accueil">Retour en haut ↑</a></div>
  </footer>
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <div className="site-shell"><Header /><main><Hero /><TrustStrip /><Ecosystem /><Technology /><About /><Contact /></main><Footer /></div>
}
