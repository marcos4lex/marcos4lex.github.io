import { useEffect, useState, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowDown, Terminal } from 'lucide-react'
import TechScene from './TechScene'

const SOCIAL = [
  { icon: Github, href: 'https://github.com/marcos4lex', label: 'GitHub' },
  { icon: Linkedin, href: 'https://br.linkedin.com/in/marcos4lex', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/marcos4lex', label: 'Instagram' },
]

function TypeWriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (typing) {
      if (idx < text.length) {
        const t = setTimeout(() => { setDisplayed(text.slice(0, idx + 1)); setIdx(i => i + 1) }, 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (idx > 0) {
        const t = setTimeout(() => { setDisplayed(text.slice(0, idx - 1)); setIdx(i => i - 1) }, 35)
        return () => clearTimeout(t)
      } else {
        setTyping(true)
      }
    }
  }, [idx, typing, text])

  return (
    <span className="gradient-text font-semibold">
      {displayed}
      <span className="animate-pulse text-accent-blue">▋</span>
    </span>
  )
}

function RoleRotator() {
  const { t } = useTranslation()
  const roles: string[] = t('hero.roles', { returnObjects: true }) as string[]
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3500)
    return () => clearInterval(interval)
  }, [roles.length])

  return <TypeWriter key={roleIdx} text={roles[roleIdx]} />
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden scanlines">
      <div className="absolute inset-0 circuit-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-blue/6 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-cyan/6 blur-3xl" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <Suspense fallback={null}>
          <TechScene />
        </Suspense>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Terminal size={14} className="text-accent-blue" />
            <span className="text-accent-blue text-xs font-mono tracking-widest uppercase">
              {t('hero.greeting')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-4"
          >
            {t('hero.name')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-mono mb-6 h-9 flex items-center"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-slate-400 text-lg leading-relaxed max-w-md mb-10"
          >
            {t('hero.pitch')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#portfolio"
              className="relative px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden group flex items-center justify-center text-center"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
            >
              <span className="relative z-10">{t('hero.cta_portfolio')}</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-accent-blue hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center text-center"
            >
              {t('hero.cta_contact')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-accent-blue hover:border-accent-blue hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-accent-blue transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
