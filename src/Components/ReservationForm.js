import React from 'react'
import Input from './Input';
import "./ReservationForm.css"
import Button from './Button/Button';
const ReservationForm = () => {
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
        <Input  min={1} max={10} type={"number"}>Persons</Input>
        <Input  type={"date"}>Date</Input>
        <Input  type={"time"}>Time</Input>
        <Input type={"select"} choices={["Birthday","Aniversary"]}>Occasion</Input>
        <Input >First Name</Input>
        <Input >Last Name</Input>
        <Input type={"email"} >Email</Input>
        <Input type={"password"} >Password</Input>
        <Input type={"text-area"}>Special Request</Input>
        <Button type={"filled"} >Make your Reservation</Button>

      </form>
    </div>
  )
}

export default ReservationForm;