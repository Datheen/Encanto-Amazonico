export default function Trending() {
  return (
    <div
      id="container"
      className="max-w-480 px-50 mx-auto py-20 bg-green-900 flex flex-col items-center justify-center"
    >

        <h1 className="text-white/90 font-bold text-4xl mb-20">Intens mais vendidos no Encanto Amazônico</h1>
     <div className="flex gap-15" id="trending">
         <div className="flex flex-col items-center gap-2">
        <div className="h-[500px] bg-white/70 overflow-hidden">
          <h1 className="pt-4 text-center text-2xl font-bold text-green-900">
            ELATIOR LARANJA
          </h1>
          <img
            className="px-5 h-full w-full object-cover pt-3 pb-20"
            src="assets/img/trending/elatior.webp"
            alt="Planta Polly"
          />
        </div>
        <button className="bg-white rounded-full w-max px-20 text-2xl py-3 mt-3 text-green-900 font-bold hover:bg-green-500 hover:text-white cursor-pointer active:scale-90 transition-all">
          Comprar
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 scale-110">
        <div className="h-[500px] bg-white/70 overflow-hidden">
          <h1 className="pt-4 text-center text-2xl font-bold text-green-900">
            ALOCASIA POLLY
          </h1>
          <img
            className="  px-5 w-full h-full object-cover pt-3 pb-20"
            src="assets/img/trending/polly.webp"
            alt="Planta Polly"
          />
        </div>
        <button className="bg-white rounded-full w-max px-20 text-2xl py-3 mt-3 text-green-900 font-bold hover:bg-green-500 hover:text-white cursor-pointer active:scale-90 transition-all">
          Comprar
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="h-[500px] bg-white/70 overflow-hidden">
          <h1 className="pt-4 text-center text-2xl font-bold text-green-900">
            ALOCASIA BLACK VELVET
          </h1>
          <img
            className="px-5 h-full w-full object-cover pt-3 pb-20"
            src="assets/img/trending/blackvelvet.webp"
            alt="Planta Polly"
          />
        </div>
        <button className="bg-white rounded-full w-max px-20 text-2xl py-3 mt-3 text-green-900 font-bold hover:bg-green-500 hover:text-white cursor-pointer active:scale-90 transition-all">
          Comprar
        </button>
     </div>
      </div>
    </div>
  );
}
