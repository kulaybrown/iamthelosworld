import fs from 'fs'
import path from 'path'

const src = path.resolve('../jumpy-run/dist')
const dest = path.resolve('public/games/jumpy-run')

if (!fs.existsSync(src)) {
  console.error(`❌ Game build not found at: ${src}`)
  console.error(`   Make sure you've run "npm run build" inside the jumpy-run game repo first.`)
  process.exit(1)
}

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(path.dirname(dest), { recursive: true })
fs.cpSync(src, dest, { recursive: true })

console.log(`✅ Game synced: ${src} → ${dest}`)