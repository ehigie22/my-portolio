import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  {name: 'Home', href: '#hero'},
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Projects', href: '#projects'},
  {name: 'Contact', href: '#contact'}
]

const Navbar = () => { 
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  // Smooth scroll function
  const scrollToSection = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
    <nav className={cn('fixed w-full z-50 transition-all duration-300', 
      isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-7')}>
      
      <div className='container flex items-center justify-between'>
        <a className='text-xl font-bold text-primary flex items-center' href="#hero">
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Destiny</span> Portfolio
          </span>
        </a>
        
        {/* desktop navbar */}

        <div className='hidden md:flex space-x-8'>
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
              {item.name}</a>
          ))}
        </div>

        {/* Mobile Navbar */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className='md:hidden p-2 text-foreground z-50'>
      {isMenuOpen ? <X size={26}/> : <Menu size={26} />}
    </button>
      </div>
    </nav>

    {isMenuOpen && (
      <div className="fixed inset-0 z-30 pt-20 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col space-y-10 text-xl font-semibold">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

   </>
  )
}

export default Navbar
