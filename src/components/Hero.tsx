import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Github, Linkedin, Send, ChevronRight } from 'lucide-react'

const TECH_ICONS: Record<string, { svg: string; color: string }> = {
  HTML5: {
    color: '#e34f26',
    svg: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
  },
  CSS3: {
    color: '#1572b6',
    svg: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z',
  },
  JavaScript: {
    color: '#f7df1e',
    svg: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.81-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
  },
  React: {
    color: '#61dafb',
    svg: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.143.946-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.466 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.765 2.852 2.476-.005.35-.22.866-.827 1.393-.577.515-1.544 1.004-2.559 1.28.06-.45.12-.895.17-1.344-.003-1.012-.17-2.035-.557-3.106l.546-.197zm-13.56.004c-.386 1.07-.554 2.09-.556 3.1.048.45.113.9.17 1.344-1.01-.28-1.98-.767-2.556-1.278-.617-.533-.84-1.052-.84-1.402 0-.706 1.11-1.727 2.84-2.468.43-.183.893-.35 1.378-.5l.564.204zM12 19.688c-1.04 0-2.078-.486-3.07-1.338-.43-.375-.856-.83-1.27-1.355.452.02.905.035 1.36.035.454 0 .905-.01 1.36-.034.43.574.892 1.096 1.35 1.562.465-.466.926-.99 1.356-1.562.455.025.906.034 1.36.034.455 0 .91-.01 1.36-.035-.41.527-.84.984-1.27 1.36-.99.854-2.028 1.332-3.066 1.332v-.004zm-3.618-3.32c-.18-.638-.36-1.292-.526-1.943.196-.392.407-.783.632-1.174.222-.394.45-.776.68-1.15.27.652.493 1.31.678 1.952-.635.15-1.312.283-2.016.387l.552 1.928zm7.23.005c.698-.104 1.37-.235 2.006-.392l.535-1.92c-.238.383-.465.774-.68 1.154-.226.39-.438.783-.637 1.175l-.225-.017z',
  },
  TypeScript: {
    color: '#3178c6',
    svg: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
  },
}

const SOCIAL = [
  { icon: Github, href: 'https://github.com/marcos4lex', label: 'GitHub' },
  { icon: Linkedin, href: 'https://br.linkedin.com/in/marcos4lex', label: 'LinkedIn' },
]

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef(null)

  const techRes = t('hero.tech', { returnObjects: true })
  const tech: string[] = Array.isArray(techRes) ? techRes : []

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-dark-900" ref={ref}>
      <div className="absolute inset-0 circuit-bg opacity-30" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-cyan-500/6 blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-6xl mx-auto px-6 pt-28 pb-10 gap-12">

        {/* ── LEFT ── */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <ChevronRight size={13} className="text-accent-blue" />
            <span className="text-accent-blue text-xs font-mono tracking-[0.2em] uppercase">
              {t('hero.greeting')}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4"
          >
            <span className="text-white">{t('hero.name_first')} </span>
            <span className="text-accent-blue">{t('hero.name_last')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg font-medium mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-sm leading-relaxed max-w-sm mb-7"
          >
            {t('hero.pitch')}
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {tech.map((name) => {
              const icon = TECH_ICONS[name]
              return (
                <span
                  key={name}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
                >
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill={icon.color}
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path d={icon.svg} />
                    </svg>
                  ) : (
                    <span className="w-3 h-3 rounded-sm bg-slate-500" />
                  )}
                  {name}
                </span>
              )
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-5"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-all hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
            >
              <Send size={14} />
              {t('hero.cta_contact')}
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-accent-blue hover:text-white transition-all duration-300"
            >
              {t('hero.cta_portfolio')}
              <ChevronRight size={15} />
            </a>
          </motion.div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            <span className="text-xs text-slate-500">{t('hero.available')}</span>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3"
          >
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-accent-blue hover:border-accent-blue hover:shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo area ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="hidden lg:block relative flex-shrink-0"
          style={{ width: 520, height: 620 }}
        >
          {/* Top-left Blue Arc */}
          <div
            className="absolute z-0 rounded-full"
            style={{
              width: 280,
              height: 280,
              top: -10,
              left: -10,
              border: '2px solid rgba(37,99,235,0.8)',
              boxShadow: '0 0 40px rgba(37,99,235,0.4), inset 0 0 20px rgba(37,99,235,0.2)',
              background: 'transparent',
            }}
          />

          {/* Dot grid — left side */}
          <div className="absolute z-0" style={{ top: 220, left: -30 }}>
            {Array.from({ length: 7 }).map((_, row) => (
              <div key={row} className="flex gap-5 mb-5">
                {Array.from({ length: 4 }).map((_, col) => (
                  <div
                    key={col}
                    className="w-[3px] h-[3px] rounded-full bg-blue-500/40"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Bottom-right decorative lines */}
          {/* Outer line */}
          <div
            className="absolute z-0"
            style={{
              width: 120,
              height: 120,
              bottom: 40,
              right: 60,
              borderRadius: '24px',
              borderTop: '2px solid rgba(37,99,235,0.8)',
              borderRight: '2px solid rgba(37,99,235,0.8)',
              boxShadow: '8px -8px 20px rgba(37,99,235,0.2)',
            }}
          />
          {/* Inner line */}
          <div
            className="absolute z-0"
            style={{
              width: 120,
              height: 120,
              bottom: 15,
              right: 85,
              borderRadius: '24px',
              borderTop: '2px solid rgba(37,99,235,0.4)',
              borderRight: '2px solid rgba(37,99,235,0.4)',
            }}
          />

          {/* Photo card */}
          <div
            className="absolute z-10 overflow-hidden rounded-[32px]"
            style={{
              width: 380,
              height: 480,
              top: 30,
              left: 60,
              border: '1.5px solid rgba(37,99,235,0.4)',
              boxShadow: '0 0 60px rgba(37,99,235,0.15), inset 0 0 20px rgba(37,99,235,0.1)',
              background: '#0b0f1a', // Dark solid color matching the image background
            }}
          >
            {/* The image itself */}
            <img
              src="/marcos-perfil.jpg"
              alt="Marcos Alexandre"
              className="w-full h-full object-cover object-[center_top] relative z-10"
            />
            {/* Bottom edge glow inside card */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#060810] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,1)] z-20" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
