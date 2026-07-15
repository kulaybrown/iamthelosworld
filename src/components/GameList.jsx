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
  {
    title: 'STREET BUSTER',
    tagline:
      'A one-button platformer built around momentum, timing, and trying again. This page is the route target for the game card on the homepage.',
    status: 'IN DEVELOPMENT',
    accent: 'magenta',
    tags: ['FIGHTING', 'ACTION', 'PIXEL ART'],
    href: '/street-buster',
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

      <div className="mt-14 grid w-full grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-stretch max-w-3xl mx-auto">
        {games.map((game) => (
          <div 
            key={game.title} 
            className="flex w-full max-w-sm flex-col justify-between gap-3"
          >
            {/* The key change is here: 'flex-1 flex flex-col' forces the wrapper 
              and the GameCard child inside it to stretch fully. 
            */}
            <div className="flex flex-1 flex-col [&>*]:flex-1">
              <GameCard {...game} />
            </div>
            
            <Link
              to={game.href}
              className={`inline-flex items-center justify-center border border-${game.accent}/50 bg-${game.accent}/10 px-4 py-3 font-mono text-xs tracking-[0.25em] text-${game.accent} transition-colors hover:bg-${game.accent}/20`}
            >
              OPEN {game.title.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
