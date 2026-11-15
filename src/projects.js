// EDITA AQUÍ tus proyectos. No se publican enlaces de demostración hasta que existan.
// ai: 'con-ia', 'sin-ia', 'parcial' o 'pendiente'.
// demo: URL real de la aplicación desplegada, o '' si todavía no está publicada.
// repo: URL real del repositorio público, o '' si no quieres mostrarlo.
export const projects = [
  {
    id: 'agenthub', title: 'AgentHub', category: 'Inteligencia artificial', icon: '✦',
    description: 'Plataforma de agentes especializados en programación, investigación y planificación. Interfaz de chat y coordinación de agentes.',
    technologies: ['React', 'FastAPI', 'Ollama', 'Python'], ai: 'con-ia',
    aiDetails: 'Proyecto desarrollado con ayuda de herramientas de IA. La aplicación también integra modelos de IA como funcionalidad.',
    status: 'En desarrollo', demo: '', repo: '', featured: true
  },
  {
    id: 'entremanos', title: 'EntreManos', category: 'Aplicación web', icon: '↗',
    description: 'Proyecto intermodular: plataforma para conectar personas que ofrecen y solicitan favores y servicios.',
    technologies: ['Desarrollo web', 'Trabajo en equipo'], ai: 'pendiente', aiDetails: '',
    status: 'En desarrollo', demo: '', repo: '', featured: true
  },
  {
    id: 'cine', title: 'CineFlask React', category: 'Aplicación web', icon: '▣',
    description: 'Catálogo de películas con navegación, fichas individuales y formulario para añadir películas.',
    technologies: ['React', 'Vite', 'Flask', 'SQLite'], ai: 'pendiente', aiDetails: '',
    status: 'Proyecto académico', demo: '', repo: '', featured: true
  },
  {
    id: 'calculadora', title: 'Calculadora JavaScript', category: 'Frontend', icon: '⌘',
    description: 'Calculadora interactiva desarrollada para practicar manipulación del DOM y eventos de JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'], ai: 'pendiente', aiDetails: '',
    status: 'Proyecto académico', demo: '', repo: '', featured: false
  },
  {
    id: 'viogen', title: 'Viogén — práctica PHP', category: 'Backend', icon: '◇',
    description: 'Aplicación académica de formularios e informes con almacenamiento JSON y validación en PHP.',
    technologies: ['PHP', 'JSON', 'HTML', 'CSS'], ai: 'pendiente', aiDetails: '',
    status: 'Proyecto académico', demo: '', repo: '', featured: false
  }
]
