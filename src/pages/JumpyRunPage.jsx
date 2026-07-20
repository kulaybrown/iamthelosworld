import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import Footer from '../components/Footer'
import useImagePreloader from '../hooks/useImagePreloader'

// Import your assets
import bgImg from '../assets/images/jumpyrun-bg.jpg'

export default function JumpyRunPage() {
  const isReady = useImagePreloader([bgImg])
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')

    const finish = () => {
      window.history.replaceState({}, document.title, window.location.pathname)
      setSessionReady(true)
    }

    if (code) {
      supabase.auth.exchangeCodeForSession(code).finally(finish)
    } else {
      supabase.auth.getSession().finally(finish)
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, _session) => {
      // no-op — just needed for cleanup
    })

    return () => subscription.unsubscribe()
  }, [])

  const gamePath = useMemo(
    () => `${import.meta.env.BASE_URL}games/jumpy-run/index.html`,
    []
  )

  // Wait for both the session check AND the image preload before showing the page
  if (!sessionReady || !isReady) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-ink px-6 text-center">
        <div className="border border-line bg-surface px-6 py-4 font-mono text-xs tracking-[0.3em] text-cyan">
          LOADING JUMPY RUN ASSETS...
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-ink px-6 text-center overflow-hidden">
      {/* 10% visible background image overlaying bg-ink */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" 
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      <div className="crt-overlay relative z-10 pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen w-full max-w-4xl flex-1 flex-col items-center justify-center py-24">
        <span className="font-mono text-xs tracking-[0.35em] text-cyan/80">GAME PAGE</span>
        <h1 className="mt-5 font-pixel text-[clamp(1.6rem,6vw,3.25rem)] leading-relaxed text-white">
          JUMPY RUN
        </h1>

        {/* Playable game embed, replacing the old static preview image */}
        <div className="mt-8 w-full max-w-4xl overflow-hidden border border-line bg-surface p-2 shadow-2xl">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src={gamePath}
              title="Jumpy Run"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        <p className="mt-8 max-w-2xl font-body text-base text-mist sm:text-lg">
          A one-button platformer built around momentum, timing, and trying again. This page is the
          route target for the game card on the homepage.
        </p>

        {/* Tag Badges with Android Release status */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="border border-line bg-surface px-4 py-2 font-mono text-xs tracking-[0.2em] text-mist">
            ENDLESS RUNNER
          </span>
          <span className="border border-line bg-surface px-4 py-2 font-mono text-xs tracking-[0.2em] text-mist">
            PIXEL PLATFORMER
          </span>
          <span className="border border-cyan/40 bg-cyan/5 px-4 py-2 font-mono text-xs tracking-[0.2em] text-cyan">
            COMING TO ANDROID
          </span>
        </div>

        <Link
          to="/"
          className="mt-12 inline-flex items-center gap-3 border border-magenta/60 bg-magenta/10 px-6 py-3 font-mono text-sm text-magenta transition-colors hover:bg-magenta/20"
        >
          BACK TO HOME
        </Link>
      </main>

      {/* Transparent Footer wrapper */}
      <div className="relative z-10 w-full bg-transparent [&_footer]:bg-transparent [&_div]:bg-transparent">
        <Footer />
      </div>
    </div>
  )
}