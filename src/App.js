import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservation";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppContext } from "./context/AppContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

const App = () => {
  const { updateReservations } = useContext(AppContext);

  useEffect(() => {
    const existingData = localStorage.getItem("reservations");
    const dataArray = existingData ? JSON.parse(existingData) : [];
    updateReservations(dataArray);
  }, [updateReservations]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main className="main-style">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reservation" element={<Reservations />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
