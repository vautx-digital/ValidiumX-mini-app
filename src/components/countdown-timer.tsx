"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime()

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="mt-4">
      <p className="text-sm text-zinc-400 mb-2">Next claim available in:</p>
      <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours.toString().padStart(2, "0")}</span>
          <span className="countdown-label">hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <span className="countdown-label">mins</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <span className="countdown-label">secs</span>
        </div>
      </div>
    </div>
  )
}
