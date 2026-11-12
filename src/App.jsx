import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <p className="font-body text-xs tracking-[0.3em] text-titanium uppercase mb-4">
          Pipeline check — step 1 of 9
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-gold-bright mb-6">
          SoveU
        </h1>
        <p className="font-body text-sm text-paper/80 leading-relaxed">
          This placeholder page exists to prove the deploy pipeline works end to
          end — Vite → GitHub Actions → GitHub Pages. Real homepage content
          (narrative, tiers, CTA) comes in step 2, once copy is drafted and
          approved.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="w-2 h-2 rounded-full bg-indigo-bright" />
          <span className="w-2 h-2 rounded-full bg-titanium" />
        </div>
      </motion.div>
    </div>
  )
}

export default App
