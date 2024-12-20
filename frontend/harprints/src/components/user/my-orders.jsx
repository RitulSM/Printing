import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const orders = [
  {
    id: 1,
    name: "Document 1",
    status: "Pending",
    preview: "/placeholder.svg?height=100&width=100&text=Doc+1",
  },
  {
    id: 2,
    name: "Document 2",
    status: "Processing",
    preview: "/placeholder.svg?height=100&width=100&text=Doc+2",
  },
  {
    id: 3,
    name: "Document 3",
    status: "Completed",
    preview: "/placeholder.svg?height=100&width=100&text=Doc+3",
  },
];

export function MyOrders() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between py-2">
            <CardTitle className="text-sm font-medium">{order.name}</CardTitle>
            <Badge
              variant={order.status === "Completed" ? "default" : "secondary"}
              className={
                order.status === "Pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : order.status === "Processing"
                  ? "bg-blue-200 text-blue-800"
                  : "bg-green-200 text-green-800"
              }
            >
              {order.status}
            </Badge>
          </CardHeader>
          <CardContent className="py-2">
            <div className="flex items-center space-x-4">
              <Image
                src={order.preview}
                alt={order.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <p className="text-sm text-gray-500">Order #{order.id}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-sm text-[#393E46] bg-[#00ADB5] bg-opacity-20 p-4 rounded-md">
        Note: The shop is currently experiencing high volume. Your order may
        take longer than usual to process.
      </div>
    </div>
  );
}
