"use client";

import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex flex-col items-center justify-between mt-20">
        <Navbar />
      </div>
      {children}
    </SessionProvider>
  );
}
