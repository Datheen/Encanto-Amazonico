import Link from "next/link"

export default function Blog() {
  return (
    <div
      id="container"
      className="max-w-480 px-50 mx-auto my-10 flex items-center gap-10"
    >
      <div id="left" className="w-1/2">
        <h1 className="text-5xl font-bold text-zinc-700">
          Jardinagem Paisagística
        </h1>
        <div className="w-50 mt-2.5 h-1 bg-zinc-500"></div>
        <p className="text-2xl text-zinc-600 mt-10">
          Seja cultivando sua própria comida ou montando <br />
          seu jardim no telhado, fornecemos os mais altos <br />
          padrões de serviços de paisagismo, contribuindo para um mundo mais
          verde e uma vida substancial!
        </p>

        <p className="text-2xl text-zinc-600 mt-7">
          Agende seu compromisso de serviço hoje!
        </p>
<Link href="/produtos">
        <button className="text-2xl cursor-pointer text-white/80 bg-green-800 px-10 py-4 rounded-xl font-bold mt-10 hover:bg-amber-700 active:scale-90 transition-all duration-300">
          Compre agora!
        </button>
        </Link>
      </div>
      

      <div id="right" className="">
        <img
          className="w-180 rounded-2xl"
          src="/assets/img/gallery/textside.jpg"
          alt="Plantando"
        />
      </div>
    </div>
    
  );
}
