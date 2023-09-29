import serialize from "form-serialize";
import { submitAPI } from "../availTimesAPI";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Material3Input from "./Material3Input";
import { BookingSummary } from "./BookingPage";
import { motion } from "framer-motion";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = serialize(e.target, { hash: "true" });
    console.log(data);
    validationSchema
      .validate(data)
      .then(() => {
        submitAPI(data)
          .then(function () {
            console.log("successful");
            navigate("/successful");
          })
          .catch((e) => alert(e));
      })
      .catch((e) => alert(e));
  };
  const containerAnimation = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    },
  };

  return (
    <form
      style={{
        display: "flex",
        flexWrap: "wrap",
        // maxWidth: "600px",
        // width: "100%",
        // justifyContent: "space-between",
        padding: "8px",
      }}
      onSubmit={handleSubmit}
    >
      <motion.div
        className="inputs-div"
        style={{
          display: "inline-flex",
          // width:"100%",
          // flexDirection:"column",
          flexWrap: "wrap",
          background: "var(--md-sys-color-surface-container)",
          padding: "2rem",
          borderRadius: "16px",
          justifyContent: "space-between",

          // margin:"8px 8px 0 0"
        }}
        variants={containerAnimation}
        initial="initial"
        animate="final"
        transition={{
          staggerChildren: "0.05",
          duration: 0,
        }}
      >
        {Object.keys(reservationData).map((fieldName) => {
          return (
            <Material3Input
              key={fieldName}
              schema={validationSchema}
              reservationData={reservationData}
              id={fieldName}
              value={reservationData[fieldName].state}
              type={reservationData[fieldName].htmlType}
              choices={reservationData[fieldName].options}
              error={reservationData[fieldName].error}
              dispatch={dispatch}
            >
              {reservationData[fieldName].label}
            </Material3Input>
          );
        })}
      </motion.div>
      {/* <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"persons"}
        value={reservationData.persons.state}
        type={"number"}
        error={reservationData.persons.error}
        dispatch={dispatch}
      >
        Persons
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"date"}
        value={reservationData.date.state}
        type={"date"}
        error={reservationData.date.error}
        dispatch={dispatch}
      >
        Date
      </Material3Input>
      <Material3Input
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
      </Material3Input>
      <Material3Input
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
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"firstName"}
        value={reservationData.firstName.state}
        error={reservationData.firstName.error}
        dispatch={dispatch}
      >
        First Name
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"lastName"}
        value={reservationData.lastName.state}
        error={reservationData.lastName.error}
        dispatch={dispatch}
      >
        Last Name
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"email"}
        value={reservationData.email.state}
        type={"email"}
        error={reservationData.email.error}
        dispatch={dispatch}
      >
        Email
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"specialRequest"}
        value={reservationData.specialRequest.state}
        type={"text-area"}
        error={reservationData.specialRequest.error}
        dispatch={dispatch}
      >
        Special Request
      </Material3Input>
      <Material3Input
        schema={validationSchema}
        reservationData={reservationData}
        id={"test"}
        value={reservationData.test.state}
        type={""}
        error={reservationData.test.error}
        dispatch={dispatch}
      >
        Test
      </Material3Input> */}
      <div
        className="summary-box"
        style={{
          display: "inline-flex",
          // width:"100%",
          flexDirection: "column",
          // margin:"8px 8px 0 0"
        }}
      >
        <BookingSummary bookingData={reservationData}></BookingSummary>
        {/* <Button type={"submit"}>Make your Reservation</Button> */}
      </div>
    </form>
  );
};

export default ReservationForm;
