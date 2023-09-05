import { useEffect, useRef, useState } from "react"
import "./Input.css"
import '@material/web/button/filled-button.js';

import '@material/web/textfield/outlined-text-field'

const Input = ({ children, id, type, ...other }) => {

    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [containerStyle, setContainerStyle] = useState({
        position: "relative",
        display: "flex",
        width: "fit-content",
        border: "2px solid var(--md-sys-color-outline)",
        borderRadius: "6px",
        height:"56px"
    })

    const [labelStyle, setLabelStyle] = useState({
        position: "absolute",
        padding: "1px 8px",
        background: "var(--md-sys-color-surface)",
        top: "50%",
        left: "0.5rem",
        transform: "translate(0,-50%)",
        transition: "0.2s",
        zIndex: "41",
        borderRadius: "3px",
        whiteSpace: "nowrap"

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

        if (isFocused ) {
            setLabelStyle((labelStyle) => {
                return {
                    ...labelStyle,
                    top: "-1px",
                    margin: "0px 3px",
                    fontSize: "16px",
                    color: "var(--md-sys-color-primary)",
                    zIndex: "43"
                }
            })

        }
        else if (!value) {
           
                setLabelStyle((labelStyle) => {
                    return {
                        ...labelStyle,
                        top: "50%",
                        fontSize: "1.1rem",
                        margin: "0px 0px",
                        color: "var(--md-sys-color-on-surface)",
                        zIndex: "41"
                    }
                })
            
        }
        else if (!isFocused && value){
            setLabelStyle((labelStyle) => {
                return {
                    ...labelStyle,
                    color: "var(--md-sys-color-on-surface)",
                  
                }
            })

        }

    }, [isFocused, value])

    useEffect(() => {
        isFocused ? setContainerStyle((containerStyle) => {
            return {
                ...containerStyle,
                border: "3px solid var(--md-sys-color-primary)"
            }
        })
            : setContainerStyle((containerStyle) => {
                return {
                    ...containerStyle,
                    border: "2px solid var(--md-sys-color-outline)"
                }
            })
    }, [isFocused])

    switch (type) {
        case "submit":
            return (
                <md-filled-button >Next</md-filled-button>
            )
        default:
            return (

                <div style={containerStyle} className="input-container">
                    <label ref={labelRef}
                        htmlFor={id} style={labelStyle}>{children}</label>
                    <input style={{
                        zIndex: "42",
                        position: "relative",
                        border: "none",
                        borderRadius: "6px",
                        padding: "4px",
                        margin: "0.65rem",
                        fontSize: "1.1rem",
                        background: "transparent",
                        color: "var(--md-sys-color-on-surface)",
                        outline: "none"

                    }}
                        onBlur={handleBlur}
                        value={value}
                        onFocus={handleFocus}
                        ref={inputRef}
                        id={id}
                        type={type}
                        onChange={(e) => { setValue(e.target.value) }}
                        {...other} />
                </div>

            )
    }

}
export default Input;