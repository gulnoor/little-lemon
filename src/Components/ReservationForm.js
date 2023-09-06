import React from 'react'
import Input from './Input';
import "./ReservationForm.css"
const ReservationForm = ({}) => {
  return (
    <div style={{
      display: "flex",
      flexWrap:"wrap",
      justifyContent: "center",
      alignItems: "center",
      // flexDirection: "column",
      background: "var(--md-sys-color-surface-container)",


      margin: "0 8px",
      // padding: "1rem",
      borderRadius: "1rem"
    }} className='booking-form'>

      {/* <div className='booking-Summary'>
        <h1>Reservation</h1>
      </div> */}

      <form style={{
        display: "flex", flexWrap: "wrap",
        // background: "var(--md-sys-color-surface-container)",
        maxWidth: "600px",
        justifyContent:"space-between",
        padding:"2rem",


      }}>
        <Input styleContainer={{}} type={"select"}>Persons</Input>
        <Input styleContainer={{}} type={"date"}>Date</Input>
        <Input styleContainer={{}} type={"time"}>Time</Input>
        <Input >First Name</Input>
        <Input >Last Name</Input>
        <Input type={"email"} >Email</Input>
        <Input type={"submit"}></Input>

      </form>
    </div>
  )
}

export default ReservationForm;