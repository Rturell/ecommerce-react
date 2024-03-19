import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {

  const { totalItems } = useContext(CartContext);

  return (
    <>
      <div className="flex">
        <LuShoppingCart />
        <p>{totalItems}</p>
      </div>
    </>
  );
}

export default CartWidget;
