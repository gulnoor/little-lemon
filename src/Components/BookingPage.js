import React, { useEffect, useReducer } from "react";
import ReservationForm from "./ReservationForm";
import { fetchAPI } from "../availTimesAPI";
import "./bookingPage.css";
import Button from "./Button/Button";

export const BookingSummary = ({ bookingData }) => {
  const date = new Date(bookingData.date.state);

  return (
    <div className="summary-container">
      <h3>Your Booking:</h3>
      <h6>Summary</h6>

      <div className="summary">
        <div className="summary-date">
          <h1>{date.getDate() ? date.getDate() : "No date selected"}</h1>
          <span>
            {date.getDate()
              ? date
                  .toLocaleDateString("en-us", { month: "short" })
                  .toUpperCase()
              : ""}
          </span>
        </div>
        <div className="summary-details">
          <h1>
            {bookingData.firstName.state + " " + bookingData.lastName.state}
          </h1>
          <span>
            {date.getDate()
              ? `${date
                  .toLocaleDateString("en-us", { weekday: "long" })
                  .toUpperCase()} ${bookingData.time.state} ${
                  bookingData.persons.state
                    ? `for ${bookingData.persons.state} person`
                    : ""
                }`
              : ""}
          </span>
        </div>
      </div>
      <Button
        style={{
          width: "100%",
        }}
        htmlType={"submit"}
        variant={"outlined"}
      >
        Make your Reservation
      </Button>
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
        return { ...prev, time: { label: "Time", state: "", options: [""] } };
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
    persons: { label: "Persons", state: "", error: "" },
    date: { label: "Date", state: "", error: "" },
    time: { label: "Time", state: "", error: "", options: [""] },
    occasion: {
      label: "Occasion",
      state: "",
      error: "",
      options: ["Birthday", "Aniversary"],
    },
    firstName: { label: "First Name", state: "", error: "" },
    lastName: { label: "Last Name", state: "", error: "" },
    email: { label: "Email", state: "", error: "" },
    specialRequest: { label: "Special Request", state: "", error: "" },
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
    <
      // style={{
      //   // display: "flex",
      //   // flexWrap: "wrap",
      //   // justifyContent: "center",
      //   // alignItems: "center",
      //   // background: "var(--md-sys-color-surface-container)",
      //   // margin: "0 8px",
      //   // borderRadius: "1rem",
      // }}
      // className="booking-page"
    >
      <ReservationForm reservationData={reservationData} dispatch={dispatch} />
      {/* <BookingSummary bookingData={reservationData} /> */}
    </>
  );
};

export default BookingPage;
