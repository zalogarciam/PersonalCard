import { useState } from "react";
import AppointmentsCards from "../components/appointments/AppointmentsCards";
import AppointmentsForm from "../components/appointments/AppointmentsForm";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  return (
    <section className="py-4">
      <div className="container row mx-auto g-4">
        <AppointmentsForm
          appointments={appointments}
          setAppointments={setAppointments}
        />
        <AppointmentsCards
          appointments={appointments}
          setAppointments={setAppointments}
        />
      </div>
    </section>
  );
};

export default Appointments;
