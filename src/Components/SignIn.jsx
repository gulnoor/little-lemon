
import logo from "../assets/images/Asset 20@4x.png"

import styles from "./signin.module.css"
import Button from "./Button/Button";

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