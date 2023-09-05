
import React from 'react'
import Input from './Input';
const ReservationForm = () => {
  return (
    <form>
      <Input type={"select"}>Persons</Input> <br />
      <Input type={"date"}></Input><br />
      <Input type={"time"}>Time</Input><br />
      <Input  >First Name</Input><br />
      <Input >Last Name</Input><br />
      <Input type={"email"} >Email</Input><br />
      <Input type={"submit"}></Input>

    </form>
  )
}

export default ReservationForm;