import React, { useEffect, useState, useRef } from "react";
import Icon1 from "../Assets/icons/design-icon.svg";
import Icon2 from "../Assets/icons/code-icon.svg";
import Icon3 from "../Assets/icons/headset-icon.svg";
import { ReactSVG } from "react-svg";
function Services() {
  const [expDesign, setExpanded] = useState(false);

  const toggleDesign = () => {
    setExpanded(!expDesign);
  };

  const [expBuild, setExpBuild] = useState(false);

  const toggleBuild = () => {
    setExpBuild(!expBuild);
  };

  const [expTeach, setExpTeach] = useState(false);

  const toggleTeach = () => {
    setExpTeach(!expTeach);
  };

  // gsap.registerPlugin(ScrollTrigger);

  // const containerRef = useRef(null);

  return (
    <>
      <div className="flex sm:flex-row mx-11 flex-col mt-24 sm:mt-72 sm:ml-36 ">
        <div className="sm:w-1/2 md:w-[580px]  w-full ">
          <p className="l-desk">SERVICES</p>
          <h3 className="b1-desk">
            We unleash our creativity, embrace curiosity, connect ideas and push
            the limits of design to reach new horizons.
          </h3>
        </div>
        <div className="sm:w-1/2 w-full flex flex-col sm:pl-72 md:pl-24 xl:pl-72  ">
          <div
            className={`sm:w-1/2 w-full flex flex-col sm:pl-72 justify-center plusCursor services service-box ${
              expDesign ? "expDesign" : ""
            }`}
            onClick={toggleDesign}
          >
            <p
              className="sp1-desk mix-diff flex flex-col mt-[20px] mx-[24px]  plusCursor relative"
              id="pasando2"
            >
              <span className="small-numb mb-[15px]">01</span>DESIGN
              <span class="absolute right-[0px]">
                <ReactSVG src={Icon1} />
              </span>
            </p>
            {expDesign ? (
              <>
                <p className="small-numb ml-[24px] mr-[24px] mt-[16px]">
                  Creating visually stunning web layouts, apps and brands.
                </p>
              </>
            ) : null}
          </div>

          <div
            className={`sm:w-1/2 flex flex-col pl-72 justify-center plusCursorDos services service-box ${
              expBuild ? "expBuild" : ""
            }`}
            onClick={toggleBuild}
          >
            <p
              className="sp1-desk mix-diff flex flex-col mt-[20px] mx-[24px] plusCursorDos relative"
              id="pasando2"
            >
              <span className="small-numb mb-[15px]">02</span>CODE
              <span class="absolute right-[0px]">
                <ReactSVG src={Icon2} />
              </span>
            </p>
            {expBuild ? (
              <>
                <p className="small-numb ml-[24px] mr-[24px] mt-[16px]">
                  Developing reliable, maintainable, and scalable tech solutions
                  with clean code.
                </p>
              </>
            ) : null}
          </div>
          <div
            className={`sm:w-1/2 flex flex-col pl-72 justify-center plusCursorDos services service-box ${
              expTeach ? "expTeach" : ""
            }`}
            onClick={toggleTeach}
          >
            <p
              className="sp1-desk mix-diff flex flex-col mt-[20px] mx-[24px]  plusCursorDos relative"
              id="pasando2"
            >
              <span className="small-numb mb-[15px]">03</span>SUPPORT
              <span class="absolute right-[0px]">
                <ReactSVG src={Icon3} />
              </span>
            </p>
            {expTeach ? (
              <>
                <p className="small-numb ml-[24px] mr-[24px] mt-[16px]">
                  We’ll join your journey and solve your requirements for
                  maintainance, and design and code iterations.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
