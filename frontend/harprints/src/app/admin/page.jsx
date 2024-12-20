import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminHeader } from "@/components/admin/admin-header";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#222831] flex flex-col">
      {/* <AdminHeader /> */}
      <main className="flex-grow container mx-auto my-8 p-4">
        <AdminDashboard />
      </main>
    </div>
  );
}
