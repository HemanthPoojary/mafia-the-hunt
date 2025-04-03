import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skull, Shield, User, UserCheck, Users } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function GameRules() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="basics" className="space-y-4">
        <TabsList className="bg-gray-900/60 w-full grid grid-cols-4">
          <TabsTrigger value="basics" className="data-[state=active]:bg-red-900/50">
            Basics
          </TabsTrigger>
          <TabsTrigger value="roles" className="data-[state=active]:bg-red-900/50">
            Roles
          </TabsTrigger>
          <TabsTrigger value="phases" className="data-[state=active]:bg-red-900/50">
            Game Phases
          </TabsTrigger>
          <TabsTrigger value="tips" className="data-[state=active]:bg-red-900/50">
            Strategy Tips
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basics">
          <Card className="bg-black/40 border-red-900/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Game Basics</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4 text-gray-300">
                  <p>
                    Mafia is a social deduction game where players are secretly assigned roles that determine their team
                    allegiance and special abilities. The game alternates between day and night phases.
                  </p>

                  <h4 className="font-medium text-white mt-4">Objective</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Mafia Team:</strong> Eliminate all Town members.
                    </li>
                    <li>
                      <strong>Town Team:</strong> Identify and eliminate all Mafia members.
                    </li>
                  </ul>

                  <h4 className="font-medium text-white mt-4">How to Win</h4>
                  <p>
                    The game continues until either all Mafia members are eliminated (Town wins) or the number of Mafia
                    members equals or exceeds the number of Town members (Mafia wins).
                  </p>

                  <h4 className="font-medium text-white mt-4">Player Elimination</h4>
                  <p>Players can be eliminated in two ways:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Day Vote:</strong> During the day, all players vote on who they suspect is Mafia. The
                      player with the most votes is eliminated.
                    </li>
                    <li>
                      <strong>Night Kill:</strong> During the night, the Mafia team collectively chooses one player to
                      eliminate.
                    </li>
                  </ul>

                  <h4 className="font-medium text-white mt-4">Communication</h4>
                  <p>
                    Communication is allowed only during the day phase (for all players) and during the night phase
                    (only among members of the same team or for roles with special night abilities).
                  </p>

                  <h4 className="font-medium text-white mt-4">Deception & Strategy</h4>
                  <p>
                    The core of Mafia is strategic deception. Mafia members must blend in and avoid suspicion, while
                    Town members must carefully analyze behavior to identify the Mafia.
                  </p>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <Card className="bg-black/40 border-red-900/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Game Roles</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Skull className="h-5 w-5 text-red-500" />
                      <h4 className="font-medium text-lg text-red-400">Mafia Roles</h4>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-red-800">Mafia Member</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Basic Mafia role. Works with other Mafia members to eliminate Town players at night while
                          avoiding detection during the day.
                        </p>
                      </div>
                      <div className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-red-800">Godfather</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Leader of the Mafia. Appears innocent to investigation roles and makes the final decision on
                          night kills.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <h4 className="font-medium text-lg text-blue-400">Town Roles</h4>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-blue-800">Detective</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Can investigate one player each night to learn if they are Mafia or Town.
                        </p>
                      </div>
                      <div className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-blue-800">Doctor</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Can protect one player each night from being killed by the Mafia.
                        </p>
                      </div>
                      <div className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-blue-800">Vigilante</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Town member with the ability to kill one player at night. Must use this power carefully.
                        </p>
                      </div>
                      <div className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-blue-800">Villager</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Basic Town role with no special abilities. Must rely on deduction and voting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <User className="h-5 w-5 text-purple-500" />
                      <h4 className="font-medium text-lg text-purple-400">Neutral Roles</h4>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-purple-950/20 border border-purple-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-purple-800">Jester</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Wins if they get voted out during the day. Must act suspicious without being too obvious.
                        </p>
                      </div>
                      <div className="bg-purple-950/20 border border-purple-900/30 rounded-md p-3">
                        <h5 className="font-medium flex items-center gap-2">
                          <Badge className="bg-purple-800">Survivor</Badge>
                        </h5>
                        <p className="text-sm text-gray-300 mt-2">
                          Wins if they are still alive at the end of the game, regardless of which team wins.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phases">
          <Card className="bg-black/40 border-red-900/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Game Phases</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-amber-400 flex items-center gap-2">
                      <Badge className="bg-amber-800">Day Phase</Badge>
                    </h4>
                    <p className="text-gray-300">
                      During the day, all surviving players can communicate openly. This is the time for discussion,
                      accusation, defense, and voting.
                    </p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Discussion Period</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        <li>Players discuss events from the previous night</li>
                        <li>Share information and suspicions</li>
                        <li>Mafia members try to blend in or cast suspicion on Town members</li>
                        <li>Town members try to identify inconsistencies in statements</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Voting Period</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        <li>Players vote on who they think is Mafia</li>
                        <li>The player with the most votes is eliminated</li>
                        <li>Their role is revealed to all players</li>
                        <li>If there's a tie, no one is eliminated that day</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-blue-400 flex items-center gap-2">
                      <Badge className="bg-blue-800">Night Phase</Badge>
                    </h4>
                    <p className="text-gray-300">
                      During the night, players with special night abilities perform their actions in secret. The order
                      of actions follows a specific sequence.
                    </p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Mafia Action</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        <li>Mafia members can communicate privately</li>
                        <li>They collectively choose one player to eliminate</li>
                        <li>The Godfather (if present) makes the final decision</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Special Role Actions</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        <li>Detective chooses a player to investigate</li>
                        <li>Doctor chooses a player to protect</li>
                        <li>Vigilante can choose to shoot a player</li>
                        <li>Other special roles perform their unique actions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-white">Resolution</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        <li>Actions are resolved in a specific order</li>
                        <li>Protection happens before kills</li>
                        <li>Players who were killed are announced at the start of the next day</li>
                        <li>Detective and other information-gathering role results are revealed only to those roles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <Card className="bg-black/40 border-red-900/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Strategy Tips</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-lg text-red-400 flex items-center gap-2 mb-3">
                      <UserCheck className="h-5 w-5" />
                      Tips for Mafia
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <strong className="text-white">Blend In:</strong> Don't be too quiet or too loud. Participate in
                        discussions like a Town member would.
                      </li>
                      <li className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <strong className="text-white">Coordinate Night Kills:</strong> Target players who seem
                        observant or are likely special Town roles like Detective or Doctor.
                      </li>
                      <li className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <strong className="text-white">Create Confusion:</strong> Cast subtle suspicion on Town members
                        without being too obvious about it.
                      </li>
                      <li className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <strong className="text-white">Claim a Role:</strong> If accused, be ready to claim a role.
                        Choose wisely and be consistent with your claim.
                      </li>
                      <li className="bg-red-950/20 border border-red-900/30 rounded-md p-3">
                        <strong className="text-white">Split Votes:</strong> In the late game, try to split Town votes
                        between multiple suspects to avoid Mafia elimination.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-lg text-blue-400 flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5" />
                      Tips for Town
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <strong className="text-white">Take Notes:</strong> Keep track of claims, votes, and behavior
                        patterns to identify inconsistencies.
                      </li>
                      <li className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <strong className="text-white">Share Information:</strong> If you have a special role, find
                        strategic moments to share your findings.
                      </li>
                      <li className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <strong className="text-white">Analyze Voting Patterns:</strong> Pay attention to who votes for
                        whom and who tries to avoid voting.
                      </li>
                      <li className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <strong className="text-white">Role Claims:</strong> Ask for role claims when necessary, but be
                        aware that Mafia members will lie.
                      </li>
                      <li className="bg-blue-950/20 border border-blue-900/30 rounded-md p-3">
                        <strong className="text-white">Protect Key Roles:</strong> If you're the Doctor, protect players
                        who are likely to be targeted by the Mafia.
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

