"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Settings, Users } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import CharacterCustomization from "@/components/character-customization"
import GameRules from "@/components/game-rules"

const SAMPLE_PLAYERS = [
  { id: "p1", name: "DonCorleone", ready: true, isHost: true, avatar: "/placeholder.svg?height=40&width=40" },
  { id: "p2", name: "LuckyLuciano", ready: true, isHost: false, avatar: "/placeholder.svg?height=40&width=40" },
  { id: "p3", name: "Capone", ready: false, isHost: false, avatar: "/placeholder.svg?height=40&width=40" },
  { id: "p4", name: "Genovese", ready: false, isHost: false, avatar: "/placeholder.svg?height=40&width=40" },
]

export default function GameLobbyPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const gameId = searchParams?.get("id") || "unknown"

  const [players, setPlayers] = useState(SAMPLE_PLAYERS)
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string }[]>([
    { sender: "System", message: "Welcome to the game lobby! Wait for the host to start the game." },
    { sender: "DonCorleone", message: "Hey everyone, we'll start soon!" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isReady, setIsReady] = useState(false)
  const [gameCode] = useState("MFIA-1234-ABCD")

  const startGame = () => {
    // In a real implementation, this would communicate with the game server
    console.log("Starting game...")
    router.push(`/game?id=${gameId}`)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { sender: "You", message: newMessage.trim() }])
      setNewMessage("")
    }
  }

  const toggleReady = () => {
    setIsReady(!isReady)
    // Update local player status
    setPlayers(players.map((player) => (player.name === "You" ? { ...player, ready: !isReady } : player)))
  }

  const copyGameCode = () => {
    navigator.clipboard.writeText(gameCode)
    // Would normally show a toast notification here
    console.log("Game code copied to clipboard!")
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      <div className="max-w-6xl mx-auto relative">
        <Card className="bg-black/80 border-red-900/50 shadow-xl card-glow backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-red-50">Game Lobby</CardTitle>
                <CardDescription className="text-gray-400">Waiting for players to join and get ready</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-400">Game Code:</div>
                <Badge className="bg-gray-800 text-gray-200 hover:bg-gray-700 cursor-pointer" onClick={copyGameCode}>
                  {gameCode}
                  <Copy className="ml-1 h-3 w-3" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="players" className="space-y-4">
              <TabsList className="bg-gray-900/60">
                <TabsTrigger value="players" className="data-[state=active]:bg-red-900/50">
                  <Users className="mr-2 h-4 w-4" />
                  Players
                </TabsTrigger>
                <TabsTrigger value="character" className="data-[state=active]:bg-red-900/50">
                  Character
                </TabsTrigger>
                <TabsTrigger value="rules" className="data-[state=active]:bg-red-900/50">
                  Game Rules
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-red-900/50">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="players" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-4">
                    <h3 className="font-medium text-lg">Players ({players.length}/12)</h3>
                    <div className="border border-gray-800 rounded-md">
                      <ScrollArea className="h-[320px]">
                        <div className="divide-y divide-gray-800">
                          {players.map((player) => (
                            <div key={player.id} className="p-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage src={player.avatar} alt={player.name} />
                                  <AvatarFallback>{player.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium flex items-center gap-2">
                                    {player.name}
                                    {player.isHost && (
                                      <Badge className="bg-amber-700/50 text-amber-300 text-xs">Host</Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <Badge
                                className={
                                  player.ready ? "bg-green-600/20 text-green-400" : "bg-gray-600/20 text-gray-400"
                                }
                              >
                                {player.ready ? "Ready" : "Not Ready"}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>

                  <div className="md:col-span-2 border border-gray-800 rounded-md flex flex-col">
                    <div className="p-3 border-b border-gray-800">
                      <h3 className="font-medium">Lobby Chat</h3>
                    </div>
                    <ScrollArea className="flex-grow h-[240px] p-3">
                      <div className="space-y-3">
                        {chatMessages.map((msg, index) => (
                          <div key={index} className="flex gap-2">
                            <span
                              className={`font-medium ${
                                msg.sender === "System"
                                  ? "text-yellow-500"
                                  : msg.sender === "You"
                                    ? "text-blue-400"
                                    : "text-gray-300"
                              }`}
                            >
                              {msg.sender}:
                            </span>
                            <span className="text-gray-300">{msg.message}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <form onSubmit={sendMessage} className="p-3 border-t border-gray-800 flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        className="bg-gray-900/60 border-gray-800"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <Button type="submit" className="bg-red-800 hover:bg-red-700">
                        Send
                      </Button>
                    </form>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="character">
                <CharacterCustomization />
              </TabsContent>

              <TabsContent value="rules">
                <GameRules />
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <div className="border border-gray-800 rounded-md p-4 bg-gray-900/20">
                  <h3 className="font-medium text-lg mb-4">Game Settings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Game Mode:</span>
                      <span>Classic Mafia</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Players:</span>
                      <span>12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Day Phase:</span>
                      <span>5 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Night Phase:</span>
                      <span>2 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discussion Time:</span>
                      <span>2 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Custom Roles:</span>
                      <span>Enabled</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-red-800 text-red-400 hover:bg-red-900/20"
              onClick={() => router.push("/")}
            >
              Leave Game
            </Button>
            <div className="flex gap-3">
              <Button
                variant={isReady ? "default" : "outline"}
                className={
                  isReady ? "bg-green-800 hover:bg-green-700" : "border-green-800 text-green-400 hover:bg-green-900/20"
                }
                onClick={toggleReady}
              >
                {isReady ? "Ready" : "Mark as Ready"}
              </Button>
              <Button
                className="bg-red-800 hover:bg-red-700"
                onClick={startGame}
                disabled={!players.every((p) => p.ready)}
              >
                Start Game
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

