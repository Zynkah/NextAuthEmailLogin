import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./light-dark-mode";
import { useSession } from "next-auth/react";
import SignInButton from "@/components/login-btn";
import SignOutButton from "@/components/logout-btn";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <NavigationMenu className="items-center justify-center m-auto">
      <NavigationMenuList className="gap-10 text-xl">
        <NavigationMenuItem className="hover:scale-110 rounded hover:bg-slate-700 hover:bg-opacity-50 py-2 px-6">
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:scale-110 rounded hover:bg-slate-700 hover:bg-opacity-50 py-2 px-6">
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:scale-110 rounded hover:bg-slate-700 hover:bg-opacity-50 py-2 px-6">
          <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:scale-110 rounded hover:bg-slate-700 hover:bg-opacity-50 py-2 px-6">
          <NavigationMenuLink href="/">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="sticky top-2 right-20 border rounded w-max hover:scale-110 hover:bg-slate-700 hover:bg-opacity-50">
          {session ? <SignOutButton /> : <SignInButton />}
        </NavigationMenuItem>
        <NavigationMenuItem className="sticky right-2 top-2 hover:scale-110 hover:bg-slate-700 hover:bg-opacity-50">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
