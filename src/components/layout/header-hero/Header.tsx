'use client'

import Link from "next/link"
import {Menu, X, } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import ThemeToggle from "../../ui/ThemeTogle"



export default function Header() {

  const[openMenu, setOpenMenu] = useState(false)

  const HeaderNavigation = [
    {href: '/', label:'Home'},
    {href: 'about', label:'About'},
    {href: 'habilities', label:'Skills'},
    /*{href: 'projects', label:'Projects'},*/
    
    
    {href: 'contacme', label:'Contactme'},

    {href: '', label:''},
]

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/1 shadow-lg">
      <div className="mx-auto max-w-4xl flex items-center justify-between py-4 px-7">
       <div className="rounded-xl flex items-center gap-4">
        <Image src="/davids.png" alt="imagen logo" height={20} width={40}/>
         <p className="font-mono text-xl text-foreground">
        DavidRengifo12
        </p>
       </div>
       

      <button className="text-xl lg:hidden "
      onClick={() =>setOpenMenu(!openMenu)}
      >
        {openMenu ? <X className="text-foreground"/>  : <Menu className="text-foreground" /> }
      </button>
      
        <nav className="hidden lg:block">
          <ul className="flex gap-4">
            {
              HeaderNavigation.map((item) => (
                <li
                key={item.label}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  <Link
                  href={item.href}
                  className="cursor-pointer py-2 px-3 text-foreground font-mono"
                  >
                    {item.label}
                    
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>

      <div>
        {
          openMenu && (
            <nav 
            className="lg:hidden backdrop-blur-md bg-white/0 shadow-lg"
            >
              <ul className="flex flex-col items-center">
                {
                  HeaderNavigation.map((item) => (
                    <li key={item.label}>
                      <Link
                      href={item.href}
                      className="py-2 font-mono text-sm text-foreground"
                      >
                        {item.label}
                        
                      </Link>
                    </li>
                  ))
                }
              </ul>
              <div className="flex justify-center py-4 lg:hidden">
                <ThemeToggle />
              </div>
            </nav>
          )
        }
        
      </div>
    </header>
  )
}
