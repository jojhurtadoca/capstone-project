import React, { useState } from "react";
import ReservationForm from "../components/ReservationForm";
import MyReservations from "../components/MyReservations";

const Reservations = () => {
  const [availableMinTime] = useState(11);
  const [availableMaxTime] = useState(22);
  return (
    <section className="reservation-section green-background padding-desktop">
      <ReservationForm
        availableMinTime={availableMinTime}
        availableMaxTime={availableMaxTime}
      />
      <MyReservations />
    </section>
  );
};

export default Reservations;
