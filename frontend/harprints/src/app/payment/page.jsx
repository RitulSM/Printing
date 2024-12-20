"use client";

import { useState } from "react";
// import { Header } from "@/components/user/header";
import { Header } from "@/components/user/header";
import { Footer } from "@/components/user/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { CreditCard, Smartphone, Building2, Wallet } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#222831]">
                Select Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-4 border rounded-lg p-4 cursor-pointer hover:border-[#00ADB5]">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 mr-2 text-[#00ADB5]" />
                        <div>
                          <div className="font-medium">UPI</div>
                          <div className="text-sm text-gray-500">
                            Pay using UPI apps
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 border rounded-lg p-4 cursor-pointer hover:border-[#00ADB5]">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-[#00ADB5]" />
                        <div>
                          <div className="font-medium">Credit/Debit Card</div>
                          <div className="text-sm text-gray-500">
                            All major cards accepted
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 border rounded-lg p-4 cursor-pointer hover:border-[#00ADB5]">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label
                      htmlFor="netbanking"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <Building2 className="h-5 w-5 mr-2 text-[#00ADB5]" />
                        <div>
                          <div className="font-medium">Net Banking</div>
                          <div className="text-sm text-gray-500">
                            All Indian banks supported
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-4 border rounded-lg p-4 cursor-pointer hover:border-[#00ADB5]">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-[#00ADB5]" />
                        <div>
                          <div className="font-medium">Digital Wallet</div>
                          <div className="text-sm text-gray-500">
                            Paytm, PhonePe, etc.
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total Amount:</span>
                    <span className="text-2xl font-bold text-[#00ADB5]">
                      ₹200.00
                    </span>
                  </div>
                  <Button
                    className="w-full bg-[#00ADB5] hover:bg-[#393E46] text-white"
                    disabled={!paymentMethod}
                    onClick={() =>
                      alert(`Processing payment via ${paymentMethod}`)
                    }
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
