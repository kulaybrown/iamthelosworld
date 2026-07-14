export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full flex-col items-center gap-4 border-t border-line/60 px-6 py-12 text-center">
      <span className="font-pixel text-xs text-white">IAMTHELOSWORLD</span>

      <p className="max-w-sm font-body text-xs text-mist">
        Built pixel by pixel. Thanks for stopping by the arcade.
      </p>
{/* 
      <div className="flex gap-6 font-mono text-[11px] tracking-wide text-mist">
        <a href="#" className="transition-colors hover:text-cyan">
          ITCH.IO
        </a>
        <a href="#" className="transition-colors hover:text-cyan">
          TWITTER
        </a>
        <a href="#" className="transition-colors hover:text-cyan">
          DISCORD
        </a>
      </div> */}

      <span className="mt-2 font-mono text-[10px] text-mist/50">
        © {year} IAMTHELOSWORLD. ALL PIXELS RESERVED.
      </span>
    </footer>
  )
}
