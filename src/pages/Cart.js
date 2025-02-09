import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();


  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
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
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

     
      <h3 className="cart-total">Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>

     
      <button className="checkout-button" onClick={() => navigate("/checkout")}>
        Go to Checkout
      </button>
    </div>
  );
}

export default Cart;
