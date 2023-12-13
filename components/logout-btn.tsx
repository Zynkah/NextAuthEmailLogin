import { useSession, signOut } from "next-auth/react";

export default function SignOutButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
}