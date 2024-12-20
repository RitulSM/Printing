"use client";

import React from "react";
import "../app/styles/globals.css";
// import Header from "../app/components/Header.jsx";
import { Header } from "@/components/user/header";
import Provider from "@/components/ui/Provider";
import { AdminHeader } from "@/components/admin/admin-header";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/user/footer";

// export const metadata = {
//   title: "PrintMaster Pro",
//   description: "blogs for everyone",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showAdminNavbar = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {!showAdminNavbar ? <Header /> : <AdminHeader />}
            {children}
          </main>
        </Provider>
      </body>
      {/* <Footer /> */}
    </html>
  );
}
