import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'

const HEX_COLORS = [
  { bg: 'bg-blue-500/10 border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-400/60', text: 'text-blue-300', glow: 'hover:shadow-[0_0_14px_rgba(59,130,246,0.4)]' },
  { bg: 'bg-cyan-500/10 border-cyan-500/25 hover:bg-cyan-500/20 hover:border-cyan-400/60', text: 'text-cyan-300', glow: 'hover:shadow-[0_0_14px_rgba(6,182,212,0.4)]' },
  { bg: 'bg-violet-500/10 border-violet-500/25 hover:bg-violet-500/20 hover:border-violet-400/60', text: 'text-violet-300', glow: 'hover:shadow-[0_0_14px_rgba(139,92,246,0.4)]' },
  { bg: 'bg-emerald-500/10 border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/60', text: 'text-emerald-300', glow: 'hover:shadow-[0_0_14px_rgba(16,185,129,0.4)]' },
]

const CATEGORY_ICONS = ['⬡', '◈', '⬟', '◉']

export default function Skills() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const categories: { name: string; items: string[] }[] = t('skills.categories', { returnObjects: true }) as { name: string; items: string[] }[]

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-900 dot-grid" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-cyan/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-blue/4 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent-cyan tracking-widest uppercase mb-3 border border-accent-cyan/20 px-3 py-1 rounded-full">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t('skills.title')}</h2>
          <p className="text-slate-500 mt-3 text-sm font-mono">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => {
            const color = HEX_COLORS[ci]
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
                style={{ perspective: 800 }}
              >
                <div className={`card-glass rounded-2xl p-6 border transition-all duration-300 ${color.bg} ${color.glow} h-full`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xl font-mono ${color.text} opacity-60`}>{CATEGORY_ICONS[ci]}</span>
                    <h3 className={`font-bold text-sm tracking-wide ${color.text}`}>{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: ci * 0.1 + idx * 0.05 + 0.2 }}
                        whileHover={{ scale: 1.08 }}
                        className={`cursor-default text-xs font-medium px-3 py-1.5 rounded-lg border ${color.bg} ${color.text} transition-all duration-200`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
