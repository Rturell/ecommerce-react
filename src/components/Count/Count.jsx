import { useState } from "react";
import { ToastContainer } from "react-toastify";


export const Count = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    if (count > !0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
        <strong className="text-black">{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
      <ToastContainer />
    </div>
  );
};
