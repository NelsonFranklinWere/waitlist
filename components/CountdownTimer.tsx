'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  // Calculate target date: 23 days, 20 hours, 30 minutes, 1 second from now
  const calculateTargetDate = () => {
    const target = new Date()
    target.setDate(target.getDate() + 23)
    target.setHours(target.getHours() + 20)
    target.setMinutes(target.getMinutes() + 30)
    target.setSeconds(target.getSeconds() + 1)
    target.setMilliseconds(0)
    return target.getTime()
  }

  const [targetTime] = useState(() => calculateTargetDate())
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 23,
    hours: 20,
    minutes: 30,
    seconds: 1
  })

  useEffect(() => {
    // Calculate initial time left
    const updateTime = () => {
      const now = new Date().getTime()
      const distance = targetTime - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Timer expired - show zeros
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateTime()

    // Then update every second
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [targetTime])

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
