"use client";

import { AuroraText } from "./ui/aurora-text";

export default function MobileHero() {
  return (
    <div id="container-m" className="flex flex-col h-screen px-4 items-center">
      <div className="pt-10">
        <AuroraText className="text-6xl text-center font-semibold leading-17">
          Criando <br /> um visual bonito e natural
        </AuroraText>
        <h2 className="text-center pt-2 text-green-800/50 mt-5 font-medium">
          Eleve o seu ambiente e experimente <br /> o encanto da natureza no seu
          próprio quintal
        </h2>
        <div id="CTA" className="flex items-center justify-center pt-10 gap-5">
          <button className="w-max bg-green-700 h-15 rounded-full px-8 text-white/90 font-bold hover:bg-green-500 cursor-pointer active:bg-green-900 active:scale-85 transition-all duration-500">
            Fale conosco
          </button>
          <button
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="w-max bg-green-700/1 h-15 rounded-full px-8 text-green-700/80 border-3 border-green-700 font-bold hover:bg-green-700 hover:text-white/90 cursor-pointer active:bg-green-900 active:scale-85 transition-all duration-500"
          >
            Ver mais
          </button>
        </div>
        <div><img src="/assets/img/hero/planta-hero.webp"/></div>
      </div>
    </div>
  );
}
