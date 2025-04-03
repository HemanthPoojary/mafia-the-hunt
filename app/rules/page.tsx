import type { Metadata } from "next"
import RulesContent from "@/components/rules-content"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Game Rules | Mafia Game",
  description: "Comprehensive rules and gameplay guide for the Mafia game.",
}

export default function RulesPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      <div className="container mx-auto relative">
        <div className="mb-8 flex items-center">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-black/80 border border-red-900/30 rounded-lg shadow-xl p-6 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mafia Game Rules</h1>
          <p className="text-gray-400 mb-8">A comprehensive guide to gameplay, roles, and strategies</p>

          <RulesContent />

          <div className="mt-12 border-t border-gray-800 pt-6 flex justify-between">
            <Link href="/">
              <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/20">
                Back to Home
              </Button>
            </Link>
            <Link href="/create-game">
              <Button className="bg-red-800 hover:bg-red-700">Start a Game</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

