'use client'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import {motion} from 'motion/react'

export default function SidebarContacts() {

  const SocialLinks = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com/TU_USUARIO",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "https://linkedin.com/in/TU_USUARIO",
  },
  {
    id: 3,
    icon: FaInstagram,
    href: "https://instagram.com/TU_USUARIO",
  },
  
]

  return (
    <motion.aside className="fixed right-0 top-1/2 p-3 -translate-y-1/2 rounded-xl bg-card backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, x:-50}}
      whileInView={{ opacity: 1, x:0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <ol className="flex flex-col items-center gap-5">
        {SocialLinks.map((item) => {
          const Icon = item.icon

          return (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.id === 3 ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={`Visitar ${item.id}`}
                className="text-foreground hover:text-brand-accent transition-all duration-300 hover:text-red-400"
              >
                <Icon size={22} />
              </a>
            </li>
          )
        })}
      </ol>
    </motion.aside>
  )
}