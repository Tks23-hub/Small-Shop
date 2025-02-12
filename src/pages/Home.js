import { useContext } from "react";
import { CartContext } from "../CartContext";
import ProductPage from "../components/ProductPage";
import "../styles/Home.css";

function Home() {
  const { products } = useContext(CartContext);
  return (
    <div className="home-container">
      <div className="product-scroll-container">
        <ProductPage products={products} />
      </div>
    </div>
  );
}

export default Home;
