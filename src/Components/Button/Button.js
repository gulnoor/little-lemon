import "./style.css";
const Button = ({ children, type }) => {
  const styleButton = {
    borderRadius: "100vh",
    minHeight: "48px",
    width: "fit-content",
    padding: "0px 2rem",
    marginTop:"1rem",
    fontSize:"1rem"
  };
  const filled = {
    ...styleButton,
    background: "var(--md-sys-color-primary)",
    color: "var(--md-sys-color-on-primary)",
    border: "none",
  };
  const outline = {
    ...styleButton,
    background: "transparent",
    color: "var(--md-sys-color-on-primary-container)",
    borderRadius: "100vh",
    border:"2px solid var(--md-sys-color-primary)"
  };

  return (
    <>
      <button style={type === "filled" ? filled : outline}>{children}</button>
    </>
  );
};
export default Button;
