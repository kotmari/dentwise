import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SignedOut>
        <SignInButton mode="modal">Sing Up</SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
