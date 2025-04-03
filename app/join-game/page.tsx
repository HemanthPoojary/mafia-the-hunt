"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Search, Users, Lock, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const SAMPLE_GAMES = [
  {
    id: "game1",
    name: "The Godfather's Circle",
    host: "DonCorleone",
    players: 8,
    maxPlayers: 12,
    status: "waiting",
    isPrivate: true,
    createdAt: "5 min ago",
  },
  {
    id: "game2",
    name: "Chicago Outfit",
    host: "Capone",
    players: 6,
    maxPlayers: 10,
    status: "waiting",
    isPrivate: false,
    createdAt: "12 min ago",
  },
  {
    id: "game3",
    name: "Night in Sicily",
    host: "LuckyLuciano",
    players: 9,
    maxPlayers: 10,
    status: "waiting",
    isPrivate: false,
    createdAt: "20 min ago",
  },
  {
    id: "game4",
    name: "The Commission",
    host: "Genovese",
    players: 12,
    maxPlayers: 15,
    status: "in-progress",
    isPrivate: false,
    createdAt: "35 min ago",
  },
]

export default function JoinGamePage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [password, setPassword] = useState("")

  const filteredGames = SAMPLE_GAMES.filter(
    (game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.host.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleJoinGame = (gameId: string) => {
    // In a real implementation, this would validate the password if needed
    // and connect to the game server
    console.log("Joining game:", gameId, password)
    router.push(`/game-lobby?id=${gameId}`)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      <div className="max-w-3xl mx-auto relative">
        <Card className="bg-black/80 border-red-900/50 shadow-xl card-glow backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-red-50">Join a Game</CardTitle>
            <CardDescription className="text-gray-400">
              Browse available games or enter a game code to join.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search games by name or host"
                className="pl-9 bg-gray-900/60 border-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="border border-gray-800 rounded-md divide-y divide-gray-800 max-h-80 overflow-y-auto">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className={`p-4 transition-colors hover:bg-gray-900/40 cursor-pointer ${
                      selectedGame === game.id ? "bg-gray-900/60" : ""
                    }`}
                    onClick={() => setSelectedGame(game.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white flex items-center gap-2">
                          {game.name}
                          {game.isPrivate && <Lock className="h-3.5 w-3.5 text-yellow-500" />}
                        </div>
                        <div className="text-sm text-gray-400">Hosted by {game.host}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Users className="h-3.5 w-3.5" />
                          <span>
                            {game.players}/{game.maxPlayers}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{game.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge
                        className={
                          game.status === "waiting"
                            ? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
                            : "bg-amber-600/20 text-amber-400 hover:bg-amber-600/30"
                        }
                      >
                        {game.status === "waiting" ? "Waiting for players" : "Game in progress"}
                      </Badge>
                      <Button
                        size="sm"
                        disabled={game.status === "in-progress"}
                        className="bg-red-800 hover:bg-red-700 text-xs h-7"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (game.isPrivate) {
                            setSelectedGame(game.id)
                          } else {
                            handleJoinGame(game.id)
                          }
                        }}
                      >
                        {game.status === "in-progress" ? "Cannot Join" : "Join Game"}
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">No games found matching your search</div>
              )}
            </div>

            {selectedGame && SAMPLE_GAMES.find((g) => g.id === selectedGame)?.isPrivate && (
              <div className="space-y-2 p-4 border border-yellow-900/50 rounded-md bg-yellow-950/20">
                <h3 className="font-medium text-yellow-400">Password Required</h3>
                <p className="text-sm text-gray-400">This game is private and requires a password to join.</p>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="Enter game password"
                    className="bg-gray-900/60 border-gray-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="bg-yellow-800 hover:bg-yellow-700" onClick={() => handleJoinGame(selectedGame)}>
                    Submit
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-2 pt-4 border-t border-gray-800">
              <h3 className="font-medium">Have a game code?</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter game code" className="bg-gray-900/60 border-gray-800" />
                <Button className="bg-red-800 hover:bg-red-700" onClick={() => handleJoinGame("direct-join")}>
                  Join
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full border-red-800 text-red-400 hover:bg-red-900/20">
                Back to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

