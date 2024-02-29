import React, { useEffect, useRef, useState } from "react";
import "../Styles/App.css";
import Works from "../Components/Works";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css"; // Asegúrate de tener
import HomeHero from "../Components/HomeHero";
import Services from "../Components/Services";
import Process from "../Components/Process";
import Carousel from "../Components/Carousel";
import { ReactSVG } from "react-svg";
import LabbaL from "../Assets/labba/labba-l.svg";
import LabbaA from "../Assets/labba/labba-a.svg";
import LabbaB from "../Assets/labba/labba-b.svg";
import CursorDrop from "../Assets/labba/drop-line.svg";
import Claim from "../Components/Claim";
import { useLanguage } from "../Hooks/LanguageContext";
import LabbaBottom from "../Assets/labba/labba-bottom.svg";
import { Link } from "react-router-dom"; // Import Link from React Router
import Pruebas from "../Components/Pruebas";
import StackedCards from "../Components/StackedCard";
import PruebaPage from "./PruebaPage";

function Home() {
  const { userLanguage, translateText } = useLanguage();
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // console.log(viewportWidth);
  // console.log(viewportHeight);

  // Use useEffect to ensure the component is mounted before running JavaScript

  let shadowOn = "ellipse-shadow";
  let displayClaim = "";

  if (isMobile) {
    shadowOn = "no";
    displayClaim = "none";
  }

  useEffect(() => {
    const ellipseShadow = document.getElementById(shadowOn);

    if (!ellipseShadow) {
      // Check if the element exists to prevent errors
      return;
    }

    // Get half of the ellipse's width and height
    const ellipseWidth = 1167; // Replace with the actual width of your ellipse
    const ellipseHeight = 1167; // Replace with the actual height of your ellipse
    const halfWidth = ellipseWidth / 2;
    const halfHeight = ellipseHeight / 2;

    // Update the ellipse's position based on the cursor's coordinates
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX - halfWidth; // Center horizontally
      const y = e.clientY - halfHeight; // Center vertically

      // Set the position of the ellipse
      ellipseShadow.style.left = x + "px";
      ellipseShadow.style.top = y + "px";
    });

    const circleCursor = document.getElementById("circleCursor");

    if (!circleCursor) {
      // Check if the element exists to prevent errors
      return;
    }

    const cursorWidth = 20;
    const cursorHeight = 20;
    const mitiWidth = cursorWidth / 2;
    const mitiHeight = cursorHeight / 2;

    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    // Update the ellipse's position based on the cursor's coordinates
    document.addEventListener("mousemove", (e) => {
      targetX = e.clientX - mitiWidth; // Center horizontally
      targetY = e.clientY - mitiHeight; // Center vertically

      if (!isMoving) {
        isMoving = true;
        updateCursor();
      }
    });

    function isCursorOverLink(element) {
      return element.id === "pasando";
    }

    // Update the cursor style based on whether it's over a link or not
    function updateCursorStyle(isOverLink) {
      if (isOverLink) {
        // Modify the cursor style when over a link
        circleCursor.style.width = "100px";
        circleCursor.style.height = "100px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";

        circleCursor.style.setProperty("--before-content", "'+'"); // Use a custom property

        // circleCursor.style.transition = "0.1s";

        // Add other style modifications as needed
      } else {
        // Reset the cursor style when not over a link
        circleCursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        circleCursor.style.width = "35px";
        circleCursor.style.height = "35px";
        circleCursor.style.transition = "0.1s";
        circleCursor.style.setProperty("--before-content", "''"); // Use a custom property

        // Add other style modifications as needed
      }
    }

    function updateCursor() {
      // Calculate the current cursor position
      const currentX = parseFloat(circleCursor.style.left) || 0;
      const currentY = parseFloat(circleCursor.style.top) || 0;

      // Calculate the distance to move in this frame
      const deltaX = Math.round((targetX - currentX) * 0.1); // Round the position values
      const deltaY = Math.round((targetY - currentY) * 0.1); // Round the position values

      // Update the cursor position
      circleCursor.style.left = Math.round(currentX + deltaX) + "px";
      circleCursor.style.top = Math.round(currentY + deltaY) + "px";

      const isOverLink = isCursorOverLink(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );

      // Update the cursor style
      updateCursorStyle(isOverLink);
      // Check if the cursor has reached the target
      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        // Continue updating in the next animation frame
        requestAnimationFrame(updateCursor);
      } else {
        isMoving = false;
      }
    }

    // er3eerjek932857483wkedskn
    // dsadjds
  }, []); // Empty dependency array to ensure useEffect runs only once

  useEffect(() => {
    const section = document.querySelector(".parallax");

    if (!section) {
      return;
    }

    const initialScale = 0.8;
    const maxScale = 1.0;
    const scaleMultiplier = 0.001;

    // Set the initial scale explicitly
    section.style.transform = `scale(${initialScale})`;

    const updateSectionScale = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      let newScale = initialScale + scrollY * scaleMultiplier;
      newScale = Math.min(newScale, maxScale);

      section.style.transform = `scale(${newScale})`;
    };

    window.addEventListener("scroll", updateSectionScale);

    return () => {
      window.removeEventListener("scroll", updateSectionScale);
    };
  }, []);

  const prefooterRef = useRef(null);
  const footerRef = useRef(null);

  const [shouldShrink, setShouldShrink] = useState(
    localStorage.getItem("shouldShrink") === "true"
  );

  useEffect(() => {
    const prefooter = document.querySelector(".prefooter");
    const footer = document.querySelector(".footer");

    if (!prefooter || !footer) {
      return;
    }

    const triggerHeight =
      footer.getBoundingClientRect().top - window.innerHeight;
    const minOpacity = 1; // Opacidad mínima cuando el prefooter está achicado

    const updatePrefooterStyles = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= triggerHeight) {
        prefooter.classList.add("shrink");
        prefooter.style.opacity = minOpacity; // Aplicar opacidad mínima
      } else {
        prefooter.classList.remove("shrink");
        prefooter.style.opacity = 1; // Restaurar la opacidad original (1)
      }
    };

    window.addEventListener("scroll", updatePrefooterStyles);

    return () => {
      window.removeEventListener("scroll", updatePrefooterStyles);
    };
  }, []);

  function copyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  const email = "hello@labba.studio";
  const textToCopy = useRef(null);

  const handleCopyClick = () => {
    copyToClipboard(email);
    if (textToCopy.current) {
      textToCopy.current.textContent = "Copied!";
      setTimeout(() => {
        if (textToCopy.current) {
          textToCopy.current.textContent = "click to copy";
        }
      }, 1500); // Cambiar de vuelta a "click to copy" después de 1.5 segundos
    }
  };

  const [isMoving, setIsMoving] = useState(false);

  // let cursorPreFooter = "prefooter";

  // if (isMobile) {
  //   cursorPreFooter = "no-cursor";
  // }

  // const cursorScaleElements = Array.from(
  //   document.querySelectorAll(".cursor-scale")
  // );

  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   // const footerCursor = document.querySelectorAll(`.${cursorPreFooter}`);

  //   const handleMouseEnter = () => {
  //     // Change cursor behavior when entering the plusCursor
  //     // For example, you can change the cursor style or add animations here

  //     // Set the custom cursor image
  //     if (cursor) {
  //       cursor.style.backgroundImage = `url(${CursorDrop})`;
  //       cursor.style.backgroundSize = "contain";
  //       cursor.style.backgroundRepeat = "no-repeat";
  //       cursor.style.backgroundPosition = "center";
  //       cursor.style.width = "300px";
  //       cursor.style.height = "77px";
  //       cursor.style.border = "none";
  //       cursor.style.backgroundColor = "transparent";
  //     }
  //   };

  //   const handleMouseLeave = () => {
  //     // Restore default cursor behavior when leaving the plusCursor

  //     // Reset the cursor's background image to none
  //     if (cursor) {
  //       cursor.style.backgroundImage = "none";
  //       cursor.style.zIndex = 9999;
  //       cursor.style.position = "fixed";
  //       cursor.style.width = "34px";
  //       cursor.style.height = "34px";
  //       cursor.style.border = "1px solid #000000";
  //       cursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  //     }
  //   };

  //   footerCursor.forEach((paragraph) => {
  //     paragraph.addEventListener("mouseenter", handleMouseEnter);
  //     paragraph.addEventListener("mouseleave", handleMouseLeave);
  //   });

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     footerCursor.forEach((paragraph) => {
  //       paragraph.removeEventListener("mouseenter", handleMouseEnter);
  //       paragraph.removeEventListener("mouseleave", handleMouseLeave);
  //     });
  //   };
  // }, []);

  // const isCursorOverElement = (element) => {
  //   if (!element) return false;
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     mouseX >= rect.left &&
  //     mouseX <= rect.right &&
  //     mouseY >= rect.top &&
  //     mouseY <= rect.bottom
  //   );
  // };
  // let mouseX = 0;
  // let mouseY = 0;

  // const [scrollY, setScrollY] = useState(0);

  // Add an event listener to track scroll position
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY / 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div id={shadowOn}></div>
      <div id="circleCursor"></div>
      <div className="background-mobile"></div>
      <div className="grain"></div>
      <div className="homecont h-[64vh] sm:h-[74vh]">
        <HomeHero />
      </div>
      <div className="second-section parallax">
        <div className="work h-[470px] sm:h-[300px] mb-[-5px] sm:mb-[0px]"></div>
      </div>
      <Works />

      <div className="" style={{ overflowX: "hidden" }}>
        <Claim />
      </div>

      <div className="services-cont pt-[20px]">
        <Services />
      </div>
      <Process />
      <div
        className="sm:h-screen sm:pb-0 pb-24	"
        style={{ background: " #ECECEC" }}
      >
        <div className="  ">
          <h3 className="b1-desk ml-11 sm:ml-36 pt-24 sm:pt-72">
            We love our clients
          </h3>
        </div>
        <Carousel />
        {/* <PruebaPage /> */}
      </div>
      {/* <StackedCards /> */}
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div
          className={`prefooter ${shouldShrink ? "shrink" : ""}`}
          // ref={prefooterRef}
        >
          <Link to={"/contact"}>
            <div
              className={` cursor next-level ${
                isMoving ? "is-moving" : ""
              } flex flex-row h-[100%] items-center justify-center`}
            >
              <p className="b1-desk py-0 pb-[45px] sm:pb-[0px] 	pl-0 sm:pr-[100px] text-white	">
                {translateText(
                  "Llevamos tu idea a otro level",
                  " Let’s take your idea to the next level."
                )}
              </p>
              <ReactSVG src={CursorDrop} className="" />
            </div>
          </Link>
        </div>
        <div style={{ height: "200px" }}></div>
        <div className="footer" ref={footerRef}>
          <div className="flex flex-col sm:flex-row justify-between pb-[50px]">
            <div className="t-mail ml-[128px]" onClick={handleCopyClick}>
              <p className="sayhi mb-3">Say hi</p>
              <div className="flex flex-row items-center">
                <p className="contacts-home">{email}</p>
                <span
                  className="ml-5 "
                  style={{ fontSize: "12px", fontWeight: "400" }}
                  ref={textToCopy}
                >
                  click to copy
                </span>
              </div>
            </div>
            <div className="mr-[128px] flex flex-row">
              <div className=" mr-[80px]">
                <p className="sayhi mb-3">Argentina</p>
                <p className="contacts-home">+54 9 11-5163-2960</p>
              </div>
              <div>
                <p className="sayhi mb-3">Spain</p>
                <p className="contacts-home">+54 9 11-5163-2960</p>
              </div>
            </div>
          </div>
          <div className="border-t-gray  ">
            <p className="privacy-font">© 2024 LABBA STUDIO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
