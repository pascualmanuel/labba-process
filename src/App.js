import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import CustomCursor from "./Hooks/CustomCursor";
import Contact from "./Pages/Contact";
import { LanguageProvider } from "./Hooks/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenLite } from "gsap/gsap-core";
import SmoothScroll from "./Hooks/SmoothScroll";
import Pruebas from "./Components/Pruebas";
import PruebaPage from "./Pages/PruebaPage";
import Cursor from "./Hooks/Cursor";
import Loader from "./Components/Loader";
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [scrollXEnabled, setScrollXEnabled] = useState(true);

  const cursorRef = useRef(null);

  // useEffect(() => {
  //   const cursor = cursorRef.current;

  //   function moveCursor(e) {
  //     gsap.to(cursor, 0.3, {
  //       x: e.clientX,
  //       y: e.clientY + window.scrollY, // Adjust for the scroll position
  //     });
  //   }

  //   window.addEventListener("mousemove", moveCursor);

  //   return () => {
  //     // Cleanup the event listener when the component unmounts
  //     window.removeEventListener("mousemove", moveCursor);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      // Add your conditions for enabling/disabling horizontal scroll
      if (window.innerWidth > 1 && window.innerHeight < 10000) {
        setScrollXEnabled(false);
      } else {
        setScrollXEnabled(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const svgCode = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3137 0.686267L0.686292 23.3137M23.3137 0.686267H0.686292M23.3137 0.686267V23.3137" stroke="#ECECEC"/>
  </svg>
`;

  useEffect(() => {
    const circleCursor = document.getElementById("circleCursor");

    if (!circleCursor) {
      // Check if the element exists to prevent errors
      return;
    }

    const cursorWidth = 20;
    const cursorHeight = 20;
    const mitiWidth = cursorWidth / 2;
    const mitiHeight = cursorHeight / 2;

    let targetX = 0;
    let targetY = 0;
    let isMoving = false;

    // Update the ellipse's position based on the cursor's coordinates
    document.addEventListener("mousemove", (e) => {
      targetX = e.clientX - mitiWidth; // Center horizontally
      targetY = e.clientY - mitiHeight; // Center vertically

      if (!isMoving) {
        isMoving = true;
        updateCursor();
      }
    });

    function isCursorOverLink(element) {
      return element.id === "pasando";
    }

    // Update the cursor style based on whether it's over a link or not
    function updateCursorStyle(isOverLink) {
      if (isOverLink) {
        // Modify the cursor style when over a link
        circleCursor.style.width = "100px";
        circleCursor.style.height = "100px";
        circleCursor.style.fontSize = "50px";
        circleCursor.style.fontWeight = "400";

        // circleCursor.style.setProperty("--before-content", "'+'"); // Use a custom property
        // circleCursor.style.setProperty("--before-content", `'${svgCode}'`);
        circleCursor.style.setProperty(
          "--before-content",
          `url('data:image/svg+xml,${encodeURIComponent(svgCode)}')`
        );

        // circleCursor.style.transition = "0.1s";

        // Add other style modifications as needed
      } else {
        // Reset the cursor style when not over a link
        circleCursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        circleCursor.style.width = "35px";
        circleCursor.style.height = "35px";
        // circleCursor.style.transition = "0.1s";
        circleCursor.style.setProperty("--before-content", "''"); // Use a custom property
      }
    }

    function updateCursor() {
      // Calculate the current cursor position
      const currentX = parseFloat(circleCursor.style.left) || 0;
      const currentY = parseFloat(circleCursor.style.top) || 0;

      // Calculate the distance to move in this frame
      const deltaX = Math.round((targetX - currentX) * 0.1); // Round the position values
      const deltaY = Math.round((targetY - currentY) * 0.1); // Round the position values

      // Update the cursor position
      circleCursor.style.left = Math.round(currentX + deltaX) + "px";
      circleCursor.style.top = Math.round(currentY + deltaY) + "px";

      const isOverLink = isCursorOverLink(
        document.elementFromPoint(currentX + mitiWidth, currentY + mitiHeight)
      );

      // Update the cursor style
      updateCursorStyle(isOverLink);
      // Check if the cursor has reached the target
      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        // Continue updating in the next animation frame
        requestAnimationFrame(updateCursor);
      } else {
        isMoving = false;
      }
    }

    // er3eerjek932857483wkedskn
    // dsadjds
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <>
      {/* <Loader /> */}
      <BrowserRouter>
        <LanguageProvider>
          <div id="circleCursor" className="hidden sm:block"></div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <div style={{ overflowX: scrollXEnabled ? "auto" : "hidden" }}> */}
                  <ScrollToTop />
                  <Home />
                  {/* </div> */}
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prueba" element={<Pruebas />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
