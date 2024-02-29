import React, { useEffect, useState, useRef } from "react";
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
  const claimSectionRef = useRef(null); // Ref to store the DOM element reference

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      // You can add additional logic here based on the viewport size
      // if (window.innerWidth < 1415) {
      //   console.log("- a 1415");
      // }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  let xAnimation = "-37%";
  let vwClaim = "300vw";
  if (viewportWidth < 1415) {
    xAnimation = "-40%";
  }

  if (viewportWidth < 1380) {
    xAnimation = "-45%";
  }

  if (viewportWidth < 1280) {
    xAnimation = "-50%";
  }

  if (viewportWidth < 1190) {
    xAnimation = "-60%";
  }
  if (viewportWidth < 1090) {
    xAnimation = "-65%";
    // vwClaim = "380vw";
    vwClaim = "340vw";
  }

  if (viewportWidth < 1000) {
    xAnimation = "-70%";
  }

  if (viewportWidth < 900) {
    xAnimation = "-75%";
    vwClaim = "400vw";
  }
  if (viewportWidth < 900) {
    xAnimation = "-70%";
    vwClaim = "500vw";
  }
  if (viewportWidth < 700) {
    xAnimation = "-75%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 640) {
    xAnimation = "-35%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 580) {
    xAnimation = "-40%";
    vwClaim = "500vw";
  }
  if (viewportWidth < 530) {
    xAnimation = "-45%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 490) {
    xAnimation = "-52%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 440) {
    xAnimation = "-57%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 420) {
    xAnimation = "-62%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 400) {
    xAnimation = "-65%";
    vwClaim = "500vw";
  }

  if (viewportWidth < 380) {
    xAnimation = "-70%";
    vwClaim = "500vw";
  }

  // if (viewportWidth < 400) {
  //   xAnimation = "-67%";
  //   vwClaim = "500vw";
  // }
  // if (viewportWidth > 1415) {
  //   console.log("+ a 1415");
  // }
  // let xAnimation = "-63%";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const claimAnimation = gsap.to(".claim-section", {
      x: xAnimation,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".claim-section",
        start: "top top+=1",

        end: "+=1800",
        pin: true,
        pinSpacing: true,
        scrub: true,
        markers: true,
      },
    });

    return () => {
      // Limpia las animaciones cuando el componente se desmonta
      claimAnimation.kill();
      // firstProAnimation.kill();
      // secondProAnimation.kill();
      // thirdProAnimation.kill();
      // fourthProAnimation.kill();
    };
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const animacion = gsap.to(claimSectionRef.current, {
  //     x: xAnimation,
  //     duration: 0.3,
  //     scrollTrigger: {
  //       trigger: claimSectionRef.current,
  //       start: "top top",
  //       end: "+=1800",
  //       pin: true,
  //       pinSpacing: true,
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   return () => {
  //     animacion.kill();
  //   };
  // }, [xAnimation]); //
  console.log(vwClaim);
  return (
    <>
      <div>
        <div
          // ref={claimSectionRef}
          className="h-[101vh] claim-section  bg-[#121212] flex items-center"
          style={{ marginBottom: "235vh", width: vwClaim }}
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
              At <span style={{ color: "white" }}> Labba,</span> we craft
              digital products that balance users and business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Claim;
