import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, Menu, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              <span className="text-red-600">M</span>afia
            </span>
          </Link>
          <nav className="ml-8 hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/join-game" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Join Game
            </Link>
            <Link href="/create-game" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Create Game
            </Link>
            <Link href="/rules" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              Rules
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="hover:bg-gray-800">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800">Settings</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800">Stats</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="hover:bg-gray-800">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden text-gray-400 hover:text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

