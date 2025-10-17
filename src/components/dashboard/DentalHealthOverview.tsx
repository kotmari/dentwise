import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainIcon className="size-5 text-primary" />
          Your Dental Yealth
        </CardTitle>
        <CardDescription>
          Reep track of youe dental care journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {appointmentStats.completedAppointments}
            </div>
            <p className="text-sm text-muted-foreground">Completed Visits</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {appointmentStats.totalAppointments}
            </div>
            <p className="text-sm text-muted-foreground">Total Appointments</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {format(new Date(user?.createdAt!), "MMM yyyy")}
            </div>
            <p className="text-sm text-muted-foreground">Member Since</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-start gap-3">
         <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
         <MessageSquareIcon className="size-5 text-primary" />
         </div>
         <div>
            <h4 className="font-semibold text-primary mb-1">Ready to get started?</h4>
            <p className="text-sm text-muted-foreground mb-3">Book your appointment or try our Ai voice assistant for instant dental advice.</p>
            <div className="flex gap-2">
               <Link href="/voice">
               <Button className="bg-primary hover:bg-primary/90" size="sm">
                  Try AI Assistant
               </Button>
               </Link>
               <Link href="/dashboard/appointments">
               <Button variant="outline" size="sm">
                  Book Appointment
               </Button>
               </Link>
            </div>
         </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}
