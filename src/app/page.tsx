"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Roadmap } from "@/components/landing/Roadmap";
import { Tokenomics } from "@/components/landing/Tokenomics";
import { Team } from "@/components/landing/Team";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

const ThreeBackground = dynamic(
  () => import("@/components/ThreeBackground").then((m) => m.ThreeBackground),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <Roadmap />
        <Tokenomics />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}