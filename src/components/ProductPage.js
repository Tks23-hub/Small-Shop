import { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/ProductPage.css";

function ProductPage({ products }) {
  const { cart = [], setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-box">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₪{product.price}</p>
          <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
