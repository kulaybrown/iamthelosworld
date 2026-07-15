import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import useImagePreloader from '../hooks/useImagePreloader'

// Import your assets
import gameImg from '../assets/images/streetbuster-img.jpg'
import bgImg from '../assets/images/streetbuster-bg.jpg'

export default function StreetBusterPage() {
  const isReady = useImagePreloader([gameImg, bgImg])

  if (!isReady) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-ink px-6 text-center">
        <div className="border border-line bg-surface px-6 py-4 font-mono text-xs tracking-[0.3em] text-magenta">
          LOADING STREET BUSTER ASSETS...
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
          STREET BUSTER
        </h1>

        <div className="mt-8 w-full max-w-4xl overflow-hidden border border-line bg-surface p-2 shadow-2xl">
          <img 
            src={gameImg} 
            alt="Street Buster Gameplay Preview" 
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="mt-8 max-w-2xl font-body text-base text-mist sm:text-lg">
          A one-button platformer built around momentum, timing, and trying again. This page is the
          route target for the game card on the homepage.
        </p>

        {/* Tag Badges with Android Release status */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="border border-line bg-surface px-4 py-2 font-mono text-xs tracking-[0.2em] text-mist">
            FIGHTING
          </span>
          <span className="border border-line bg-surface px-4 py-2 font-mono text-xs tracking-[0.2em] text-mist">
            ACTION
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