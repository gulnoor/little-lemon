import { TextField, styled } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"

const BookingForm = () => {


    const handleSubmit = () => {

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
            <TextField
                id="persons"
                sx={{
                    margin: "1rem 0"
                }}
                label="Persons"
                error={formik.touched.persons && Boolean(formik.errors.persons)}
                helperText={formik.touched.persons && formik.errors.persons} type="number" name="persons" {...formik.getFieldProps("persons")}></TextField>
            <TextField
                id="date"
                sx={{
                    margin: "1rem 0",
                    color: "var(--md-sys-color-primary)"
                }}
                label="Date"
                variant="outlined"
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date} type="date" name="date" {...formik.getFieldProps("date")}></TextField>
            <TextField
                id="time"
                sx={{
                    margin: "1rem 0"
                }}
                label="Time"
                error={formik.touched.time && Boolean(formik.errors.time)}
                helperText={formik.touched.time && formik.errors.time} type="select" name="time" {...formik.getFieldProps("time")}></TextField>
            <TextField
                id="firstName"
                sx={{
                    margin: "1rem 0"
                }}
                label="First Name"
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName} type="text" name="firstName" {...formik.getFieldProps("firstName")}></TextField>
            <TextField
                id="lastName"
                sx={{
                    margin: "1rem 0"
                }}
                label="Last Name"
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName} type="text" name="lastName" {...formik.getFieldProps("lastName")}></TextField>
            <TextField
                id="email"
                sx={{
                    margin: "1rem 0"
                }}
                label="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} type="email" name="email" {...formik.getFieldProps("email")}></TextField>
            <TextField
                id="specialRequest"
                sx={{
                    "& .MuiOutlinedInput-root.Mui-focused > fieldset": {



                    }
                }}
                label="Special Request"
                error={formik.touched.specialRequest && Boolean(formik.errors.specialRequest)}
                helperText={formik.touched.specialRequest && formik.errors.specialRequest} type="textarea" name="specialRequest" {...formik.getFieldProps("specialRequest")}></TextField>

        </form>
    )
}

export default BookingForm