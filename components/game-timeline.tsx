import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Moon, Skull, Sun, UserCheck } from "lucide-react"

export default function GameTimeline() {
  const events = [
    {
      type: "phase",
      phase: "night",
      time: "9:45 PM",
      description: "Night 1 begins",
    },
    {
      type: "death",
      victim: "Gambino",
      time: "9:48 PM",
      description: "Gambino was killed by the Mafia",
    },
    {
      type: "phase",
      phase: "day",
      time: "9:50 PM",
      description: "Day 1 begins",
    },
    {
      type: "vote",
      target: "Bonanno",
      time: "9:57 PM",
      description: "Bonanno was voted out (6-2)",
    },
    {
      type: "reveal",
      role: "Villager",
      time: "9:58 PM",
      description: "Bonanno's role was Villager",
    },
    {
      type: "phase",
      phase: "night",
      time: "10:00 PM",
      description: "Night 2 begins",
    },
    {
      type: "phase",
      phase: "day",
      time: "10:05 PM",
      description: "Day 2 begins - No one was killed during the night",
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-lg">Game Timeline</h3>
      <ScrollArea className="h-[180px]">
        <div className="space-y-2 pr-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-xs text-gray-500 w-14 pt-0.5">{event.time}</div>
              <div className="flex-shrink-0 mt-0.5">
                {event.type === "phase" && event.phase === "day" && (
                  <div className="h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <Sun className="h-3 w-3 text-amber-950" />
                  </div>
                )}
                {event.type === "phase" && event.phase === "night" && (
                  <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <Moon className="h-3 w-3 text-blue-950" />
                  </div>
                )}
                {event.type === "death" && (
                  <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                    <Skull className="h-3 w-3 text-red-950" />
                  </div>
                )}
                {event.type === "vote" && (
                  <div className="h-4 w-4 rounded-full bg-purple-500 flex items-center justify-center">
                    <UserCheck className="h-3 w-3 text-purple-950" />
                  </div>
                )}
                {event.type === "reveal" && <div className="h-4 w-4 rounded-full bg-green-500" />}
              </div>
              <div>
                <div className="text-sm">{event.description}</div>
                {event.type === "reveal" && <Badge className="mt-1 bg-green-900/40 text-green-300">{event.role}</Badge>}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

