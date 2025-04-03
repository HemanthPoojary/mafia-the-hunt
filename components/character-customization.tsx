"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"

export default function CharacterCustomization() {
  const [characterName, setCharacterName] = useState("Player")
  const [selectedAvatar, setSelectedAvatar] = useState(1)
  const [characterStyle, setCharacterStyle] = useState("classic")
  const [bio, setBio] = useState("")

  const avatars = [
    { id: 1, src: "/placeholder.svg?height=60&width=60" },
    { id: 2, src: "/placeholder.svg?height=60&width=60" },
    { id: 3, src: "/placeholder.svg?height=60&width=60" },
    { id: 4, src: "/placeholder.svg?height=60&width=60" },
    { id: 5, src: "/placeholder.svg?height=60&width=60" },
    { id: 6, src: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="characterName">Character Name</Label>
          <Input
            id="characterName"
            className="bg-gray-900/60 border-gray-800"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            maxLength={15}
          />
        </div>

        <div className="space-y-2">
          <Label>Select Avatar</Label>
          <div className="grid grid-cols-3 gap-4">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`relative cursor-pointer p-2 rounded-md ${
                  selectedAvatar === avatar.id ? "bg-red-900/30 ring-2 ring-red-600" : "hover:bg-gray-800/50"
                }`}
                onClick={() => setSelectedAvatar(avatar.id)}
              >
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src={avatar.src} />
                  <AvatarFallback>{avatar.id}</AvatarFallback>
                </Avatar>
                {selectedAvatar === avatar.id && (
                  <CheckCircle2 className="absolute top-1 right-1 h-5 w-5 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="characterStyle">Character Style</Label>
          <RadioGroup
            id="characterStyle"
            value={characterStyle}
            onValueChange={setCharacterStyle}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="classic" id="classic" />
              <Label htmlFor="classic" className="cursor-pointer">
                Classic Mobster
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="modern" id="modern" />
              <Label htmlFor="modern" className="cursor-pointer">
                Modern Criminal
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="detective" id="detective" />
              <Label htmlFor="detective" className="cursor-pointer">
                Noir Detective
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="civilian" id="civilian" />
              <Label htmlFor="civilian" className="cursor-pointer">
                Innocent Civilian
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Character Bio (Optional)</Label>
          <textarea
            id="bio"
            className="w-full h-20 bg-gray-900/60 border-gray-800 rounded-md p-2 resize-none"
            placeholder="Tell us about your character's background..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Card className="bg-black/40 border-red-900/30">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-medium text-center">Character Preview</h3>

            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24 border-2 border-red-800">
                <AvatarImage src={avatars.find((a) => a.id === selectedAvatar)?.src} />
                <AvatarFallback>{characterName.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="text-center">
                <div className="text-xl font-medium">{characterName || "Player"}</div>
                <div className="text-sm text-gray-400 capitalize">{characterStyle} Style</div>
              </div>

              {bio && <div className="text-sm text-gray-300 bg-gray-900/40 p-3 rounded-md mt-2">{bio}</div>}
            </div>

            <div className="text-sm text-gray-400 text-center">
              <p>Your character will be assigned a role when the game starts.</p>
              <p>You can change your appearance at any time before the game begins.</p>
            </div>

            <Button className="w-full bg-red-800 hover:bg-red-700">Save Character</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

