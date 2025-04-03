import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Moon, Shield, Skull, Sun, Users } from "lucide-react"

export default function GameFeatures() {
  return (
    <div className="py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Game Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-black/40 border-red-900/30 hover:bg-black/60 transition-all hover:scale-[1.02] overflow-hidden role-card">
          <Badge className="absolute top-4 right-4 bg-red-800 hover:bg-red-700">Core Gameplay</Badge>
          <CardHeader>
            <Sun className="h-10 w-10 mb-2 text-amber-500" />
            <CardTitle>Day & Night Cycles</CardTitle>
            <CardDescription className="text-gray-400">
              Experience the tension as the game shifts between day discussions and secret night actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-amber-400" />
                <span>Public discussions during day phase</span>
              </li>
              <li className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-blue-400" />
                <span>Secret role actions during night phase</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-red-900/30 hover:bg-black/60 transition-all hover:scale-[1.02] overflow-hidden role-card">
          <Badge className="absolute top-4 right-4 bg-purple-800 hover:bg-purple-700">Social Dynamics</Badge>
          <CardHeader>
            <Users className="h-10 w-10 mb-2 text-purple-500" />
            <CardTitle>Multiple Roles</CardTitle>
            <CardDescription className="text-gray-400">
              Play as the Mafia, Detective, Doctor, and many other roles with unique abilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Skull className="h-4 w-4 text-red-400" />
                <span>Mafia - Eliminate town members secretly</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Special roles with unique abilities</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-red-900/30 hover:bg-black/60 transition-all hover:scale-[1.02] overflow-hidden role-card">
          <Badge className="absolute top-4 right-4 bg-green-800 hover:bg-green-700">Strategy</Badge>
          <CardHeader>
            <MessageCircle className="h-10 w-10 mb-2 text-green-500" />
            <CardTitle>Advanced Chat System</CardTitle>
            <CardDescription className="text-gray-400">
              Discuss, deceive, and deduce with our real-time communication tools.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span>Public and private messaging channels</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span>Voting and discussion systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

