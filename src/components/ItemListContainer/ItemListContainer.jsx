import React from "react";
import Products from "../Products/Products";

function ItemListContainer({ greetings }) {
  
  return (
    <>
      <div className="py-20 bg-black">
        <div className="py-5 text-4xl font-bold">{greetings}</div>

        <p className="w-[100%] md:w-[65ch] px-4 pb-10 m-auto">
          Welcome to our online store, your destination for fashion,
          electronics, and jewelry. Discover the latest trends in clothing,
          cutting-edge gadgets, and stunning jewelry pieces. Shop now to elevate
          your style and stay connected with the latest innovations.
        </p>

        <Products />
      </div>
    </>
  );
}

export default ItemListContainer;
