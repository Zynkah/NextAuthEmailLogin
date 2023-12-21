'use client'

import React from "react";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Navbar />
        <div className="my-10">
          <HomeCard />
        </div>
      </div>
    </main>
  );
}