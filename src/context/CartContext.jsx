import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(null)

    const addItem = (item, quiantity) => {

    }

    const removeItem = (id) => {};

    const clearCart = () => {};

    const objectValues = {
        cart,
        addItem,
        removeItem,
        clearCart
    }

    return (
      <CartContext.Provider value={{ objectValues }}>
        {children}
      </CartContext.Provider>
    );
}