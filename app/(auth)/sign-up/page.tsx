import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Github from "@/public/github.svg";
import Google from "@/public/google.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utlis/auth";
import { redirect } from "next/navigation";
export default async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/home");
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signup">
        <h1 className="text-3xl font-bold text-white">Sign up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant={"destructive"}
            className="w-full bg-[#e50914]"
          >
            Sign up
          </Button>
        </div>
      </form>
      <div className="mt-5 ">
        <p className="mt-5 text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Sign in
          </Link>
        </p>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant={"outline"} size={"icon"}>
          <Image src={Github} alt="google" width={20} height={20} />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image
            src={Google}
            alt="apple"
            className="w-6 h-6"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
  );
}
