import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const shops = [
  {
    id: "shop1",
    name: "Quick Print Shop",
    image: "/placeholder.svg?height=200&width=300&text=Quick+Print+Shop",
    workload: "High",
  },
  {
    id: "shop2",
    name: "City Center Xerox",
    image: "/placeholder.svg?height=200&width=300&text=City+Center+Xerox",
    workload: "Medium",
  },
  {
    id: "shop3",
    name: "Campus Copy Center",
    image: "/placeholder.svg?height=200&width=300&text=Campus+Copy+Center",
    workload: "Low",
  },
];

export function ShopSelection() {
  return (
    <RadioGroup defaultValue="shop1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <div key={shop.id} className="relative">
            <RadioGroupItem
              value={shop.id}
              id={shop.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={shop.id}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#00ADB5] [&:has([data-state=checked])]:border-[#00ADB5]"
            >
              <Image
                src={shop.image}
                alt={shop.name}
                width={300}
                height={200}
                className="rounded-md mb-2"
              />
              <span className="text-sm font-medium">{shop.name}</span>
              <span
                className={`text-xs mt-1 ${
                  shop.workload === "High"
                    ? "text-red-500"
                    : shop.workload === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Workload: {shop.workload}
              </span>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
