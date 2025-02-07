import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Cereal", description: "Crunchy Frosted Flakes", price: 5, image: "/images/Cerial box.jpg" },
    { id: 2, name: "Chocolate", description: "Sweet Hershey chocolate bar", price: 4, image: "/images/chocolate.jpeg" },
    { id: 3, name: "Milk", description: "1L Fresh Milk", price: 10, image: "/images/milk.jpg" },
    { id: 4, name: "Coca-Cola", description: "Cold Coca-Cola Can", price: 10, image: "/images/cola.jpeg" },
    { id: 5, name: "Bread", description: "Fresh Baked Bread Loaf", price: 6, image: "/images/Bread.jpg" },
    { id: 6, name: "Eggs", description: "A dozen fresh eggs", price: 7, image: "/images/Eggs.jpg" },
    { id: 7, name: "Orange Juice", description: "100% Natural Orange Juice", price: 8, image: "/images/orange.jpg" },
    { id: 8, name: "Chips", description: "Crunchy Lays Chips", price: 4, image: "/images/Chips.jpg" }
  ]);

  const [orders, setOrders] = useState([]);

  
  const updateProducts = (updatedProducts) => {
    setProducts([...updatedProducts]); 
  };
  
const addProduct = (product) => {
  setProducts((prevProducts) => [...prevProducts, product]);
};


  return (
    <CartContext.Provider value={{ cart, setCart, products, setProducts, addProduct, orders, setOrders, updateProducts }}>
      {children}
    </CartContext.Provider>
  );
}
