"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/user/header";
import { Footer } from "@/components/user/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Upload, CreditCard } from "lucide-react";

export default function CreateOrder({ params }) {
  const [selectedSheetType, setSelectedSheetType] = useState("");
  const [shopName, setShopName] = useState("");

  const router = useRouter();

  // Use React.use() to unwrap the params
  useEffect(() => {
    const fetchShopName = async () => {
      const resolvedParams = await params;
      if (resolvedParams && resolvedParams.shop) {
        setShopName(resolvedParams.shop.replace(/%20/g, " "));
      }
    };

    fetchShopName();
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#222831]">
                {shopName || "Loading..."}
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Print Order</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="file">Upload Document</Label>
                    <div className="mt-1 flex items-center space-x-2">
                      <Input id="file" type="file" className="flex-grow" />
                      <Button
                        size="icon"
                        className="bg-[#00ADB5] hover:bg-[#393E46] text-white"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sheet-type">Sheet Type</Label>
                    <Select
                      value={selectedSheetType}
                      onValueChange={setSelectedSheetType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select sheet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a1">A1 (594 × 841 mm)</SelectItem>
                        <SelectItem value="a2">A2 (420 × 594 mm)</SelectItem>
                        <SelectItem value="a3">A3 (297 × 420 mm)</SelectItem>
                        <SelectItem value="a4">A4 (210 × 297 mm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="sets">Number of Sets</Label>
                    <Input
                      id="sets"
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Color Options</Label>
                    <RadioGroup defaultValue="bw" className="mt-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bw" id="bw" />
                        <Label htmlFor="bw">Black & White</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="color" id="color" />
                        <Label htmlFor="color">Color</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Print Sides</Label>
                    <RadioGroup defaultValue="front" className="mt-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="front" id="front" />
                        <Label htmlFor="front">Front Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Front & Back</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Number of Pages:</span>
                    <span className="font-semibold">10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Subtotal:</span>
                    <span className="font-semibold">₹250.00</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span>Discount Applied:</span>
                    <span className="font-semibold">-₹50.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>₹200.00</span>
                  </div>
                  <Button
                    className="w-full bg-[#00ADB5] hover:bg-[#393E46] text-white"
                    onClick={() => router.push("/payment")}
                  >
                    <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
