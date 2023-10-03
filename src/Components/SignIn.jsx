// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import logo from "../assets/images/Asset 20@4x.png"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import styles from "./signin.module.css"
import Button from "./Button/Button";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXJ7CB9H22r7OdH-fLp5FB97lmxhuhuCk",
    authDomain: "little-lemmon.firebaseapp.com",
    projectId: "little-lemmon",
    storageBucket: "little-lemmon.appspot.com",
    messagingSenderId: "114356758336",
    appId: "1:114356758336:web:6510c29377520e25fabca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("wtf");
const SignIn = () => {

    return (

        <div className={styles.pagecontainer}>
            <img className={styles.logo} src={logo} alt="little lemon logo" />
            <div className={styles.formcontainer}>
                <Button htmlType={"Button"} variant={"filled"}>Sign In with Google</Button>
            </div>
        </div>



    )
}

export default SignIn