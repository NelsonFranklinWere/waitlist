'use client'

import { useState, useTransition } from 'react'
import { joinWaitlist } from '@/app/actions/waitlist'

export default function WaitlistForm() {
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await joinWaitlist(formData)

      setMessage(result.message)
      setMessageType(result.success ? 'success' : 'error')

      // Clear success message after 5 seconds
      if (result.success) {
        setTimeout(() => {
          setMessage('')
          setMessageType('')
        }, 5000)
      }
    })
  }

  return (
    <div className="w-full">
      <form action={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="hidden">
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-mono font-medium text-cyber-navy-light mb-2 cyber-glow"
          >
            &gt; Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isPending}
            className="cyber-input w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-mono text-cyber-white placeholder-cyber-white-dim disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            placeholder="Enter your email to get notified."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-mono font-bold"
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-cyber-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="terminal-cursor">Processing...</span>
            </>
          ) : (
            <span className="terminal-cursor">&gt; Join Waitlist</span>
          )}
        </button>

        {/* Status message */}
        {message && (
          <div
            className={`p-3 rounded-lg text-xs sm:text-sm font-mono border-2 ${
              messageType === 'success'
                ? 'bg-cyber-navy/20 border-cyber-navy-light text-cyber-navy-light cyber-glow'
                : 'bg-red-500/10 border-red-500 text-red-400'
            }`}
            style={messageType === 'success' ? { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' } : {}}
          >
            <span className="font-bold">&gt;</span> {message}
          </div>
        )}

      </form>
    </div>
  )
}


