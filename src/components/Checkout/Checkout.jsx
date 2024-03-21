import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const order = await addDoc(collection(db, "orders"), newOrder);

    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });

    clearCart();

    setOrderId(order.id);

    Swal.fire({
      icon: "success",
      title: "Su compra se ha realizado con éxito!",
    });
  };

  if (orderId) {
    return (
      <>
        <div className="min-h-[100vh] pt-20 text-center w-[100%]">
          <h2 className="text-xl font-bold">
            La compra se ha realizado con exito!
          </h2>
          <p>Su numero de orden es: {orderId}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full max-w-xs min-h-[100vh] mt-10 mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-dark text-sm font-bold mb-2"
              for="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre y Apellido"
              value={formCheckout.name}
              onChange={handleName}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-dark text-sm font-bold mb-2"
              for="phone"
            >
              Telefono
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="+598 23 31 42"
              value={formCheckout.phone}
              onChange={handlePhone}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-dark text-sm font-bold mb-2"
              for="email"
            >
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="tucorreo@test.com"
              value={formCheckout.email}
              onChange={handleEmail}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              className="text-white bg-pink p-3 rounded-md"
              value="Finalizar la compra"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
