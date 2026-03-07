import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-40" />
      <div className="circuit-bg absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 items-center">
          <div className="flex justify-start">
            <img
              src="/logo.png"
              alt="marcos4lex"
              className="h-[38px] w-auto object-contain"
              style={{ mixBlendMode: 'screen', opacity: 0.75, filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.4))' }}
            />
          </div>

          <div className="flex justify-center">
            <p className="text-xs text-slate-700 font-mono text-center">
              &copy; 2026 Marcos Alexandre. {t('footer.rights')}
            </p>
          </div>

          <div />
        </div>
      </div>
    </footer>
  )
}
