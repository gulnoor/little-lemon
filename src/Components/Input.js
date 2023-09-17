import { useEffect, useState } from "react"
import "./Input.css"

const Input = ({ value, gridArea, children, id, type, styleInput = {}, styleContainer = {}, bookingState, ...other }) => {

    const [isFocused, setIsFocused] = useState(false);

    const [inputStyle, setInputStyle] = useState({
        zIndex: "42",
        position: "relative",
        border: "none",
        borderRadius: "6px",
        padding: "4px",
        fontSize: "1.1rem",
        background: "transparent",
        color: type === "date" || type === "time" || type === "select" ? "transparent" : "var(--md-sys-color-on-surface)",
        outline: "none",
        width: "100%",
        ...styleInput
    })
    const [containerStyle, setContainerStyle] = useState({
        position: "relative",
        display: "flex",
        alignItems: "center",
        border: "2px solid var(--md-sys-color-outline)",
        borderRadius: "6px",
        height: "56px",
        padding: "8px",
        margin: "0 0 0.8rem 0",
        ...styleContainer
    })

    const [labelStyle, setLabelStyle] = useState({
        position: "absolute",
        padding: "1px 8px",
        background: "var(--md-sys-color-surface-container)",
        top: "50%",
        left: "0.5rem",
        transform: "translate(0,-50%)",
        transition: "0.2s",
        zIndex: "41",
        borderRadius: "3px",
        whiteSpace: "nowrap"

    })

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
                    top: "-1px",
                    margin: "0px 3px",
                    fontSize: "16px",
                    color: "var(--md-sys-color-primary)",
                    zIndex: "43"
                }
            })
            setInputStyle(inputStyle => {
                return {
                    ...inputStyle,
                    color: type === "date" || type === "time" || type === "select" ? "var(--md-sys-color-on-surface)" : inputStyle.color,
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
            });
            setInputStyle(inputStyle => {
                return {
                    ...inputStyle,
                    color: type === "date" || type === "time" || type === "select" ? "transparent" : inputStyle.color,
                }
            })

        }
        if (!isFocused && value) {
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
            });
    }, [isFocused])

    switch (type) {
        case "select":
            return (
                <div style={containerStyle} className={`input-container ${children}`}>
                    <label
                        htmlFor={id} style={labelStyle}>{children}</label>
                    <select style={inputStyle} name={id}
                        id={id}
                        onChange={(e) => {
                            bookingState.setBookingData((prev) => {
                                return {
                                    ...prev,
                                    [e.target.id]: e.target.value
                                }
                            })
                        }}
                        onBlur={handleBlur}
                        value={value}
                        onFocus={handleFocus}>
                        <option value="">Select {`${children}`}</option>
                        {other.choices.map((choice) => {
                            return <option key={choice} value={choice}>{choice}</option>
                        })}
                    </select>
                </div>
            )
        case "text-area":
            return (
                <div style={{ ...containerStyle, height: "auto" }} className={`input-container ${children}`}>
                    <label
                        htmlFor={id} style={labelStyle}>{children}</label>
                    <textarea style={inputStyle} id={id}
                        onChange={(e) => {
                            bookingState.setBookingData((prev) => {
                                return {
                                    ...prev,
                                    [e.target.id]: e.target.value
                                }
                            })
                        }}
                        onBlur={handleBlur}
                        value={value}
                        onFocus={handleFocus}
                        name={id}
                        cols="30"
                        rows="10">
                    </textarea>
                </div>
            )
        default:
            return (

                <div style={containerStyle} className={`input-container ${children}`}>
                    <label
                        htmlFor={id} style={labelStyle}>{children}</label>
                    <input style={inputStyle}
                        name={id}
                        onBlur={handleBlur}
                        value={value}
                        onFocus={handleFocus}
                        id={id}
                        type={type}
                        onChange={(e) => {
                            bookingState.setBookingData((prev) => {
                                return {
                                    ...prev,
                                    [e.target.id]: e.target.value
                                }
                            })
                        }}
                        {...other} />
                </div>
            )
    }

}
export default Input;