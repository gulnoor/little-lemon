import Button from "./Button/Button";
import "./TopNav.css";

const TopNav = ({ names }) => {
  const buttonStyle = {
    border: "none",
    padding: "1rem 3.5rem",
    fontSize: "1.5rem",
    minHeight: window.screen.width > 600 ? "70px" : "52px",
    flex: "1",
    whiteSpace: "nowrap",
  };
  return (
    <div className="TopNav">
      {names.map((name) => {
        return <Button key={name} style={buttonStyle}>{name}</Button>;
      })}
    </div>
  );
};
export default TopNav;
