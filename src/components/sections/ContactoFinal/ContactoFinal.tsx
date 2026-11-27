'use client'



import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import Contacto from "../../layout/contacto/Contacto"

  const SocialLinks = [
  {
    id: 1,
    icon: FaGithub,
    name: "GitHub",
    description: "@DavidRengifo12",
    href: "https://github.com/DavidRengifo12",
  },
  {
    id: 2,
    icon: FaLinkedin,
    name: "LinkedIn",
    description: "@DavidSantiagoRengifo",
    href: "https://www.linkedin.com/in/david-santiago-rengifo-guacheta-32823b428/",
  },
  {
    id: 3,
    icon: FaInstagram,
    name: "Instagram",
    description: "@DSRG_30",
    href: "https://instagram.com/DSRG_30",
  },
]

export default function ContactoFinal() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="w-full">
           <Contacto />
          </div>

          <div className="flex flex-col justify-center gap-4 w-full text-foreground font-mono">
            <h2 className="text-xl md:text-3xl">Conectemos</h2>
            <p className="text-xl">Tambien puedes contactarme en estas plataformas</p>
          
            <ol className="flex flex-col gap-8 ">
            {
                SocialLinks.map((items) =>{
                const Icon = items.icon
                return (
                <li key={items.id} className="">
                <a
                    href={items.href}
                    target={items.id === 3 ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${items.id}`}
                    className="group flex items-center gap-4 p-3 rounded-xl border border-border hover:border-gray-400 transition-all duration-300"
                >
                    <div className="flex items-center justify-center size-11 rounded-lg bg-card text-foreground  transition-colors">
                    <Icon size={22} />
                    </div>

                    <div className="flex flex-col">
                    <span className="font-semibold text-sm text-foreground font-mono">
                            {items.name}
                        </span>

                    <span className="text-xs text-foreground font-mono">
                        {items.description}
                    </span>
                    </div>
                </a>
                </li>
            )     
            })}

            </ol>
        </div>
      </div>
    </section>
  )
}
