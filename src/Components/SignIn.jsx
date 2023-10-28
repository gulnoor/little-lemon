import * as yup from "yup";
import logo from "../assets/images/Asset 20@4x.png";
import styles from "./signin.module.css";
import {
  addUserToDatabase,
  signInWithGoogle,
} from "../firebase/firebase_utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { MyTextInput } from "./BookingForm";

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const handleSignIn = async () => {
    const usercreds = await signInWithGoogle();
    addUserToDatabase(usercreds.user);
    setUser(() => {
      console.log("settingUser");
      return usercreds.user;
    });
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object({}),
  });

  return (
    <div className={styles.pagecontainer}>
      <img className={styles.logo} src={logo} alt="little lemon logo" />
      <div className={styles.formcontainer}>
        <form className={styles.formik} onSubmit={formik.handleSubmit}>
          <MyTextInput label={"Email"} type={"email"} formik={formik} />
          <MyTextInput label={"Password"} type={"password"} formik={formik} />
          <Button onClick={formik.handleSubmit} variant={"outlined"}>
            Sign In
          </Button>
        </form>
        <Button onClick={handleSignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default SignIn;
