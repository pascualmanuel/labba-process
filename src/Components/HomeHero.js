import { useEffect } from "react";
import gsap from "gsap";
import { useLanguage } from "../Hooks/LanguageContext";

import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importa ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

function HomeHero() {
  const { userLanguage, translateText } = useLanguage();

  useEffect(() => {
    // Configura la animación con ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-hero-1",
        start: "top-=140 top",
        end: "bottom top-=200",
        scrub: true,
        markers: true,
      },
    });

    // Hace que HomeHero se quede fijo durante 4 segundos
    timeline.to(".home-hero-1", { position: "fixed", duration: 4 });

    // Restaura la posición original después de 4 segundos
    timeline.to(".home-hero-1", { position: "sticky", duration: 0 });
  }, []); // Se eje

  return (
    <>
      <div>
        <div className="mx-6 sm:mx-20 mt-8	sticky home-hero-1 w-screen">
          <div className="flex h-[28rem] sm:h-[35rem]">
            <div className="max-w-[900px] lg:min-w-[880px] md:min-w-[800px] sm:min-w-[600px]">
              <p className="h1-desk decoration-slate-100">
                {translateText(
                  "Entre el mágico y el ninja te rompes alto site",
                  "Your bussiness deserves an amazing website."
                )}
              </p>
            </div>
            <div className="absolute bottom-20 right-60">
              <p className="b2-desk">
                <a href="/hola">
                  We design & build human-centered <br /> digital experiences.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHero;
