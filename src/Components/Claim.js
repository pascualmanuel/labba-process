import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Claim() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const animacion = gsap.to(".claim-section", {
  //     y: 0,
  //     duration: 0.3,
  //     scrollTrigger: {
  //       trigger: ".claim-section",
  //       start: "top top",
  //       end: "+=1800",
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //   return () => {
  //     animacion.kill();
  //   };
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animacion = gsap.to(".claim-section", {
      x: "-37%",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".claim-section",
        start: "top top",
        end: "+=1800",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
        onEnter: () => {
          document.body.classList.add("pinned-scroll");
        },
        onLeaveBack: () => {
          document.body.classList.remove("pinned-scroll");
        },
      },
    });

    return () => {
      animacion.kill();
    };
  }, []);

  return (
    <>
      <div
        className="h-[101vh] claim-section w-[300vw] bg-[#121212] flex items-center"
        style={{ marginBottom: "235vh" }}
      >
        <div
          className="claim-inside"
          style={{ overflowX: "visible", whiteSpace: "nowrap" }}
        >
          <p
            className="h2-desk claim"
            style={{
              transform: "translateX(10%)", // Initially hides the phrase
            }}
          >
            At <span style={{ color: "white" }}> Labba,</span> we craft digital
            products that balance users and business needs.
          </p>
        </div>
      </div>
    </>
  );
}
export default Claim;
