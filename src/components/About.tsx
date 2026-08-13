import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { Users, Code2, GraduationCap } from 'lucide-react'

const ICONS = [Code2, Users, GraduationCap]

const ICON_COLORS = [
  { bg: 'bg-green-900/40', border: 'border-green-700/40', text: 'text-green-400' },
  { bg: 'bg-blue-900/40', border: 'border-blue-700/40', text: 'text-blue-400' },
  { bg: 'bg-blue-900/40', border: 'border-blue-700/40', text: 'text-blue-400' },
]

const BULLET_COLORS = [
  'text-green-400',
  'text-blue-400',
  'text-blue-400',
]

const DOT_COLORS = [
  'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]',
  'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
  'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
]

const YEAR_COLORS = [
  'bg-green-900/30 border-green-600/50 text-green-400',
  'bg-dark-900 border-slate-700 text-slate-300',
  'bg-dark-900 border-slate-700 text-slate-300',
]

export default function About() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const timelineRes = t('about.timeline', { returnObjects: true })
  const timeline: {
    year: string
    title: string
    description: string
    bullets: string[]
  }[] = Array.isArray(timelineRes) ? timelineRes : []

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 circuit-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent-blue tracking-widest uppercase mb-3 border border-accent-blue/20 px-3 py-1 rounded-full">
            &lt; sobre mim /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical line */}
          <div className="absolute left-[72px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-700/60 via-slate-700/40 to-blue-700/60" />

          {timeline.map((item, i) => {
            const Icon = ICONS[i] ?? Code2
            const iconColor = ICON_COLORS[i] ?? ICON_COLORS[0]
            const bulletColor = BULLET_COLORS[i] ?? BULLET_COLORS[0]
            const dotColor = DOT_COLORS[i] ?? DOT_COLORS[0]
            const yearColor = YEAR_COLORS[i] ?? YEAR_COLORS[0]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start gap-6"
              >
                {/* Year badge */}
                <div className="flex-shrink-0 w-[72px] flex justify-center pt-4">
                  <span className={`text-xs font-bold font-mono px-2 py-1 rounded border ${yearColor}`}>
                    {item.year}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-[68px] top-[18px] w-2 h-2 rounded-full ${dotColor} z-10`} />

                {/* Card */}
                <div className="flex-1 card-glass rounded-2xl border border-slate-800/60 p-5 hover:border-slate-700/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Icon + Title + Description */}
                    <div className="flex gap-4 sm:w-1/2">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconColor.bg} border ${iconColor.border} flex items-center justify-center`}>
                        <Icon size={22} className={iconColor.text} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px bg-slate-800/60 self-stretch mx-1" />

                    {/* Bullets */}
                    {item.bullets?.length > 0 && (
                      <ul className="sm:w-1/2 flex flex-col gap-1.5 justify-center">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-center gap-2 text-slate-400 text-xs">
                            <span className={`text-base leading-none ${bulletColor}`}>•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
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
