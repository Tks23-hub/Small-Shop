import { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductPage({ products }) {
  const { cart = [], setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.box}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} style={styles.button}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Ensures exactly 4 cards per row
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
  },
  box: {
    border: "3px solid black",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "cyan",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s",
    width: "250px",
    height: "auto",
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "5px",
    marginTop: "10px",
  },
  boxHover: {
    transform: "scale(1.05)",
  },
};

export default ProductPage;
