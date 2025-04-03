"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertCircle,
  Clock,
  Eye,
  FileText,
  HelpCircle,
  Moon,
  Shield,
  Skull,
  Sun,
  User,
  Users,
  VoteIcon,
} from "lucide-react"
import RoleCard from "@/components/role-card"
import GamePhasesDiagram from "@/components/game-phases-diagram"

export default function RulesContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-sm py-2 -mx-6 px-6 border-b border-gray-800">
        <TabsList className="bg-gray-900/60 w-full grid grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="overview" className="data-[state=active]:bg-red-900/50">
            <FileText className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="roles" className="data-[state=active]:bg-red-900/50">
            <Users className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">Roles</span>
          </TabsTrigger>
          <TabsTrigger value="phases" className="data-[state=active]:bg-red-900/50">
            <Clock className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">Phases</span>
          </TabsTrigger>
          <TabsTrigger value="actions" className="data-[state=active]:bg-red-900/50">
            <Eye className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">Actions</span>
          </TabsTrigger>
          <TabsTrigger value="winning" className="data-[state=active]:bg-red-900/50">
            <VoteIcon className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">Winning</span>
          </TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-red-900/50">
            <HelpCircle className="h-4 w-4 mr-2 md:mr-0 md:mb-1" />
            <span className="md:block">FAQ</span>
          </TabsTrigger>
        </TabsList>
      </div>

      {/* GAME OVERVIEW */}
      <TabsContent value="overview" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Game Overview</h2>

          <p className="text-gray-300">
            Mafia is a social deduction game where players are secretly divided into two main teams: the{" "}
            <span className="text-red-400 font-medium">Mafia</span> and the{" "}
            <span className="text-blue-400 font-medium">Town</span>. The game alternates between day and night phases,
            with different actions available during each phase.
          </p>

          <Alert className="bg-gray-900/60 border-amber-900/50 my-4">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-amber-300">
              The core of the game is communication, deception, and logical deduction. Your ability to convince others,
              detect lies, and make strategic decisions will determine your success.
            </AlertDescription>
          </Alert>

          <h3 className="text-xl font-medium text-white mt-6">Basic Concepts</h3>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card className="bg-black/40 border-red-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-400" />
                  Teams
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <span className="text-red-400 font-medium">Mafia:</span> A minority of players who know each other's
                    identities and work together to eliminate the Town.
                  </li>
                  <li>
                    <span className="text-blue-400 font-medium">Town:</span> The majority of players who don't initially
                    know anyone's role and must work together to identify and eliminate the Mafia.
                  </li>
                  <li>
                    <span className="text-purple-400 font-medium">Neutral:</span> Some game variants include neutral
                    roles with their own win conditions.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-400" />
                  Game Flow
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <span className="text-amber-400 font-medium">Day Phase:</span> All players discuss, share
                    information, and vote to eliminate a suspected Mafia member.
                  </li>
                  <li>
                    <span className="text-blue-400 font-medium">Night Phase:</span> The Mafia secretly chooses a player
                    to eliminate, while special roles perform their night actions.
                  </li>
                  <li>The game continues alternating between day and night until a team achieves victory.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-medium text-white mt-6">Game Setup</h3>
          <p className="text-gray-300">
            A typical game of Mafia requires a minimum of 5 players, though 7-12 players provides the optimal
            experience. The distribution of roles depends on the total number of players:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900/60">
                  <th className="border border-gray-800 px-4 py-2 text-left">Players</th>
                  <th className="border border-gray-800 px-4 py-2 text-left">Mafia</th>
                  <th className="border border-gray-800 px-4 py-2 text-left">Town</th>
                  <th className="border border-gray-800 px-4 py-2 text-left">Special Roles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-800 px-4 py-2">5-6</td>
                  <td className="border border-gray-800 px-4 py-2">1-2</td>
                  <td className="border border-gray-800 px-4 py-2">3-5</td>
                  <td className="border border-gray-800 px-4 py-2">1-2</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-800 px-4 py-2">7-9</td>
                  <td className="border border-gray-800 px-4 py-2">2-3</td>
                  <td className="border border-gray-800 px-4 py-2">5-6</td>
                  <td className="border border-gray-800 px-4 py-2">2-3</td>
                </tr>
                <tr>
                  <td className="border border-gray-800 px-4 py-2">10-12</td>
                  <td className="border border-gray-800 px-4 py-2">3-4</td>
                  <td className="border border-gray-800 px-4 py-2">6-8</td>
                  <td className="border border-gray-800 px-4 py-2">3-4</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-800 px-4 py-2">13-15</td>
                  <td className="border border-gray-800 px-4 py-2">4-5</td>
                  <td className="border border-gray-800 px-4 py-2">9-10</td>
                  <td className="border border-gray-800 px-4 py-2">4-5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 mt-4">
            Special roles typically include Detective, Doctor, and other power roles that provide additional abilities
            to the Town or Mafia teams.
          </p>

          <h3 className="text-xl font-medium text-white mt-6">Core Rules</h3>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>Players must keep their assigned roles secret unless eliminated or required by game mechanics.</li>
            <li>During the day phase, all players may freely communicate with each other.</li>
            <li>
              During the night phase, only the Mafia team and players with special night abilities may take actions.
            </li>
            <li>Eliminated players cannot communicate with active players or influence the game.</li>
            <li>Players must abide by the results of votes and night actions.</li>
            <li>The game continues until one team achieves their victory condition.</li>
          </ul>
        </div>
      </TabsContent>

      {/* ROLES */}
      <TabsContent value="roles" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Game Roles</h2>

          <p className="text-gray-300">
            Each player is assigned a specific role at the beginning of the game. Your role determines your team
            allegiance, special abilities, and win conditions.
          </p>

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="mafia-roles" className="border-gray-800">
              <AccordionTrigger className="text-xl font-medium text-red-400 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Skull className="h-5 w-5" />
                  Mafia Roles
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-6">
                  <RoleCard
                    role="mafia"
                    description="Basic Mafia member who works with other Mafia members to eliminate Town players. During the night phase, Mafia members collectively choose one player to eliminate."
                    ability="Night Kill"
                  />

                  <RoleCard
                    role="godfather"
                    description="Leader of the Mafia team. The Godfather appears innocent to the Detective's investigation and has the final say in the Mafia's night kill decision."
                    ability="Night Kill & Investigation Immunity"
                  />
                </div>

                <div className="mt-6 bg-gray-900/40 p-4 rounded-md">
                  <h4 className="font-medium text-white">Mafia Team Rules</h4>
                  <ul className="mt-2 space-y-2 text-gray-300 list-disc pl-5">
                    <li>Mafia members know each other's identities from the start of the game.</li>
                    <li>
                      During the night phase, Mafia members can communicate privately to coordinate their actions.
                    </li>
                    <li>The Mafia team can only eliminate one player per night.</li>
                    <li>Mafia members should pretend to be Town members during the day phase to avoid detection.</li>
                    <li>
                      The Mafia team wins when the number of Mafia members equals or exceeds the number of Town members.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="town-roles" className="border-gray-800">
              <AccordionTrigger className="text-xl font-medium text-blue-400 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Town Roles
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-6">
                  <RoleCard
                    role="detective"
                    description="Town investigator who can check one player's identity each night. The Detective learns whether the investigated player is a member of the Mafia team or not."
                    ability="Investigation"
                  />

                  <RoleCard
                    role="doctor"
                    description="Town protector who can save one player from elimination each night. If the Doctor protects the Mafia's target, that player survives the night."
                    ability="Protection"
                  />

                  <RoleCard
                    role="villager"
                    description="Basic Town member with no special abilities. Villagers must rely on discussion, deduction, and voting to identify and eliminate Mafia members."
                  />
                </div>

                <div className="mt-6 bg-gray-900/40 p-4 rounded-md">
                  <h4 className="font-medium text-white">Town Team Rules</h4>
                  <ul className="mt-2 space-y-2 text-gray-300 list-disc pl-5">
                    <li>Town members do not know each other's roles at the start of the game.</li>
                    <li>Town members must use discussion, voting, and special abilities to identify Mafia members.</li>
                    <li>Special Town roles should use their abilities strategically to help the Town team.</li>
                    <li>
                      Town members should share information during the day phase, but must be careful as Mafia members
                      will be listening.
                    </li>
                    <li>The Town team wins when all Mafia members have been eliminated.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="neutral-roles" className="border-gray-800">
              <AccordionTrigger className="text-xl font-medium text-purple-400 hover:no-underline">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Neutral Roles
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-gray-300 mb-4">
                  Neutral roles have their own unique win conditions independent of the Mafia or Town teams. These roles
                  add complexity and unpredictability to the game.
                </p>

                <div className="space-y-6">
                  <Card className="bg-purple-950/20 border-purple-900/30 p-4">
                    <h4 className="font-medium text-purple-400 flex items-center gap-2">
                      <Badge className="bg-purple-800">Jester</Badge>
                    </h4>
                    <p className="text-gray-300 mt-2">
                      The Jester wins if they are voted out during the day phase. Their goal is to appear suspicious
                      enough to get eliminated without being too obvious about their intentions.
                    </p>
                    <div className="mt-4">
                      <Badge variant="outline" className="border-purple-800 text-purple-400">
                        Win Condition
                      </Badge>
                      <p className="text-sm text-gray-300 mt-2">Get voted out during any day phase.</p>
                    </div>
                  </Card>

                  <Card className="bg-purple-950/20 border-purple-900/30 p-4">
                    <h4 className="font-medium text-purple-400 flex items-center gap-2">
                      <Badge className="bg-purple-800">Survivor</Badge>
                    </h4>
                    <p className="text-gray-300 mt-2">
                      The Survivor wins if they are still alive at the end of the game, regardless of which team wins.
                      They must navigate between the Mafia and Town teams to ensure their own survival.
                    </p>
                    <div className="mt-4">
                      <Badge variant="outline" className="border-purple-800 text-purple-400">
                        Win Condition
                      </Badge>
                      <p className="text-sm text-gray-300 mt-2">Survive until the end of the game.</p>
                    </div>
                  </Card>
                </div>

                <div className="mt-6 bg-gray-900/40 p-4 rounded-md">
                  <h4 className="font-medium text-white">Neutral Role Rules</h4>
                  <ul className="mt-2 space-y-2 text-gray-300 list-disc pl-5">
                    <li>Neutral roles are not aligned with either the Mafia or Town teams.</li>
                    <li>Each neutral role has its own unique win condition.</li>
                    <li>Neutral roles can choose to help either team if it serves their own interests.</li>
                    <li>A neutral role achieving their win condition does not end the game for other players.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="role-distribution" className="border-gray-800">
              <AccordionTrigger className="text-xl font-medium text-gray-300 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Role Distribution & Balance
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-gray-300 mb-4">
                  The distribution of roles is crucial for game balance. The host can select from several preset
                  distributions or customize the role setup.
                </p>

                <div className="space-y-4">
                  <Card className="bg-gray-900/40 border-gray-800 p-4">
                    <h4 className="font-medium text-white">Balanced (Standard)</h4>
                    <p className="text-gray-300 mt-2">
                      The classic distribution with approximately 1/4 of players as Mafia and the rest as Town, with a
                      few special roles.
                    </p>
                    <div className="mt-3 text-sm text-gray-400">
                      Example for 8 players: 2 Mafia, 1 Detective, 1 Doctor, 4 Villagers
                    </div>
                  </Card>

                  <Card className="bg-gray-900/40 border-gray-800 p-4">
                    <h4 className="font-medium text-white">Mafia Heavy</h4>
                    <p className="text-gray-300 mt-2">
                      More Mafia members than usual, creating a challenging experience for the Town team.
                    </p>
                    <div className="mt-3 text-sm text-gray-400">
                      Example for 8 players: 3 Mafia, 1 Detective, 1 Doctor, 3 Villagers
                    </div>
                  </Card>

                  <Card className="bg-gray-900/40 border-gray-800 p-4">
                    <h4 className="font-medium text-white">Town Heavy</h4>
                    <p className="text-gray-300 mt-2">
                      Fewer Mafia members, giving the Town team an advantage but requiring the Mafia to be more
                      strategic.
                    </p>
                    <div className="mt-3 text-sm text-gray-400">
                      Example for 8 players: 1 Mafia, 1 Godfather, 1 Detective, 1 Doctor, 4 Villagers
                    </div>
                  </Card>

                  <Card className="bg-gray-900/40 border-gray-800 p-4">
                    <h4 className="font-medium text-white">Chaotic</h4>
                    <p className="text-gray-300 mt-2">
                      More special roles and possibly neutral roles, creating a complex and unpredictable game.
                    </p>
                    <div className="mt-3 text-sm text-gray-400">
                      Example for 8 players: 2 Mafia, 1 Detective, 1 Doctor, 2 Villagers, 1 Jester, 1 Survivor
                    </div>
                  </Card>
                </div>

                <Alert className="bg-gray-900/60 border-amber-900/50 my-6">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <AlertDescription className="text-amber-300">
                    The game host can customize role distribution when creating a game. The optimal balance ensures a
                    fair and engaging experience for all players.
                  </AlertDescription>
                </Alert>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </TabsContent>

      {/* GAME PHASES */}
      <TabsContent value="phases" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Game Phases</h2>

          <p className="text-gray-300">
            Mafia alternates between day and night phases, each with distinct activities and objectives. Understanding
            the flow of these phases is crucial to successful gameplay.
          </p>

          <GamePhasesDiagram />

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium flex items-center gap-2 text-amber-400">
                <Sun className="h-5 w-5" />
                Day Phase
              </h3>

              <Card className="bg-amber-950/10 border-amber-900/30">
                <CardContent className="p-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-white">Discussion Period</h4>
                    <p className="text-gray-300 mt-1">
                      All surviving players can freely communicate to share information, make accusations, and defend
                      themselves.
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>Players discuss the events of the previous night</li>
                      <li>Special role holders may share information (at their own risk)</li>
                      <li>Players can accuse others of being Mafia members</li>
                      <li>Accused players can defend themselves</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Voting Period</h4>
                    <p className="text-gray-300 mt-1">
                      After discussion, all players vote on who they suspect is a Mafia member.
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>Each player gets one vote</li>
                      <li>The player with the most votes is eliminated</li>
                      <li>In case of a tie, a brief discussion followed by a re-vote occurs</li>
                      <li>If the tie persists, no one is eliminated that day</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Elimination & Reveal</h4>
                    <p className="text-gray-300 mt-1">The player with the most votes is eliminated from the game.</p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>The eliminated player's role is revealed to all players</li>
                      <li>Eliminated players cannot communicate with active players</li>
                      <li>Eliminated players can observe the game but cannot participate</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium flex items-center gap-2 text-blue-400">
                <Moon className="h-5 w-5" />
                Night Phase
              </h3>

              <Card className="bg-blue-950/10 border-blue-900/30">
                <CardContent className="p-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-white">Mafia Action</h4>
                    <p className="text-gray-300 mt-1">
                      Mafia members communicate privately and choose one player to eliminate.
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>Only Mafia members can see and participate in Mafia chat</li>
                      <li>Mafia members must reach consensus on their target</li>
                      <li>The Godfather (if present) has the final decision</li>
                      <li>Mafia can only eliminate one player per night</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Special Role Actions</h4>
                    <p className="text-gray-300 mt-1">Players with special night abilities perform their actions.</p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>Detective: Investigates one player to learn if they are Mafia</li>
                      <li>Doctor: Protects one player from being eliminated</li>
                      <li>Other special roles perform their unique actions</li>
                      <li>Players cannot communicate with each other during this time</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-white">Resolution</h4>
                    <p className="text-gray-300 mt-1">All night actions are resolved in a specific order.</p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>Protection actions occur before kill actions</li>
                      <li>If the Doctor protects the Mafia's target, no one is eliminated</li>
                      <li>Investigation results are revealed only to the investigator</li>
                      <li>The results of night actions are announced at the start of the next day</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/40 p-4 rounded-md">
            <h3 className="font-medium text-white">Phase Timing</h3>
            <p className="text-gray-300 mt-2">
              Each phase has a time limit to ensure the game progresses at a reasonable pace. The host can adjust these
              timings when creating a game.
            </p>
            <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
              <li>
                <span className="text-amber-400 font-medium">Day Phase:</span> Typically 5 minutes (3-7 minutes
                depending on player count)
              </li>
              <li>
                <span className="text-blue-400 font-medium">Night Phase:</span> Typically 2 minutes (1-3 minutes
                depending on complexity)
              </li>
              <li>
                <span className="text-purple-400 font-medium">Discussion Time:</span> Typically 2 minutes before voting
                begins
              </li>
              <li>
                <span className="text-green-400 font-medium">Voting Time:</span> Typically 1 minute to cast votes
              </li>
            </ul>
            <p className="text-gray-300 mt-2">
              If players complete their actions before the time limit expires, the phase can be advanced early if all
              players are ready.
            </p>
          </div>
        </div>
      </TabsContent>

      {/* ACTIONS */}
      <TabsContent value="actions" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Player Actions</h2>

          <p className="text-gray-300">
            Throughout the game, players can perform various actions depending on their role and the current game phase.
            Understanding these actions is essential for effective gameplay.
          </p>

          <h3 className="text-xl font-medium text-white mt-6">Day Phase Actions</h3>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card className="bg-black/40 border-amber-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2 text-amber-400">
                  <Users className="h-5 w-5" />
                  Discussion
                </h4>
                <p className="text-gray-300">
                  All players can freely communicate to share information, make accusations, and defend themselves.
                </p>
                <div className="bg-gray-900/40 p-3 rounded-md mt-2">
                  <h5 className="text-sm font-medium text-white">How to use effectively:</h5>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Share observations from previous rounds</li>
                    <li>Question suspicious behavior</li>
                    <li>Defend yourself if accused</li>
                    <li>Form alliances (but be careful who you trust)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-amber-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2 text-amber-400">
                  <VoteIcon className="h-5 w-5" />
                  Voting
                </h4>
                <p className="text-gray-300">
                  Cast your vote to eliminate a player you suspect of being a Mafia member.
                </p>
                <div className="bg-gray-900/40 p-3 rounded-md mt-2">
                  <h5 className="text-sm font-medium text-white">How to use effectively:</h5>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Base your vote on logical deduction</li>
                    <li>Consider voting patterns from previous rounds</li>
                    <li>Be wary of bandwagon voting</li>
                    <li>Remember that not voting is sometimes a strategic choice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-medium text-white mt-6">Night Phase Actions</h3>

          <div className="space-y-4 mt-4">
            <Card className="bg-black/40 border-red-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2 text-red-400">
                  <Skull className="h-5 w-5" />
                  Mafia Kill
                </h4>
                <p className="text-gray-300">
                  Mafia members collectively choose one player to eliminate during the night phase.
                </p>
                <div className="bg-gray-900/40 p-3 rounded-md mt-2">
                  <h5 className="text-sm font-medium text-white">How to use effectively:</h5>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Target players who seem observant or suspicious of Mafia members</li>
                    <li>Consider eliminating special roles like the Detective or Doctor</li>
                    <li>Avoid targeting the same player the Doctor might protect</li>
                    <li>Coordinate with other Mafia members to develop a long-term strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2 text-blue-400">
                  <Eye className="h-5 w-5" />
                  Detective Investigation
                </h4>
                <p className="text-gray-300">
                  The Detective can investigate one player each night to learn if they are a member of the Mafia team.
                </p>
                <div className="bg-gray-900/40 p-3 rounded-md mt-2">
                  <h5 className="text-sm font-medium text-white">How to use effectively:</h5>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Investigate players who are quiet or behaving suspiciously</li>
                    <li>Keep track of your investigation results</li>
                    <li>Be careful when revealing your role and findings</li>
                    <li>Remember that the Godfather will appear innocent to your investigation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-green-900/30">
              <CardContent className="p-4 space-y-2">
                <h4 className="font-medium flex items-center gap-2 text-green-400">
                  <Shield className="h-5 w-5" />
                  Doctor Protection
                </h4>
                <p className="text-gray-300">
                  The Doctor can protect one player each night from being eliminated by the Mafia.
                </p>
                <div className="bg-gray-900/40 p-3 rounded-md mt-2">
                  <h5 className="text-sm font-medium text-white">How to use effectively:</h5>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Protect players who are likely Mafia targets (vocal players, suspected special roles)</li>
                    <li>Consider protecting yourself occasionally</li>
                    <li>Vary your protection targets to be unpredictable</li>
                    <li>Remember that you can save a player's life even if you don't know their role</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-medium text-white mt-6">Communication Rules</h3>

          <div className="bg-gray-900/40 p-4 rounded-md mt-4">
            <h4 className="font-medium text-white">When You Can Communicate</h4>
            <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
              <li>
                <span className="text-amber-400 font-medium">Day Phase:</span> All players can freely communicate in the
                public chat.
              </li>
              <li>
                <span className="text-blue-400 font-medium">Night Phase:</span> Only Mafia members can communicate with
                each other in their private chat.
              </li>
              <li>
                <span className="text-red-400 font-medium">Eliminated Players:</span> Cannot communicate with active
                players but can observe the game.
              </li>
            </ul>

            <h4 className="font-medium text-white mt-4">Communication Etiquette</h4>
            <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
              <li>Do not share screenshots or external evidence outside the game.</li>
              <li>Do not reveal your role upon elimination if the game rules specify role secrecy.</li>
              <li>Avoid personal attacks or offensive language.</li>
              <li>Do not use private messaging features outside of the game's designated channels.</li>
            </ul>
          </div>
        </div>
      </TabsContent>

      {/* WINNING */}
      <TabsContent value="winning" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Win Conditions</h2>

          <p className="text-gray-300">
            Each team and certain special roles have specific conditions that must be met to achieve victory.
            Understanding these win conditions is crucial for developing effective strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-red-950/20 border-red-900/30">
              <CardContent className="p-4 space-y-4">
                <h3 className="text-xl font-medium text-red-400 flex items-center gap-2">
                  <Skull className="h-5 w-5" />
                  Mafia Victory
                </h3>
                <p className="text-gray-300">
                  The Mafia team wins when the number of Mafia members equals or exceeds the number of Town members.
                </p>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Example:</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    If 2 Mafia members and 2 Town members remain alive, the Mafia team wins.
                  </p>
                </div>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Strategy Tips:</h4>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Eliminate key Town roles early (Detective, Doctor)</li>
                    <li>Maintain a low profile during day discussions</li>
                    <li>Create confusion and mistrust among Town members</li>
                    <li>Coordinate night kills to maximize efficiency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-950/20 border-blue-900/30">
              <CardContent className="p-4 space-y-4">
                <h3 className="text-xl font-medium text-blue-400 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Town Victory
                </h3>
                <p className="text-gray-300">The Town team wins when all Mafia members have been eliminated.</p>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Example:</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    If all Mafia members are voted out or eliminated, the Town team wins regardless of how many Town
                    members remain.
                  </p>
                </div>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Strategy Tips:</h4>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Share information and coordinate during day discussions</li>
                    <li>Pay attention to voting patterns and inconsistencies</li>
                    <li>Protect special roles like the Detective and Doctor</li>
                    <li>Use process of elimination to identify Mafia members</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-950/20 border-purple-900/30">
              <CardContent className="p-4 space-y-4">
                <h3 className="text-xl font-medium text-purple-400 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Neutral Role Victories
                </h3>
                <p className="text-gray-300">
                  Neutral roles have their own unique win conditions independent of the Mafia or Town teams.
                </p>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Jester:</h4>
                  <p className="text-sm text-gray-300 mt-1">Wins if voted out during any day phase.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Survivor:</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Wins if still alive at the end of the game, regardless of which team wins.
                  </p>
                </div>
                <div className="bg-black/30 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-white">Strategy Tips:</h4>
                  <ul className="mt-1 space-y-1 text-sm text-gray-300 list-disc pl-5">
                    <li>Focus on your individual win condition</li>
                    <li>Adapt your strategy based on the game's progression</li>
                    <li>Consider temporary alliances that serve your interests</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-medium text-white mt-8">Game End Scenarios</h3>

          <div className="space-y-4 mt-4">
            <Card className="bg-black/40 border-gray-800">
              <CardContent className="p-4">
                <h4 className="font-medium text-white">Mafia Numerical Advantage</h4>
                <p className="text-gray-300 mt-2">
                  If at any point the number of Mafia members equals or exceeds the number of Town members, the game
                  immediately ends with a Mafia victory.
                </p>
                <div className="mt-3 text-sm text-gray-400">Example: 2 Mafia, 2 Town → Mafia wins</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-gray-800">
              <CardContent className="p-4">
                <h4 className="font-medium text-white">All Mafia Eliminated</h4>
                <p className="text-gray-300 mt-2">
                  If all Mafia members are eliminated, the game immediately ends with a Town victory.
                </p>
                <div className="mt-3 text-sm text-gray-400">Example: 0 Mafia, 5 Town → Town wins</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-gray-800">
              <CardContent className="p-4">
                <h4 className="font-medium text-white">Neutral Role Victory</h4>
                <p className="text-gray-300 mt-2">
                  A neutral role achieving their win condition does not end the game for other players. The game
                  continues until either the Mafia or Town team achieves victory.
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  Example: Jester is voted out → Jester wins, but the game continues for other players
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="bg-gray-900/60 border-amber-900/50 my-6">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-amber-300">
              Remember that the journey is as important as the destination. Win or lose, the fun of Mafia comes from the
              social dynamics, deception, and deduction throughout the game.
            </AlertDescription>
          </Alert>
        </div>
      </TabsContent>

      {/* FAQ */}
      <TabsContent value="faq" className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Frequently Asked Questions</h2>

          <p className="text-gray-300">
            Below are answers to common questions about game rules, mechanics, and strategies.
          </p>

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="faq-1" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                Can I lie about my role?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  Yes, deception is a core part of the game. Players can claim to be any role, regardless of their
                  actual role. This is especially important for Mafia members who need to blend in with the Town team.
                </p>
                <p className="mt-2">
                  However, lying about your role carries risks. If you're caught in a lie, it will make you highly
                  suspicious to other players. Town members should be careful about lying, as it can lead to confusion
                  and mistrust among allies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                What happens if the Doctor protects the Mafia's target?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  If the Doctor chooses to protect the same player that the Mafia targets for elimination, the
                  protection succeeds and the player survives the night. No player is eliminated as a result of the
                  Mafia's action that night.
                </p>
                <p className="mt-2">
                  At the start of the next day phase, players will be informed that no one was eliminated during the
                  night, but they won't know who was targeted or protected unless that information is shared by the
                  players involved.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                Can the Detective investigate the same player multiple times?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  Yes, the Detective can investigate the same player multiple times. However, this is generally not an
                  efficient use of the Detective's ability, as the investigation result will not change unless the
                  player's role changes (which is rare in standard game modes).
                </p>
                <p className="mt-2">
                  It's usually more beneficial for the Detective to investigate different players each night to gather
                  more information about the distribution of Mafia and Town members.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                What happens if there's a tie in the voting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  If there's a tie in the voting during the day phase, a brief discussion period is allowed, followed by
                  a re-vote between only the tied players. If the tie persists after the re-vote, no player is
                  eliminated during that day phase.
                </p>
                <p className="mt-2">
                  This can be advantageous for the Mafia team, as it delays the Town's ability to eliminate potential
                  Mafia members. Town members should try to build consensus to avoid ties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                Can eliminated players communicate with active players?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  No, eliminated players cannot communicate with active players or influence the game in any way. They
                  can observe the game but must remain silent and not provide any information or hints to active
                  players.
                </p>
                <p className="mt-2">
                  Eliminated players have access to a separate spectator chat where they can discuss the game among
                  themselves without affecting the ongoing game.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                How does the Detective's investigation work with the Godfather?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  The Godfather appears innocent to the Detective's investigation. If the Detective investigates the
                  Godfather, they will receive a result indicating that the Godfather is not a member of the Mafia team,
                  even though they actually are.
                </p>
                <p className="mt-2">
                  This makes the Godfather a particularly dangerous opponent, as they can avoid detection by the Town's
                  primary investigative role. Town members must rely on behavioral analysis and voting patterns to
                  identify the Godfather.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                Can I abstain from voting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  Yes, players can choose to abstain from voting during the day phase. Abstaining means you don't cast a
                  vote against any player.
                </p>
                <p className="mt-2">
                  However, abstaining can be seen as suspicious by other players, as it might indicate an unwillingness
                  to participate in the Town's effort to identify Mafia members. In some game variants, abstaining might
                  not be allowed or might have specific consequences.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                What's the best strategy for the Town team?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  The Town team's success relies on effective communication, logical deduction, and careful observation.
                  Some key strategies include:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Pay attention to voting patterns and inconsistencies in player behavior</li>
                  <li>Share information strategically, especially if you have a special role</li>
                  <li>Keep track of claims and contradictions</li>
                  <li>Protect key roles like the Detective and Doctor</li>
                  <li>Use process of elimination to narrow down potential Mafia members</li>
                </ul>
                <p className="mt-2">
                  Remember that the Town has the advantage of numbers but the disadvantage of limited information.
                  Cooperation and careful analysis are essential.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                What's the best strategy for the Mafia team?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  The Mafia team's success depends on deception, coordination, and strategic elimination. Some key
                  strategies include:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Blend in with the Town by participating in discussions and voting</li>
                  <li>Target key Town roles like the Detective and Doctor early</li>
                  <li>Create confusion and mistrust among Town members</li>
                  <li>Coordinate night kills to maximize efficiency</li>
                  <li>Have prepared role claims in case you're accused</li>
                </ul>
                <p className="mt-2">
                  The Mafia has the advantage of knowing each other's identities but the disadvantage of being
                  outnumbered. Stealth and coordination are crucial.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10" className="border-gray-800">
              <AccordionTrigger className="text-lg font-medium text-white hover:no-underline">
                How can I report rule violations or technical issues?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                <p>
                  If you encounter rule violations, inappropriate behavior, or technical issues during a game, you can:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Use the "Report" button in the game interface to report specific incidents</li>
                  <li>Contact the game host if the issue is related to the current game</li>
                  <li>Visit the Support section in the main menu for technical assistance</li>
                  <li>Email support@mafiagame.com for persistent issues</li>
                </ul>
                <p className="mt-2">
                  We take all reports seriously and strive to maintain a fair and enjoyable gaming environment for all
                  players.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </TabsContent>
    </Tabs>
  )
}

