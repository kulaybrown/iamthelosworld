export default function GameCard({ title, tagline, status, accent = 'cyan', tags = [] }) {
  const accentMap = {
    cyan: {
      text: 'text-cyan',
      border: 'border-cyan/50',
      glow: 'hover:shadow-[0_0_28px_rgba(76,243,255,0.25)]',
      bg: 'bg-cyan/10',
    },
    magenta: {
      text: 'text-magenta',
      border: 'border-magenta/50',
      glow: 'hover:shadow-[0_0_28px_rgba(255,61,154,0.25)]',
      bg: 'bg-magenta/10',
    },
    amber: {
      text: 'text-amber',
      border: 'border-amber/50',
      glow: 'hover:shadow-[0_0_28px_rgba(255,201,77,0.25)]',
      bg: 'bg-amber/10',
    },
  }
  const a = accentMap[accent]

  return (
    <div
      className={`pixel-frame group w-full max-w-sm border ${a.border} bg-surface p-6 text-left transition-shadow ${a.glow}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className={`font-mono text-[10px] tracking-[0.25em] ${a.text}`}>{status}</span>
        <span className={`h-2 w-2 ${a.bg} border ${a.border}`} />
      </div>

      <h3 className="font-pixel text-lg leading-relaxed text-white">{title}</h3>
      <p className="mt-3 font-body text-sm text-mist">{tagline}</p>

      {tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2 py-1 font-mono text-[10px] tracking-wide text-mist"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
