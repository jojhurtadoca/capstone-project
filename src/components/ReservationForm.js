import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import ButtonComponent from "../components/ButtonComponent";
import dayjs from "dayjs";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const navigate = useNavigate();
  const { updateReservations } = useContext(AppContext);
  const [formData, setFormData] = useState({
    date: null,
    time: null,
    number: "",
    option: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  const generateError = (attribute) => {
    Swal.fire({
      title: "Error!",
      text: "The attribute " + attribute + " is required",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "The reservation was created",
      icon: "success",
      confirmButtonText: "OK",
      allowOutsideClick: true,
      willClose: () => {
        redirectToHome();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        redirectToHome();
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.date) {
      generateError("date");
      return;
    }
    if (!formData.time) {
      generateError("time");
      return;
    }
    if (!formData.number || formData.number <= 0) {
      generateError("number of guests");
      return;
    }
    if (!formData.option) {
      generateError("option");
      return;
    }

    const existingData = localStorage.getItem("reservations");

    const dataArray = existingData ? JSON.parse(existingData) : [];

    dataArray.push(formData);

    dataArray.sort((a, b) => new Date(a.date) - new Date(b.date));

    updateReservations(dataArray);
    localStorage.setItem("reservations", JSON.stringify(dataArray));

    setFormData({ number: "", time: null, date: null, option: "" });

    showSuccessAlert();
  };
  return (
    <div>
      <h1>New reservation in Little Lemon Restaurant</h1>
      <form
        component="form"
        className="form-reservation"
        onSubmit={handleSubmit}
      >
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="date-divider">
              <div>
                <DatePicker
                  label="Select Date"
                  className="input-reservation"
                  value={formData.date}
                  minDate={dayjs()}
                  onChange={(newValue) => handleChange("date", newValue)}
                  renderInput={(params) => (
                    <TextField className="input-reservation" {...params} />
                  )}
                />
              </div>
              <div>
                <TimePicker
                  label="Select Time"
                  className="input-reservation"
                  value={formData.time}
                  minTime={dayjs().hour(8).minute(0)}
                  maxTime={dayjs().hour(22).minute(0)}
                  onChange={(newValue) => handleChange("time", newValue)}
                  renderInput={(params) => (
                    <TextField className="input-reservation" {...params} />
                  )}
                />
              </div>
            </div>
          </LocalizationProvider>
        </div>
        <div>
          <TextField
            label="Number of Guests"
            className="input-reservation"
            type="number"
            value={formData.number}
            onChange={(e) => handleChange("number", e.target.value)}
          />
        </div>
        <div>
          <FormControl className="input-reservation">
            <InputLabel>Occasion</InputLabel>
            <Select
              className="input-reservation"
              value={formData.option}
              onChange={(e) => handleChange("option", e.target.value)}
              label="Select and occasion"
            >
              <MenuItem value="Birthday">Birthday</MenuItem>
              <MenuItem value="Anniversary">Anniversary</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <ButtonComponent label={"Make reservation"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
