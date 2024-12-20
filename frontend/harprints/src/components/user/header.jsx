"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { User, FileText } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-[#222831] text-[#EEEEEE] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PrintMaster Pro
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/orders">
            <Button
              variant="ghost"
              className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#393E46]"
            >
              <FileText className="mr-2 h-5 w-5" />
              My Orders
            </Button>
          </Link>
          {session ? (
            <div className="flex items-center space-x-4">
              <Image
                src={session.user?.image || "/default-avatar.png"}
                alt={session.user?.name || "User"}
                width={32}
                height={32}
                className="rounded-full"
              />
              <Link href="/user-dashboard" className="text-[#EEEEEE]">
                {session.user?.name}
              </Link>
              <Button
                variant="ghost"
                className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#393E46]"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#393E46]"
              >
                <User className="mr-2 h-5 w-5" />
                Login/Register
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
