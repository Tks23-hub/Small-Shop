import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

//   cart: Holds an array of products currently in the cart.
// setCart: A function used to update the cart when items are added or removed.
// This means the Cart component re-renders whenever cart is modified.


  const navigate = useNavigate();
  
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item.id === productId);
      if (indexToRemove !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(indexToRemove, 1);
        // it finds the products with that id all of them and deletes one  

        return updatedCart;
        // After removing the item, the new cart array (updatedCart) is returned to setCart, updating the state.
        
      }
      return prevCart;
    });
  };

  return (
    <div className="cart-container">
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
               <span className="cart-item-price"> ₪{item.price}</span> <br></br>
                <span className="cart-item-Description">{item.description}</span>
                
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
      <h3 className="cart-total">
        Total: ₪{cart.reduce((total, item) => total + item.price, 0)}
      </h3>
      <button className="checkout-button" onClick={() => navigate("/checkout")}>
        Register
      </button>
    </div>
  );
}

export default Cart;
