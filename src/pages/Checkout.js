import { useContext, useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom"; 
import { CartContext } from "../CartContext";
import "../styles/Checkout.css";

let orders = [];
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); 
  return {
    customer: data.fullName,
    address: data.address,
    idNumber: data.idNumber,
  };
}

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const orderData = useActionData();
  const navigate = useNavigate(); 
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (orderData && cart.length > 0) {
      orders.push({ customer: orderData.customer, items: [...cart] });
      setCart([]);
      console.log(orders);
      navigate("/");
    }
  }, [orderData, cart, setCart, navigate]);

  return (
    <div className="checkout-container">
      <h1>Register</h1>
      <div className="cart-summary">
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                 
                  {item.name} - ₪{item.price} <br></br>
                  {item.description}
                  
                </li>
              ))}
            </ul>
            <h3 className="checkout-total">Your Total: ₪{totalAmount}</h3> 
          </>
      </div>
      <Form method="post" className="checkout-form">
        <h2>Checkout Details</h2>
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
