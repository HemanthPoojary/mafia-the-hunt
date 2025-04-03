import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Shield, Skull, User } from "lucide-react"

interface RoleCardProps {
  role: "mafia" | "detective" | "doctor" | "villager" | "godfather"
  description: string
  ability?: string
}

export default function RoleCard({ role, description, ability }: RoleCardProps) {
  const roleMap = {
    mafia: {
      title: "Mafia Member",
      icon: <Skull className="h-7 w-7" />,
      color: "text-red-400",
      bgColor: "bg-red-950/40",
      borderColor: "border-red-900/50",
      badgeColor: "bg-red-800",
    },
    godfather: {
      title: "Godfather",
      icon: <Skull className="h-7 w-7" />,
      color: "text-red-400",
      bgColor: "bg-red-950/40",
      borderColor: "border-red-900/50",
      badgeColor: "bg-red-800",
    },
    detective: {
      title: "Detective",
      icon: <Eye className="h-7 w-7" />,
      color: "text-blue-400",
      bgColor: "bg-blue-950/40",
      borderColor: "border-blue-900/50",
      badgeColor: "bg-blue-800",
    },
    doctor: {
      title: "Doctor",
      icon: <Shield className="h-7 w-7" />,
      color: "text-green-400",
      bgColor: "bg-green-950/40",
      borderColor: "border-green-900/50",
      badgeColor: "bg-green-800",
    },
    villager: {
      title: "Villager",
      icon: <User className="h-7 w-7" />,
      color: "text-gray-400",
      bgColor: "bg-gray-800/40",
      borderColor: "border-gray-700/50",
      badgeColor: "bg-gray-700",
    },
  }

  const roleInfo = roleMap[role]

  return (
    <Card className={`${roleInfo.bgColor} ${roleInfo.borderColor} p-4`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${roleInfo.bgColor}`}>
          <div className={roleInfo.color}>{roleInfo.icon}</div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className={`text-xl font-medium ${roleInfo.color}`}>{roleInfo.title}</h3>
            <Badge className={roleInfo.badgeColor}>
              {role === "mafia" || role === "godfather" ? "Mafia Team" : "Town Team"}
            </Badge>
          </div>
          <p className="text-gray-300">{description}</p>
          {ability && (
            <div className="mt-4">
              <Badge variant="outline" className="mb-2">
                Special Ability
              </Badge>
              <p className="text-sm text-gray-300">
                <strong>{ability}:</strong> Use during the night phase to impact the game.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

