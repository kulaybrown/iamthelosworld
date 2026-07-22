import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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
              Privacy Policy
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
            Welcome to <strong className="text-cyan-400">Jumpy Run</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), hosted at{' '}
            <a 
              href="https://iamthelosworld.com/jumpy-run" 
              className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
            >
              iamthelosworld.com/jumpy-run
            </a>. 
            We are committed to protecting your privacy and ensuring a safe gaming experience.
            This Privacy Policy explains what information we collect when you play Jumpy Run, 
            how it is used, and how your data is protected.
          </p>

          {/* Section 1 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              1. Information We Collect
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              We collect minimal information necessary to provide account authentication and leaderboard functionality:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              <li>
                <strong className="text-slate-200">Google Authentication Data:</strong> When you choose to sign in via Google OAuth, we collect basic public profile metadata provided by Google, including your display name, email address, and profile picture URL.
              </li>
              <li>
                <strong className="text-slate-200">Gameplay Data:</strong> High scores, game progress, and character customization selections tied to your account ID.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              <li>To authenticate your player account across web and mobile sessions.</li>
              <li>To display your username and avatar on public high score leaderboards.</li>
              <li>To save your gameplay progression and unlockable preferences.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              3. Third-Party Services & Infrastructure
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              We do not sell, rent, or trade your personal information to third parties. We use trusted infrastructure providers to run the game safely:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              <li>
                <strong className="text-slate-200">Google OAuth:</strong> Facilitates secure user login without storing passwords on our servers.
              </li>
              <li>
                <strong className="text-slate-200">Supabase:</strong> Serves as our secure backend database to store player profiles and score records.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              4. Data Retention & Account Deletion
            </h2>
            <p className="text-xs text-slate-300">
              We retain player profile data as long as your account remains active. You have the right to request 
              complete deletion of your account, scores, and associated personal data at any time by contacting us.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
            <h2 className="text-base font-bold text-white mb-2 text-cyan-400">
              5. Contact Us
            </h2>
            <p className="text-xs text-slate-300">
              If you have questions regarding this Privacy Policy or wish to request data deletion, please contact the developer via:{' '}
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
          <Link to="/terms" className="hover:text-cyan-400 transition-colors">
            Terms of Service →
          </Link>
        </div>

      </div>
    </div>
  )
}