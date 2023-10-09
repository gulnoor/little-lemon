import styled from "@emotion/styled";
import { ThemeContext } from "../context/ThemeContext";

import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";

function camelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

const MyForm = styled.form`
display: flex;
flex-wrap: wrap;
margin: auto;
padding:  0 15%;
justify-content: space-between;
width: 100%;
}`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
  width: ${(props) =>
    props.name === "date" || props.name === "time" ? "49%" : "100%"};

  & .MuiOutlinedInput-root > fieldset {
    border-width: 2px;
  }
  & Input {
    color: var(--md-sys-color-on-surface);
    color-scheme: ${(props) => (props.theme === "light" ? "light" : "dark")};
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px var(--md-sys-color-secondary-container)
        inset;
      -webkit-text-fill-color: var(--md-sys-color-on-secondary-container);
    }
  }
`;

export const MyTextInput = ({ label, formik, type }) => {
  const { theme } = useContext(ThemeContext);
  const name = camelCase(label);

  return (
    <StyledTextField
      id={camelCase(label)}
      label={label}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      type={type}
      name={name}
      theme={theme}
      {...formik.getFieldProps(name)}
    ></StyledTextField>
  );
};

const BookingForm = () => {
  const handleSubmit = (values) => {};
  const formik = useFormik({
    initialValues: {
      persons: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      specialRequest: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
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
    }),
  });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyTextInput label="Persons" type="number" formik={formik}></MyTextInput>
      <MyTextInput label="Date" formik={formik} type="date"></MyTextInput>
      <MyTextInput formik={formik} label="Time" type="select"></MyTextInput>
      <MyTextInput formik={formik} label="First Name" type="text"></MyTextInput>
      <MyTextInput label="Last Name" formik={formik} type="text"></MyTextInput>
      <MyTextInput label="Email" formik={formik} type="email"></MyTextInput>
      <MyTextInput
        label="Special Request"
        formik={formik}
        type="textarea"
      ></MyTextInput>
      {/* <BookingSummary bookingData={formik.values}/> */}
      <Button type="submit">Submit</Button>
    </MyForm>
  );
};

export default BookingForm;
