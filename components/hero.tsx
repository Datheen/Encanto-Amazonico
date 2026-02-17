"use client";

import Header from "./header";
import { AuroraText } from "@/components/ui/aurora-text";

export default function Hero() {
  return (
    <div id="hero" className="w-full overflow-hidden">
      <div
        id="container"
        className="h-auto text-black/80 max-w-480 px-20 mx-auto flex items-center justify-center overflow-clip -mt-16"
      >
        <div id="left-hero" className="flex flex-col gap-8">
          <AuroraText className="text-8xl cursor-default font-bold text-green-800 leading-28">
            Criando um <br />
            Visual bonito &<br /> Natural
          </AuroraText>
          <h2 className="text-2xl font-medium text-zinc-800/60">
            Eleve o seu ambiente e experimente o encanto da <br /> natureza no
            seu próprio quintal
          </h2>

          <div id="CTA" className="flex gap-5">
            <button className="w-max bg-green-700 h-15 rounded-full px-8 text-white/90 font-bold hover:bg-green-500 cursor-pointer active:bg-green-900 active:scale-85 transition-all duration-500">
              Fale conosco
            </button>
            <button className="w-max bg-green-700/1 h-15 rounded-full px-8 text-green-700/80 border-3 border-green-700 font-bold hover:bg-green-700 hover:text-white/90 cursor-pointer active:bg-green-900 active:scale-85 transition-all duration-500">
              Ver mais
            </button>
          </div>
        </div>

        <div id="right-hero" className="relative">
          <img
            className="absolute top-72 z-1 left-85 scale-185 opacity-15"
            src="/assets/img/hero/pattern.webp"
            alt="Padrão Losango"
          />
          <img
            className="mt-20 flex z-10 relative"
            src="/assets/img/hero/planta-hero.webp"
            alt="Planta e Vitória Régia"
          />
        </div>
      </div>
    </div>
  );
}
