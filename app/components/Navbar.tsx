"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import UserNav from "./UserNav";

interface linkProps {
  name: string;
  href: string;
}
const links: linkProps[] = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "TV Shows",
    href: "/home/tvshows",
  },
  {
    name: "Recently ",
    href: "/home/recently",
  },
  {
    name: "My List",
    href: "/home/user/mylist",
  },
];
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 lg:px-8 flex mt-2">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="logo" width={150} height={150} priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx} className="">
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-400 font-semibold text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-4">
        <Search className="text-white hidden lg:block" />
        <Bell className="text-white hidden lg:block" />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
