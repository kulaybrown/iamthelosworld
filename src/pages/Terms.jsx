import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 px-4 py-12 md:py-16 font-sans select-none flex flex-col items-center justify-center">
      
      {/* Container Card */}
      <div className="w-full max-w-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-md mb-3 uppercase">
              Legal Document
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Effective Date: July 2026
            </p>
          </div>

          <Link
            to="/"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg transition-all"
          >
            ← Back to Game
          </Link>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-normal">
          <p>
            By accessing or playing <strong className="text-cyan-400">Jumpy Run</strong> at{' '}
            <a 
              href="https://iamthelosworld.com/jumpy-run" 
              className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
            >
              iamthelosworld.com/jumpy-run
            </a>, 
            you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, 
            please discontinue using the service.
          </p>

          {/* Section 1 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              1. Fair Play & User Conduct
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              Jumpy Run is designed for personal entertainment. When using our service, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              <li>Use automated bots, scripts, or hacks to artificially manipulate high scores or gameplay.</li>
              <li>Attempt to reverse-engineer, exploit, or disrupt our backend API services or databases.</li>
              <li>Select offensive, hateful, or inappropriate display usernames.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              2. Account Management & Leaderboards
            </h2>
            <p className="text-xs text-slate-300">
              We reserve the right to modify, reset, or remove player scores, usernames, or accounts found to be 
              violating our fair play rules or exploiting game mechanics without prior notice.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              3. Intellectual Property
            </h2>
            <p className="text-xs text-slate-300">
              All game graphics, animations, code, audio assets, and branding related to <strong className="text-slate-200">Jumpy Run</strong> are 
              the intellectual property of the developer and protected by applicable copyright laws.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-xs text-slate-300">
              Jumpy Run is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no guarantees that the game will 
              operate completely uninterrupted, error-free, or compatible with every device configuration.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              5. Changes to Terms
            </h2>
            <p className="text-xs text-slate-300">
              We reserve the right to update or modify these Terms of Service at any time. Continued use of the game 
              following changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              6. Contact Us
            </h2>
            <p className="text-xs text-slate-300">
              For any inquiries regarding these Terms of Service, please reach out via:{' '}
              <a 
                href="https://iamthelosworld.com" 
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 font-medium"
              >
                iamthelosworld.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
          <span>Jumpy Run © 2026</span>
          <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy Policy →
          </Link>
        </div>

      </div>
    </div>
  )
}