import HeroCanvas from './HeroCanvas'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b border-line/60 px-6 text-center">
      <HeroCanvas className="absolute inset-0 h-full w-full object-cover opacity-70" />

      {/* gradient wash to keep text legible over the animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />

      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-6 font-mono text-xs tracking-[0.35em] text-cyan/80">
          A TWO-BIT WORLD, ONE PIXEL AT A TIME
        </span>

        <h1 className="font-pixel text-[clamp(1.6rem,6vw,3.5rem)] leading-relaxed text-white drop-shadow-[0_0_18px_rgba(76,243,255,0.35)]">
          IAMTHE
          <span className="text-magenta drop-shadow-[0_0_18px_rgba(255,61,154,0.45)]">LOS</span>
          WORLD
        </h1>

        <p className="mt-6 max-w-lg font-body text-base text-mist sm:text-lg">
          A small studio building pixel-scale games with oversized ambitions.
          Handmade sprites, chiptune ambitions, no filler.
        </p>

        <a
          href="#games"
          className="mt-10 inline-flex items-center gap-3 border border-cyan/60 bg-cyan/10 px-6 py-3 font-mono text-sm text-cyan transition-colors hover:bg-cyan/20"
        >
          PRESS START
          <span className="pixel-blink">▮</span>
        </a>
      </div>

      <div className="absolute bottom-8 z-10 font-mono text-[10px] tracking-[0.3em] text-mist/60">
        SCROLL ↓
      </div>
    </section>
  )
}
