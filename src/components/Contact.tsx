import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Linkedin, Send, Terminal } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Linkedin, label: 'LinkedIn', value: 'marcos4lex', href: 'https://br.linkedin.com/in/marcos4lex' },
  { icon: Github, label: 'GitHub', value: 'marcos4lex', href: 'https://github.com/marcos4lex' },
]

const SOCIAL_COLORS = [
  'hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]',
  'hover:border-slate-400/50 hover:shadow-[0_0_12px_rgba(148,163,184,0.2)]',
]

const WEB3FORMS_KEY = 'b70518f6-98f4-4d64-bcee-9314bd6a1fdc'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'invalid'
    if (!form.subject.trim()) e.subject = 'required'
    if (!form.message.trim()) e.message = 'required'
    return e
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-dark-900/80 border ${errors[field] ? 'border-red-500/60' : 'border-slate-800'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-accent-blue focus:shadow-[0_0_0_1px_rgba(59,130,246,0.3)] transition-all duration-200 font-mono`

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dark-800 circuit-bg opacity-60" />
      <div className="absolute inset-0 bg-dark-800/60" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-mono text-accent-blue tracking-widest uppercase mb-3 border border-accent-blue/20 px-3 py-1 rounded-full">
            &lt;contact /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t('contact.title')}</h2>
          <p className="text-slate-500 mt-3 text-sm font-mono">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-4"
            noValidate
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={14} className="text-accent-blue" />
              <span className="text-xs font-mono text-accent-blue tracking-wide">// send_message()</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t('contact.form.name_placeholder')}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={inputClass('name')}
                aria-label={t('contact.form.name')}
              />
              <input
                type="email"
                placeholder={t('contact.form.email_placeholder')}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={inputClass('email')}
                aria-label={t('contact.form.email')}
              />
            </div>
            <input
              type="text"
              placeholder={t('contact.form.subject_placeholder')}
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className={inputClass('subject')}
              aria-label={t('contact.form.subject')}
            />
            <textarea
              rows={5}
              placeholder={t('contact.form.message_placeholder')}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className={`${inputClass('message')} resize-none`}
              aria-label={t('contact.form.message')}
            />

            {status === 'success' && (
              <p className="text-emerald-400 text-sm font-mono">{'>'} {t('contact.form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-mono">{'>'} {t('contact.form.error')}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
            >
              <Send size={15} />
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-xs font-mono text-slate-600 mb-1">// {t('contact.info_title')}</p>
            {SOCIAL_LINKS.map(({ icon: Icon, label, value, href }, idx) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 card-glass rounded-xl p-4 border border-slate-800 ${SOCIAL_COLORS[idx]} transition-all duration-300 group`}
              >
                <div className="w-10 h-10 rounded-xl bg-accent-blue/8 border border-slate-800 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-mono">{label}</p>
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors font-mono">{value}</p>
                </div>
              </a>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
