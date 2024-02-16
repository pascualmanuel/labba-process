import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";

function Pruebas() {
  gsap.registerPlugin(ScrollTrigger);

  const animacion = gsap.to(".elemento-animado", {
    y: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: ".elemento-animado",
      start: "top",
      end: "+=1800",
      // pin: false,
      // pinSpacing: false,
      // scrub: true,
      // markers: true,
    },
  });
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const sectionRef = useRef(null);
  // useEffect(() => {
  //   const section = sectionRef.current;

  //   const updateScrollPosition = () => {
  //     const totalScrollableWidth = section.scrollWidth - section.clientWidth;
  //     const newScrollLeft = section.scrollLeft;
  //     const newScrollPosition = (newScrollLeft / totalScrollableWidth) * 100;
  //     console.log("Horizontal Scroll Position:", newScrollPosition);
  //     setScrollPosition(newScrollPosition);
  //     console.log(newScrollPosition);
  //   };

  //   section.addEventListener("scroll", updateScrollPosition);

  //   // Cleanup the event listener on unmount
  //   return () => {
  //     section.removeEventListener("scroll", updateScrollPosition);
  //   };
  // }, []);

  //  <div
  //      className="progress-line"
  //      style={{
  //        width: `${scrollPosition}%`,
  //      }}
  //    ></div>

  return (
    <>
      <div className="elemento-animado"></div>
      {/* <div className="">
        <div id="container" ref={sectionRef}>
          <div id="container2">
            <div className="box-prueba one">
              <div>
                <p
                  className="h2-desk claim"
                  style={{
                    whiteSpace: "nowrap",
                    transform: "translateX(10%)", // Initially hides the phrase
                  }}
                >
                  At <span style={{ color: "white" }}> Labba,</span> we craft
                  digital products that balance users and business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Pruebas;
