import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item.id === productId);
      if (indexToRemove !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(indexToRemove, 1); 
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₪{item.price}</span>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">
        Total: ₪{cart.reduce((total, item) => total + item.price, 0)}
      </h3>
      <button className="checkout-button" onClick={() => navigate("/checkout")}>
        Go to Checkout
      </button>
    </div>
  );
}

export default Cart;
