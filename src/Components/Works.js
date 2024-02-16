import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";

function Works() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animacion = gsap.to(".elemento-animado", {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".elemento-animado",
        start: "top",
        end: "+=1800",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });

    const firstProAnimation = gsap.to(".first-pro", {
      y: -600,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 16,
      },
    });

    const secondProAnimation = gsap.to(".second-pro", {
      y: 170,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 10,
      },
    });

    const thirdProAnimation = gsap.to(".third-pro", {
      y: -280,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 8,
      },
    });

    const fourthProAnimation = gsap.to(".fourth-pro", {
      y: -280,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 8,
      },
    });

    return () => {
      // Limpia las animaciones cuando el componente se desmonta
      animacion.kill();
      firstProAnimation.kill();
      secondProAnimation.kill();
      thirdProAnimation.kill();
      fourthProAnimation.kill();
    };
  }, []);

  return (
    <>
      <div className="scroll-container">
        <div className="elemento-animado">
          <div
            className="inside-cont"
            style={{ width: "100vw", height: "110vh" }}
          ></div>
        </div>
        <div className="scroll-content">
          <div className="div-animado">
            <div className="project-container">
              <a>
                <div className="project first-pro " id="pasando"></div>
              </a>

              <a>
                <div className="project second-pro" id="pasando">
                  a
                </div>
              </a>
            </div>
          </div>
          <div className="div-animado" style={{ marginTop: "40vh" }}>
            <div className="project-container">
              <a>
                <div className="project third-pro" id="pasando"></div>
              </a>
              <a>
                <div className="project fourth-pro" id="pasando"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] bg-red"></div>
    </>
  );
}

export default Works;
