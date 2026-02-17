
type Props = {id: number; name: string; price: number; image: string };

export default function View({id, name, price, image }: Props){
    return(
        <div id="container" className="max-w-480 px-50 h-screen">


<h1>{name}</h1>
<img src={image}/>







        </div>
    )
}