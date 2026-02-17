type Props = { name: string; price: number; image: string };

export function CardProduct({ name, price, image }: Props) {
  return (
    <div className="bg-white/80 h-max rounded-4xl flex flex-col items-center">
      <div className="p-5">
        <img
          className="rounded-2xl shadow-2xl"
          src={image}
        />
      </div>
      <div className="self-start px-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <span className="text-xl text-green-600 font-medium">R$ {price}</span>
      </div>
      <button className="w-max hover:cursor-pointer relative group overflow-hidden active:scale-95 transition-colors duration-700 bg-green-700 text-white/90 px-20 rounded-full h-13 text-xl my-5">
        <span className="z-10 relative">Comprar</span>
        <span className="absolute right-0 top-0 h-full w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  );
}
