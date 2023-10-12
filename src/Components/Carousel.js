import { useContext, useRef } from "react";
import "./Carousel.css";
import { MenuContext } from "../context/MenuContext";
import styled from "@emotion/styled";
import useMenu from "../hooks/useMenu";

export const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: var(--md-sys-color-on-surface);
  padding: 2rem 7%;
  @media screen and (min-width: 600px) {
    font-size:3.8rem;
  }
`;
const CarouselItem = ({ menuItem, handleClick }) => {
  const ref = useRef(null);

  return (
    <div onClick={handleClick} ref={ref} className="carousel-item">
      <img src={menuItem.image} alt={menuItem.name} />
      <h1>{menuItem.name}</h1>
      <p
        style={{
          width: "93%",
          // height:"60px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          // whiteSpace:"nowrap",
          // textAlign: "center",
        }}
      >
        {menuItem.description}
      </p>
    </div>
  );
};

const Carousel = () => {
  const containerRef = useRef(null);
  const menu = useMenu();
  const resizeItems = (e) => {
    const current = e.currentTarget;
    const ps1 = e.currentTarget.previousElementSibling
      ? e.currentTarget.previousElementSibling
      : null;
    const ps2 = ps1
      ? ps1.previousElementSibling
        ? ps1.previousElementSibling
        : null
      : null;
    const ns1 = e.currentTarget.nextElementSibling
      ? e.currentTarget.nextElementSibling
      : null;
    const ns2 = ns1
      ? ns1.nextElementSibling
        ? ns1.nextElementSibling
        : null
      : null;
    if (ps2 && ns2) {
      current.style.width = "50%";
      current.style.filter = "brightness(1)";
      // current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.filter = "brightness(0.8)";
      // ns1.style.marginRight = "8px";
      ns2.style.width = "20%";
      ns2.style.filter = "brightness(0.6)";
    } else if (ps1 && ns2) {
      current.style.width = "50%";
      // current.style.marginRight = "8px";
      current.style.filter = "brightness(1)";
      ns1.style.width = "30%";
      ns1.style.filter = "brightness(0.8)";
      // ns1.style.marginRight = "8px";
      ns2.style.width = "20%";
      ns2.style.filter = "brightness(0.6)";
    } else if (ps2 && ns1) {
      ps1.style.width = "20%";
      ps1.style.filter = "brightness(0.6)";
      // ps1.style.marginRight = "8px";
      current.style.width = "50%";
      current.style.filter = "brightness(1)";
      // current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.filter = "brightness(0.8)";
    } else if (ps2) {
      ps2.style.width = "20%";
      ps2.style.filter = "brightness(0.6)";
      // ps2.style.marginRight = "8px";
      ps1.style.width = "30%";
      ps1.style.filter = "brightness(0.8)";
      // ps1.style.marginRight = "8px";
      current.style.width = "50%";
      // current.style.marginRight = "8px";
      current.style.filter = "brightness(1)";
    } else {
      current.style.width = "50%";
      current.style.filter = "brightness(1)";
      // current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.filter = "brightness(0.8)";
      // ns1.style.marginRight = "8px";
      ns2.style.width = "20%";
      ns2.style.filter = "brightness(0.6)";
    }
  };

  const handleClick = (e) => {
    containerRef.current.scrollTo({
      behavior: "smooth",
      left: e.currentTarget.offsetLeft - 7,
    });
    resizeItems(e);
  };

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const handleScroll = (e) => {
  //     console.log(e.target.scrollLeft);
  //     containerRef.current.childNodes.forEach((node)=>{
  //       if(node.offsetLeft-containerRef.current.scrollLeft<150){
  //         handleClick({currentTarget:node})
  //       }
  //     })
  //   };
  //   container.addEventListener("scroll", handleScroll);

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <StyledHeading>Our Specials</StyledHeading>
      <div ref={containerRef} className="carousel-container">
        {menu.map((item) => (
          <CarouselItem
            key={item.name}
            handleClick={handleClick}
            menuItem={item}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
