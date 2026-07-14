import { useEffect, useRef } from 'react'

// Low-res grid rendered chunky (imageSmoothingEnabled = false) to fake
// pixel-art sprite work, then animated on a loop like a looping game clip.
const COLS = 64
const ROWS = 36

const PALETTE = {
  bg: '#08080f',
  far: '#161632',
  mid: '#22224a',
  near: '#2f2f66',
  cyan: '#4cf3ff',
  magenta: '#ff3d9a',
  amber: '#ffc94d',
}

function buildSkyline(seed) {
  // deterministic-ish pseudo-random skyline silhouette per layer
  const cols = []
  let h = seed
  for (let i = 0; i < COLS; i++) {
    h += Math.sin(i * 0.7 + seed) * 2.2
    const height = 6 + Math.abs(Math.sin(i * 0.35 + seed * 1.7)) * 10
    cols.push(Math.max(3, Math.round(height)))
  }
  return cols
}

export default function HeroCanvas({ className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    canvas.width = COLS
    canvas.height = ROWS

    const farSkyline = buildSkyline(1.3)
    const midSkyline = buildSkyline(4.1)

    const stars = Array.from({ length: 26 }, () => ({
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * (ROWS * 0.55)),
      phase: Math.random() * Math.PI * 2,
    }))

    // runner sprite: a tiny pixel character hopping across the foreground
    const runner = { x: -6, groundY: ROWS - 5 }

    let frame = 0
    let stopped = false

    function drawPixel(x, y, color) {
      ctx.fillStyle = color
      ctx.fillRect(x, y, 1, 1)
    }

    function draw() {
      if (stopped) return
      frame++

      ctx.fillStyle = PALETTE.bg
      ctx.fillRect(0, 0, COLS, ROWS)

      // stars twinkle
      stars.forEach((s) => {
        const on = Math.sin(frame * 0.05 + s.phase) > 0
        if (on) drawPixel(s.x, s.y, '#ffffff33')
      })

      // parallax skylines
      farSkyline.forEach((h, i) => {
        for (let y = 0; y < h; y++) drawPixel(i, ROWS - y, PALETTE.far)
      })
      const scroll = Math.floor(frame * 0.15) % COLS
      midSkyline.forEach((h, i) => {
        const x = (i + scroll) % COLS
        for (let y = 0; y < h; y++) drawPixel(x, ROWS - y, PALETTE.mid)
      })

      // ground line
      for (let x = 0; x < COLS; x++) {
        drawPixel(x, ROWS - 3, PALETTE.near)
        drawPixel(x, ROWS - 2, PALETTE.near)
        drawPixel(x, ROWS - 1, '#000000')
      }

      // glowing floating blocks (abstract "collectibles")
      const blocks = [
        { x: 14, baseY: ROWS - 12, color: PALETTE.cyan },
        { x: 34, baseY: ROWS - 16, color: PALETTE.magenta },
        { x: 50, baseY: ROWS - 10, color: PALETTE.amber },
      ]
      blocks.forEach((b, idx) => {
        const bob = Math.round(Math.sin(frame * 0.06 + idx) * 1.5)
        drawPixel(b.x, b.baseY + bob, b.color)
        drawPixel(b.x + 1, b.baseY + bob, b.color)
        drawPixel(b.x, b.baseY + bob + 1, b.color)
        drawPixel(b.x + 1, b.baseY + bob + 1, b.color)
      })

      // runner hop cycle
      runner.x += 0.4
      if (runner.x > COLS + 6) runner.x = -6
      const hop = Math.abs(Math.sin(frame * 0.18)) * 4
      const rx = Math.round(runner.x)
      const ry = Math.round(runner.groundY - hop)
      drawPixel(rx, ry, PALETTE.cyan)
      drawPixel(rx, ry - 1, PALETTE.cyan)
      drawPixel(rx + 1, ry - 1, '#ffffff')
      drawPixel(rx, ry + 1, PALETTE.cyan)
      drawPixel(rx - 1, ry + 1, PALETTE.cyan)

      rafRef.current = requestAnimationFrame(draw)
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // draw a single static frame instead of looping
      draw()
      stopped = true
    } else {
      draw()
    }

    return () => {
      stopped = true
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
