import React, { useContext } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { AppContext } from "../context/AppContext";

dayjs.extend(utc);

const MyReservations = () => {
  const { reservations } = useContext(AppContext);
  return (
    <>
      {reservations && reservations.length > 0 && (
        <section className="my-reservations">
          <h2>My Reservations</h2>
          <ul className="reservation-list">
            {reservations.map((r, i) => (
              <li key={i}>
                <h3>Reservation {i + 1}</h3>
                <span>
                  Date:
                  <strong>
                    {" " +
                      dayjs.utc(r.date).local().format("MM/DD/YYYY") +
                      " " +
                      dayjs.utc(r.time).local().format("HH:mm")}
                  </strong>
                </span>
                <span>
                  Number of Guests: <strong>{r.number}</strong>
                </span>
                <span>
                  Occasion: <strong>{r.option}</strong>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default MyReservations;
