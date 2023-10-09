import { ThemeContext } from "../context/ThemeContext"

import { TextField } from "@mui/material"
import { useFormik } from "formik"
import { useContext } from "react"
import * as yup from "yup"

export const MyTextInput = ({ label, formik, type }) => {

    const { theme } = useContext(ThemeContext)



    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    return (<TextField
        sx={{
            "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                    borderWidth: "2px"
                },
            },
            "& input": {
                colorScheme: theme === "light" ? "light" : "dark"
            }
        }}
        id={label}
        label={label}
        error={formik.touched[label] && Boolean(formik.errors[label])}
        helperText={formik.touched[label] && formik.errors[label]}
        type={type}
        name={camelCase(label)} {...formik.getFieldProps(label)}></TextField>)
}

const BookingForm = () => {




    const handleSubmit = (values) => {
        console.log(values)

    }
    const formik = useFormik({
        initialValues: {
            persons: "",
            date: "",
            time: "",
            firstName: "",
            lastName: "",
            email: "",
            specialRequest: ""
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
        })
    })

    return (
        <form onSubmit={formik.handleSubmit}>
        <addressContainer></addressContainer>
            <MyTextInput
            className="kk"
                label="Persons"
                type="number"
                formik={formik}
            ></MyTextInput>
            <MyTextInput
                label="Date"
                formik={formik}
                type="date"
            ></MyTextInput>
            <MyTextInput
                formik={formik}
                label="Time"
                type="select"
            ></MyTextInput>
            <MyTextInput
                formik={formik}
                label="First Name"
                type="text"
            ></MyTextInput>
            <MyTextInput
                label="Last Name"
                formik={formik}
                type="text"
            ></MyTextInput>
            <MyTextInput
                label="Email"
                formik={formik}
                type="email"
            ></MyTextInput>
            <MyTextInput
                label="Special Request"
                formik={formik}
                type="textarea"
            ></MyTextInput>

        </form>
    )
}

export default BookingForm