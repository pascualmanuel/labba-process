import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Claim() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.set(".massiveImage", {
  //     backgroundImage: `url(https://source.unsplash.com/random)`,
  //   });

  //   gsap.to(".massiveImage", {
  //     xPercent: -100,
  //     x: () => window.innerWidth,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".massiveImage",
  //       start: "top top", // Cambiado de 'top bottom' a 'top top'
  //       end: () => window.innerWidth * 3,
  //       scrub: true,
  //       pin: true,
  //       invalidateOnRefresh: true,
  //       anticipatePin: 1,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    // Select the .massiveImage element

    // Ensure the element exists before proceeding

    // Set up a timeline
    const animacion = gsap.to(".massiveImage2", {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".massiveImage2",
        start: "top top",
        end: "+=1800",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });
    // Add animations to the timeline if needed
    // For example, you can use timeline.to() or timeline.from() to animate properties

    // Pin for 5 seconds
  }, []); //
  return (
    <>
      <div className="massiveImage2 h-[50vh] w-[200vw] bg-white">`</div>;
    </>
  );
}
export default Claim;
