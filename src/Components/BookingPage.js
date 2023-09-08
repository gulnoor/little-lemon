import React, { Children, useState } from 'react'
import ReservationForm from './ReservationForm';


const BookingSummary = ({ bookingData }) => {
  return (
  <div className='summary'>
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
        bookingState={{ bookingData, setBookingData }} ></ReservationForm>

    </div>
  )
}

export default BookingPage;