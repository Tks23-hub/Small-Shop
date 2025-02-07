import { useContext } from "react";
import { CartContext } from "../CartContext";

function ShoppingCart() {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width="50" />
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
    </div>
  );
}

export default ShoppingCart;
