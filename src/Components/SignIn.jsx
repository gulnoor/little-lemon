
import logo from "../assets/images/Asset 20@4x.png"

import styles from "./signin.module.css"
import Button from "./Button/Button";
import { addUserToDatabase, signInWithGoogle } from "../firebase/firebase_utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SignIn = () => {

    const {setUser} = useContext(UserContext)

    const handleSignIn = async ()=>{
        const usercreds = await signInWithGoogle();
        addUserToDatabase(usercreds.user);
        setUser(()=>{
            console.log("settingUser")
            return usercreds.user.displayName
        })

    }



    return (

        <div className={styles.pagecontainer}>
            <img className={styles.logo} src={logo} alt="little lemon logo" />
            <div className={styles.formcontainer}>
                <Button onClick={handleSignIn} htmlType={"Button"} variant={"filled"}>Sign In with Google</Button>
            </div>
        </div>



    )
}

export default SignIn