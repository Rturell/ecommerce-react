import React, { useState } from "react";

const Count = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="pb-10">
      <button onClick={handleDecrement}>-</button>
      <input className="text-center" type="number" value={quantity}  />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;
