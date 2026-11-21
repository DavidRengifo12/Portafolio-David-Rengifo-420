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