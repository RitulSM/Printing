"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Printer } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { response } from "express";

const shops = [
  {
    id: 1,
    name: "Quick Print Solutions",
    image: "/placeholder.svg?height=200&width=300&text=Quick+Print",

    location: "Indiranagar, Bangalore",
    rating: 4.5,
    workload: "Low",
    timing: "Open until 9 PM",
  },
  {
    id: 2,
    name: "Premium Print Hub",
    image: "/placeholder.svg?height=200&width=300&text=Premium+Print",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    workload: "Medium",
    timing: "Open 24/7",
  },
  {
    id: 3,
    name: "Digital Print Express",
    image: "/placeholder.svg?height=200&width=300&text=Digital+Print",
    location: "HSR Layout, Bangalore",
    rating: 4.2,
    workload: "High",
    timing: "Open until 8 PM",
  },
];

// useEffect(() => {
//   axios.get("http://localhost:3000/api/shops").then((response) => {
//     console.log(response);
//   });
// }, [0]);

export function ShopGrid() {
  const [shop, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shops");
        setShops(response.data.totalShops);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };

    fetchShops();
  }, []);

  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {shop.map((shop) => (
        <Card
          key={shop.id}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={shop.shop_image} // Dynamically use shop.shop_image
              alt={shop.fullName || "Shop Image"} // Provide a fallback for alt text
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl font-bold">
                {shop.fullName}
              </CardTitle>
              <Badge
                variant="secondary"
                className={
                  shop.shop_queue === "Low"
                    ? "bg-green-100 text-green-800"
                    : shop.workload === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }
              >
                {shop.shop_queue} Queue
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                {shop.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                {shop.timing}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Printer className="w-4 h-4 mr-2 text-[#00ADB5]" />
                  <span className="text-sm font-medium">
                    ⭐*shop.rating ({shop.rating})
                  </span>
                </div>
                <Button
                  className="bg-[#00ADB5] hover:bg-[#393E46] text-white"
                  onClick={() => router.push(`/create-order/${shop.fullName}`)}
                >
                  Select Shop
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
