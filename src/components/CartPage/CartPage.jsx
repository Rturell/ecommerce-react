import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CartPage() {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  const handleDeleteItem = (item) => {
    Swal.fire({
      icon: "question",
      title: `¿Seguro que quieres eliminar "${item.title}" del carrito?`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        removeItem(item.id);
        Swal.fire({
          icon: "success",
          title: "Item eliminado.",
        });
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      icon: "question",
      title: "¿Seguro que quieres vaciar el carrito?",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        clearCart();
        Swal.fire({
          icon: "success",
          title: "Carrito eliminado",
        });
      }
    });
  };

  return (
    <>
      <div className="container text-black bg-white h-[100vh] min-w-[100%] p-10">
        <div>
          {cart.map((item) => (
            <div key={item.id} className="text-left">
              <p key={item.id}>Producto: {item.title} </p>
              <img src={item.image} alt="" />
              <p>Cantidad: {item.quantity} </p>
              <p>Precio Unitario: {item.price} </p>
              <p>Subtotal: ${item.subTotal}</p>
              <div>
                <button
                  className="mt-10 text-white bg-orange border-none"
                  onClick={() => handleDeleteItem(item)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-left">
          {total > 0 ? (
            <>
              <hr className="my-10" />
              <h4 className="my-5">
                {" "}
                Total de la compra: <b>${total}</b>
              </h4>
              <button
                className="me-5 bg-orange border-none text-white"
                onClick={() => handleClearCart()}
              >
                Vaciar Carrito
              </button>
              <Link to="/checkout">
                <button className="bg-pink border-none text-white">
                  Checkout
                </button>
              </Link>
            </>
          ) : (
            <h4 className="text-center">
              No tiene productos agregados al carrito.
            </h4>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
