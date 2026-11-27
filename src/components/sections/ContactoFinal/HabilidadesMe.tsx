'use client'

import CardTerminal from '@/src/components/sections/CardTerminal/CardTerminal';
import {
  Code2,
  Database,
  Smartphone,
  Languages,
  Wrench,
  Orbit,
} from 'lucide-react';

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiAdonisjs,
  SiPostgresql,
  SiMysql,

  SiFlutter,
  SiAndroid,
  SiJavascript,
  SiDart,
  SiOpenjdk,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';

const cardInfo = [
  {
    id: 1,
    titulo: 'Frontend',
    icon: Code2,
    tecnologias: [
      { nombre: 'React', icono: SiReact },
      { nombre: 'Next.js', icono: SiNextdotjs },
      { nombre: 'Tailwind CSS', icono: SiTailwindcss },
      { nombre: 'TypeScript', icono: SiTypescript },
    ],
  },
  {
    id: 2,
    titulo: 'Backend',
    icon: Database,
    tecnologias: [
      { nombre: 'Node.js', icono: SiNodedotjs },
      { nombre: 'AdonisJS', icono: SiAdonisjs },
    ],
  },
  {
    id: 3,
    titulo: 'Bases de datos',
    icon: Database,
    tecnologias: [
      { nombre: 'MySQL', icono: SiMysql },
      { nombre: 'SQL Server', icono: SiPostgresql },
      { nombre: 'PostgreSQL', icono: SiPostgresql },
    ],
  },
  {
    id: 4,
    titulo: 'Mobile Development',
    icon: Smartphone,
    tecnologias: [
      { nombre: 'Flutter', icono: SiFlutter },
      { nombre: 'Android Nativo', icono: SiAndroid },
    ],
  },
  {
    id: 5,
    titulo: 'Lenguajes de programación',
    icon: Languages,
    tecnologias: [
      { nombre: 'JavaScript', icono: SiJavascript },
      { nombre: 'TypeScript', icono: SiTypescript },
      { nombre: 'Dart', icono: SiDart },
      { nombre: 'Java (Básico)', icono: SiOpenjdk },
    ],
  },
  {
    id: 6,
    titulo: 'Herramientas',
    icon: Wrench,
    tecnologias: [
      { nombre: 'VS Code', icono: SiAndroidstudio },
      { nombre: 'Antigravity', icono: Orbit },
      { nombre: 'Android Studio', icono: SiAndroidstudio },
      { nombre: 'Git', icono: SiGit },
      { nombre: 'GitHub', icono: SiGithub },
      { nombre: 'Postman', icono: SiPostman },
    ],
  },
]


export default function HabilidadesMe() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2 lg:py-24 pt-20'>
        <div className="mx-auto max-w-5xl px-6">

          <div className="flex flex-col items-center text-center mb-2 md:mb-6">

            <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-foreground mb-4">
              MY TECH STACK
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl
              font-mono font-bold tracking-tight text-foreground">
              HABILIDADES QUE POSEO
            </h1>

            <div className="w-16 h-1 bg-card-foreground rounded-full my-5" />

            <p className="max-w-2xl text-sm sm:text-base
              leading-7 text-muted-foreground font-mono">
              Desarrollo soluciones web y móviles combinando tecnologías
              modernas, buenas prácticas y aprendizaje constante.
              Me enfoco en construir aplicaciones funcionales,
              escalables y con una buena experiencia de usuario.
            </p>

          </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {
            cardInfo.map((item) => (  
                <article key={item.id} className="w-full min-h-44 border border-border rounded-xl p-6" >
                    <div className='flex items-center gap-4 mb-4'>
                        <item.icon size={20} />
                        <h2 className='font-mono text-sm md:text-xl font-semibold'>{item.titulo}</h2>
                    </div> 

                    <ul className='space-y-3'>
                        {
                            item.tecnologias.map((techs) => (
                                <li key={techs.nombre}>
                                    <div className='flex items-center gap-4'>
                                        <techs.icono />
                                        <span>{techs.nombre}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </article>
                
                ))
                }
        
            </div>

            <div className="hidden sm:flex justify-center w-full">
                <CardTerminal
                  command="$ cat filosfia-desarrollador.txt"
                  messages={[
                    'Liderazgo: Tomo la iniciativa.',
                    'Trabajo en equipo: Aprendo y colaboro.',
                    'Curiosidad: Siempre busco aprender.',
                    'Resolución: Encuentro soluciones prácticas.',
                    'Calidad: Me enfoco en código limpio.',
                  ]}
                />
            </div>
        </div>

    </div>
  )
}
