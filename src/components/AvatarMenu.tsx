import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, FileText, LogOut, Plus } from "lucide-react";
import { signOut } from "../../auth";
import Link from "next/link";

export default function AvatarMenu({
  userName = "John Doe",
  userEmail = "email@email.com",
  userImage = "/placeholder.svg?height=40&width=40",
}: {
  userName?: string;
  userEmail?: string;
  userImage?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border border-black">
            <AvatarImage src={userImage} alt={userName} />
            <AvatarFallback>
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/settings">
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/articles">
          <DropdownMenuItem className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            <span>Meus artigos</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/article/create">
          <DropdownMenuItem className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            <span>Criar artigo</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <form
          action={async () => {
            "use server";
            await signOut({
              redirectTo: "/",
            });
          }}
          className="flex-1 cursor-pointer"
        >
          <button type="submit" className="w-full cursor-pointer">
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <p>Sair</p>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
