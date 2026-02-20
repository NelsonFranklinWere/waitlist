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

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now()
      const distance = TARGET_DATE - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center lg:text-left">
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm">
        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Days
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Hours
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono uppercase tracking-wide mt-1">
            Min
          </div>
        </div>

        <div className="bg-cyber-dark-2/80 border-2 border-cyber-navy/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm" style={{ boxShadow: '0 0 15px rgba(30, 58, 138, 0.3)' }}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyber-navy-light font-mono cyber-glow">
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
