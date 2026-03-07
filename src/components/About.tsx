import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'


export default function About() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const timeline: { year: string; title: string; description: string }[] = t('about.timeline', { returnObjects: true }) as { year: string; title: string; description: string }[]

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 circuit-bg opacity-40" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="20%" cy="60%" r="4" fill="#3b82f6" />
        <circle cx="80%" cy="60%" r="4" fill="#06b6d4" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent-blue tracking-widest uppercase mb-3 border border-accent-blue/20 px-3 py-1 rounded-full">
            &lt;about /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          <div className="flex flex-col items-center lg:items-start w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden w-[280px] lg:w-[390px] h-[350px] lg:absolute lg:h-full lg:top-0 lg:bottom-0 border border-accent-blue/20 group"
            >
              <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src="/marcos-perfil.jpg"
                alt="Marcos"
                className="w-full h-full object-cover object-center grayscale-[50%] contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          <div className="relative z-10 lg:col-start-2">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-blue to-transparent opacity-40" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 mb-8 last:mb-0 group"
              >
                <div className="absolute left-0 top-3 w-12 h-px bg-gradient-to-r from-accent-blue to-transparent" />
                <div className="absolute left-[19px] top-[7px] w-3 h-3 rounded-full bg-dark-900 border-2 border-accent-blue group-hover:border-accent-cyan group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-300" />

                <div className="card-glass rounded-xl p-5 hover:neon-border transition-all duration-300 holographic">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold font-mono text-accent-cyan tracking-widest px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
