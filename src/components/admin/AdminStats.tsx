import { Calendar, Clock, User, UserCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointment: number;
}

export default function AdminStats({
  totalDoctors,
  activeDoctors,
  totalAppointments,
  completedAppointment,
}: AdminStatsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <User className="size-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalDoctors}</p>
              <p className="text-sm text-muted-foreground">Total Doctors</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <UserCheck className="size-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeDoctors}</p>
              <p className="text-sm text-muted-foreground">Active Doctors</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Calendar className="size-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalAppointments}</p>
              <p className="text-sm text-muted-foreground">
                Total Appointments
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Clock className="size-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedAppointment}</p>
              <p className="text-sm text-muted-foreground">
                Completed Appointments
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
