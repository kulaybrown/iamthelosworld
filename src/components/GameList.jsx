import GameCard from './GameCard'
import { Link } from 'react-router-dom'

const games = [
  {
    title: 'JUMPY RUN',
    tagline:
      'An endless pixel-platformer about momentum, mistimed jumps, and getting back up. One button, infinite ways to fail beautifully.',
    status: 'IN DEVELOPMENT',
    accent: 'cyan',
    tags: ['PLATFORMER', 'ENDLESS', 'ONE-BUTTON'],
    href: '/jumpyrun',
  },
]

export default function GameList() {
  return (
    <section id="games" className="relative flex w-full flex-col items-center px-6 py-24">
      <span className="font-mono text-xs tracking-[0.35em] text-magenta">CARTRIDGE SLOT</span>
      <h2 className="mt-4 font-pixel text-xl text-white sm:text-2xl">MY GAMES</h2>
      <p className="mt-4 max-w-md text-center font-body text-sm text-mist">
        One game live in the slot right now. More cartridges loading soon.
      </p>

      <div className="mt-14 flex w-full flex-col items-center gap-8">
        {games.map((game) => (
          <div key={game.title} className="flex w-full max-w-sm flex-col items-stretch gap-3">
            <GameCard {...game} />
            <Link
              to={game.href}
              className="inline-flex items-center justify-center border border-cyan/50 bg-cyan/10 px-4 py-3 font-mono text-xs tracking-[0.25em] text-cyan transition-colors hover:bg-cyan/20"
            >
              OPEN JUMPY RUN
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
