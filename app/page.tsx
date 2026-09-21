import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  CircleGauge,
  FileText,
  GitBranch,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import LeadForm from "./components/LeadForm";

const learnings = [
  {
    icon: Braces,
    title: "El modelo mental",
    text: "Qué cambia cuando la IA deja de redactar y empieza a devolver decisiones tipadas.",
  },
  {
    icon: Workflow,
    title: "La arquitectura",
    text: "Cómo combinar Jev, código, LLMs y revisión humana sin forzar una sola herramienta.",
  },
  {
    icon: CircleGauge,
    title: "La evaluación",
    text: "Qué medir en precisión, latencia, costo, cobertura y riesgo antes de escalar.",
  },
  {
    icon: Layers3,
    title: "Los casos reales",
    text: "Sistemas, soporte productivo, marketing y RR.HH. explicados con flujos concretos.",
  },
];

const proposals = [
  {
    number: "01",
    title: "Diagnóstico de decisiones",
    text: "Detectamos dónde la IA puede reducir tiempos, errores y trabajo repetitivo sin agregar complejidad innecesaria.",
  },
  {
    number: "02",
    title: "Piloto medible",
    text: "Diseñamos un caso acotado, con criterios de éxito, datos de prueba y una salida segura a producción.",
  },
  {
    number: "03",
    title: "Implementación y adopción",
    text: "Integramos la solución al sistema real y acompañamos al equipo para que pueda operarla, evaluarla y mejorarla.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="HACIBLE, ir al inicio">
          <BrandMark />
          <span>HACIBLE</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#guia">La guía</a>
          <a href="#sobre-mi">Quién soy</a>
          <a href="#hacible">HACIBLE</a>
        </nav>
        <a className="button button-small" href="#descarga">
          Descargar
          <ArrowDown size={15} strokeWidth={2.4} />
        </a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Guía visual + técnica · 24 páginas</p>
          <h1>
            No toda IA tiene que <span>hablar.</span>
          </h1>
          <p className="hero-lede">
            A veces el sistema solo necesita una decisión clara, rápida y medible.
            Esta guía explica Jev desde cero y muestra cuándo puede ser una pieza útil
            —y cuándo no.
          </p>
          <div className="hero-actions">
            <a className="button" href="#descarga">
              Quiero la guía gratuita <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#guia">Ver qué incluye <ArrowDown size={16} /></a>
          </div>
          <div className="trust-row" aria-label="Características de la guía">
            <span><Check size={15} /> Simple de leer</span>
            <span><Check size={15} /> Técnicamente rigurosa</span>
            <span><Check size={15} /> Sin humo</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Sistema modular que convierte contexto en decisiones">
          <div className="hero-image-wrap">
            <Image
              src="/hero-decision-system.png"
              alt="Ilustración de un sistema de decisiones modular con supervisión humana"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="floating-card floating-card-top">
            <span className="signal signal-fuchsia" />
            <div><b>Estado</b><small>contexto estructurado</small></div>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="signal signal-cyan" />
            <div><b>Decisión</b><small>salida tipada + probabilidad</small></div>
          </div>
        </div>
      </section>

      <section className="manifesto-strip">
        <div className="section-shell strip-inner">
          <p>De texto probable</p><ArrowRight /><p>a decisión estructurada</p><ArrowRight /><p>a acción controlada</p>
        </div>
      </section>

      <section className="content-section section-shell" id="guia">
        <div className="section-heading">
          <p className="eyebrow">La idea, en simple</p>
          <h2>Jev no viene a reemplazar todo.<br />Viene a resolver una clase precisa de problemas.</h2>
          <p>
            Cuando una aplicación necesita elegir, clasificar, priorizar o estimar una
            probabilidad sobre datos estructurados, usar un modelo conversacional completo
            puede ser más de lo necesario.
          </p>
        </div>

        <div className="comparison" role="img" aria-label="Comparación entre un flujo generativo y un flujo de decisión con Jev">
          <div className="compare-card muted-card">
            <p className="card-kicker">Lo conocido</p>
            <h3>LLM generativo</h3>
            <div className="flow-line">
              <span>Prompt</span><ArrowRight /><span>Texto</span><ArrowRight /><span>Interpretar</span>
            </div>
            <p>Ideal para crear, explicar, conversar o trabajar con información abierta.</p>
          </div>
          <div className="versus">VS</div>
          <div className="compare-card accent-card">
            <p className="card-kicker">El nuevo patrón</p>
            <h3>Jev · System One</h3>
            <div className="flow-line">
              <span>Estado</span><ArrowRight /><span>Pregunta</span><ArrowRight /><span>Decisión</span>
            </div>
            <p>Útil para decidir dentro de un conjunto explícito de respuestas posibles.</p>
          </div>
        </div>

        <div className="learning-grid">
          {learnings.map(({ icon: Icon, title, text }) => (
            <article className="learning-card" key={title}>
              <Icon size={23} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="section-shell decision-layout">
          <div>
            <p className="eyebrow eyebrow-light">Un criterio antes que una moda</p>
            <h2>La pregunta no es “¿puedo poner IA acá?”</h2>
            <p className="large-quote">La pregunta es: <em>¿qué decisión tiene que tomar este sistema y qué costo tiene equivocarse?</em></p>
          </div>
          <div className="decision-stack">
            <div><span>01</span><p><b>Definir</b> la decisión y sus límites.</p></div>
            <div><span>02</span><p><b>Comparar</b> contra una regla o baseline real.</p></div>
            <div><span>03</span><p><b>Medir</b> calidad, latencia, costo y riesgo.</p></div>
            <div><span>04</span><p><b>Escalar</b> solo si mejora el sistema completo.</p></div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="sobre-mi">
        <div className="about-grid">
          <div className="about-card">
            <div className="initials">VB</div>
            <div>
              <p className="eyebrow">Detrás de esta guía</p>
              <h2>Soy Vane.</h2>
              <p>
                Tech Lead y profesional de IA aplicada. Trabajo en el cruce entre tecnología,
                producto y personas: donde una buena arquitectura también tiene que ser
                entendible, operable y útil para alguien real.
              </p>
              <p>
                Preparé esta guía para traducir una tecnología emergente sin simplificarla
                de más y sin convertirla en una promesa mágica.
              </p>
            </div>
          </div>
          <blockquote>
            “Me interesa la IA cuando deja de ser una demo y mejora una decisión concreta.”
            <cite>— Vanesa Burman</cite>
          </blockquote>
        </div>
      </section>

      <section className="hacible-section" id="hacible">
        <div className="section-shell">
          <div className="hacible-heading">
            <div>
              <p className="eyebrow">Qué es HACIBLE</p>
              <h2>IA aplicada para sistemas que tienen que funcionar de verdad.</h2>
            </div>
            <p className="brand-statement">
              No adapto personas a sistemas ideales.<br />
              <b>Diseño sistemas para que personas reales puedan avanzar.</b>
            </p>
          </div>
          <div className="proposal-grid">
            {proposals.map((proposal) => (
              <article key={proposal.number}>
                <span>{proposal.number}</span>
                <h3>{proposal.title}</h3>
                <p>{proposal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="download-section section-shell" id="descarga">
        <div className="download-copy">
          <p className="eyebrow"><FileText size={15} /> Recurso gratuito</p>
          <h2>Descargá la guía completa.</h2>
          <p>
            24 páginas para entender Jev, diseñar un primer caso de uso y conversar con
            criterio técnico sobre su lugar dentro de un sistema real.
          </p>
          <ul>
            <li><ShieldCheck size={18} /> Conceptos, límites y arquitectura.</li>
            <li><GitBranch size={18} /> Diagramas y patrones de implementación.</li>
            <li><Users size={18} /> Ejemplos para cuatro áreas del negocio.</li>
            <li><HeartHandshake size={18} /> Checklist para un piloto responsable.</li>
          </ul>
        </div>
        <LeadForm />
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <div><a className="brand footer-brand" href="#inicio"><BrandMark /> HACIBLE</a><p>IA aplicada · sistemas posibles · personas reales.</p></div>
          <p className="source-note">Jev y System One son tecnologías de TypeSafe. Esta guía es independiente y cita la documentación oficial.</p>
          <a className="back-top" href="#inicio">Volver arriba <ArrowDown size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
