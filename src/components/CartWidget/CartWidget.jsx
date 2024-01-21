import { LuShoppingCart } from "react-icons/lu";

function CartWidget() {
  return (
    <>
      <div className="flex">
        <LuShoppingCart />
        <p>0</p>
      </div>
    </>
  );
}

export default CartWidget;
