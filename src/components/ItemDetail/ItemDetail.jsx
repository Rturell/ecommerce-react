import { Count } from "../Count/Count";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetail({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }

  const {addItem} = useContext(CartContext)

  const onAdd = (quantity) => {

    const item = {
      id: product.id,
      price: product.price,
      title: product.title
    }

    addItem(item, quantity);
  }

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
              src={product.img}
              alt=""
            />
            <p className="max-w-prose m-auto text-black py-10">
              {product.description}
            </p>

            <Count onAdd={onAdd} />

          </div>
        </div>
      </div>
    </>
  );
}


export default ItemDetail