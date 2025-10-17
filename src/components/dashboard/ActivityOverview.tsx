import DentalHealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";


export default function ActivityOverview() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <DentalHealthOverview />
      <NextAppointment />
    </div>
  )
}
