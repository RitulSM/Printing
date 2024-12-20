import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Home, LogIn } from "lucide-react";

export function AdminHeader() {
  const isAuthenticated = false; // This should be replaced with actual authentication logic

  return (
    <header className="bg-[#393E46] text-[#EEEEEE] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/admin" className="text-2xl font-bold">
          PrintMaster Pro Admin
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#222831]"
            >
              <Home className="mr-2 h-5 w-5" />
              User Dashboard
            </Button>
          </Link>
          {isAuthenticated ? (
            <Button
              variant="ghost"
              className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#222831]"
              onClick={() => console.log("Logout clicked")}
            >
              <User className="mr-2 h-5 w-5" />
              Logout
            </Button>
          ) : (
            <Link href="/admin/login">
              <Button
                variant="ghost"
                className="text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#222831]"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Admin Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
