"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import ChatPanel from "@/components/chat-panel"
import PlayerGrid from "@/components/player-grid"
import GameTimeline from "@/components/game-timeline"
import RoleCard from "@/components/role-card"
import VotingPanel from "@/components/voting-panel"
import { Bell, Moon, Sun } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import type { GamePhase, Player } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export default function GamePage() {
  const { toast } = useToast()
  const [currentPhase, setCurrentPhase] = useState<GamePhase>("night")
  const [phaseTime, setPhaseTime] = useState(120) // seconds
  const [phaseProgress, setPhaseProgress] = useState(100)
  const [showRoleDialog, setShowRoleDialog] = useState(true)
  const [votingActive, setVotingActive] = useState(false)

  const [players, setPlayers] = useState<Player[]>([
    { id: "p1", name: "DonCorleone", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p2", name: "LuckyLuciano", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p3", name: "Capone", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p4", name: "Genovese", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p5", name: "Anastasia", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p6", name: "Costello", alive: true, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p7", name: "Gambino", alive: false, avatar: "/placeholder.svg?height=40&width=40" },
    { id: "p8", name: "Bonanno", alive: false, avatar: "/placeholder.svg?height=40&width=40" },
  ])

  // Simulated interval for phase timer
  useEffect(() => {
    const interval = setInterval(() => {
      setPhaseTime((prevTime) => {
        if (prevTime <= 1) {
          // Phase change logic would go here
          clearInterval(interval)

          // Toggle between day and night for demo
          setCurrentPhase(currentPhase === "day" ? "night" : "day")
          return 120 // Reset timer
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [currentPhase])

  // Update progress bar
  useEffect(() => {
    setPhaseProgress((phaseTime / 120) * 100)
  }, [phaseTime])

  // Notification when phase changes
  useEffect(() => {
    if (currentPhase === "day") {
      toast({
        title: "Day Phase Begins",
        description: "It's time to discuss and vote on who might be in the Mafia.",
        variant: "default",
      })
      setVotingActive(true)
    } else {
      toast({
        title: "Night Falls",
        description: "The Mafia is active. Special roles can use their abilities.",
        variant: "destructive",
      })
      setVotingActive(false)
    }
  }, [currentPhase])

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${
        currentPhase === "day"
          ? "bg-gradient-to-b from-amber-900/60 to-gray-900"
          : "bg-gradient-to-b from-blue-950/80 to-gray-950"
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 grain-overlay"></div>

      {/* Role Assignment Dialog */}
      <Dialog open={showRoleDialog} onOpenChange={setShowRoleDialog}>
        <DialogContent className="bg-black/90 border-red-900/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-red-50">Your Role</DialogTitle>
            <DialogDescription className="text-gray-400">Keep your role secret from other players.</DialogDescription>
          </DialogHeader>

          <RoleCard
            role="detective"
            description="Each night, you can investigate one player to determine if they are a member of the Mafia."
            ability="Investigation"
          />

          <DialogFooter>
            <Button className="w-full bg-red-800 hover:bg-red-700" onClick={() => setShowRoleDialog(false)}>
              I Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-6">
        {/* Game Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {currentPhase === "day" ? (
              <Sun className="h-6 w-6 text-amber-400" />
            ) : (
              <Moon className="h-6 w-6 text-blue-400" />
            )}
            <h2 className="text-xl font-bold text-white">{currentPhase === "day" ? "Day Phase" : "Night Phase"}</h2>
            <Badge className="ml-2 bg-gray-800">
              {Math.floor(phaseTime / 60)}:{(phaseTime % 60).toString().padStart(2, "0")}
            </Badge>
          </div>
          <Progress value={phaseProgress} className="w-40 bg-gray-700" />
          <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/20">
            <Bell className="h-4 w-4 mr-2" />
            Game Log
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {/* Left Column - Player Grid */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-4">
                <PlayerGrid players={players} currentPhase={currentPhase} isVotingActive={votingActive} />
              </CardContent>
            </Card>

            {votingActive && (
              <Card className="bg-black/60 border-gray-800">
                <CardContent className="p-4">
                  <VotingPanel players={players.filter((p) => p.alive)} />
                </CardContent>
              </Card>
            )}

            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-4">
                <GameTimeline />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Chat and Info */}
          <div className="space-y-4">
            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-4">
                <ChatPanel currentPhase={currentPhase} />
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-gray-800">
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-lg text-red-200">Your Role</h3>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-blue-600">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Your character" />
                    <AvatarFallback>YC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-blue-400">Detective</div>
                    <div className="text-sm text-gray-400">Investigate one player each night</div>
                  </div>
                </div>
                <Button className="w-full bg-blue-800 hover:bg-blue-700" disabled={currentPhase !== "night"}>
                  Use Special Ability
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

