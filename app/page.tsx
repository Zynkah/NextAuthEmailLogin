'use client'

import React from "react";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/login-btn";
import SignOutButton from "@/components/logout-btn";
import { ModeToggle } from "@/components/light-dark-mode";



export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed right-2 top-2 hover:scale-110 hover:bg-slate-900">
          <ModeToggle />
        </div>

        <div className="m-auto border rounded w-max hover:scale-110 hover:bg-slate-900">
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </main>
  );
}