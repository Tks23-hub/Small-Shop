import { useContext } from "react";
import { CartContext } from "../CartContext";
import CheckoutForm from "../components/Checkout";
import "../styles/Checkout.css"; 

function Checkout() {
  const { cart, setCart, orders } = useContext(CartContext);

  const handleCheckout = (formData) => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

   
    cart.forEach((item) => orders.push(item));

    console.log("Orders Array:", orders); 

    
    setCart([]);

   
    alert(`Thank you, ${formData.fullName}! Your order has been placed.`);
    
    
    window.location.href = "/";
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} width="50" />
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
      </div>

      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}

export default Checkout;
