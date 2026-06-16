'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Men', 'Women', 'Shoes', 'Watches']

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-xl md:text-2xl font-bold tracking-[0.3em]">TT</a>

        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Shopping Bag" className="text-white hover:text-purple-400 transition-colors">
            <ShoppingBag size={18} />
          </button>
          <button 
            aria-label="Toggle Menu"
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 py-4 px-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white" onClick={() => setMobileOpen(false)}>
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}