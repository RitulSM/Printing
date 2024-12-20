"use client";

import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#222831]">
      <div className="p-8 bg-[#393E46] rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-[#EEEEEE] mb-6">
          Login / Register
        </h1>
        <div className="space-y-4">
          <Button
            className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-[#EEEEEE]"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
          <Button
            className="w-full bg-[#333] hover:bg-[#333]/80 text-[#EEEEEE]"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
