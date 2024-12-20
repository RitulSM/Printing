import { Header } from "@/components/user/header";
import { Footer } from "@/components/user/footer";
import { ShopSearch } from "@/components/user/shop-search";
import { ShopGrid } from "@/components/user/shop-grid";
import { Features } from "@/components/user/features";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow">
        <div className="bg-[#222831] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#EEEEEE] mb-6">
              Find the Perfect Print Shop Near You
            </h1>
            <p className="text-[#EEEEEE] text-center mb-8 text-lg">
              Quick, reliable, and professional printing services at your
              fingertips
            </p>
            <ShopSearch />
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <ShopGrid />
          <Features />
        </div>
      </main>
    </div>
  );
}
