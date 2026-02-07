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
