import React, { useEffect, useReducer } from "react";
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
        return { ...prev, time: { label:"Time",state: "", options: [""] } };
      case "updateAvailTimes":
        return {
          ...prev,
          time: { ...prev.time, options: action.value },
        };

      default:
        break;
    }
  };

  const [reservationData, dispatch] = useReducer(updateReservationData, {
    persons: { label:"Persons", state: "", error: "" },
    date: { label:"Date", state: "", error: "" },
    time: { label:"Time", state: "", error: "", options: [""] },
    occasion: { label:"Occasion", state: "", error: "", options: ["Birthday", "Aniversary"] },
    firstName: { label:"First Name", state: "", error: "" },
    lastName: { label:"Last Name", state: "", error: "" },
    email: { label:"Email" ,state: "", error: "" },
    specialRequest: { label:"Special Request", state: "", error: "" },
    
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
