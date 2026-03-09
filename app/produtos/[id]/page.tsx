"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { use } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  rating: string;
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        console.log("Buscando produto com ID:", resolvedParams.id);
        const productId = parseInt(resolvedParams.id);
        console.log("ID convertido:", productId);

        const { data, error: supabaseError } = await supabase
          .from("Produtos")
          .select("*")
          .eq("id", productId)
          .single();

        if (supabaseError) {
          console.error("Erro Supabase:", supabaseError);
          setError(supabaseError.message);
          return;
        }

        console.log("Produto encontrado:", data);
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setError(String(error));
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center flex-col gap-4">
        <p>Erro: {error}</p>
        <p>ID buscado: {resolvedParams.id}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center flex-col gap-4">
        <p>Produto não encontrado</p>
        <p>ID buscado: {resolvedParams.id}</p>
        <button
          onClick={() => router.push("/produtos")}
          className="bg-green-700 text-white px-6 py-2 rounded"
        >
          Voltar para produtos
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        id="container"
        className="h-screen max-w-480 px-50 flex justify-between items-center gap-4"
      >
        <div id="imagem">
          <div className="self-start w-[675px] h-[611px] overflow-hidden">
            <img
              className="border-3 w-full h-full"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>

        <div id="descrição" className="flex flex-col gap-3 max-w-160">
          <h1 className="text-5xl font-bold text-green-800">{product.name}</h1>
          <div className="flex gap-2">
            <img className="w-30" src={product.rating} />
            <p>4.5 (212 avaliações)</p>
          </div>
          <span className="text-5xl font-bold text-zinc-700">R$ {product.price}</span>

          <p className="font-bold">Externa e Interna</p>
          <div className="flex flex-col bg-green-900  rounded-lg text-white/80 p-4">
            <div className="flex justify-between">
              <p className="font-light">
                <span className="font-bold pr-2">Condições:</span>
                Planta para todas as condições
              </p>
              <a href="#">Ver mais</a>
            </div>
            <div
              id="condições"
              className="w-150  justify-center-safe gap-25 flex"
            >
              <img
                className="invert-100 py-5 h-25"
                src="/assets/img/products/Conditions/chuva.webp"
              />
              <img
                className="invert-100 py-5 h-25"
                src="/assets/img/products/Conditions/neve.webp"
              />
              <img
                className="invert-100 py-5 h-25"
                src="/assets/img/products/Conditions/sol.webp"
              />
              <img
                className="invert-100 py-5 h-25"
                src="/assets/img/products/Conditions/temp.webp"
              />
            </div>
          </div>

          <div
            id="line"
            className="w-auto rounded-2xl h-2 bg-green-900 mt-2"
          ></div>

          <div className="flex items-center justify-between py-5 px-4">
            <button className="w-max px-5 bg-green-800 flex rounded-full cursor-pointer hover:bg-green-900 active:scale-90 transition-all duration-300 py-3 font-bold text-white gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              Comprar
            </button>

            <div className="flex gap-2">
              <input className="cursor-pointer" type="checkbox" />
              <span className="cursor-default">
                Adcionar a lista de desejos
              </span>
            </div>
          </div>

          <p>{product.description}</p>
          <div className="h-0.5 bg-black w-full"></div>
        </div>
      </div>

      <div
        id="container2"
        className="max-w-480 px-48 -mt-15 flex justify-between"
      >
        <div className="w-1/2 px-2" id="entrega">
          <h1 className=" bg-green-900 text-white font-bold p-2 text-center">
            Condições de Recebimento
          </h1>

          <p className="text-light py-5">
            Ao receber sua planta do Encanto Amazônico, desembale com cuidado e
            verifique se ela chegou em boas condições. Recomendamos colocá-la em
            local adequado, conforme a necessidade de luz e rega de cada
            espécie, evitando exposição imediata ao sol forte ou excesso de
            água. Caso identifique qualquer avaria no momento do recebimento,
            entre em contato conosco em até 24 horas, enviando fotos do produto
            e da embalagem. A devolução ou troca será avaliada conforme as
            condições de transporte e manuseio, respeitando o prazo e as
            políticas do Encanto Amazônico. Nosso compromisso é garantir que sua
            planta chegue saudável e pronta para encantar seu ambiente 🌿
          </p>
        </div>

        <div className="w-1/2 flex flex-col gap-4" id="metodos de pagamento">
          <h1 className=" bg-green-900 text-white font-bold p-2 text-center">
            Métodos de pagamento
          </h1>
          <div className="flex gap-5 justify-center pt-10">
            <img src="/assets/img/products/Pagamentos/pix.webp" alt="Pix" />
            <img src="/assets/img/products/Pagamentos/card.webp" alt="Pix" />
            <img src="/assets/img/products/Pagamentos/boleto.webp" alt="Pix" />

            <a className="self-end" href="#">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
