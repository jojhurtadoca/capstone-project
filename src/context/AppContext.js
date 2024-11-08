import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  const updateReservations = (data) => {
    setReservations(data);
  };

  return (
    <AppContext.Provider value={{ reservations, updateReservations }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
