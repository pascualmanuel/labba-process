import React, { useState, useEffect } from "react"; // Asegúrate de importar el CSS
//
const HomeHero = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [showDelayedElement, setShowDelayedElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 800;
      const scrollY = window.scrollY || window.pageYOffset;
      setIsSticky(scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDelayedElement(true);
    }, 3400);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`z-[-1] mt-20 ${isSticky ? "fixed" : "hidden"} `}>
      {/* {showDelayedElement && ( */}
      <div className="mx-auto px-6 lg:px-[150px]">
        <div className="reveal-text">
          <h2 className="myH1 w-[790px]">
            Empowering startups through
            <span className="hero-title">&nbsp;design & technology</span>
          </h2>
          <h3 className="mt-10 font-light b2-desk">
            Full stack digital studio focused on generate impactful online
            presence.
          </h3>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default HomeHero;
