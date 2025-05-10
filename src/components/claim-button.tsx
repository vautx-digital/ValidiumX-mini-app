"use client"

import { useState } from "react"

interface ClaimButtonProps {
  onClaim: () => Promise<void>
}

export default function ClaimButton({ onClaim }: ClaimButtonProps) {
  const [claiming, setClaiming] = useState(false)

  const handleClick = async () => {
    setClaiming(true)
    try {
      await onClaim()
    } catch (error) {
      console.error("Error claiming:", error)
    } finally {
      setClaiming(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={claiming}
      className="w-full py-4 px-6 bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-900 disabled:text-zinc-500 rounded-lg border border-zinc-700 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="text-lg font-medium">{claiming ? "Claiming..." : "Claim 1 Validium Coin"}</span>
        {claiming && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </div>
    </button>
  )
}
