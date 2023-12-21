'use client'

import React from "react";
import HomeCard from "@/components/HomeCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="my-10">
          <HomeCard />
      </div>
    </main>
  );
}