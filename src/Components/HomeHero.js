import React, { useState, useEffect } from "react"; // Asegúrate de importar el CSS
//
const HomeHero = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [showDelayedElement, setShowDelayedElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600;
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
    <div className={`z-[-1] mt-36 ${isSticky ? "fixed" : "hidden"} `}>
      {/* {showDelayedElement && ( */}
      <div className="mx-auto">
        <div className="reveal-text lg:w-[1024px] px-6 sm:px-0">
          <h2
            className=" text-[45px] sm:text-[60px] ms:text-[70px] lm:text-[80px] 
           lg:text-[90px] font-light leading-[109%] sm:leading-[99%]  tracking-tight"
          >
            Empowering startups through
            <span className="font-medium">&nbsp;design & technology.</span>
          </h2>
          <h3 className="mt-10 font-light b2-desk mr-[50px]">
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
