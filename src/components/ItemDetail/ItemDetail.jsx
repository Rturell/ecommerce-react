import { Count } from "../Count/Count";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetail({ id, title, description, img, price, stock }) {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = {
      id,
      price,
      title,
    };

    addItem(item, quantity);
    toast(`"${title}" ha sido añadido al carrito!`);
    
  };

  return (
    <>
      <div className="bg-white">
        <div className="lg:container md:mx-auto min-h-dvh">
          <div>
            <h2 className="text-black text-4xl py-10 mx-auto">{title}</h2>
            <img className="max-w-[200px] m-auto" src={img} alt="" />
            <p className="max-w-prose m-auto text-black pt-10 pb-3">
              {description}
            </p>
            <div className="flex text-center items-center justify-center gap-2">
              <p className="text-black">Stock: {stock}</p>
              <p className="text-black py-5">
                <b>Price: ${price}</b>
              </p>
            </div>
            <Count onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
