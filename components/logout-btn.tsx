import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
}