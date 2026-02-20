'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Fixed target date so countdown is consistent: 14 days from Feb 20, 2026 → March 6, 2026
const TARGET_DATE = new Date('2026-03-06T00:00:00').getTime()

function computeTimeLeft(): TimeLeft {
  const now = Date.now()
  const distance = TARGET_DATE - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  }
}

export default function CountdownTimer() {
  // Initialize from current time so on every load/refresh we show the actual time remaining
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft)

  // Re-sync every second, aligned to the clock so the seconds digit flips exactly on the boundary
  useEffect(() => {
    const scheduleNext = () => {
      setTimeLeft(computeTimeLeft())
      const now = Date.now()
      const msUntilNextSecond = 1000 - (now % 1000)
      return setTimeout(scheduleNext, msUntilNextSecond)
    }

    const timeoutId = scheduleNext()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="text-center lg:text-left">
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm">
        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow" suppressHydrationWarning>
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Days
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow" suppressHydrationWarning>
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Hours
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow" suppressHydrationWarning>
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Min
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow" suppressHydrationWarning>
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Sec
          </div>
        </div>
      </div>
    </div>
  )
}
