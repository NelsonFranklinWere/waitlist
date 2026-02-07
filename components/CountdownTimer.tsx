'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  // Set target date to 23 days, 20 hours, 30 minutes, 3 seconds from now
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 23)
  targetDate.setHours(targetDate.getHours() + 20)
  targetDate.setMinutes(targetDate.getMinutes() + 30)
  targetDate.setSeconds(targetDate.getSeconds() + 3)

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 23,
    hours: 20,
    minutes: 30,
    seconds: 3
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Timer expired, reset to original values
        setTimeLeft({ days: 23, hours: 20, minutes: 30, seconds: 3 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center">
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-blue-100 uppercase tracking-wide">
            Days
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-blue-100 uppercase tracking-wide">
            Hours
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-blue-100 uppercase tracking-wide">
            Min
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-blue-100 uppercase tracking-wide">
            Sec
          </div>
        </div>
      </div>
    </div>
  )
}
