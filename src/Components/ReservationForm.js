import Input from "./Input";
import Button from "./Button/Button";
import serialize from "form-serialize";
import { submitAPI } from "../availTimesAPI";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useState } from "react";
const ReservationForm = ({ bookingState, availTimes }) => {
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
  const [error, setError] = useState({
    persons: "",
    date: "",
    time: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    specialRequest: "",
  });



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
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"persons"}
        value={bookingState.bookingData.persons}
        type={"number"}
        err={{ error, setError }}
      >
        Persons
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"date"}
        value={bookingState.bookingData.date}
        type={"date"}
        err={{ error, setError }}
      >
        Date
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"time"}
        value={bookingState.bookingData.time}
        type={"select"}
        choices={availTimes}
        err={{ error, setError }}
      >
        Time
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"occasion"}
        value={bookingState.bookingData.occasion}
        type={"select"}
        err={{ error, setError }}
        choices={["Birthday", "Aniversary"]}
      >
        Occasion
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"firstName"}
        value={bookingState.bookingData.firstName}
        err={{ error, setError }}
      >
        First Name
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"lastName"}
        value={bookingState.bookingData.lastName}
        err={{ error, setError }}
      >
        Last Name
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"email"}
        value={bookingState.bookingData.email}
        type={"email"}
        err={{ error, setError }}
      >
        Email
      </Input>
      <Input
        schema={validationSchema}
        bookingState={bookingState}
        id={"specialRequest"}
        value={bookingState.bookingData.specialRequest}
        type={"text-area"}
        err={{ error, setError }}
      >
        Special Request
      </Input>
      <Button type={"submit"}>Make your Reservation</Button>
    </form>
  );
};

export default ReservationForm;
