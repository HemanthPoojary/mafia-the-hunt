// Game related types
export type GamePhase = "day" | "night"

export interface Player {
  id: string
  name: string
  alive: boolean
  avatar: string
}

export interface GameSettings {
  gameName: string
  maxPlayers: number
  dayLength: number
  nightLength: number
  discussionTime: number
  password: string
  isPrivate: boolean
  customRoles: boolean
  roleDistribution: string
}

export interface ChatMessage {
  sender: string
  message: string
  timestamp: Date
  isSystem?: boolean
}

export type Role = "mafia" | "godfather" | "detective" | "doctor" | "villager" | "jester"

export type Team = "mafia" | "town" | "neutral"

export interface GameEvent {
  type: "phase" | "death" | "vote" | "reveal" | "ability"
  timestamp: Date
  details: any
}

