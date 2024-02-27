function ItemDetail({product}) {
   return (
     <>
       <div className="lg:container md:mx-auto h-dvh">
         <div className="my-10">
           <h2 className="text-4xl mb-10 mx-auto">{product.title}</h2>
           <p className="max-w-prose m-auto">{product.description}</p>
         </div>
       </div>
     </>
   );
}

export default ItemDetail