import React from "react";
import Work1 from "../Assets/work/work-1.webp";
import Work2 from "../Assets/work/work-2.webp";
import Work3 from "../Assets/work/work-3.webp";
import Work4 from "../Assets/work/work-4.webp";
import Work5 from "../Assets/work/work-5.webp";
import Work6 from "../Assets/work/work-6.webp";
import PlusIcon from "../Assets/icons/PlusIcon.svg";
import { useState } from "react";
import { ReactSVG } from "react-svg";
const Works = () => {
  const [showMoreWorks, setShowMoreWorks] = useState(false);
  const [test, setTest] = useState("auto");

  let isDesktop = window.innerWidth > 1024;
  const handleShowMoreWorks = () => {
    setShowMoreWorks(true);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <>
      <div>
        {isDesktop ? (
          <span
            className="vertical-text text-xl font-light"
            style={{
              writingMode: "vertical-rl", // Makes the text vertical
              transform: "rotate(180deg)", // Adjust the direction of the text
              position: "sticky", // Fix position relative to the container
              top: "100px", // Align with the top of the section
              left: "60px", // Margin of 60px from the left
              zIndex: "10", // Ensure it stays on top
            }}
          >
            Selected Work
          </span>
        ) : (
          <span>Selected Work</span>
        )}
        <section className="works-section relative  mx-auto px-6 sm:px-[53px] lg:mt-[-120px] lg:px-[150px] max-w-[1500px] ">
          <div
            className="work-item relative mb-2 cursor-none sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px]  "
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
              className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
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
              className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
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
        {/* Tercer trabajo - Full width */}
        {!showMoreWorks && (
          <div className="text-center my-6">
            <button
              className="bg-transparent py-2 px-4 rounded-lg border border-LaBlack transition duration-300"
              onClick={handleShowMoreWorks}
            >
              <span className="flex flex-row items-center font-medium text-base">
                <ReactSVG src={PlusIcon} className="mr-3" /> Load more work
              </span>
            </button>
          </div>
        )}

        <section
          className={`mx-auto px-6 sm:px-[53px] lg:px-[150px] sm:pt-5 max-w-[1500px] transition-transform duration-500 ${
            showMoreWorks ? "translate-y-0" : "translate-y-full opacity-0"
          }`}
        >
          {showMoreWorks && (
            <>
              <div
                className="work-item relative mb-2 sm:mb-6 rounded-lg bg-cover bg-center h-[260px] md:h-[580px]"
                style={{ backgroundImage: `url(${Work4})` }}
                id="pasando"
              >
                <div className="project-info w-[250px] sm:w-[359px] bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
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
                      With Trebol, users can join various lotteries and keep
                      tabs on the winning numbers, all without the need to visit
                      a physical store.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid item-sq grid-cols-1 md:grid-cols-2 sm:gap-[24px]">
                <div
                  className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                  style={{ backgroundImage: `url(${Work5})` }}
                  id="pasando"
                >
                  <div className="project-info w-[250px] sm:w-[359px] bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
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
                  className="work-item item-sq relative mb-2 sm:mb-0 rounded-lg bg-cover bg-center h-[268px] sm:aspect-square sm:w-full md:h-auto"
                  style={{ backgroundImage: `url(${Work6})` }}
                  id="pasando"
                >
                  <div className="project-info w-[250px] sm:w-[359px] bg-[#FFFFFF33] rounded-[10px] absolute top-[25px] left-[30px] blur-bg">
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
                        outsource tasks and find local services, with people
                        looking to earn money and ready to work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Works;
