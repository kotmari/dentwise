"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { CalendarIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DentWise Logo"
              width={32}
              height={32}
              className="w-11"
            />
            DentWise
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 transition-colors ${
              pathname === "/dashboard"
                ? "text-foreground hover:text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>

          <Link
            href="/dashboard/appointments"
            className={`flex items-center gap-2 transition-colors ${
              pathname === "/dashboard//appointments"
                ? "text-foreground hover:text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CalendarIcon className="w-4 h-4" />
            <span className="hidden md:inline">Appointments</span>
          </Link>

          <Link
            href="/voice"
            className={`flex items-center gap-2 transition-colors ${
              pathname === "/voice"
                ? "text-foreground hover:text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MicIcon className="w-4 h-4" />
            <span className="hidden md:inline">Voice</span>
          </Link>
          <Link
            href="/pro"
            className={`flex items-center gap-2 transition-colors ${
              pathname === "/pro"
                ? "text-foreground hover:text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CrownIcon className="w-4 h-4" />
            <span className="hidden md:inline">Pro</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="text-xs text-muted-foreground">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            </div>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
