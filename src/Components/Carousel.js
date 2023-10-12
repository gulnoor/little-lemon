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
    font-size: 3.8rem;
  }
`;

const StyledP = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  display: -webkit-box;
  -webkit-line-clamp: 5; 
  -webkit-box-orient: vertical;
  color: white;

  overflow: hidden;
  textoverflow: ellipsis;
  display: none;
`;
const StyledItem = styled.div`
  width: 20%;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  margin-right: 8px;
  flex: 0 0 auto;
  transition: all 0.3s;
  color: var(--md-sys-color-on-surface);

  & > img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: 32px;
    transition: all 0.3s;
  }
  &:hover {
    & > p {
      display: block;
      display: -webkit-box;
    }
    & > img {
      filter: brightness(0.2);
    }
  }
  &:nth-child(1) {
    width: 50%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`;
const CarouselItem = ({ menuItem, handleClick }) => {
  const ref = useRef(null);

  return (
    <StyledItem onClick={handleClick} ref={ref}>
      <img src={menuItem.image} alt={menuItem.name} />
      <h1
        className="title-large"
        style={{
          whiteSpace: "nowrap",
          overflow:"hidden",
          textOverflow: "ellipsis",
          textAlign: "center",
        }}
      >
        {menuItem.name}
      </h1>
      <StyledP className="" style={{}}>
        {menuItem.description}
      </StyledP>
    </StyledItem>
  );
};

const Carousel = () => {
  const containerRef = useRef(null);
  const menu = [
    {
      name: "Baklava",
      description:
        "Traditional Greek dessert with flaky phyllo dough filled with nuts and honey.",
      price: 12,
      category: "Dessert",
      image: require("../assets/images/menu/105a4e88dca44f4a81dbaf6ccb7b83bc.jpg"),
    },

    {
      name: "Lamb Chops",
      description:
        "Grilled lamb chops served with a mint yogurt sauce and roasted potatoes.",
      price: 24,
      category: "Entree",
      image: require("../assets/images/menu/Lamb-Chops-ONE-1.jpg"),
    },
    {
      name: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.",
      image: require("../assets/images/menu/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.webp"),
      price: "$7.99",
      category: "Appetizer",
    },
    {
      name: "Pasta Primavera",
      description:
        "Fresh pasta with seasonal vegetables and a creamy tomato sauce.",
      price: 26,
      category: "Entree",
      image: require("../assets/images/menu/pasta-primavera-1-768x1152.jpg"),
    },
  ];
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
      ns1.style.width = "30%";

      ns2.style.width = "20%";
    } else if (ps1 && ns2) {
      current.style.width = "50%";
      ns1.style.width = "30%";
      ns2.style.width = "20%";
    } else if (ps2 && ns1) {
      ps1.style.width = "20%";
      current.style.width = "50%";
      ns1.style.width = "30%";
    } else if (ps2) {
      ps2.style.width = "20%";
      ps1.style.width = "30%";
      current.style.width = "50%";
    } else {
      current.style.width = "50%";
      ns1.style.width = "30%";
      ns2.style.width = "20%";
    }
  };

  const handleClick = (e) => {
    containerRef.current.scrollTo({
      behavior: "smooth",
      left: e.currentTarget.offsetLeft - 7,
    });
    resizeItems(e);
  };

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
