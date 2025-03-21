"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Google from "@/public/google.svg";
import { signIn } from "next-auth/react";
/**
 * A button to sign in with Google.
 */
const GoogleSIgnIn = () => {
  /**
   * Handle the click event by signing in with Google.
   */
  const handleClick = () => {
    signIn("google");
  };

  return (
    <Button onClick={handleClick} variant={"outline"} size={"icon"}>
      {/* The Google icon */}
      <Image
        src={Google}
        alt="apple"
        className="w-6 h-6"
        width={20}
        height={20}
      />
    </Button>
  );
};

export default GoogleSIgnIn;
