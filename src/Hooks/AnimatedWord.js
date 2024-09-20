import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../Styles/TextAnimated.css"; // Asegúrate de importar tus estilos CSS

const TextAnimated = ({ hola = "", text2 = "" }) => {
  const wordsRef = useRef(null);

  useEffect(() => {
    const items = wordsRef.current;

    if (items) {
      const singleChart1Elements = items.querySelectorAll(".single-chart1");
      const singleChart2Elements = items.querySelectorAll(".single-chart2");

      const timeline = gsap.timeline({ paused: true });

      timeline
        .to(singleChart1Elements, {
          yPercent: -100,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.in",
        })
        .fromTo(
          singleChart2Elements,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "power1.in",
          },
          "<0.001"
        );

      const handleMouseEnter = () => timeline.play();
      const handleMouseLeave = () => timeline.reverse();

      items.addEventListener("mouseenter", handleMouseEnter);
      items.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        items.removeEventListener("mouseenter", handleMouseEnter);
        items.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Función para dividir el texto en letras individuales
  const splitText = (text, className) => {
    if (!text) return []; // Retorna un array vacío si text es undefined o null
    return text.split("").map((char, index) => (
      <div key={index} className={className}>
        {char}
      </div>
    ));
  };

  return (
    <main>
      <div className="container-fluid">
        <div className="words" ref={wordsRef}>
          <div className="first-word">
            <div className="single-word uno uppercase weight font-medium text-[18px] lg:text-[24px]">
              {splitText(hola, "single-chart1")}
            </div>
          </div>
          <div className="second-word">
            <div className="single-word dos uppercase weight font-medium text-[18px] lg:text-[24px]">
              {splitText(text2, "single-chart2")}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TextAnimated;
