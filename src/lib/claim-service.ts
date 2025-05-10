interface ClaimStatus {
  hasClaimed: boolean
  nextClaimTime?: string
}

// Mock storage - in a real app, this would be a database
let lastClaimTime: string | null = null

export async function checkClaim(): Promise<ClaimStatus> {
  // In a real app, this would check against a database or blockchain
  // For demo purposes, we're using localStorage
  if (typeof window !== "undefined") {
    const storedClaimTime = localStorage.getItem("lastClaimTime")

    if (storedClaimTime) {
      const claimDate = new Date(storedClaimTime)
      const now = new Date()

      // Check if the claim was made today
      if (
        claimDate.getDate() === now.getDate() &&
        claimDate.getMonth() === now.getMonth() &&
        claimDate.getFullYear() === now.getFullYear()
      ) {
        // Calculate next claim time (tomorrow at midnight)
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(0, 0, 0, 0)

        return {
          hasClaimed: true,
          nextClaimTime: tomorrow.toISOString(),
        }
      }
    }
  }

  return { hasClaimed: false }
}

export async function claimCoin(): Promise<void> {
  // In a real app, this would update a database and interact with a blockchain
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date().toISOString()

      if (typeof window !== "undefined") {
        localStorage.setItem("lastClaimTime", now)
      }

      lastClaimTime = now
      resolve()
    }, 1500) // Simulate network delay
  })
}
