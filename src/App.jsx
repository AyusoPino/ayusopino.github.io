import { useMemo, useState } from 'react'
import { ArrowUpRight, Github, Mail, Menu, X, Code2, ExternalLink, ChevronRight, Sparkles, GraduationCap, Layers3, Search, Sun, Moon, CheckCircle2 } from 'lucide-react'
import { projects } from './projects'

const aiLabels = { 'con-ia': 'Con ayuda de IA', 'sin-ia': 'Sin IA', parcial: 'IA como apoyo puntual', pendiente: 'Uso de IA por confirmar' }
const aiStyles = { 'con-ia': 'ai-yes', 'sin-ia': 'ai-no', parcial: 'ai-partial', pendiente: 'ai-pending' }
const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'PHP', 'Python', 'Flask', 'MySQL', 'SQLite', 'Git', 'Docker', 'AWS']

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-art"><span className="project-glyph">{project.icon}</span><span className="project-category">{project.category}</span></div>
    <div className="project-body">
      <div className="project-heading"><h3>{project.title}</h3><span className="status">{project.status}</span></div>
      <p>{project.description}</p>
      <div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
      <div className={'ai-label ' + aiStyles[project.ai]}><Sparkles size={14}/>{aiLabels[project.ai]}</div>
      {project.aiDetails && <p className="ai-details">{project.aiDetails}</p>}
      <div className="project-actions">
        {project.demo ? <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">Abrir proyecto <ExternalLink size={15}/></a> : <span className="unavailable">Demo pendiente</span>}
        {project.repo ? <a className="project-link muted" href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={16}/> Código</a> : null}
      </div>
    </div>
  </article>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')
  const [light, setLight] = useState(false)
  const filtered = useMemo(() => projects.filter(p => (filter === 'Todos' || (filter === 'Con IA' && p.ai === 'con-ia') || (filter === 'Sin IA' && p.ai === 'sin-ia') || (filter === 'Pendientes' && ['pendiente','parcial'].includes(p.ai))) && `${p.title} ${p.description} ${p.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [filter, query])
  const closeMenu = () => setMenuOpen(false)
  return <div className={light ? 'app light' : 'app'}>
    <header className="site-header"><div className="container header-inner">
      <a href="#inicio" className="logo" onClick={closeMenu}><span className="logo-mark">A<span>.</span></span><span>ayusopino<span className="logo-dot">_</span></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal">
        <a onClick={closeMenu} href="#inicio">Inicio</a><a onClick={closeMenu} href="#sobre-mi">Sobre mí</a><a onClick={closeMenu} href="#proyectos">Proyectos</a><a onClick={closeMenu} href="#contacto">Contacto</a>
      </nav>
      <div className="header-controls"><button className="icon-button" onClick={() => setLight(!light)} title={light ? 'Modo oscuro' : 'Modo claro'} aria-label="Cambiar tema">{light ? <Moon size={19}/> : <Sun size={19}/>}</button><a className="github-button" href="https://github.com/ayusopino" target="_blank" rel="noopener noreferrer"><Github size={18}/><span>GitHub</span><ArrowUpRight size={15}/></a><button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X/> : <Menu/>}</button></div>
    </div></header>
    <main>
      <section className="hero" id="inicio"><div className="container hero-grid"><div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> Disponible para aprender y crear</div>
        <h1>Hola, soy <span>Ayuso Pino.</span><br/>Desarrollo ideas<br/>en la web<span className="period">.</span></h1>
        <p>Estudiante de <strong>Desarrollo de Aplicaciones Web</strong>. Me gusta construir aplicaciones, experimentar con nuevas tecnologías y transformar ideas en proyectos reales.</p>
        <div className="hero-actions"><a className="primary-button" href="#proyectos">Explorar proyectos <ArrowUpRight size={18}/></a><a className="secondary-button" href="#sobre-mi">Conóceme <ChevronRight size={18}/></a></div>
        <div className="hero-foot"><div><strong>{projects.length.toString().padStart(2,'0')}+</strong><span>Proyectos</span></div><div className="stat-separator"/><div><strong>DAW</strong><span>En formación</span></div><div className="stat-separator"/><div><strong>∞</strong><span>Ganas de aprender</span></div></div>
      </div><div className="hero-visual" aria-hidden="true"><div className="visual-glow"/><div className="code-window"><div className="window-top"><span className="dots"><i/><i/><i/></span><span>portfolio.jsx</span><Code2 size={15}/></div><div className="code-lines"><div><span className="line-no">01</span><span className="pink">const</span> developer = {'{'}</div><div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="green">'Ayuso Pino'</span>,</div><div><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="green">'Web Developer'</span>,</div><div><span className="line-no">04</span>&nbsp;&nbsp;skills: [<span className="green">'React'</span>, <span className="green">'PHP'</span>],</div><div><span className="line-no">05</span>&nbsp;&nbsp;passion: <span className="pink">true</span>,</div><div><span className="line-no">06</span>&nbsp;&nbsp;learning: <span className="pink">'always'</span></div><div><span className="line-no">07</span>{'}'}</div><div><span className="line-no">08</span><span className="muted-code">// Construyendo el futuro 🚀</span></div></div></div><div className="floating-pill"><CheckCircle2 size={17}/> Compilando nuevas ideas</div></div></div></section>
      <section className="about section" id="sobre-mi"><div className="container"><div className="section-top"><span className="section-number">01 / SOBRE MÍ</span><h2>Un poco sobre <span>mí.</span></h2><p>Aprender, construir y mejorar. Esa es mi forma de entender el desarrollo web.</p></div><div className="about-grid"><div className="about-panel"><div className="panel-icon"><GraduationCap size={24}/></div><h3>Mi camino</h3><p>Actualmente estoy cursando el ciclo de Grado Superior de <strong>Desarrollo de Aplicaciones Web (DAW)</strong>. Durante mi formación he trabajado con tecnologías frontend y backend, bases de datos y despliegue de aplicaciones.</p><p>Este portfolio reúne proyectos académicos y personales, mostrando también de forma transparente cuándo he utilizado herramientas de inteligencia artificial durante su desarrollo.</p></div><div className="about-panel"><div className="panel-icon"><Layers3 size={24}/></div><h3>Herramientas y tecnologías</h3><p>Tecnologías con las que he trabajado o estoy aprendiendo:</p><div className="skill-list">{skills.map(s => <span key={s}>{s}</span>)}</div></div></div></div></section>
      <section className="projects section" id="proyectos"><div className="container"><div className="section-top"><span className="section-number">02 / PROYECTOS</span><h2>Cosas que he <span>creado.</span></h2><p>Proyectos reales, prácticas y experimentos. Cada ficha indica las tecnologías y el uso de inteligencia artificial cuando está confirmado.</p></div><div className="project-toolbar"><div className="filters" role="group" aria-label="Filtrar proyectos">{['Todos','Con IA','Sin IA','Pendientes'].map(f => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div><label className="search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar proyecto..." aria-label="Buscar proyecto"/></label></div><div className="project-grid">{filtered.map(p => <ProjectCard key={p.id} project={p}/>)}</div>{filtered.length === 0 && <div className="empty-state">No hay proyectos que coincidan con estos filtros.</div>}<p className="projects-note">Las demostraciones aparecerán disponibles cuando se publiquen. Los proyectos con backend necesitan alojamiento adicional.</p></div></section>
      <section className="contact section" id="contacto"><div className="container"><div className="contact-box"><div className="contact-glow"/><div className="contact-content"><span className="section-number">03 / CONTACTO</span><h2>¿Hablamos de tu <span>próxima idea?</span></h2><p>Si quieres conocer mi trabajo o colaborar en algún proyecto, puedes encontrarme en GitHub.</p><a className="primary-button" href="https://github.com/ayusopino" target="_blank" rel="noopener noreferrer"><Github size={18}/> Visitar mi GitHub <ArrowUpRight size={18}/></a></div><div className="contact-symbol" aria-hidden="true">{'</>'}</div></div></div></section>
    </main><footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Ayuso Pino · Hecho con React</span><span>Aprendiendo y construyendo, línea a línea.</span></div></footer>
  </div>
}
