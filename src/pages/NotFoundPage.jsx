import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">Error 404</p>
      <h1 className="mb-4 text-4xl font-black leading-tight sm:text-5xl">Page not found</h1>
      <p className="mb-8 text-base text-zinc-600 sm:text-lg">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/"
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Back to home
      </Link>
    </main>
  )
}

export default NotFoundPage
