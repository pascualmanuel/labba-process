import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./YourStyles.css"; // Asegúrate de importar tus estilos CSS

const AnimatedWords = () => {
  const wordsRef = useRef(null);

  useEffect(() => {
    const words = wordsRef.current.querySelectorAll(".words-li");

    words.forEach((item) => {
      const charts = gsap.timeline({ paused: true });

      // Animación para la primera palabra
      charts
        .to(item.querySelectorAll(".single-chart1"), {
          yPercent: -100,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.in",
        })
        // Animación para la segunda palabra que aparece desde abajo
        .fromTo(
          item.querySelectorAll(".single-chart2"),
          { yPercent: 100, visibility: "hidden" }, // Estado inicial
          {
            yPercent: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "power1.in",
            visibility: "visible",
          },
          "<0.001"
        );

      item.addEventListener("mouseenter", () => {
        charts.play();
      });

      item.addEventListener("mouseleave", () => {
        // Reversa la animación de la primera palabra
        gsap.to(item.querySelectorAll(".single-chart1"), {
          yPercent: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.out",
        });

        // Reversa la animación de la segunda palabra
        gsap.to(item.querySelectorAll(".single-chart2"), {
          yPercent: 100,
          duration: 0.4,
          stagger: 0.04,
          ease: "power1.out",
          onComplete: () => {
            // Restablece la visibilidad al final de la animación
            gsap.set(item.querySelectorAll(".single-chart2"), {
              visibility: "hidden",
            });
          },
        });
      });
    });

    return () => {
      words.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <main ref={wordsRef}>
      <div className="container-fluid">
        <div className="nav-list">
          <ul>
            <li className="words-li text4">
              <h3>
                <div className="words">
                  <div className="first-word">
                    <div className="single-word">
                      <div className="uno">
                        <div className="single-chart1">D</div>
                        <div className="single-chart1">E</div>
                        <div className="single-chart1">V</div>
                        <div className="single-chart1">E</div>
                        <div className="single-chart1">L</div>
                        <div className="single-chart1">O</div>
                        <div className="single-chart1">P</div>
                        <div className="single-chart1">M</div>
                        <div className="single-chart1">E</div>
                        <div className="single-chart1">N</div>
                        <div className="single-chart1">T</div>
                      </div>
                    </div>
                  </div>
                  <div className="second-word">
                    <div className="single-word">
                      <div className="dos">
                        <div className="single-chart2">D</div>
                        <div className="single-chart2">E</div>
                        <div className="single-chart2">V</div>
                        <div className="single-chart2">E</div>
                        <div className="single-chart2">L</div>
                        <div className="single-chart2">O</div>
                        <div className="single-chart2">P</div>
                        <div className="single-chart2">M</div>
                        <div className="single-chart2">E</div>
                        <div className="single-chart2">N</div>
                        <div className="single-chart2">T</div>
                      </div>
                    </div>
                  </div>
                </div>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AnimatedWords;
