"use client"
import Footer from "@/components/global/footer";
import { Hero } from "@/components/global/hero";
import { LampComponent } from "@/components/global/lamp";
import Image from "next/image";

export default function Home() {
  return (
      <main className="max-h-screen w-full overflow-hidden bg-background">
          <Hero />
          <Footer />
      </main>
  );
}
