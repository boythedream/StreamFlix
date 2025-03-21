import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utlis/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
