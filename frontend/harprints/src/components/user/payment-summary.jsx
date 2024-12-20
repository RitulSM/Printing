"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PaymentSummary() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
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
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-[#00ADB5] hover:bg-[#393E46] text-white">
            <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Payment Method</DialogTitle>
          </DialogHeader>
          <RadioGroup onValueChange={setPaymentMethod} className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking">Net Banking</Label>
            </div>
          </RadioGroup>
          <Button
            className="w-full mt-4"
            onClick={() => alert(`Processing payment via ${paymentMethod}`)}
          >
            Pay ₹200.00
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
