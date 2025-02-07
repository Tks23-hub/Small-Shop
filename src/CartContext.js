import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const orders = []; // Simple array for storing purchased products

  return (
    <CartContext.Provider value={{ cart, setCart, orders }}>
      {children}
    </CartContext.Provider>
  );
}
