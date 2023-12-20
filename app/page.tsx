'use client'

import React from "react";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/login-btn";
import SignOutButton from "@/components/logout-btn";



export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="m-auto border rounded p-2 w-max">
        {session ? <SignOutButton /> : <SignInButton />}
</div>
      </div>
    </main>
  );
}