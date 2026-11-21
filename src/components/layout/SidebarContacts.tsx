
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

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
    <aside className="fixed right-0 top-1/2 p-3 -translate-y-1/2 rounded-xl bg-white/10 backdrop-blur-md shadow-lg">
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
                className="text-white hover:text-brand-accent transition-all duration-300 hover:text-red-400"
              >
                <Icon size={22} />
              </a>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}