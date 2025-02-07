import { useContext } from "react";
import { CartContext } from "../CartContext";
import CheckoutForm from "../components/Checkout";
import "../styles/Checkout.css"; // Import styles

function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = (formData) => {
    console.log("Order Details:", formData);
    console.log("Cart Items:", cart);

    alert(`Thank you, ${formData.fullName}! Your order has been placed.`);
    setCart([]); // Clear the cart after checkout
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
