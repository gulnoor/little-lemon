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
const CarouselItem = ({ menuItem, handleClick }) => {
  const ref = useRef(null);

  return (
    <div onClick={handleClick} ref={ref} className="carousel-item">
      <img src={menuItem.image} alt={menuItem.name} />
      <h1>{menuItem.name}</h1>
      <p
        style={{
          width: "93%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {menuItem.description}
      </p>
    </div>
  );
};

const Carousel = () => {
  const containerRef = useRef(null);

  // function step(timeStamp) {
  //   if (start === undefined) {
  //     start = timeStamp;
  //   }
  //   const elapsed = timeStamp - start;

  //   if (previousTimeStamp !== timeStamp) {
  //     // Math.min() is used here to make sure the element stops at exactly 200px
  //     const count = Math.min(0.1 * elapsed, 200);
  //     element.style.transform = `translateX(${count}px)`;
  //     if (count === 200) done = true;
  //   }

  //   if (elapsed < 2000) {
  //     // Stop the animation after 2 seconds
  //     previousTimeStamp = timeStamp;
  //     if (!done) {
  //       window.requestAnimationFrame(step);
  //     }
  //   }
  // }

  const menu = useMenu();

  const handleClick = (e) => {
    // done = false;
    let start, previousTimeStamp;
    let done = false;
    const elementOffset = e.currentTarget.offsetLeft - 7;
    const scrollStartPosition = containerRef.current.scrollLeft;
    const distanceToCover = elementOffset - scrollStartPosition;
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
    const resizeItems = (e) => {
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

    const scrollStep = (timeStamp) => {
      if (start === undefined) {
        start = timeStamp;
      }
      const elapsed = timeStamp - start;

      if (previousTimeStamp !== timeStamp) {
        // Math.min() is used here to make sure the element stops at exactly 200px
        const count = Math.min(elapsed * 1.6, Math.abs(distanceToCover));
        if (distanceToCover > 0) {
          containerRef.current.scrollTo(scrollStartPosition + count, 0);
        } else if (distanceToCover < 0) {
          containerRef.current.scrollTo(scrollStartPosition - count, 0);
        }

        if (count === Math.abs(distanceToCover)) {
          done = true;
        }
      }

      if (elapsed < 10000) {
        // Stop the animation after 2 seconds
        previousTimeStamp = timeStamp;
        if (!done) {
          window.requestAnimationFrame(scrollStep);
        }
      }
    };
    resizeItems(e);
    window.requestAnimationFrame(scrollStep);

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
