import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 noir-text-shadow">
          <span className="text-red-600">Welcome to the</span>
          <br />
          Family Business
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-300 max-w-2xl mx-auto">
          In the shadows of the night, deception is your most valuable weapon. Join the ultimate game of social
          deduction where trust is a luxury you can't afford.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create-game">
            <Button className="bg-red-800 hover:bg-red-700 text-lg py-6 px-8">Start Your Family</Button>
          </Link>
          <Link href="/rules">
            <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/20 text-lg py-6 px-8">
              Learn the Rules
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

