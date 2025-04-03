"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { GamePhase, Player } from "@/lib/types"
import { Skull } from "lucide-react"

interface PlayerGridProps {
  players: Player[]
  currentPhase: GamePhase
  isVotingActive: boolean
}

export default function PlayerGrid({ players, currentPhase, isVotingActive }: PlayerGridProps) {
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Players</h3>
        <div className="text-sm text-gray-400">
          {players.filter((p) => p.alive).length} alive / {players.length} total
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <TooltipProvider>
          {players.map((player) => (
            <div
              key={player.id}
              className={`relative p-4 rounded-md border transition-all ${
                !player.alive
                  ? "border-red-900/30 bg-red-950/10 opacity-60"
                  : player.id === selectedTarget
                    ? "border-amber-600/50 bg-amber-950/20"
                    : "border-gray-800 bg-gray-900/20 hover:bg-gray-900/30"
              } ${isVotingActive && player.alive ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (isVotingActive && player.alive) {
                  setSelectedTarget(selectedTarget === player.id ? null : player.id)
                }
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <Avatar
                  className={`h-16 w-16 ${
                    player.alive ? "" : "grayscale"
                  } ${player.id === selectedTarget ? "ring-2 ring-amber-500" : ""}`}
                >
                  <AvatarImage src={player.avatar} />
                  <AvatarFallback>{player.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="text-center">
                  <div className="font-medium truncate w-full max-w-[100px] mx-auto">{player.name}</div>

                  {!player.alive && (
                    <Badge className="bg-red-900/50 text-red-200 mt-1">
                      <Skull className="h-3 w-3 mr-1" />
                      Dead
                    </Badge>
                  )}
                </div>
              </div>

              {player.id === selectedTarget && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-amber-600">Selected</Badge>
                </div>
              )}

              {isVotingActive && player.alive && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to select for voting</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {currentPhase === "night" && player.alive && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Available for night action</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          ))}
        </TooltipProvider>
      </div>

      {isVotingActive && selectedTarget && (
        <div className="flex justify-end mt-4">
          <Button className="bg-amber-700 hover:bg-amber-600">Cast Vote</Button>
        </div>
      )}
    </div>
  )
}

