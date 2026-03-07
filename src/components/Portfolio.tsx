import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PLACEHOLDER_GRADIENTS = [
  'from-blue-900/60 via-dark-800 to-cyan-900/40',
  'from-violet-900/60 via-dark-800 to-blue-900/40',
  'from-cyan-900/60 via-dark-800 to-emerald-900/40',
]

export default function Portfolio() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const projects: {
    name: string
    description: string
    tags: string[]
    github: string
    demo: string
    image?: string
  }[] = t('portfolio.projects', { returnObjects: true }) as {
    name: string
    description: string
    tags: string[]
    github: string
    demo: string
    image?: string
  }[]

  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-800 circuit-bg opacity-50" />
      <div className="absolute inset-0 bg-dark-800/70" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent-blue tracking-widest uppercase mb-3 border border-accent-blue/20 px-3 py-1 rounded-full">
            &lt;portfolio /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t('portfolio.title')}</h2>
          <p className="text-slate-500 mt-3 text-sm font-mono">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-glass rounded-2xl overflow-hidden group hover:border-accent-blue/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300"
            >
              <div className={`relative h-48 overflow-hidden ${!project.image ? `bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[i]}` : ''}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top scale-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-black text-white/8 font-mono select-none">{project.name}</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full bg-dark-900/90 border border-slate-600 flex items-center justify-center text-white hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_14px_rgba(59,130,246,0.4)] transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Demo"
                    className="w-11 h-11 rounded-full bg-dark-900/90 border border-slate-600 flex items-center justify-center text-white hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_14px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-1.5">{project.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
