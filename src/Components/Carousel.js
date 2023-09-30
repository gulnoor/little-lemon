import { useRef } from "react";
import useMenu from "../hooks/useMenu";
import "./Carousel.css";

const CarouselItem = ({ menuItem, style, handleClick }) => {
  return (
    <div onClick={handleClick} style={style}>
      <img src={menuItem.image} alt="" />
    </div>
  );
};

const Carousel = () => {
  const menu = useMenu();

  const p1Style = {
    width: " 50%",
    borderRadius: " 32px",
    overflow: " hidden",
    marginRight: " 8px",
    transition: " all 0.3s",
  };
  const p2Style = {
    width: " 30%",
    borderRadius: " 32px",
    overflow: " hidden",
    marginRight: " 8px",
    transition: " all 0.3s",
    filter: " brightness(0.8)",
  };
  const p3Style = {
    width: " 20%",
    borderRadius: " 32px",
    overflow: " hidden",
    marginRight: " 0px",
    transition: " all 0.3s",
    filter: " brightness(0.7)",
  };
  const hiddenStyle = {
    width: " 0%",
    borderRadius: " 32px",
    overflow: " hidden",
    marginRight: " 0px",
    transition: " all 0.3s",
  };

  const handleClick = (e) => {
    const current = e.currentTarget
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

    if (ps2&&ns2) {
      ps2.style.width = "0";
      ps2.style.marginRight = "0px";
      ps1.style.width = "0";
      ps1.style.marginRight = "0px";
      current.style.width = "50%";
      current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.marginRight = "8px";

      ns2.style.width = "20%";
      ns2.style.marginRight = "0px";

    }
    else if (ps1&&ns2) {
      ps1.style.width = "0";
      ps1.style.marginRight = "0px";
      current.style.width = "50%";
      current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.marginRight = "8px";
      ns2.style.width = "20%";
      ns2.style.marginRight = "0px";



    }
    else if(ps2&&ns1){
      ps2.style.width = "0";
      ps1.style.width = "0";
      ps1.style.width = "20%";
      ps1.style.marginRight = "8px";
      current.style.width = "50%";
      current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.marginRight = "0px";




    }   
    else if(ps2){
      ps2.style.width = "20%";
      ps2.style.marginRight = "8px";
      ps1.style.width = "30%";
      ps1.style.marginRight = "8px";
      current.style.width = "50%";
      current.style.marginRight = "0px";

    }
    else {  
      current.style.width = "50%";
      current.style.marginRight = "8px";
      ns1.style.width = "30%";
      ns1.style.marginRight = "8px";
      ns2.style.width = "20%";
      ns2.style.marginRight = "0px";

    }


  
  }
  return (
    <>
      <h1
        className="headline-large"
        style={{
          fontSize: "3.5rem",
          color: "var(--md-sys-color-on-surface)",
          padding: "2rem",
        }}
      >
        Our Specials
      </h1>
      <div className="carousel-container">
        {menu.map((item, index) => {
          if (index === 0) {
            return (
              <CarouselItem
                handleClick={handleClick}
                style={p1Style}
                menuItem={item}
                key={item.name}
              />
            );
          } else if (index === 1) {
            return (
              <CarouselItem
                handleClick={handleClick}
                style={p2Style}
                menuItem={item}
                key={item.name}
              />
            );
          } else if (index === 2) {
            return (
              <CarouselItem
                handleClick={handleClick}
                style={p3Style}
                menuItem={item}
                key={item.name}
              />
            );
          } else {
            return (
              <CarouselItem
                style={hiddenStyle}
                menuItem={item}
                key={item.name}
                handleClick={handleClick}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Carousel;
