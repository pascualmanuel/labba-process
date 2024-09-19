import React, { useEffect, useRef } from "react";
// import { render } from "https://cdn.skypack.dev/react-dom"; // Import render from the correct location
// import Clients from "../Components/Clients"; // Update this with the correct file path

// import "../Styles/App.css";
// import "../Styles/Prueba.css";
import TextAnimated from "../Hooks/AnimatedWord";

function PruebaPage() {
  return (
    <>
      <div className="flex justify-center w-[100vw] pt-[100px]">
        <TextAnimated hola="DEVELOPMENT" text2="DEVELOPMENT" />
      </div>
    </>
  );
}

export default PruebaPage;
