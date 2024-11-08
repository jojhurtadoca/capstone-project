import React from "react";
import ReservationForm from "../components/ReservationForm";
import MyReservations from "../components/MyReservations";

const Reservations = () => {
  return (
    <section className="reservation-section green-background padding-desktop">
      <ReservationForm />
      <MyReservations />
    </section>
  );
};

export default Reservations;
