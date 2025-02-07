import "../styles/Cart.css";
import ShoppingCart from "../components/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <ShoppingCart />
      <button className="checkout-button" onClick={() => navigate("/checkout")}>
        Go to Checkout
      </button>
    </div>
  );
}

export default Cart;
