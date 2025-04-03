import Link from "next/link"
import { Button } from "@/components/ui/button"
import GameFeatures from "@/components/game-features"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <div className="mt-12 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Ready to join the Family?</h2>
            <p className="text-lg text-gray-400">Enter the world of intrigue, deception, and strategy</p>
            <div className="flex justify-center gap-4 mt-6">
              <Link href="/create-game">
                <Button variant="default" className="bg-red-800 hover:bg-red-700">
                  Create Game
                </Button>
              </Link>
              <Link href="/join-game">
                <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/20">
                  Join Game
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <GameFeatures />
      </div>
    </div>
  )
}

