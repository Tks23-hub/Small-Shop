import { useContext } from "react";
// What is useContext?
// It allows us to access a React Context and consume shared state (like a global variable for React components).
// We use it to access the shopping cart state from CartContext.
//Uses the global cart state (CartContext) to allow adding products.
import { CartContext } from "../CartContext";
// This imports CartContext, which is our global cart state provider.

import "../styles/ProductPage.css"; 

function ProductPage({ products }) {
  // ({ products })
// This means products is being received as a prop.
// What is a prop?
// Props (short for "properties") allow parent components to pass data to child components.
// In this case, products is an array of product objects, likely passed from Home.js.
  const { cart = [], setCart } = useContext(CartContext);

//   useContext(CartContext)

// This accesses the global cart state stored inside CartContext.
// { cart = [], setCart }

// We destructure values from CartContext.
// cart contains all products currently in the cart.
// setCart is a function used to update the cart.
// cart = []

// This ensures that if cart is undefined, it defaults to an empty array ([]).
// This prevents errors like "Cannot read property map of undefined."

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-box">
          {/* Why do we need a key?
React needs a unique identifier for each rendered element.
Helps React track changes efficiently.
The id ensures that React doesn’t re-render everything unnecessarily. */}


          <img src={product.image} alt={product.name} className="product-image" />
          {/* alt={product.name}
If the image fails to load, it shows the product’s name as alternative text. */}


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
