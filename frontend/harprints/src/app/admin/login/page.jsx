"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const isAuthenticated = false; // Temporary placeholder for authentication state

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEEEE] p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-[#222831]">
            Login to PrintMaster Pro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-[#00ADB5] hover:bg-[#393E46] text-white"
            onClick={() => console.log("Sign in with Google clicked")}
          >
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
