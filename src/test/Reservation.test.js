import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Reservations from "../pages/Reservation";
import { AppProvider } from "../context/AppContext";
import { MemoryRouter } from "react-router-dom";

jest.mock("@mui/x-date-pickers/DatePicker", () => ({
  DatePicker: ({ value, onChange, renderInput }) => {
    return renderInput({
      value: value || "",
      onChange: (event) => onChange(event.target.value),
    });
  },
}));

describe("Reservation page", () => {
  test("Render reservation form", () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByTestId("date")).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Select occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make reservation/i)).toBeInTheDocument();
  });

  test("shows error messages when submitting an incomplete form", async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </AppProvider>
    );

    fireEvent.click(screen.getByText(/Make reservation/i));

    await waitFor(() => {
      expect(
        screen.getByText(/The attribute date is required/i)
      ).toBeInTheDocument();
    });
  });
});
