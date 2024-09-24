import React, { useState, useEffect } from "react"; // Asegúrate de importar el CSS
import { ReactSVG } from "react-svg";
import { Player } from "@lottiefiles/react-lottie-player";
import dotAnimation from "../Assets/icons/dot-animation.json"; // Make
import Calendar from "../Assets/icons/calendar.svg";
const HomeHero = () => {
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
    <div className={`z-[-1] mt-36 ${isSticky ? "fixed" : "hidden"} `}>
      {/* {showDelayedElement && ( */}
      <span className=" flex font-normal leading-4 text-sm mb-6 ">
        <Player
          autoplay
          loop
          src={dotAnimation}
          style={{
            height: "16px",
            width: "16px",
            marginRight: "7px",
            marginLeft: "5px",
          }} // Adjust the size as needed
        />
        Available for new projects
      </span>
      <div className="mx-auto">
        <div className="reveal-text lg:w-[1024px] px-6 sm:px-0">
          <h2
            className=" text-[45px] sm:text-[60px] ms:text-[70px] lm:text-[80px] 
           lg:text-[90px] font-mediums leading-[109%] sm:leading-[99%]  tracking-tight"
          >
            Empowering startups through design & technology.
          </h2>
          <h3 className="mt-10 font-light b2-desk mr-[50px]">
            Full stack digital studio focused on generate impactful online
            presence.
          </h3>
          <div className="mt-6 rounded-xl w-[173px] h-[46px] border border-[#5A5A5A] flex flex-row items-center justify-center">
            <span className="flex items-center font-medium text-base">
              <ReactSVG src={Calendar} className=" mr-2" /> Schedule a call
            </span>
          </div>
        </div>
      </div>

      {/* )} */}
    </div>
  );
};

export default HomeHero;
