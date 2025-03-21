"use client";

import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Github from "@/public/github.svg";
const GithubSignIn = () => {
  return (
    <Button
      onClick={() => {
        signIn("github");
      }}
      variant={"outline"}
      size={"icon"}
    >
      <Image src={Github} alt="github" width={20} height={20} />
    </Button>
  );
};

export default GithubSignIn;
