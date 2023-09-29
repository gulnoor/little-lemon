import { useEffect, useState } from "react";
import "./Input.css";
import BaseInput from "./BaseInput";
import { motion} from "framer-motion";

const InputError = ({ children }) => {
  return (
    <span style={{ display: "flex" }} className="form-error">
      {`* ${children}`}
    </span>
  );
};

const Material3Input = ({
  children,
  label,
  error,
  id,
  value,
  validationSchema,
  reservationData,
  dispatch,
  ...other
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // const control = useAnimation()

  const [boxStyle, setBoxStyle] = useState({
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

  useEffect(() => {
    if (isFocused || value) {
      setLabelStyle((labelStyle) => {
        return {
          ...labelStyle,
          top: "-4px",
          margin: "0px 3px",
          fontSize: "16px",
          color: "var(--md-sys-color-primary)",
          zIndex: "43",
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
      ? setBoxStyle((containerStyle) => {
          return {
            ...containerStyle,
            border: "3px solid var(--md-sys-color-primary)",
          };
        })
      : setBoxStyle((containerStyle) => {
          return {
            ...containerStyle,
            border: "2px solid var(--md-sys-color-outline)",
          };
        });
  }, [isFocused]);

  const inputAnimation = {
    initial: {
      y:1000
    },
    final:{
      y:0
    }
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        transition:"all 0.3s"
      }}
      className={`big-container ${children}`}
      variants={inputAnimation}
      transition={{
        duration:0
      }}

    >
      <div style={boxStyle} className={`input-container ${children}`}>
        <label htmlFor={id} style={labelStyle}>
          {children}
        </label>
        <BaseInput
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          schema={validationSchema}
          reservationData={reservationData}
          id={id}
          value={value}
          error={error}
          dispatch={dispatch}
          {...other}
        ></BaseInput>
      </div>
      {error ? <InputError>{error}</InputError> : null}
    </motion.div>
  );
};

export default Material3Input;
