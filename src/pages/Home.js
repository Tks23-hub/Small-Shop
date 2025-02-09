import { useContext } from "react";
import { CartContext } from "../CartContext";
import ProductPage from "../components/ProductPage";
import "../styles/Home.css";

function Home() {
  const { products } = useContext(CartContext);

  return (
    <div className="home-container">
      <h1 className="shop-title">Supermarket</h1>
      {/* Centered scrollable product section */}
      <div className="product-scroll-container">
        <ProductPage products={products} />
      </div>
    </div>
  );
}

export default Home;
