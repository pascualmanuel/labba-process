import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";

function Works() {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  let scrubDesk = 2.5;

  let positions = {
    firstPro: -100,
    secondPro: -680,
    thirdPro: -800,
    fourthPro: -980,
  };

  if (isMobile) {
    scrubDesk = true;
    positions = {
      firstPro: -100,
      secondPro: -200,
      thirdPro: -400,
      fourthPro: -600,
    };
  }

  console.log(positions.firstPro);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animacion = gsap.to(".elemento-animado", {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".elemento-animado",
        start: "top top",
        end: "+=1200",
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      },
    });

    // const firstProAnimation = gsap.to(".first-pro", {
    //   y: -600,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".project-container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 16,
    //   },
    // });

    // const secondProAnimation = gsap.to(".second-pro", {
    //   y: 170,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".project-container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 10,
    //   },
    // });

    // const thirdProAnimation = gsap.to(".third-pro", {
    //   y: -280,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".project-container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 8,
    //   },
    // });

    // const fourthProAnimation = gsap.to(".fourth-pro", {
    //   y: -280,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".project-container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 8,
    //   },
    // });

    return () => {
      // Limpia las animaciones cuando el componente se desmonta
      animacion.kill();
      // firstProAnimation.kill();
      // secondProAnimation.kill();
      // thirdProAnimation.kill();
      // fourthProAnimation.kill();
    };
  }, []);

  useEffect(() => {
    // Set up GSAP animations
    gsap.to(".first-pro", {
      y: positions.firstPro, // Adjust the distance of the movement for the first project
      scrollTrigger: {
        trigger: ".first-pro",
        start: "top bottom",
        end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".second-pro", {
      y: positions.secondPro, // Adjust the distance of the movement for the second project
      scrollTrigger: {
        // ease: "3s",
        trigger: ".second-pro",
        start: "top bottom",
        end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".third-pro", {
      y: positions.thirdPro, // Adjust the distance of the movement for the third project
      scrollTrigger: {
        trigger: ".third-pro",
        start: "top bottom",
        // end: "bottom top",
        scrub: scrubDesk,
      },
    });

    gsap.to(".fourth-pro", {
      y: positions.fourthPro, // Adjust the distance of the movement for the fourth project
      scrollTrigger: {
        trigger: ".fourth-pro",
        start: "top bottom",
        // end: "bottom top",
        scrub: scrubDesk,
      },
    });
  }, []);

  return (
    <>
      <div className="w-[100vw] overflow-hidden">
        <div className="scroll-container ">
          <div className="elemento-animado">
            <div
              className="inside-cont"
              style={{ width: "100vw", height: "110vh" }}
            ></div>
          </div>
          <div className="scroll-content">
            <div className="div-animado">
              <div className="project-container">
                <a href="https://mannoapp.com/" target="_blank">
                  <div className="project first-pro mb-[220px] " id="pasando">
                    <div
                      className=" project-info  w-[250px] sm:w-[325px] bg-[#FFFFFF33] px-[20px] pt-[20px] 
                      rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]"
                    >
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Borja{" "}
                            <span className="bullet-work text-[#159bcd]">
                              •
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Development</p>
                          <p className="tags p-14 mr-[20px]">Design</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Redesigning the website to improve the home appliance
                          shopping experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a>
                  <div className="project second-pro" id="pasando">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33] px-[20px] pt-[20px] rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Manno{" "}
                            <span className="bullet-work text-[#DD415F]">
                              •
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Development</p>
                          <p className="tags p-14 mr-[20px]">Design</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Redesigning the website to improve the home appliance
                          shopping experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="div-animado" style={{ marginTop: "40vh" }}>
              <div className="project-container">
                <div className="project third-pro" id="pasando">
                  <a href="https://mannoapp.com">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33] px-[20px] pt-[20px] rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Borja
                            <span className="bullet-work text-[#DF362F]">
                              •
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Development</p>
                          <p className="tags p-14 mr-[20px]">Design</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Redesigning the website to improve the home appliance
                          shopping experience.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <a>
                  <div className="project fourth-pro" id="pasando">
                    <div className=" project-info w-[250px] sm:w-[325px] bg-[#FFFFFF33] px-[20px] pt-[20px] rounded-[12px] absolute top-[30px] left-[30px] blur-bg h-[120px]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p
                            className="l-desk text-[#ECECEC]"
                            style={{ fontWeight: 500 }}
                          >
                            Borja{" "}
                            <span className="bullet-work text-[#159bcd]">
                              •
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row">
                          <p className="tags p-14 mr-[6px]">Development</p>
                          <p className="tags p-14 mr-[20px]">Design</p>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="b4-desk text-[#ECECEC]">
                          Redesigning the website to improve the home appliance
                          shopping experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-[80vh]"></div> */}
      </div>
    </>
  );
}

export default Works;
