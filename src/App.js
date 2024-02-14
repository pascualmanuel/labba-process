import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./Hooks/CustomCursor";
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
  useEffect(() => {
    // Set up GSAP ScrollTrigger for smooth scrolling

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".scroll-trigger").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      });
    });
  }, []);
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
  }, []); // Empty dependency
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* <Cursor /> */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                <Home />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prueba" element={<PruebaPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
