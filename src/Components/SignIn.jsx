import *  as Yup from "yup"
import logo from "../assets/images/Asset 20@4x.png"

import styles from "./signin.module.css"
import Button from "./Button/Button";
import { addUserToDatabase, signInWithGoogle } from "../firebase/firebase_utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorMessage, Field, Form, Formik } from "formik";

const SignIn = () => {

    const { setUser } = useContext(UserContext)

    const handleSignIn = async () => {
        const usercreds = await signInWithGoogle();
        addUserToDatabase(usercreds.user);
        setUser(() => {
            console.log("settingUser")
            return usercreds.user
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    return (

        <div className={styles.pagecontainer}>


            <img className={styles.logo} src={logo} alt="little lemon logo" />
            <div className={styles.formcontainer}>
            <Formik
            
                initialValues={{ email: "", password: "" }
                }
                validationSchema={Yup.object({
                    email: Yup.string().email("Email is invalid").required(),
                    password: Yup.string().min(8).max(16).required()
                })}
                onSubmit={handleSubmit}>
                <Form className={styles.formik}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <Field className="" name="email" type="text"></Field>
                    <ErrorMessage name="email"></ErrorMessage>

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="text"></Field>
                    <ErrorMessage name="password"></ErrorMessage>
                    <Button type="submit">Sign In</Button>
                </Form>
            </Formik>
                <Button onClick={handleSignIn} htmlType={"Button"} variant={"filled"}>Sign In with Google</Button>
            </div>
        </div>



    )
}

export default SignIn