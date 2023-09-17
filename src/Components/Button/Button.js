import "./style.css";
const Button = ({ children, id, type, style = {}, ...other }) => {
  const styleButton = {
    borderRadius: "100vh",
    minHeight: "48px",
    width: "fit-content",
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
  const outline = {
    ...styleButton,
    background: "transparent",
    color: "var(--md-sys-color-on-primary-container)",
    borderRadius: "100vh",
    border: "2px solid var(--md-sys-color-primary)",
    ...style
  };

  return (
    <>
      <button className={id}
        style={type === "filled" ? filled : outline}
        {...other}
      >{children}</button>
    </>
  );
};
export default Button;
