import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLang = i18n.language === 'en' ? 'EN' : 'PT'

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="marcos4lex">
          <img src="/logo.png" alt="marcos4lex" className="h-[42px] w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-accent-blue after:to-accent-cyan hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="hidden md:flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 text-slate-400 hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
          >
            {currentLang === 'PT' ? (
              <><span>🇧🇷</span><span>PT</span><span className="text-slate-600">|</span><span className="text-slate-600">EN</span></>
            ) : (
              <><span>🇺🇸</span><span className="text-slate-600">PT</span><span className="text-slate-600">|</span><span>EN</span></>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-300 hover:text-white text-sm font-medium block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { toggleLang(); setMenuOpen(false) }}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 text-slate-400"
                >
                  {currentLang === 'PT' ? '🇺🇸 EN' : '🇧🇷 PT'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
