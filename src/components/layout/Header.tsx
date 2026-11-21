'use client'

import Link from "next/link"
import {Menu, X, } from 'lucide-react'
import { useState } from "react"


export default function Header() {

  const[openMenu, setOpenMenu] = useState(false)

  const HeaderNavigation = [
    {href: 'home', label:'Home'},
    {href: 'projects', label:'Projects'},
    {href: 'about', label:'About'},
    {href: 'skills', label:'Skills'},
    {href: 'contacts', label:'Contact me'},

    {href: '', label:''},
]

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/1 shadow-lg">
      <div className="mx-auto max-w-4xl flex items-center justify-between py-4 px-7">
        <p className="font-mono text-xl text-gray-200">DavidRengifo12</p>

      <button className="text-xl lg:hidden "
      onClick={() =>setOpenMenu(!openMenu)}
      >
        {openMenu ? <X color="white"/>  : <Menu color="white" /> }
      </button>
        <nav className="hidden lg:block">
          <ul className="flex gap-4">
            {
              HeaderNavigation.map((item) => (
                <li
                key={item.label}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  <Link
                  href={item.href}
                  className="cursor-pointer py-2 px-3 text-gray-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
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
                      className="py-2 font-mono text-sm text-white"
                      >
                        {item.label}
                        
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          )
        }
        
      </div>
    </header>
  )
}
