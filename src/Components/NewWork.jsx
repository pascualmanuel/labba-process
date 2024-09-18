import React from "react";
import Work1 from "../Assets/work/work_1.png";
import Work2 from "../Assets/work/work_2.png";
import Work3 from "../Assets/work/work_3.png";

const Works = () => {
  return (
    <>
      <section className="works-section mx-auto px-6 lg:px-[150px]">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item bg-cover bg-center h-[580px] mb-8 lg:mb-6"
          style={{ backgroundImage: `url(${Work1})` }}
        >
          {/* Contenido opcional */}
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          <div
            className="work-item bg-cover bg-center h-[590px]"
            style={{ backgroundImage: `url(${Work2})` }}
          >
            {/* Contenido opcional */}
          </div>
          <div
            className="work-item bg-cover bg-center h-[590px]"
            style={{ backgroundImage: `url(${Work3})` }}
          >
            {/* Contenido opcional */}
          </div>
        </div>
      </section>
      <section className="works-section mx-auto px-6 lg:px-[150px] lg:pt-5">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item bg-cover bg-center h-[580px] mb-8 lg:mb-6"
          style={{ backgroundImage: `url(${Work1})` }}
        >
          {/* Contenido opcional */}
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          <div
            className="work-item bg-cover bg-center h-[590px]"
            style={{ backgroundImage: `url(${Work2})` }}
          >
            {/* Contenido opcional */}
          </div>
          <div
            className="work-item bg-cover bg-center h-[590px]"
            style={{ backgroundImage: `url(${Work3})` }}
          >
            {/* Contenido opcional */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
