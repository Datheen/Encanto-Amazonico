import { CardProduct } from "./ui/card-product";
import { supabase } from "../lib/supabase";

export default async function StoreGrid() {
  const { data: produtos, error } = await supabase
    .from("Produtos")
    .select("id, name, price, image");

  if (error) return <div>Erro: {error.message}</div>;
  if (!produtos) return null;

  const section1 = produtos.filter((p) =>
    [1, 2, 3, 4, 5, 6, 7, 8].includes(p.id)
  );

  const section2 = produtos.filter((p) => [9, 10, 11, 12].includes(p.id));

  const section3 = produtos.filter((p) =>
    [13, 14, 15, 16, 17, 18, 19, 20].includes(p.id)
  );

  const section4 = produtos.filter((p) => [21, 22, 23, 24].includes(p.id));

  const section5 = produtos.filter((p) => [25, 26, 27, 28].includes(p.id));

  const section6 = produtos.filter((p) => [29, 30, 31, 32].includes(p.id));

  return (
    <div className="w-full bg-green-900 px-50">
      <div id="container" className="max-w-480 h-auto mx-auto">
        <div id="ALOCASIAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Alocasias</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section1.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div id="BROMELIAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Bromélias</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section2.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div id="ORQUIDEAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Orquidéas</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section3.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div id="SAMAMBAIAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Samambaias</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section4.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div id="SUCULENTAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Suculentas</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section5.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div id="BEGONIAS" className="pb-25">
          <div className="text-center font-bold text-4xl text-white/90 flex flex-col gap-2 pt-20">
            <h1>Begônias</h1>
            <div className="w-full h-1 bg-white/70 rounded-full"></div>
          </div>

          <div className="pt-10 grid grid-cols-4 gap-12">
            {section6.map((p) => (
              <CardProduct key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
