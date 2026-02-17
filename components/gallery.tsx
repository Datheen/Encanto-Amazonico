export default function Gallery() {

    return(


        <div id="container" className="max-w-480 px-50 mx-auto flex flex-col items-center py-25">

<h1 className="text-4xl text-green-800 font-bold mb-20">❤︎‬ Experiências de quem ama nossas plantas ‪‪❤︎‬</h1>

<div className="grid grid-cols-4 gap-10">
<div className="h-96.75 rounded-2xl overflow-hidden hover:scale-125 transition-all duration-300">
    <img className="object-cover" src="/assets/img/gallery/1.webp" alt="Foto da Galeria" />
</div>

<div className="h-96.75 rounded-2xl overflow-hidden hover:scale-125 transition-all duration-300">
    <img className="object-cover w-full h-full" src="/assets/img/gallery/2.webp" alt="Foto da Galeria" />
</div>

<div className=" h-96.75 rounded-2xl overflow-hidden hover:scale-125 transition-all duration-300 cu">
    <img className="object-cover w-full h-full" src="/assets/img/gallery/3.webp" alt="Foto da Galeria" />
</div>

<div className="h-96.75 rounded-2xl overflow-hidden hover:scale-125 transition-all duration-300">
    <img className="object-cover w-full h-full" src="/assets/img/gallery/4.webp" alt="Foto da Galeria" />
</div>


</div>



<div className="grid grid-cols-3 gap-5 pt-5">

<div className=" h-[370px] overflow-hidden rounded-2xl hover:scale-125 transition-all duration-300 ">
    <img className="w-full h-full object-cover" src="/assets/img/gallery/5.webp" alt="Foto da Galeria" />
</div>

<div className=" h-[370px] overflow-hidden rounded-2xl hover:scale-125 transition-all duration-300 ">
    <img className="w-full h-full object-cover" src="/assets/img/gallery/6.webp" alt="Foto da Galeria" />
</div>

<div className=" h-[370px] overflow-hidden rounded-2xl hover:scale-125 transition-all duration-300 ">
    <img className="w-full h-full object-cover" src="/assets/img/gallery/7.webp" alt="Foto da Galeria" />
</div>


</div>

        </div>
    )
}