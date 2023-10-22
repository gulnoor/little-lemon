import styled from "@emotion/styled";
import logo from "../assets/images/Asset 16@4x.png";
import hamburger from "../assets/images/🦆 icon _hamburger menu.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import person from "../assets/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
import { StyledIcon } from "./NavigationRail";

const StyledBar = styled.div`
  display: flex;
  min-height: 48px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background: var(--md-sys-color-surface-container);
  z-index: 1200;
  & > .navbar-top-logo {
    height: 48px;
    margin: 12 0px;
  }
  & > .navbar-top-hamburger {
    padding: 24px;
    color: var(--md-sys-color-on-surface);
    filter: ${(props) =>
      props.theme === "dark"
        ? "invert(80%) sepia(9%) saturate(214%) hue-rotate(0deg) brightness(103%) contrast(81%)"
        : "invert(9%) sepia(19%) saturate(404%) hue-rotate(5deg) brightness(97%) contrast(97%)"};
  }
  @media screen and (min-width: 841px) {
    display: none;
  }
`;

const NavBarTop = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <StyledBar theme={theme}>
      <img
        className="navbar-top-hamburger"
        alt="menu-icon"
        src={hamburger}
      ></img>
      <img className="navbar-top-logo" alt="logo" src={logo}></img>
      <StyledIcon theme={theme} src={person} style={{
        padding:"16px",
        height:"100%"
      }}></StyledIcon>
    </StyledBar>
  );
};

export default NavBarTop;
