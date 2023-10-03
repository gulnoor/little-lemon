import { motion } from "framer-motion";
import "./style.css";
const Button = ({ children, id,variant, htmlType, style = {}, ...other }) => {
  const styleButton = {
    borderRadius: "100vh",
    minHeight: "48px",
    // width: "fit-content",
    padding: "0px 2rem",
    // marginTop:"1rem",
    fontSize: "1rem",
    // textOverflow: "ellipsis"


  };
  const filled = {
    ...styleButton,
    background: "var(--md-sys-color-primary)",
    color: "var(--md-sys-color-on-primary)",
    border: "none",
    ...style
  };
  const outlined = {
    ...styleButton,
    background: "transparent",
    color: "var(--md-sys-color-on-primary-container)",
    borderRadius: "100vh",
    border: "2px solid var(--md-sys-color-primary)",
    ...style
  };

  return (
    <>
      <motion.button className={id}
        style={variant === "filled" ? filled : outlined}
        type={htmlType}
        {...other}

        whileTap={{
          scale:"0.9"

        }}
        whileHover={{
          borderRadius:"8px"

        }}
        transition={{
          
          duration:0.3,
          type:"spring"
        }}
      >{children}</motion.button>
    </>
  );
};
export default Button;
