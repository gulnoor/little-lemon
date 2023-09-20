import Input from "./Input";
import Button from "./Button/Button";
import serialize from "form-serialize";
import { submitAPI } from "../availTimesAPI";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
const ReservationForm = ({ reservationData, dispatch }) => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    date: yup.date(),
    persons: yup.number().min(1, "min 1 person").max(10).required(),
    time: yup.string().required(),
    occasion: yup.string().optional(),
    firstName: yup
      .string()
      .required("No name no party")
      .min(1, "Name must be at least one character long"),
    lastName: yup.string().optional(),
    email: yup.string().email(),
    specialRequest: yup.string().optional(),
  });
  // const [error, setError] = useState({
  //   persons: "",
  //   date: "",
  //   time: "",
  //   occasion: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   specialRequest: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = serialize(e.target, { hash: "true" });
    console.log(data);
    validationSchema.isValid(data).then(() => {
      submitAPI(data)
        .then(function () {
          console.log("successful");
          navigate("/successful");
        })
        .catch((e) => alert(e));
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "600px",
        justifyContent: "space-between",
        padding: "2rem",
      }}
      onSubmit={handleSubmit}
    >
      {/* {Object.keys(reservationData).map((key) => {
        return (
          <Input
            schema={validationSchema}
            reservationData={reservationData}
            id={key}
            value={reservationData[key].state}
            type={"number"}
            error={reservationData[key].error}
            dispatch={dispatch}
            
          >{key}</Input>
        );
      })} */}
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"persons"}
        value={reservationData.persons.state}
        type={"number"}
        error={reservationData.persons.error}
        dispatch={dispatch}
      >
        Persons
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"date"}
        value={reservationData.date.state}
        type={"date"}
        error={reservationData.date.error}
        dispatch={dispatch}

      >
        Date
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"time"}
        value={reservationData.time.state}
        type={"select"}
        choices={reservationData.time.availableTimes}
        error={reservationData.time.error}
        dispatch={dispatch}
      >
        Time
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"occasion"}
        value={reservationData.occasion.state}
        type={"select"}
        error={reservationData.occasion.error}
        choices={reservationData.occasion.options}
        dispatch={dispatch}
      >
        Occasion
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"firstName"}
        value={reservationData.firstName.state}
        error={reservationData.firstName.error}
        dispatch={dispatch}
      >
        First Name
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"lastName"}
        value={reservationData.lastName.state}
        error={reservationData.lastName.error}
        dispatch={dispatch}
      >
        Last Name
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"email"}
        value={reservationData.email.state}
        type={"email"}
        error={reservationData.email.error}
        dispatch={dispatch}
      >
        Email
      </Input>
      <Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"specialRequest"}
        value={reservationData.specialRequest.state}
        type={"text-area"}
        error={reservationData.specialRequest.error}
        dispatch={dispatch}
      >
        Special Request
      </Input>
      <Button type={"submit"}>Make your Reservation</Button>
    </form>
  );
};

export default ReservationForm;
