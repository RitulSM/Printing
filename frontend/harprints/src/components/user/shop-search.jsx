"use client";

import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ShopSearch() {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
      <div className="relative flex-1">
        <Select defaultValue="bangalore">
          <SelectTrigger className="w-full bg-white text-[#222831]">
            <MapPin className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bangalore">Bangalore</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="chennai">Chennai</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative flex-[2]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for print shops by name or area..."
          className="pl-10 bg-white text-[#222831]"
        />
      </div>
      <Button className="bg-[#00ADB5] hover:bg-[#393E46] text-white">
        Search
      </Button>
    </div>
  );
}
