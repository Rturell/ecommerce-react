import React from "react";

function ItemListContainer({ greetings }) {
  return (
    <>
      <div className="py-20">
        <div className="py-5 text-xl font-bold">{greetings}</div>
        <p className="w-[100%] md:w-[65ch] px-4 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste
          voluptatem consequatur ab doloribus rem eveniet error voluptas,
          assumenda sint ex quo quam officiis possimus vero eaque nulla
          perspiciatis velit expedita. Quos, temporibus laborum minus quaerat,
          necessitatibus qui dignissimos dolorem molestiae omnis officiis
          sapiente suscipit, autem soluta reprehenderit vero porro?
        </p>
      </div>
    </>
  );
}

export default ItemListContainer;
