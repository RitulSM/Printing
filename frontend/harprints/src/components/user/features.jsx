import { Printer, Clock, CreditCard, Shield } from "lucide-react";

export function Features() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-[#222831] mb-12">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-[#00ADB5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Printer className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Printing</h3>
          <p className="text-gray-600">
            High-quality prints with professional finish
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#00ADB5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
          <p className="text-gray-600">
            Fast turnaround time for all print jobs
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#00ADB5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">Multiple secure payment options</p>
        </div>
        <div className="text-center">
          <div className="bg-[#00ADB5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Guaranteed Service</h3>
          <p className="text-gray-600">100% satisfaction guaranteed</p>
        </div>
      </div>
    </div>
  );
}
