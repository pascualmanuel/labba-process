import React, { useState, useEffect } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
import MagneticButton from "./MagenticButton";
const HomeHero = () => {
  const svgPlus = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_b_2501_3)">
  <path d="M19 10L3.57628e-07 10" stroke="#212121"/>
  </g>
  <g filter="url(#filter1_b_2501_3)">
  <path d="M9.5 19.5L9.5 0.5" stroke="#212121"/>
  </g>
  <defs>
  <filter id="filter0_b_2501_3" x="-4" y="5.5" width="27" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  <filter id="filter1_b_2501_3" x="5" y="-3.5" width="9" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2501_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2501_3" result="shape"/>
  </filter>
  </defs>
  </svg>  
`;
  const [isSticky, setIsSticky] = useState(true);
  const [showDelayedElement, setShowDelayedElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600;
      const scrollY = window.scrollY || window.pageYOffset;
      setIsSticky(scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDelayedElement(true);
    }, 3400);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={` mt-36 ${isSticky ? "fixed" : "hidden"} `}>
      {/* {showDelayedElement && ( */}

      <span className=" flex font-normal leading-4 text-sm mb-6 ml-5 sm:ml-0">
        <Player
          autoplay
          loop
          src={dotAnimation}
          style={{
            height: "16px",
            width: "16px",
            marginRight: "7px",
            marginLeft: "5px",
          }}
        />
        Available for new projects
      </span>
      <div className="mx-auto">
        <div className="reveal-text lg:w-[900px] xl:w-[1024px] px-6 sm:px-0">
          <h2
            className=" text-[45px] sm:text-[60px] ms:text-[65px] lm:text-[80px] 
           lg:text-[80px] xl:text-[90px] font-medium leading-[109%] sm:leading-[99%] tracking-tight"
          >
            Empowering startups through design & technology.
          </h2>
          <h3 className="mt-10 font-light b2-desk mr-[50px]">
            Full stack digital studio focused on generate impactful online
            presence.
          </h3>
          <div className="flex mt-10">
            <MagneticButton
              text={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Calendar}
                    alt="Calendar icon"
                    style={{ marginRight: "8px" }}
                  />
                  Schedule a call
                </span>
              }
              link="/contact"
            />
          </div>
        </div>
      </div>

      {/* )} */}
    </div>
  );
};

export default HomeHero;
