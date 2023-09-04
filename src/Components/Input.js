import { useEffect, useRef, useState } from "react"
import "./Input.css"
const Input = ({ type = "text", id, name,label }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [labelStyle, setLabelStyle] = useState({
        position: "absolute",
        padding: "0 8px",
        background: "var(--md-sys-color-surface)",
        top: "50%",
        left: "16px",
        transform: "translate(0,-50%)",
        transition: "0.2s"
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
        isFocused ?
            setLabelStyle((labelStyle) => {
                return {
                    ...labelStyle,
                    top: "0px",
                    fontSize: "16px",
                    color: "var(--md-sys-color-primary)"
                }
            })
            : setLabelStyle((labelStyle) => {
                return {
                    ...labelStyle,
                    top: "50%",
                    fontSize: "1.2rem",
                    color: "grey"
                }
            });
    }, [isFocused])
    return (
        
            <div style={{ position: "relative" }} className="input-container">
                <label ref={labelRef} htmlFor={id} style={labelStyle}>{label}</label>
                <input onBlur={handleBlur} onFocus={handleFocus} ref={inputRef} name={name} id={id} type={type} />
            </div>
        
    )
}
export default Input;