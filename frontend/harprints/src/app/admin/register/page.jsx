"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gstin: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup attempted with:", formData);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831] p-4">
      <Card className="w-full max-w-md bg-[#393E46] text-[#EEEEEE] shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Admin Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gstin">GSTIN Number</Label>
              <Input
                id="gstin"
                value={formData.gstin}
                onChange={(e) =>
                  setFormData({ ...formData, gstin: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
                className="bg-[#EEEEEE] text-[#222831]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#00ADB5] hover:bg-[#EEEEEE] text-[#222831] hover:text-[#222831]"
            >
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/admin/login"
              className="text-sm text-[#00ADB5] hover:text-[#EEEEEE]"
            >
              Already have an admin account? Log in here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
