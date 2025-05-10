"use client"

import { useState, useEffect } from "react"
import { IDKitWidget, CredentialType } from "@worldcoin/idkit"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface WorldIDVerificationProps {
  onVerificationComplete: () => void
}

export function WorldIDVerification({ onVerificationComplete }: WorldIDVerificationProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is already verified
    const verified = localStorage.getItem("worldIDVerified") === "true"
    if (verified) {
      setIsVerified(true)
      setTimeout(() => {
        onVerificationComplete()
      }, 1000)
    }
  }, [onVerificationComplete])

  const handleVerify = async () => {
    try {
      setIsVerifying(true)
      setError(null)

      // Simulate verification process (in a real app, this would be handled by IDKit)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store verification status
      localStorage.setItem("worldIDVerified", "true")
      localStorage.setItem("worldID", `user_${Math.random().toString(36).substring(2, 10)}`)
      localStorage.setItem("username", `validium_user_${Math.random().toString(36).substring(2, 6)}`)

      setIsVerified(true)
      setTimeout(() => {
        onVerificationComplete()
      }, 1000)
    } catch (err) {
      console.error("Verification failed:", err)
      setError("Verification failed. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleSuccess = () => {
    // Store verification status
    localStorage.setItem("worldIDVerified", "true")
    localStorage.setItem("worldID", `user_${Math.random().toString(36).substring(2, 10)}`)
    localStorage.setItem("username", `validium_user_${Math.random().toString(36).substring(2, 6)}`)

    setIsVerified(true)
    setTimeout(() => {
      onVerificationComplete()
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full bg-amber-100/20 blur-xl"></div>
        <Image src="/logo.png" alt="VIX Logo" width={96} height={96} className="relative z-10" />
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">Validium-X</h1>
      <p className="text-amber-200/80 mb-8">Verify your identity to continue</p>

      {isVerified ? (
        <div className="flex flex-col items-center">
          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Verification successful
          </div>
          <p className="text-gray-400">Redirecting to app...</p>
        </div>
      ) : (
        <>
          {error && <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-4">{error}</div>}

          {isVerifying ? (
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center justify-center w-64"
              disabled
            >
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Verifying...
            </button>
          ) : (
            <>
              <p className="text-gray-400 mb-4">
                Verify with World ID to access the Validium-X app and claim your daily rewards.
              </p>

              <IDKitWidget
                app_id="app_staging_d754d817eb4f8a4ea14d93534a5b57a4" // Example app ID
                action="validium-x-auth"
                onSuccess={handleSuccess}
                credential_types={[CredentialType.Orb, CredentialType.Phone]}
                enableTelemetry
              >
                {({ open }) => (
                  <button
                    className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-3 rounded-full transition-colors w-64"
                    onClick={() => open()}
                  >
                    Verify with World ID
                  </button>
                )}
              </IDKitWidget>

              <button
                className="mt-4 text-gray-500 hover:text-gray-400 text-sm transition-colors"
                onClick={handleVerify}
              >
                Demo: Skip verification
              </button>
            </>
          )}
        </>
      )}
    </div>
  )
}
