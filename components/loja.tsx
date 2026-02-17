"use client";

import { TypingAnimation } from "./ui/typing-animation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loja() {
  const animarRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    animarRefs.current.forEach((element) => {
      if (element) {
        gsap.to(element, {
          y: "+=20",
          rotation: "+=15",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);
  return (
    <div className="w-full overflow-hidden">
      
      <div
        id="container"
        className="max-w-480 h-auto px-50 mx-auto flex justify-around pt-20"
      >
        
        <div className="pt-20" id="left">
          <h1 className="text-6xl font-bold text-green-800">
            Compre a planta <br /> dos seus sonhos!
          </h1>
          <img
            className="w-60"
            src="/assets/img/logo-loja.webp"
            alt="Logo Encanto Amazônico"
          />
          <div className="w-max mt-15 bg-white/80 border-2 px-12 h-12 text-xl rounded-full flex items-center gap-2 text-gray-400">
            <svg
              className="w-6 h-6 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            <TypingAnimation>Oque você está proucurando?</TypingAnimation>
          </div>
        </div>

        <div id="right" className="flex pr-18">
          <svg
            ref={(el) => {
              animarRefs.current[0] = el;
            }}
            id="animar"
            className="relative -right-150 top-10 fill-green-700"
            xmlns="http://www.w3.org/2000/svg"
            height="120px"
            viewBox="0 -960 960 960"
            width="120px"
            fill="#FFFFFF"
          >
            <path d="M480-164q-58.53 0-110.26-19.5Q318-203 276-238l-62 61q-9 9-20.5 9t-20.5-9q-9-9-9-20.5t9-20.5l61-62q-35.34-42.16-54.67-93.58T160-484q0-134 93-227t227-93h320v320q0 134-93 227t-227 93Zm0-60q108.33 0 184.17-75.83Q740-375.67 740-484v-260H480q-108.33 0-184.17 75.83Q220-592.33 220-484q0 45.74 15 87.37T276-322l217-216q9-9 20.5-9t20.5 9q9 8.8 9 20.9 0 12.1-9 21.1L318-280q33 26 74.63 41 41.63 15 87.37 15Zm0-260Z" />
          </svg>

          <svg
            ref={(el) => {
              animarRefs.current[1] = el;
            }}
            id="animar"
            className="fill-green-700 relative top-70 -rotate-42"
            xmlns="http://www.w3.org/2000/svg"
            height="120px"
            viewBox="0 -960 960 960"
            width="120px"
            fill="#FFFFFF"
          >
            <path d="M480-80q-72-8-143.5-41.5t-128.5-93q-57-59.5-92.5-147T80-564.98V-603h38q53 0 113 20.5T337-530q8-90 48-185.5T480-879q55 68 95 163.5T623-530q46-30 106-51.5T842-603h38v38.02Q880-449 844.5-361.5 809-274 752-214.5t-128.5 93Q552-88 480-80Zm8-61q-11-186-107.39-282.18Q284.21-519.37 141-542q13 193 112.5 288T488-141Zm-9-245q14-26 38.5-56t47.5-50q5-68-20-138t-65-145q-40 75-65 145t-20 138q23 20 46.5 50t37.5 56Zm69 228q47-17 93.5-45t84-73q37.5-45 63-110.5T819-542q-106 17-187 75.5T513-322q12 38 21 76.5t14 87.5Zm-69-228Zm69 228Zm-60 17Zm25-181ZM480-80Z" />
          </svg>

          <div className="h-100 bg-[#292524] relative rounded-full rounded-br-none mt-20">
            <img
              className="relative -top-25 -right-15 w-100"
              src="/assets/img/banner.webp"
              alt="Planta na mão de uma pessoa"
            />
          </div>
        </div>
      </div>

      <div id="container-2" className="max-w-480 h-auto mb-10 px-40 -mt-20 mx-auto flex">
        <div
          className="grid grid-cols-6 w-full mt-45 text-green-800 font-bold"
          id="categorias"
        >
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball1.webp"
              alt=""
            />
            <p>ORQUIDÉAS</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball2.webp"
              alt=""
            />
            <p>SAMAMBAIAS</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball3.webp"
              alt=""
            />
            <p>BROMÉLIAS</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball4.webp"
              alt=""
            />
            <p>SUCULENTAS</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball5.webp"
              alt=""
            />
            <p>BEGÔNIAS</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-lg cursor-pointer">
            <img
              className="w-40 rounded-full hover:scale-110 transition-all duration-300 active:scale-90"
              src="/assets/img/categories/ball6.webp"
              alt=""
            />
            <p>ALOCASIAS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
