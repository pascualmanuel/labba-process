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
      <section className="works-section  mx-auto px-6 sm:px-[53px] lg:px-[150px] max-w-[1500px]">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item relative mb-2 cursor-none sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px]"
          style={{ backgroundImage: `url(${Work1})` }}
          id="pasando"
        >
          <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
            <div className="flex flex-row justify-between">
              <div>
                <p
                  className="l-desk text-[#ECECEC]"
                  style={{ fontWeight: 500 }}
                >
                  Morgenstern
                </p>
              </div>
              <div className="flex flex-row">
                <p className="tags p-12 mr-[6px]">Design</p>
                <p className="tags p-12">Development</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p className="b4-desk text-[#ECECEC]">
                A creative and playful website for a creative and playful
                illustrated project.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-[24px]">
          <div
            className="work-item relative mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work2})` }}
            id="pasando"
          >
            <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
              <div className="flex flex-row justify-between">
                <div>
                  <p
                    className="l-desk text-[#ECECEC]"
                    style={{ fontWeight: 500 }}
                  >
                    Inmobiliare
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="tags p-12 mr-[6px]">Design</p>
                  <p className="tags p-12">Development</p>
                </div>
              </div>
              <div className="mt-[10px]">
                <p className="b4-desk text-[#ECECEC]">
                  Redesigning the experience of the largest real estate news
                  portal in Mexico
                </p>
              </div>
            </div>
          </div>
          <div
            className="work-item relative mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work3})` }}
            id="pasando"
          >
            <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
              <div className="flex flex-row justify-between">
                <div>
                  <p
                    className="l-desk text-[#ECECEC]"
                    style={{ fontWeight: 500 }}
                  >
                    Ephimero
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="tags p-12 mr-[6px]">Design</p>
                  <p className="tags p-12">Development</p>
                </div>
              </div>
              <div className="mt-[10px]">
                <p className="b4-desk text-[#ECECEC]">
                  Candles ecommerce with ethics & aesthetics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="works-section mx-auto px-6 sm:px-[53px] lg:px-[150px] lg:pt-5 max-w-[1500px]">
        {/* Primer trabajo - Full width */}
        <div
          className="work-item relative mb-2 sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px]  "
          style={{ backgroundImage: `url(${Work4})` }}
          id="pasando"
        >
          <div className=" project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
            <div className="flex flex-row justify-between">
              <div>
                <p
                  className="l-desk text-[#ECECEC]"
                  style={{ fontWeight: 500 }}
                >
                  Trebol
                </p>
              </div>
              <div className="flex flex-row">
                <p className="tags p-12 mr-[6px]">Design</p>
                <p className="tags p-12">Development</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p className="b4-desk text-[#ECECEC]">
                With Trebol, users can join various lotteries and keep tabs on
                the winning numbers, all without the need to visit a physical
                store.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda fila de trabajos - Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-[24px]">
          <div
            className="work-item relative mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work5})` }}
            id="pasando"
          >
            {/* Contenido opcional */}
            <div className=" project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
              <div className="flex flex-row justify-between">
                <div>
                  <p
                    className="l-desk text-[#ECECEC]"
                    style={{ fontWeight: 500 }}
                  >
                    Daewoo
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="tags p-12 mr-[6px]">Design</p>
                  <p className="tags p-12">Development</p>
                </div>
              </div>
              <div className="mt-[10px]">
                <p className="b4-desk text-[#ECECEC]">
                  Explore and find your perfect home appliance.
                </p>
              </div>
            </div>
          </div>
          <div
            className="work-item relative mb-2 sm:mb-0  rounded-lg bg-cover bg-center h-[260px] md:h-[590px]"
            style={{ backgroundImage: `url(${Work6})` }}
            id="pasando"
          >
            <div className="project-info w-[250px] sm:w-[359px]  bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
              <div className="flex flex-row justify-between">
                <div>
                  <p
                    className="l-desk text-[#ECECEC]"
                    style={{ fontWeight: 500 }}
                  >
                    Manno
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="tags p-12 mr-[6px]">Design</p>
                  <p className="tags p-12">Development</p>
                </div>
              </div>
              <div className="mt-[10px]">
                <p className="b4-desk text-[#ECECEC]">
                  A trusted community app that connects people who need to
                  outsource tasks and find local services, with people looking
                  to earn money and ready to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
