import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, CreditCard, User, Settings } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#393E46] text-[#EEEEEE] shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Orders
            </CardTitle>
            <Printer className="h-4 w-4 text-[#00ADB5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card className="bg-[#393E46] text-[#EEEEEE] shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Revenue
            </CardTitle>
            <CreditCard className="h-4 w-4 text-[#00ADB5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹3,895.00</div>
          </CardContent>
        </Card>
        <Card className="bg-[#393E46] text-[#EEEEEE] shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <User className="h-4 w-4 text-[#00ADB5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,941</div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-[#393E46] text-[#EEEEEE] shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Manage Print Queue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#EEEEEE]">Order ID</TableHead>
                <TableHead className="text-[#EEEEEE]">Customer</TableHead>
                <TableHead className="text-[#EEEEEE]">Document</TableHead>
                <TableHead className="text-[#EEEEEE]">Status</TableHead>
                <TableHead className="text-[#EEEEEE]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-[#EEEEEE]">001</TableCell>
                <TableCell className="text-[#EEEEEE]">John Doe</TableCell>
                <TableCell className="text-[#EEEEEE]">Report.pdf</TableCell>
                <TableCell className="text-[#EEEEEE]">Pending</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#00ADB5] hover:bg-[#EEEEEE] hover:text-[#222831] text-[#222831]"
                  >
                    Start Printing
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[#EEEEEE]">002</TableCell>
                <TableCell className="text-[#EEEEEE]">Jane Smith</TableCell>
                <TableCell className="text-[#EEEEEE]">
                  Presentation.pptx
                </TableCell>
                <TableCell className="text-[#EEEEEE]">Processing</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#EEEEEE] hover:bg-[#00ADB5] text-[#222831] hover:text-[#EEEEEE]"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[#EEEEEE]">003</TableCell>
                <TableCell className="text-[#EEEEEE]">Bob Johnson</TableCell>
                <TableCell className="text-[#EEEEEE]">Invoice.docx</TableCell>
                <TableCell className="text-[#EEEEEE]">Completed</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#00ADB5] hover:bg-[#EEEEEE] hover:text-[#222831] text-[#222831]"
                  >
                    Archive
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button className="w-full bg-[#00ADB5] hover:bg-[#EEEEEE] text-[#222831] hover:text-[#222831]">
        <Settings className="mr-2 h-5 w-5" /> Manage Print Queue
      </Button>
    </div>
  );
}
