"use client"

import { useState } from "react"
import HomePage from "@/components/home-page"
import AboutPage from "@/components/about-page"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "about">("home")

  return (
    <div className="app-container">
      <div className="tab-container">
        <div className={`tab ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>
          Home
        </div>
        <div className={`tab ${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>
          About
        </div>
      </div>

      {activeTab === "home" ? <HomePage /> : <AboutPage />}
    </div>
  )
}
