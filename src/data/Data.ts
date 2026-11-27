export interface NavigationItem {
  id: string
  label: string
}

export const navigation: NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contactme", label: "Contact me" },
]


export type AboutTabId =
  | 'who-is-david'
  | 'experience'
  | 'education'
  | 'outside-code'
  | 'currently';

export interface AboutTabMeta {
  id: AboutTabId;
  number: string;
  label: string;
  eyebrow: string;
  titleWhite: string;
  titleRed: string;
  subtitle: string;
}

export interface TimelineEntry {
  period: string;
  roleOrDegree: string;
  organization: string;
  description: string;
  tags?: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  description: string;
  iconName: 'dumbbell' | 'football' | 'book' | 'gamepad';
}

export interface CurrentFocusItem {
  title: string;
  description: string;
}

export const ABOUT_TABS: AboutTabMeta[] = [
  {
    id: 'who-is-david',
    number: '01.',
    label: 'Quien soy?',
    eyebrow: 'ABOUT ME',
    titleWhite: 'Sobre mi',
    titleRed: '',
    subtitle:
      'Desarrollador full-stack y móvil apasionado por construir soluciones digitales con impacto, combinando diseño limpio y tecnologíasssss.',
  },
  {
    id: 'experience',
    number: '02.',
    label: 'Experiencia',
    eyebrow: 'EXPERIENCE',
    titleWhite: 'Mi',
    titleRed: 'Experiencia',
    subtitle:
      'Un recorrido por mi trayectoria profesional, construyendo productos escalables y colaborando en soluciones reales.',
  },
  {
    id: 'education',
    number: '03.',
    label: 'Educacion',
    eyebrow: 'EDUCATION',
    titleWhite: 'Mi',
    titleRed: 'Educacion',
    subtitle: 'Mi formación académica y aprendizaje continuo en desarrollo de software.',
  },
  {
    id: 'outside-code',
    number: '04.',
    label: 'Fuera del código',
    eyebrow: 'PASATIEMPOS',
    titleWhite: 'Fuera del',
    titleRed: 'código',
    subtitle:
      'Lo que me apasiona hacer cuando no estoy frente a una pantalla escribiendo código, disfrutando de mi tiempo libre y manteniéndome activo.',
  },
  {
    id: 'currently',
    number: '05.',
    label: 'Actualmente',
    eyebrow: 'ACTUALMENTE',
    titleWhite: '¿En qué estoy',
    titleRed: 'ahora?',
    subtitle: 'Mis prioridades de aprendizaje, práctica diaria y crecimiento personal en este momento.',
  },
];

export const WHO_IS_DAVID_DATA = {
  pills: ['Frontend', 'Backend', 'UI/UX', 'Problem Solving'],
  highlights: [
    'Desarrollador enfocado en crear interfaces modernas, accesibles y bien estructuradas, cuidando cada detalle visual y de experiencia de usuario.',
    'Comprometido con el aprendizaje constante, las buenas prácticas de ingeniería y el desarrollo de soluciones útiles que aporten valor real.',
  ],
};

export const EXPERIENCE_DATA: TimelineEntry[] = [

  {
    period: '2024 - 2025',
    roleOrDegree: 'Desarrollador de Software en Formación',
    organization: 'SENA - Análisis y Desarrollo de Software, Participante SENASOFT-2025',
    description:
      'Desarrollo de sistemas de información, plataformas de votación electrónica, arquitectura de bases de datos y trabajo colaborativo bajo metodologías ágiles.',
    tags: ['PostgreSQL', 'APIs REST', 'UI/UX'],
  },

  {
  period: 'Octubre 20 a 24 del 2025',
  roleOrDegree: 'Participante SENASOFT',
  organization: 'SENA - Análisis y Desarrollo de Software | SENASOFT 2025',
  description:
    'Participación en el desarrollo de soluciones de software, construcción de interfaces web con React, consumo de APIs REST, gestión de información y trabajo colaborativo para el desarrollo de proyectos tecnológicos.',
  tags: ['React', 'JavaScript', 'APIs REST', 'UI/UX', 'SupabaseJs'],
},


{
  period: 'Octubre 2025 - Abril 2026',
  roleOrDegree: 'Frontend Developer',
  organization: 'Heinsohn Bussines Technology',
  description:
    'Participé en la adaptación e internacionalización del portal web de Heinsohn, implementando la navegación bilingüe, interpretando diseños UI/UX, desarrollando componentes reutilizables y garantizando una experiencia responsive en diferentes dispositivos.',
  tags: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'next-intl'
  ],
},

  {
    period: '2026 - Presente',
    roleOrDegree: 'Full-Stack & Mobile Developer',
    organization: 'Proyectos & Desarrollo de Software',
    description:
      'Diseño y construcción de aplicaciones web y móviles completas, plataformas de gestión y experiencias interactivas centradas en rendimiento y claridad.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AdonisJs', 'Flutter'],
  },

  
];

export const EDUCATION_DATA: TimelineEntry[] = [
  {
    period: '2024 - 2026',
    roleOrDegree: 'Tecnología en Análisis y Desarrollo de Software (ADSO)',
    organization: 'SENA - Centro de Teleinformática y Producción Industrial',
    description:
      'Formación integral en arquitectura de software, desarrollo web y móvil, bases de datos, calidad de software y metodologías ágiles.',
  },
  {
    period: 'Aprendizaje Continuo',
    roleOrDegree: 'Especialización Autodidacta en Desarrollo Móvil e IA',
    organization: 'Proyectos Prácticos y Documentación Oficial',
    description:
      'Profundización constante en interfaces móviles modernas, arquitectura limpia y automatización mediante agentes inteligentes.',
  },
];

export const HOBBIES_DATA: HobbyItem[] = [
  {
    id: 'exercise',
    title: 'Ejercicio',
    description:
      'Manteniéndome en forma, entrenando y buscando siempre un estilo de vida saludable y activo.',
    iconName: 'dumbbell',
  },
  {
    id: 'football',
    title: 'Jugar Fútbol',
    description:
      'Disfrutando del trabajo en equipo, la competencia sana y la pasión del fútbol con amigos.',
    iconName: 'football',
  },
  {
    id: 'reading',
    title: 'Leer',
    description:
      'Explorando nuevas ideas, historias y aprendizajes que expanden mi mente fuera de la tecnología.',
    iconName: 'book',
  },
  {
    id: 'gaming',
    title: 'Videojuegos',
    description:
      'Sumergiéndome en mundos virtuales, estrategia y buenas historias para desconectar.',
    iconName: 'gamepad',
  },
];

export const CURRENTLY_DATA = {
  items: [
    {
      title: 'Aprendizaje Profundo en Flutter',
      description:
        'Dedicando mi tiempo a dominar Flutter, explorando conceptos avanzados, manejo de estado y buenas prácticas para construir aplicaciones móviles multiplataforma fluidas.',
    },
    {
      title: 'Creación de Agentes Inteligentes',
      description:
        'Investigando e implementando agentes autónomos para automatizar tareas complejas y mejorar la interacción entre usuarios y sistemas.',
    },
    {
      title: 'Estudio y Práctica desde Casa',
      description:
        'Manteniendo una disciplina de estudio constante desde mi espacio de trabajo, enfocado en llevar cada concepto nuevo a la práctica real.',
    },
  ] as CurrentFocusItem[],
  closingNote: 'Disfrutando del proceso día a día',
};