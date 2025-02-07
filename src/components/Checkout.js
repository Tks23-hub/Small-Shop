import { useState } from "react";
import "../styles/Checkout.css"; // Import styles

function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout Details</h2>

      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label>ID Number:</label>
      <input
        type="text"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        required
      />

      <button type="submit">Complete Purchase</button>
    </form>
  );
}

export default CheckoutForm;
