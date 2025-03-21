"use client";

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
import { signOut } from "next-auth/react";
import React, { useState } from "react";

const UserNav = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          value={"ghost"}
          className="relative h-10 w-10 rounded-full
        "
        >
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage
              src="https://bzdupparbrfrdfukcufz.supabase.co/storage/v1/object/public/user//avatar.png"
              alt="@Raza"
            />
            <AvatarFallback className="text-sm rounded-sm text-white">
              Raza
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-sm leading-none">Raza</p>
            <p className="text-xs text-muted-foreground leading-none">
              razathedream3@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={isSigningOut}
          onClick={async () => {
            setIsSigningOut(true);
            await signOut({ callbackUrl: "/login" });
            // The page will redirect, but if it doesn't for some reason:
            setIsSigningOut(false);
          }}
        >
          {isSigningOut ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
