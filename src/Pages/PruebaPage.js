import React, { useRef } from "react";
import TextAnimated from "../Hooks/AnimatedWord";

function PruebaPage() {
  const textAnimatedRefs = useRef([]);

  const handleMouseEnter = (index) => {
    console.log(`Mouse entered the area ${index + 1}`);
    // Llama a la animación del texto animado correspondiente
    if (textAnimatedRefs.current[index]) {
      textAnimatedRefs.current[index].playAnimation();
    }
  };

  const handleMouseLeave = (index) => {
    console.log(`Mouse left the area ${index + 1}`);
    // Reversa la animación del texto animado correspondiente
    if (textAnimatedRefs.current[index]) {
      textAnimatedRefs.current[index].reverseAnimation();
    }
  };

  return (
    <>
      <div className="flex justify-center pt-[100px]">
        <div className="w-[50vw]">
          {/* Múltiples textos animados */}
          <TextAnimated
            ref={(el) => (textAnimatedRefs.current[0] = el)}
            firstWord="DEVELOPMENT"
            secondWord="DEVELOPMENT"
          />
          <br />
          <TextAnimated
            ref={(el) => (textAnimatedRefs.current[1] = el)}
            firstWord="UX/UI DESIGN"
            secondWord="UX/UI DESIGN"
          />
          <br />
          <TextAnimated
            ref={(el) => (textAnimatedRefs.current[2] = el)}
            firstWord="GROWTH AND ADS"
            secondWord="GROWTH AND ADS"
          />
        </div>
        <div
          className="w-[100px] h-[100px] bg-violet-900"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          Touch 1
        </div>

        <div
          className="w-[100px] h-[100px] bg-emerald-900"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          Touch 2
        </div>

        <div
          className="w-[100px] h-[100px] bg-rose-600"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          Touch 3
        </div>
      </div>
    </>
  );
}

export default PruebaPage;
