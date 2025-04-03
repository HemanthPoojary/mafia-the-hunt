"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { GamePhase } from "@/lib/types"

interface ChatPanelProps {
  currentPhase: GamePhase
}

export default function ChatPanel({ currentPhase }: ChatPanelProps) {
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; system?: boolean }[]>([
    { sender: "System", text: "Welcome to the game! The night phase has begun.", system: true },
    { sender: "System", text: "Use your role abilities wisely.", system: true },
  ])

  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [chatMessages])

  useEffect(() => {
    // Add system message when phase changes
    if (currentPhase === "day") {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "System",
          text: "Day has broken. Time to discuss and find the Mafia!",
          system: true,
        },
      ])
    } else {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "System",
          text: "Night has fallen. Special roles can use their abilities.",
          system: true,
        },
      ])
    }
  }, [currentPhase])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: "You", text: message }])
      setMessage("")

      // Simulate response in 1-2 seconds
      if (currentPhase === "day") {
        setTimeout(() => {
          setChatMessages((prev) => [
            ...prev,
            {
              sender: "DonCorleone",
              text: "I think we should focus on investigating quiet players.",
            },
          ])
        }, 1500)
      }
    }
  }

  return (
    <div className="flex flex-col h-[400px]">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">{currentPhase === "day" ? "Public Chat" : "Restricted Chat"}</h3>
        <div className="text-xs text-gray-400">
          {currentPhase === "day" ? "Everyone can see these messages" : "Only your team can see these messages"}
        </div>
      </div>

      <ScrollArea className="flex-grow mb-4 pr-4 h-[300px]" ref={scrollAreaRef}>
        <div className="space-y-3">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.system ? "text-yellow-500" : ""}`}>
              <span className="font-medium">{msg.sender}:</span>
              <span className={msg.system ? "text-yellow-500/80" : "text-gray-300"}>{msg.text}</span>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSendMessage} className="flex gap-2 mt-auto">
        <Input
          placeholder={currentPhase === "day" ? "Type a message to everyone..." : "Type a message to your team..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-900/60 border-gray-800"
        />
        <Button
          type="submit"
          className={currentPhase === "day" ? "bg-amber-800 hover:bg-amber-700" : "bg-blue-800 hover:bg-blue-700"}
        >
          Send
        </Button>
      </form>
    </div>
  )
}

