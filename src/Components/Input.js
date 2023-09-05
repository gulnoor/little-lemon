import { useEffect, useRef, useState } from "react"
import "./Input.css"

const inputContainer = ({ children }) => {
    return (
        <div style={{ position: "relative" }} className="input-container">
            {children}
        </div>
    )
}
const Input = ({ children, id, type, ...other }) => {

    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [labelStyle, setLabelStyle] = useState({
        position: "absolute",
        padding: "0 8px",
        background: "var(--md-sys-color-surface)",
        top: "50%",
        left: "0.5rem",
        transform: "translate(0,-50%)",
        transition: "0.2s",
        zIndex: "41"

    })
    const inputRef = useRef(null);
    const labelRef = useRef(null);
    const handleBlur = () => {
        setIsFocused(false);
    }
    const handleFocus = () => {
        setIsFocused(true);

    }
    useEffect(() => {

        if (isFocused || value) {
            setLabelStyle((labelStyle) => {
                return {
                    ...labelStyle,
                    top: "0px",
                    fontSize: "16px",
                    color: "var(--md-sys-color-primary)",
                    zIndex: "43"

                }
            })

        }
        else {
            if (!value) {
                setLabelStyle((labelStyle) => {
                    return {
                        ...labelStyle,
                        top: "50%",
                        fontSize: "1.2rem",
                        color: "grey",
                        zIndex: "41"
                    }
                })

            }
        }

    }, [isFocused, value])

    switch (type) {
        case "submit":
            return (
                <div style={{ position: "relative" }} className="input-container">

                    <inputContainer>

                        <input style={{
                            zIndex: "42",
                            position: "relative"
                        }}

                            id={id}
                            type={type}
                            // onChange={(e) => { setValue(e.target.value) }}
                            {...other} />
                    </inputContainer>
                </div>
            )

        default:
            return (

                <div style={{ position: "relative" }} className="input-container">
                    {/* <label ref={labelRef}
                        htmlFor={id} style={labelStyle}>{children}</label>
                    <input style={{
                        zIndex: "42",
                        position: "relative"
                    }}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        ref={inputRef}
                        id={id}
                        type={type}
                        {...other} /> */}
                    <inputContainer>
                        <label ref={labelRef}
                            htmlFor={id} style={labelStyle}>{children}</label>
                        <input style={{
                            zIndex: "42",
                            position: "relative"
                        }}
                            onBlur={handleBlur}
                            value={value}
                            onFocus={handleFocus}
                            ref={inputRef}
                            id={id}
                            type={type}
                            onChange={(e) => { setValue(e.target.value) }}
                            {...other} />
                    </inputContainer>
                </div>

            )
    }

}
export default Input;