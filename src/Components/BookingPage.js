import React, { useEffect, useReducer, useState } from 'react'
import ReservationForm from './ReservationForm';
import { fetchAPI, submitAPI } from '../availTimesAPI';


const BookingSummary = ({ bookingData }) => {
  return (
    <div style={{}} className='summary'>
      {bookingData.persons}
      {bookingData.date}
      {bookingData.firstName}
      {bookingData.lastName}
      {bookingData.email}
      {bookingData.occasion}
      {bookingData.specialRequest}
      {bookingData.time}
    </div>)
}

const BookingPage = ({ children }) => {




  const [availTimes, setAvailTimes] = useState([""]);
  const [bookingData, setBookingData] = useState({
    persons: "",
    date: "",
    time: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    specialRequest: ""
  });
  useEffect(() => {
    setAvailTimes([])
    setBookingData((prev) => {
      return {
        ...prev,
        time: ""
      }
    });
    fetchAPI(bookingData.date)
      .then(
        function (value) {
          setAvailTimes(() => value)
        }
      )
      .catch(function (time) {
        setAvailTimes(() => time)
      })
  }, [bookingData.date])


  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--md-sys-color-surface-container)",
        margin: "0 8px",
        borderRadius: "1rem"
      }}
      className='booking-page'>

      <BookingSummary bookingData={bookingData} />
      <ReservationForm
        bookingState={{ bookingData, setBookingData }} availTimes={availTimes} ></ReservationForm>

    </div>
  )
}

export default BookingPage;