"use client"

import { useState, useEffect } from "react"
import VldLogo from "./vldx-logo"

export default function ClaimPage() {
  const [hasClaimed, setHasClaimed] = useState(false)
  const [countdown, setCountdown] = useState({
    hours: 15,
    minutes: 30,
    seconds: 21,
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if user has already claimed
    const claimStatus = localStorage.getItem("validiumClaimed")
    if (claimStatus) {
      setHasClaimed(true)
    }

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset claim status when countdown reaches zero
          setHasClaimed(false)
          localStorage.removeItem("validiumClaimed")
          return { hours: 15, minutes: 30, seconds: 21 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleClaim = () => {
    if (!hasClaimed) {
      setHasClaimed(true)
      localStorage.setItem("validiumClaimed", "true")

      // Show success message
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="logo-container" onClick={hasClaimed ? undefined : handleClaim}>
        <div className="logo-glow"></div>
        <div className={`logo-image ${!hasClaimed ? "pulse" : ""}`}>
          <VldLogo width={220} height={220} />
        </div>
      </div>

      <div className="text-center mt-4 text-gray-400">
        <p className="glow-text text-lg mb-2">Claim your VLD in</p>
        <div className="countdown text-white text-2xl mt-1 glow-text">
          {countdown.hours.toString().padStart(2, "0")}:{countdown.minutes.toString().padStart(2, "0")}:
          {countdown.seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <div className={`success-message ${showSuccess ? "show" : ""}`}>Success! You've claimed 1 VLD Coin</div>
    </div>
  )
}
