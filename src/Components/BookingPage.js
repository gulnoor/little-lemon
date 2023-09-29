import React, { useEffect, useReducer} from "react";
import ReservationForm from "./ReservationForm";
import { fetchAPI } from "../availTimesAPI";
import "./bookingPage.css";
import Button from "./Button/Button";
import heroImg from "../assets/images/corporate-memphis/Mesa de trabajo 1.png"
export const BookingSummary = ({ bookingData }) => {
  const date = new Date(bookingData.date.state);

  return (
    <section className="summary-container display-small">
      <h3 className="headline-large">Your Booking:</h3>
      <h6 className="headline-medium">Summary</h6>

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
    </section>
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
        return { ...prev, time: { ...prev["time"], state: "", options: [""] } };
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
    date: { label: "Date", state: "", error: "", htmlType: "date" },
    time: {
      label: "Time",
      state: "",
      error: "",
      options: [""],
      htmlType: "select",
    },
    occasion: {
      label: "Occasion",
      state: "",
      error: "",
      options: ["Birthday", "Aniversary"],
      htmlType: "select",
    },
    firstName: { label: "First Name", state: "", error: "", htmlType: "text" },
    lastName: { label: "Last Name", state: "", error: "", htmlType: "text" },
    email: { label: "Email", state: "", error: "", htmlType: "email" },
    specialRequest: {
      label: "Special Request",
      state: "",
      error: "",
      htmlType: "textarea",
    },
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
    <>
    <div className="reservation-hero">
      <h1 style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"8vw",
        fontWeight:"700",
        // margin:"0 auto"

        
      
      }}>Reservation</h1>
      <img src={heroImg} alt="" style={{
        maxWidth: "35%",
        borderRadius: "120px",
        margin:"8px"
      }}/>
    </div>
      <ReservationForm reservationData={reservationData} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
