import React, { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function DeleteAccount() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isConfirmStep = searchParams.get('confirm') === 'true'

  const [email, setEmail] = useState('')
  const [selectedGame, setSelectedGame] = useState('jumpy-run')
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    document.title = 'Delete Account - IAMTHELOSWORLD'

    // Automatically trigger deletion when user returns from email confirmation link
    async function handleEmailReturn() {
      if (!isConfirmStep) return

      setLoading(true)
      setStatusMessage({
        type: 'info',
        text: 'Email link verified! Deleting account data...',
      })

      // Retrieve authenticated session created by clicking the email link
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        try {
          // Call Supabase SQL function to purge account
          const { error } = await supabase.rpc('delete_user')
          if (error) throw error

          // Clear local session
          await supabase.auth.signOut()

          setStatusMessage({
            type: 'success',
            text: 'Your account and game high scores have been permanently deleted.',
          })

          setTimeout(() => navigate('/'), 4000)
        } catch (err) {
          console.error('Deletion error:', err)
          setStatusMessage({
            type: 'error',
            text: err.message || 'Failed to process account deletion. The verification link may have expired.',
          })
        }
      } else {
        setStatusMessage({
          type: 'error',
          text: 'Invalid or expired confirmation link. Please submit a new deletion request.',
        })
      }
      setLoading(false)
    }

    handleEmailReturn()
  }, [isConfirmStep, navigate])

  // Step 1: Request Deletion Link
  const handleRequestDeletion = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setStatusMessage({ type: '', text: '' })

    try {
      const redirectUrl = `${window.location.origin}/delete-account?confirm=true`

      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: redirectUrl,
          shouldCreateUser: false, // Prevents registering unknown emails
        },
      })

      if (error) throw error

      setEmailSent(true)
      setStatusMessage({
        type: 'info',
        text: `A confirmation link has been sent to ${email}. Please check your inbox to complete deletion.`,
      })
    } catch (err) {
      console.error('Email request error:', err)
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to send confirmation email. Please verify the email address is correct.',
      })
    } finally {
      setLoading(false)
    }
  }

  const getGameLabel = (val) => (val === 'jumpy-run' ? 'Jumpy Run' : 'All Arcade Games')

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 px-4 py-12 md:py-16 font-sans flex flex-col items-center justify-center">
      
      {/* Container Card */}
      <div className="w-full max-w-xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <span className="inline-block bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-md mb-3 uppercase">
              Data Rights & Privacy
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Delete Account
            </h1>
          </div>

          <Link
            to="/"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg transition-all"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Status Messages */}
        {statusMessage.text && (
          <div
            className={`mb-6 p-4 rounded-xl border text-xs font-mono leading-relaxed ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                : statusMessage.type === 'error'
                ? 'bg-red-950/60 border-red-500/40 text-red-300'
                : 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Informational Intro */}
        {!isConfirmStep && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed mb-8">
            <p>
              Select the game scope and enter your registered email. We will send a confirmation email link to verify account ownership before deleting data from <strong className="text-white">iamthelosworld.com</strong>.
            </p>
          </div>
        )}

        {/* Form: Input Email & Game Scope */}
        {!emailSent && !isConfirmStep && (
          <form onSubmit={handleRequestDeletion} className="space-y-5">
            
            {/* Game Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                1. Select Target Game
              </label>
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-red-500/80 text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all cursor-pointer font-sans"
              >
                <option value="jumpy-run">Jumpy Run (2D Pixel Runner)</option>
                <option value="all-games">All IAMTHELOSWORLD Games</option>
              </select>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                2. Account Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter-your-email@example.com"
                className="w-full bg-slate-950 border border-slate-800 focus:border-red-500/80 text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-500 disabled:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-950/50"
            >
              {loading ? 'Sending Request...' : `Send ${getGameLabel(selectedGame)} Deletion Link`}
            </button>
          </form>
        )}

        {/* Confirmation State: Waiting for Email Click */}
        {emailSent && !isConfirmStep && (
          <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 text-center space-y-3">
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
              📬 Check Your Email Inbox
            </div>
            <p className="text-xs text-slate-300">
              We sent a confirmation link to <strong className="text-white">{email}</strong> to delete data for <strong className="text-cyan-400">{getGameLabel(selectedGame)}</strong>.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Open your email and click the link. It will bring you back to this page and permanently execute the account deletion.
            </p>
            <button
              onClick={() => setEmailSent(false)}
              className="text-[11px] font-mono text-slate-500 hover:text-slate-300 underline pt-2"
            >
              Didn't get the email? Try again
            </button>
          </div>
        )}

      </div>
    </div>
  )
}