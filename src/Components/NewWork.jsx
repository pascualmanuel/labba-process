import React from "react";
import Work1 from "../Assets/work/work-1.webp";
import Work2 from "../Assets/work/work-2.webp";
import Work3 from "../Assets/work/work-3.webp";
import Work4 from "../Assets/work/work-4.webp";
import Work5 from "../Assets/work/work-5.webp";
import Work6 from "../Assets/work/work-6.webp";

const Works = () => {
  return (
    <>
      <section className="works-section mx-auto px-6 sm:px-[53px] lg:px-[150px] max-w-[1500px]">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item mb-2 sm:mb-6  rounded-lg bg-cover bg-center h-[260px] md:h-[580px]  "
          style={{ backgroundImage: `url(${Work1})` }}
        >
          {/* Contenido opcional */}
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
          <div
            className="work-item mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work2})` }}
          >
            {/* Contenido opcional */}
          </div>
          <div
            className="work-item mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work3})` }}
          >
            {/* Contenido opcional */}
          </div>
        </div>
      </section>
      <section className="works-section mx-auto px-6 sm:px-[53px] lg:px-[150px] lg:pt-5 max-w-[1500px]">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item mb-2 sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px]  "
          style={{ backgroundImage: `url(${Work4})` }}
        >
          {/* Contenido opcional */}
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-[24px]">
          <div
            className="work-item mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work5})` }}
          >
            {/* Contenido opcional */}
          </div>
          <div
            className="work-item mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work6})` }}
          >
            {/* Contenido opcional */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
