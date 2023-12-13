'use client'

import React, {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/login-btn";
import SignOutButton from "@/components/logout-btn";



export default function Home() {
  const { data: session } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const userIsLoggedIn = session?.user?.email;
      if (typeof userIsLoggedIn === "string") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, [session]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="m-auto border rounded p-2">
        {loggedIn ? <SignOutButton /> : <SignInButton />}
</div>
      </div>
    </main>
  );
}