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

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [scrollXEnabled, setScrollXEnabled] = useState(true);

  // useEffect(() => {
  //   // Set up GSAP ScrollTrigger for smooth scrolling

  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.utils.toArray(".scroll-trigger").forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1,
  //       // markers: true,
  //     });
  //   });
  // }, []);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    function moveCursor(e) {
      gsap.to(cursor, 0.3, {
        x: e.clientX,
        y: e.clientY + window.scrollY, // Adjust for the scroll position
      });
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

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

  return (
    <BrowserRouter>
      <LanguageProvider>
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
  );
}

export default App;
