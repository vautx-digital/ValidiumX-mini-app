import Image from "next/image"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative animate-pulse">
          <Image
            src="/images/VLD_logo.png"
            alt="Validium-X Logo"
            width={160}
            height={160}
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          />
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-bold text-shadow">Validium-X</h1>
      <p className="mt-2 text-zinc-400 text-shadow-sm">Backed by a Robust Distributed Ledger</p>
    </div>
  )
}
