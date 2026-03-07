import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { Globe, Zap, Wrench, MonitorSpeaker } from 'lucide-react'
import TiltCard from './TiltCard'

const ICONS = [Globe, Zap, Wrench, MonitorSpeaker]

const COLORS = [
  { icon: 'text-blue-400',    iconBg: 'bg-blue-500/10 border-blue-500/20',   border: 'hover:border-blue-500/40',   glow: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]' },
  { icon: 'text-cyan-400',    iconBg: 'bg-cyan-500/10 border-cyan-500/20',   border: 'hover:border-cyan-500/40',   glow: 'hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]' },
  { icon: 'text-violet-400',  iconBg: 'bg-violet-500/10 border-violet-500/20', border: 'hover:border-violet-500/40', glow: 'hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]' },
  { icon: 'text-emerald-400', iconBg: 'bg-emerald-500/10 border-emerald-500/20', border: 'hover:border-emerald-500/40', glow: 'hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]' },
]

export default function Services() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const items: { title: string; description: string }[] = t('services.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-900 dot-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-accent-blue/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-xs font-mono text-accent-blue tracking-widest uppercase mb-3 border border-accent-blue/20 px-3 py-1 rounded-full">
            &lt;services /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('services.title')}</h2>
          <p className="text-slate-500 text-sm font-mono mb-5">{t('services.subtitle')}</p>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            {t('services.badge')}
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            const color = COLORS[i]
            return (
              <TiltCard key={i} intensity={8}>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`card-glass rounded-2xl p-6 border border-slate-800/80 holographic ${color.border} ${color.glow} transition-all duration-400 h-full`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${color.iconBg}`}>
                    <Icon size={22} className={color.icon} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
