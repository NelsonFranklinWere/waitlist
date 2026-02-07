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
    <div className="max-w-md mx-auto">
      <form action={handleSubmit} className="space-y-4">
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
            className="block text-sm font-medium text-white mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isPending}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-white/60"
            placeholder="your.email@university.edu"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Joining Waitlist...
            </>
          ) : (
            'Join the Waitlist'
          )}
        </button>

        {/* Status message */}
        {message && (
          <div
            className={`p-4 rounded-lg ${
              messageType === 'success'
                ? 'bg-green-500/20 border border-green-400 text-green-100'
                : 'bg-red-500/20 border border-red-400 text-red-100'
            }`}
          >
            {message}
          </div>
        )}

      </form>
    </div>
  )
}


