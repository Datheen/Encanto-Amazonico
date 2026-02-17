import { NumberTicker } from "@/components/ui/number-ticker";

export default function Features() {
  return (
    <section className="w-full bg-green-800 relative -mt-55 z-2 overflow-hidden">
      <div
        id="container"
        className="h-max max-w-480 px-50 mx-auto flex items-center justify-around"
      >
        <div id="left" className="py-60 relative w-1/2">
          <div className="text-white/90 w-max p-8 bg-green-950/90 flex flex-col justify-center items-center top-34 -left-10 text-center gap-1 rounded-lg absolute">
            <div className="font-bold text-6xl">
              <NumberTicker value={200} />+
            </div>
            <p>Mais de 200 espécies</p>
          </div>

          <img src="/assets/img/features.webp" alt="Quadro planta" />

          <div className="text-white/90 w-max p-8 bg-green-950/90 flex flex-col justify-center items-center text-center gap-1 rounded-lg absolute bottom-44 right-60">
            <div className="font-bold text-6xl">
              <NumberTicker value={100} />%
            </div>
            <p>Clientes satisfeitos</p>
          </div>
        </div>

        <div id="right" className="flex flex-col gap-2 text-white/90 w-1/2">
          <div className="flex gap-3">
            <div className="h-6 w-2 bg-green-300"></div>
            <h2 className="text-green-300 text-xl">
              {" "}
              Venha conhecer o Encanto Amazônico
            </h2>
          </div>
          <h1 className="text-3xl font-bold">
            Semeando sonhos, cultivando paisagens
          </h1>
          <p>
            Eleve o seu ambiente e experimente o encanto da natureza no seu
            próprio quintal
          </p>

          <div className="flex flex-col gap-15 mt-10" id="questions">
            <div className="flex gap-4">
              <span className="text-6xl font-bold">01.</span>
              <p>
                {" "}
                "O Encanto Amazônico traz a biodiversidade e o mistério da maior
                floresta do mundo, cultivando em sua casa a beleza e a raridade
                das verdadeiras plantas da Amazônia."
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-6xl font-bold">02.</span>
              <p>
                {" "}
                "Mais que plantas, entregamos um pedaço da natureza pura: cada
                espécie do Encanto Amazônico é um tesouro com garantia de origem
                e cuidado sustentável."
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-6xl font-bold">03.</span>
              <p>
                {" "}
                "Descubra as cores vibrantes e as formas únicas que só a
                Amazônia pode oferecer. Seu próximo refúgio verde começa com uma
                planta do Encanto Amazônico."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
