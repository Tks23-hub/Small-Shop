import { useContext, useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom"; 
import { CartContext } from "../CartContext";
import "../styles/Checkout.css";

export function action({ request }) {
  return request.formData().then((formData) => {
    return {
      customer: formData.get("fullName"),
      address: formData.get("address"),
      idNumber: formData.get("idNumber"),
    };
  });
}

function Checkout() {
  const { cart, setCart, orders, setOrders } = useContext(CartContext);
  const orderData = useActionData();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (orderData && cart.length > 0) {
      
      setOrders([...orders, { customer: orderData.customer, items: [...cart] }]);

     
      console.log("Updated Orders Array:", orders);

      
      setCart([]);

      
      alert(`Thank you, ${orderData.customer}! Your order has been placed.`);

      
      navigate("/");
    }
  }, [orderData, cart, setCart, setOrders, orders, navigate]); 

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
      </div>

      <Form method="post" className="checkout-form">
        <h2>Checkout Details</h2>

        <label>Full Name:</label>
        <input type="text" name="fullName" required />

        <label>Address:</label>
        <input type="text" name="address" required />

        <label>ID Number:</label>
        <input type="text" name="idNumber" required />

        <button type="submit">Complete Purchase</button>
      </Form>
    </div>
  );
}

export default Checkout;
