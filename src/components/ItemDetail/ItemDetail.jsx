import PrimaryButton from "../Ui/Button/PrimaryButton";
import Count from "../Count/Count";

function ItemDetail({product}) {
   return (
     <>
       <div className="bg-white">
         <div className="lg:container md:mx-auto h-dvh">
           <div>
             <h2 className="text-black text-4xl py-10 mx-auto">
               {product.title}
             </h2>
             <img
               className="p-8 rounded-t-lg w-[350px] object-contain m-auto"
               src={product.image}
               alt=""
             />
             <p className="max-w-prose m-auto text-black py-10">
               {product.description}
             </p>

             <Count />

             <PrimaryButton
               buttonText={"Añadir al Carrito"}
               href=''
             />
           </div>
         </div>
       </div>
     </>
   );
}

export default ItemDetail