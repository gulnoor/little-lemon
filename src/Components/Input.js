import { useContext, useEffect, useState } from "react";
import "./Input.css";
import { themeContext } from "../App";

const Input = ({
  // styleInput = {},
  // styleContainer = {},
  value,
  children,
  id,
  type,
  reservationData,
  schema,
  error,
  dispatch,
  ...other
}) => {
  const { theme } = useContext(themeContext);
  const [isFocused, setIsFocused] = useState(false);
  const validationScheme = schema.fields[id];
  const styleDiv = {
    display: "flex",
    flexDirection: "column",
  };

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
    width: "100%",
  });
  useEffect(() => {
    setInputStyle((prev) => {
      return { ...prev, colorScheme: theme };
    });
  }, [theme]);

  const [containerStyle, setContainerStyle] = useState({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: "2px solid var(--md-sys-color-outline)",
    borderRadius: "6px",
    // height: "56px",
    padding: "8px",
    margin: "0 0 1rem 0",
  });

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
    whiteSpace: "nowrap",
  });

  const isValid = (target) => {
    console.log("validating " + id);
    validationScheme
      .validate(value)
      .then(() => {
        dispatch({
          actionType:"updateError",
          field:target.id,
          value:""
        })

      })
      .catch((err) => {
        dispatch({
          actionType:"updateError",
          field:target.id,
          value:err.message
        })
      });
  };

  const changeHandler = (e) => {
  
    dispatch({
      actionType: "updateInput",
      value: e.target.value,
      field:e.target.id
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
      setLabelStyle((labelStyle) => {
        return {
          ...labelStyle,
          top: "-1px",
          margin: "0px 3px",
          fontSize: "16px",
          color: "var(--md-sys-color-primary)",
          zIndex: "43",
        };
      });
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
      setLabelStyle((labelStyle) => {
        return {
          ...labelStyle,
          top: "50%",
          fontSize: "1.1rem",
          margin: "0px 0px",
          color: "var(--md-sys-color-on-surface)",
          zIndex: "41",
        };
      });
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
    if (!isFocused && value) {
      setLabelStyle((labelStyle) => {
        return {
          ...labelStyle,
          color: "var(--md-sys-color-on-surface)",
        };
      });
    }
  }, [isFocused, value]);

  useEffect(() => {
    isFocused
      ? setContainerStyle((containerStyle) => {
          return {
            ...containerStyle,
            border: "3px solid var(--md-sys-color-primary)",
          };
        })
      : setContainerStyle((containerStyle) => {
          return {
            ...containerStyle,
            border: "2px solid var(--md-sys-color-outline)",
          };
        });
  }, [isFocused]);

  switch (type) {
    case "select":
      return (
        <div style={styleDiv} className={`big-container ${children}`}>
          <div style={containerStyle} className={`input-container ${children}`}>
            <label htmlFor={id} style={labelStyle}>
              {children}
            </label>
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
              {other.choices.map((choice) => {
                return (
                  <option key={choice} value={choice}>
                    {choice}
                  </option>
                );
              })}
            </select>
          </div>
          {error ? (
            <span
              style={{
                display: "flex",
              }}
              className="form-error"
            >
              {error}
            </span>
          ) : null}
        </div>
      );
    case "text-area":
      return (
        <div style={containerStyle} className={`input-container ${children}`}>
          <label htmlFor={id} style={labelStyle}>
            {children}
          </label>
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
        </div>
      );
    default:
      return (
        <div className={`big-container ${children}`} style={styleDiv}>
          <div style={containerStyle} className={`input-container ${children}`}>
            <label htmlFor={id} style={labelStyle}>
              {children}
            </label>
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
          </div>
          {error ? (
            <span
              style={{
                display: "flex",
              }}
              className="form-error"
            >
              {`* ${error}`}
            </span>
          ) : null}
        </div>
      );
  }
};
export default Input;
