"use client"

import { useState, useEffect } from "react"
import VldLogo from "./vld-logo"

export default function HomePage() {
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

      {/* Wallet Balance */}
      <div className="card mt-6">
        <div className="flex items-center">
          <div className="w-16 h-16 relative mr-4 flex items-center justify-center">
            <VldLogo width={64} height={64} />
          </div>
          <div>
            <div className="text-gray-400">VLD Balance</div>
            <div className="text-3xl font-bold glow-text">49.96195</div>
            <div className="text-gray-500 flex items-center cursor-pointer hover:text-gray-300 transition-colors">
              Convert to USD <span className="ml-1">›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards with Coming Soon Overlays */}
      <div className="card feature-card relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
          <span className="text-2xl font-bold text-white glow-text">COMING SOON</span>
        </div>
        <div className="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z"
              fill="#aaaaaa"
            />
          </svg>
        </div>
        <div className="feature-content">
          <div className="font-semibold">VLD Convert</div>
          <div className="text-gray-400 text-sm">Convert any token to USD or other cryptocurrencies.</div>
        </div>
        <div className="feature-arrow">›</div>
      </div>

      <div className="card feature-card relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
          <span className="text-2xl font-bold text-white glow-text">COMING SOON</span>
        </div>
        <div className="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM17 14H3V6H17V14ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7ZM23 7V18C23 19.1 22.1 20 21 20H4C4 19 4 19 4 18H21V7C22.1 7 22.1 7 23 7Z"
              fill="#aaaaaa"
            />
          </svg>
        </div>
        <div className="feature-content">
          <div className="font-semibold">VLD Pay</div>
          <div className="text-gray-400 text-sm">Pay and get paid in VLD or any other token.</div>
        </div>
        <div className="feature-arrow">›</div>
      </div>

      <div className={`success-message ${showSuccess ? "show" : ""}`}>Success! You've claimed 1 VLD Coin</div>
    </div>
  )
}
