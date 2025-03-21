import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "@/public/login_background.jpg";
import Logo from "@/public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background"
        priority
        fill
        className="absolute h-full w-full object-cover brightness-50"
      />

      <Image
        src={Logo}
        alt="logo"
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        priority
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
