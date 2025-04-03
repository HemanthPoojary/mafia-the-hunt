"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Sun, Skull, Shield, Eye, VoteIcon, ArrowRight } from "lucide-react"

export default function GamePhasesDiagram() {
  const [activePhase, setActivePhase] = useState<number>(0)

  const phases = [
    {
      name: "Night Phase",
      icon: <Moon className="h-6 w-6 text-blue-400" />,
      color: "bg-blue-950/30 border-blue-900/50",
      textColor: "text-blue-400",
      description: "Mafia chooses a target, special roles use their abilities",
      actions: [
        { icon: <Skull className="h-5 w-5 text-red-400" />, text: "Mafia selects a player to eliminate" },
        { icon: <Shield className="h-5 w-5 text-green-400" />, text: "Doctor protects a player" },
        { icon: <Eye className="h-5 w-5 text-blue-400" />, text: "Detective investigates a player" },
      ],
    },
    {
      name: "Day Phase",
      icon: <Sun className="h-6 w-6 text-amber-400" />,
      color: "bg-amber-950/30 border-amber-900/50",
      textColor: "text-amber-400",
      description: "Players discuss, share information, and vote",
      actions: [
        { icon: <Skull className="h-5 w-5 text-red-400" />, text: "Night elimination results are announced" },
        { icon: <ArrowRight className="h-5 w-5 text-gray-400" />, text: "Players discuss and make accusations" },
        {
          icon: <VoteIcon className="h-5 w-5 text-amber-400" />,
          text: "Players vote to eliminate a suspected Mafia member",
        },
      ],
    },
  ]

  const nextPhase = () => {
    setActivePhase((activePhase + 1) % phases.length)
  }

  return (
    <div className="mt-6">
      <Card className={`p-4 ${phases[activePhase].color} transition-colors duration-500`}>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-shrink-0 p-4 rounded-full bg-black/30 backdrop-blur-sm">{phases[activePhase].icon}</div>

          <div className="flex-grow space-y-4">
            <div className="flex items-center justify-between">
              <h3 className={`text-xl font-medium ${phases[activePhase].textColor}`}>{phases[activePhase].name}</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={nextPhase}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Next Phase
              </Button>
            </div>

            <p className="text-gray-300">{phases[activePhase].description}</p>

            <div className="space-y-2 pt-2 border-t border-gray-700">
              <h4 className="font-medium text-white">Key Actions:</h4>

              <div className="space-y-2">
                {phases[activePhase].actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {action.icon}
                    <span className="text-gray-300">{action.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-4 text-center text-gray-400 text-sm">
        The game alternates between Night and Day phases until a team achieves victory
      </div>
    </div>
  )
}

