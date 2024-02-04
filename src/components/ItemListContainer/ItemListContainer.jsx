import React from "react";
import Products from "../Products/Products";

function ItemListContainer({ greetings }) {
  
  return (
    <>
      <div className="py-20 bg-black">

        <div className="py-5 text-4xl font-bold">{greetings}</div>

        <p className="w-[100%] md:w-[65ch] px-4 pb-10 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste
          voluptatem consequatur ab doloribus rem eveniet error voluptas.
        </p>

        <Products/>

      </div>
    </>
  );
}

export default ItemListContainer;
