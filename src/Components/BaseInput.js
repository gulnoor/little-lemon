import { useContext, useEffect, useState } from "react";
import "./Input.css";
import { ThemeContext } from "../context/ThemeContext";



const BaseInput = ({
  // styleInput = {},
  // styleContainer = {},
  value,
  children,
  id,
  schema,
  error,
  dispatch,
  reservationData,
  type,
  isFocused,
  setIsFocused,
  ...other
}) => {
  const { theme } = useContext(ThemeContext);
  const validationScheme = schema.fields[id];


  const [inputStyle, setInputStyle] = useState({
    zIndex: "42",
    position: "relative",
    border: "none",
    borderRadius: "6px",
    padding: "4px",
    fontSize: "1.1rem",
    background: "transparent",
    color:
      type === "date" || type === "time" || type === "select"
        ? "transparent"
        : "var(--md-sys-color-on-surface)",
    outline: "none",
    width: "100%"
  });
  
  useEffect(() => {
    setInputStyle((prev) => {
      return { ...prev, colorScheme: theme };
    });
  }, [theme]);



  const isValid = (target) => {
    console.log("validating " + id);
    validationScheme
      .validate(value)
      .then(() => {
        dispatch({
          actionType: "updateError",
          field: target.id,
          value: "",
        });
      })
      .catch((err) => {
        dispatch({
          actionType: "updateError",
          field: target.id,
          value: err.message,
        });
      });
  };

  const changeHandler = (e) => {
    dispatch({
      actionType: "updateInput",
      value: e.target.value,
      field: e.target.id,
    });
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    isValid(e.target);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (isFocused || value) {
      setInputStyle((inputStyle) => {
        return {
          ...inputStyle,
          color:
            type === "date" || type === "time" || type === "select"
              ? "var(--md-sys-color-on-surface)"
              : inputStyle.color,
        };
      });
    } else if (!value) {
      setInputStyle((inputStyle) => {
        return {
          ...inputStyle,
          color:
            type === "date" || type === "time" || type === "select"
              ? "transparent"
              : inputStyle.color,
        };
      });
    }
  }, [isFocused, value]);


  switch (type) {
    case "select":
      return (
          <select
            style={inputStyle}
            name={id}
            id={id}
            onChange={changeHandler}
            onBlur={handleBlur}
            value={value}
            onFocus={handleFocus}
          >
            <option value="">Select {`${children}`}</option>
            {other.choices?other.choices.map((choice) => {
              return (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              );
            }):null}
          </select>

      );
    case "textarea":
      return (
          <textarea
            style={inputStyle}
            id={id}
            onChange={changeHandler}
            onBlur={handleBlur}
            value={value}
            onFocus={handleFocus}
            name={id}
            cols="30"
            rows="10"
          ></textarea>
      );
    default:
      return (
          <input
            style={inputStyle}
            name={id}
            onBlur={handleBlur}
            value={value}
            onFocus={handleFocus}
            id={id}
            type={type}
            onChange={changeHandler}
            {...other}
          />
      );
  }
};
export default BaseInput;
