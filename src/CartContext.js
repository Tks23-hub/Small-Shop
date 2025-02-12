import { createContext, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Cereal", description: "Crunchy Frosted Flakes", price: 5, image: "/images/Cerial box.jpg" },
    { id: 2, name: "Chocolate", description: "Sweet Hershey chocolate bar", price: 4, image: "/images/chocolate.jpeg" },
    { id: 3, name: "Milk", description: "1L Fresh Milk", price: 10, image: "/images/Milk.jpg" },
    { id: 4, name: "Coca-Cola", description: "Cold Coca-Cola Can", price: 10, image: "/images/Cola.jpeg" },
    { id: 5, name: "Bread", description: "Fresh Baked Bread Loaf", price: 6, image: "/images/Bread.jpg" },
    { id: 6, name: "Eggs", description: "A dozen fresh eggs", price: 7, image: "/images/Eggs.jpg" },
    { id: 7, name: "Orange Juice", description: "100% Natural Orange Juice", price: 8, image: "/images/Orange juice.jpg" },
    { id: 8, name: "Chips", description: "Crunchy Lays Chips", price: 4, image: "/images/Chips.jpg" },
    { id: 9, name: "Peanut Butter", description: "Creamy peanut butter jar", price: 5, image: "/images/peanut-butter.jpg" },
    { id: 10, name: "Strawberry Jam", description: "Delicious strawberry jam", price: 6, image: "/images/strawberry-jam.jpg" },
    { id: 11, name: "Butter", description: "Fresh dairy butter", price: 7, image: "/images/butter.jpg" },
    { id: 12, name: "Cheese", description: "Cheddar cheese block", price: 9, image: "/images/cheese.jpg" },
    { id: 13, name: "Rice", description: "1kg White Rice Pack", price: 3, image: "/images/rice.jpg" },
    { id: 14, name: "Pasta", description: "Italian pasta pack", price: 4, image: "/images/pasta.jpg" },
    { id: 15, name: "Tomato Sauce", description: "Rich tomato sauce bottle", price: 5, image: "/images/tomato-sauce.jpg" },
    { id: 16, name: "Salt", description: "1kg table salt pack", price: 2, image: "/images/salt.jpg" },
    { id: 17, name: "Sugar", description: "1kg white sugar pack", price: 3, image: "/images/sugar.jpg" },
    { id: 18, name: "Cooking Oil", description: "1L Sunflower cooking oil", price: 8, image: "/images/cooking-oil.jpg" },
    { id: 19, name: "Tea", description: "Premium tea bag pack", price: 5, image: "/images/tea.jpg" },
    { id: 20, name: "Coffee", description: "Rich roasted coffee jar", price: 10, image: "/images/coffee.jpg" },
    { id: 21, name: "Honey", description: "Organic honey jar", price: 12, image: "/images/honey.jpg" },
    { id: 22, name: "Biscuits", description: "Crunchy chocolate biscuits", price: 4, image: "/images/biscuits.jpg" },
    { id: 23, name: "Canned Tuna", description: "Premium canned tuna", price: 6, image: "/images/canned-tuna.jpg" },
    { id: 24, name: "Yogurt", description: "Plain natural yogurt", price: 4, image: "/images/yogurt.jpg" }
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
