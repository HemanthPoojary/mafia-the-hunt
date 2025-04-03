"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Player } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface VotingPanelProps {
  players: Player[]
}

export default function VotingPanel({ players }: VotingPanelProps) {
  const [votes, setVotes] = useState<{ [key: string]: string[] }>({
    p1: ["p3", "p4"],
    p3: ["p1"],
    p5: [],
    p6: ["p5"],
  })

  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)
  const totalVoters = players.length

  const getVoteCount = (playerId: string): number => {
    return Object.values(votes).filter((voters) => voters.includes(playerId)).length
  }

  const getVotePercent = (playerId: string): number => {
    const count = getVoteCount(playerId)
    return Math.round((count / totalVoters) * 100) || 0
  }

  const handleVote = () => {
    if (!selectedPlayer) return

    // In a real implementation, this would send the vote to the server
    console.log(`Voted for ${selectedPlayer}`)

    // Simulate adding the vote
    const newVotes = { ...votes }
    // Remove any previous vote by "You"
    Object.keys(newVotes).forEach((key) => {
      newVotes[key] = newVotes[key].filter((voter) => voter !== "you")
    })
    // Add the new vote
    if (!newVotes[selectedPlayer]) {
      newVotes[selectedPlayer] = []
    }
    newVotes[selectedPlayer].push("you")
    setVotes(newVotes)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Town Vote</h3>
        <Badge className="bg-amber-700">3:45 remaining</Badge>
      </div>

      <div className="space-y-3">
        {players.map((player) => {
          const voteCount = getVoteCount(player.id)
          const votePercent = getVotePercent(player.id)
          const isSelected = selectedPlayer === player.id

          return (
            <div
              key={player.id}
              className={`p-2 rounded-md border flex items-center gap-3 transition-all ${
                isSelected ? "border-amber-600/70 bg-amber-950/20" : "border-gray-800 hover:bg-gray-900/50"
              } cursor-pointer`}
              onClick={() => setSelectedPlayer(isSelected ? null : player.id)}
            >
              <Avatar className={`h-10 w-10 ${isSelected ? "ring-2 ring-amber-500" : ""}`}>
                <AvatarImage src={player.avatar} />
                <AvatarFallback>{player.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium">{player.name}</div>
                  <div className="text-sm text-gray-400">{voteCount} votes</div>
                </div>
                <Progress value={votePercent} className="h-2 bg-gray-800" />
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-400">Select a player to vote for elimination</div>
        <Button disabled={!selectedPlayer} className="bg-amber-700 hover:bg-amber-600" onClick={handleVote}>
          Cast Vote
        </Button>
      </div>
    </div>
  )
}

