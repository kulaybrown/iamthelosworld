import Hero from '../components/Hero'
import GameList from '../components/GameList'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-ink text-center">
      <div className="crt-overlay" />
      <Hero />
      <GameList />
      <Footer />
    </div>
  )
}