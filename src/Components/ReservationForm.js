import React from 'react'
import Input from './Input';
import Button from './Button/Button';
import serialize from 'form-serialize';
import { submitAPI } from '../availTimesAPI';

const ReservationForm = ({bookingState,availTimes}) => {


  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = serialize(e.target,{hash:"true"});
    console.log(data);
    submitAPI(data).then((value)=>value?console.log("successful"):null).catch((e)=>console.log(e))
  }
  return (
    <form
      style={{
        display: "flex", flexWrap: "wrap",
        maxWidth: "600px",
        justifyContent: "space-between",
        padding: "2rem",
      }}
      onSubmit={handleSubmit}>
      <Input bookingState={bookingState} id={"persons"} value = {bookingState.bookingData.persons} min={1} max={10} type={"number"}>Persons</Input>
      <Input bookingState={bookingState} id={"date"} value = {bookingState.bookingData.date} type={"date"}>Date</Input>
      <Input bookingState={bookingState} id={"time"} value = {bookingState.bookingData.time} type={"select"} choices={availTimes}>Time</Input>
      <Input bookingState={bookingState} id={"occasion"} value = {bookingState.bookingData.occasion} type={"select"} choices={["Birthday", "Aniversary"]}>Occasion</Input>
      <Input bookingState={bookingState} id={"firstName"} value = {bookingState.bookingData.firstName} >First Name</Input>
      <Input bookingState={bookingState} id={"lastName"} value = {bookingState.bookingData.lastName} >Last Name</Input>
      <Input bookingState={bookingState} id={"email"} value = {bookingState.bookingData.email} type={"email"} >Email</Input>
      <Input bookingState={bookingState} id={"specialRequest"} value = {bookingState.bookingData.specialRequest} type={"text-area"}>Special Request</Input>
      <Button type={"filled"} >Make your Reservation</Button>
    </form>
  )
}

export default ReservationForm;