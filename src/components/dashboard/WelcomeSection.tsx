import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image";


export default async function WelcomeSection() {
   const user = await currentUser()

   return (
    <div className="relative z-10 mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <div className="size-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            Online & Ready
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
           Good {" "}
           {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}, {user?.firstName}
          </h1>
          <p className="text-muted-foreground">
            Your personal AI dental assistant is ready to helper you maintain perfect oral health.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center size-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full">
       <Image src="/logo.png" alt="DentWise logo icon" width={64} height={64} className="size-16" />
      </div>
    </div>
  );
}
