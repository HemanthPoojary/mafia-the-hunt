"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import type { GameSettings } from "@/lib/types"
import { useRouter } from "next/navigation"

export default function CreateGamePage() {
  const router = useRouter()
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    gameName: "",
    maxPlayers: 12,
    dayLength: 5,
    nightLength: 2,
    discussionTime: 2,
    password: "",
    isPrivate: false,
    customRoles: true,
    roleDistribution: "balanced",
  })

  const handleCreateGame = () => {
    // In a real implementation, this would create a game on the server
    // For now, just navigate to the lobby
    console.log("Creating game with settings:", gameSettings)
    router.push("/game-lobby?id=new-game-123")
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      <div className="max-w-2xl mx-auto relative">
        <Card className="bg-black/80 border-red-900/50 shadow-xl card-glow backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-red-50">Create a New Game</CardTitle>
            <CardDescription className="text-gray-400">
              Configure your game settings and invite players to join.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="gameName">Game Name</Label>
              <Input
                id="gameName"
                placeholder="The Don's Table"
                className="bg-gray-900/60 border-gray-800"
                value={gameSettings.gameName}
                onChange={(e) => setGameSettings({ ...gameSettings, gameName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="players">Maximum Players: {gameSettings.maxPlayers}</Label>
              <Slider
                id="players"
                min={5}
                max={20}
                step={1}
                value={[gameSettings.maxPlayers]}
                onValueChange={(value) => setGameSettings({ ...gameSettings, maxPlayers: value[0] })}
                className="cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dayLength">Day Phase (minutes): {gameSettings.dayLength}</Label>
                <Slider
                  id="dayLength"
                  min={1}
                  max={10}
                  step={1}
                  value={[gameSettings.dayLength]}
                  onValueChange={(value) => setGameSettings({ ...gameSettings, dayLength: value[0] })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nightLength">Night Phase (minutes): {gameSettings.nightLength}</Label>
                <Slider
                  id="nightLength"
                  min={1}
                  max={5}
                  step={1}
                  value={[gameSettings.nightLength]}
                  onValueChange={(value) => setGameSettings({ ...gameSettings, nightLength: value[0] })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discussionTime">Discussion Time (minutes): {gameSettings.discussionTime}</Label>
              <Slider
                id="discussionTime"
                min={1}
                max={10}
                step={1}
                value={[gameSettings.discussionTime]}
                onValueChange={(value) => setGameSettings({ ...gameSettings, discussionTime: value[0] })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="roleDistribution">Role Distribution</Label>
              <Select
                value={gameSettings.roleDistribution}
                onValueChange={(value) => setGameSettings({ ...gameSettings, roleDistribution: value })}
              >
                <SelectTrigger id="roleDistribution" className="bg-gray-900/60 border-gray-800">
                  <SelectValue placeholder="Select role distribution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="balanced">Balanced (Standard distribution)</SelectItem>
                  <SelectItem value="mafiaHeavy">Mafia Heavy (More mafia members)</SelectItem>
                  <SelectItem value="villagerHeavy">Villager Heavy (More villagers)</SelectItem>
                  <SelectItem value="chaotic">Chaotic (More special roles)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="customRoles">Enable Custom Roles</Label>
                <div className="text-sm text-gray-400">Allow special character abilities</div>
              </div>
              <Switch
                id="customRoles"
                checked={gameSettings.customRoles}
                onCheckedChange={(checked) => setGameSettings({ ...gameSettings, customRoles: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="isPrivate">Private Game</Label>
                <div className="text-sm text-gray-400">Require password to join</div>
              </div>
              <Switch
                id="isPrivate"
                checked={gameSettings.isPrivate}
                onCheckedChange={(checked) => setGameSettings({ ...gameSettings, isPrivate: checked })}
              />
            </div>

            {gameSettings.isPrivate && (
              <div className="space-y-2">
                <Label htmlFor="password">Game Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-900/60 border-gray-800"
                  value={gameSettings.password}
                  onChange={(e) => setGameSettings({ ...gameSettings, password: e.target.value })}
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/20">
                Cancel
              </Button>
            </Link>
            <Button
              onClick={handleCreateGame}
              className="bg-red-800 hover:bg-red-700"
              disabled={!gameSettings.gameName}
            >
              Create Game
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

