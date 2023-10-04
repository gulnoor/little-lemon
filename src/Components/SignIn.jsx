
import logo from "../assets/images/Asset 20@4x.png"

import styles from "./signin.module.css"
import Button from "./Button/Button";
import { addUserToDatabase, signInWithGoogle } from "../firebase/firebase_utils";

const SignIn = () => {

    const handleSignIn = async ()=>{
        const usercreds = await signInWithGoogle();
        addUserToDatabase(usercreds.user);

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