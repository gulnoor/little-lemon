import React, { useEffect, useReducer, useState } from "react";
import ReservationForm from "./ReservationForm";
import { fetchAPI } from "../availTimesAPI";

const BookingSummary = ({ bookingData }) => {
  return (
    <div style={{}} className="summary">
      {bookingData.persons.state}
      {bookingData.date.state}
      {bookingData.firstName.state}
      {bookingData.lastName.state}
      {bookingData.email.state}
      {bookingData.occasion.state}
      {bookingData.specialRequest.state}
      {bookingData.time.state}
    </div>
  );
};

const BookingPage = ({ children }) => {

  const updateReservationData = (prev, action) => {
    switch (action.actionType) {
      case "updateInput":
        return {
          ...prev,
          [action.field]: { ...prev[action.field], state: action.value },
        };
      case "updateError":
        return {
          ...prev,
          [action.field]: { ...prev[action.field], error: action.value },
        };
      case "resetTime":
        return { ...prev, time: { state: "", availableTimes: [""] } };
      case "updateAvailTimes":
        return {
          ...prev,
          time: { ...prev.time, availableTimes: action.value },
        };

      default:
        break;
    }
  };

  const [reservationData, dispatch] = useReducer(updateReservationData, {
    persons: { state: "", error: "" },
    date: { state: "", error: "" },
    time: { state: "", error: "", availableTimes: [""] },
    occasion: { state: "", error: "", options: ["Birthday", "Aniversary"] },
    firstName: { state: "", error: "" },
    lastName: { state: "", error: "" },
    email: { state: "", error: "" },
    specialRequest: { state: "", error: "" },
  });

  useEffect(() => {
    dispatch({
      actionType: "resetTime",
    });

    fetchAPI(reservationData.date.state)
      .then(function (resolvedValue) {
        dispatch({
          actionType: "updateAvailTimes",

          value: resolvedValue,
        });
      })
      .catch(function (rejectValue) {
        dispatch({
          actionType: "updateAvailTimes",

          value: rejectValue,
        });
      });
  }, [reservationData.date.state]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--md-sys-color-surface-container)",
        margin: "0 8px",
        borderRadius: "1rem",
      }}
      className="booking-page"
    >
      <BookingSummary bookingData={reservationData} />
      <ReservationForm reservationData={reservationData} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
