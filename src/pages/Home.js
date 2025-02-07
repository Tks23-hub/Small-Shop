import { useContext } from "react";
import { CartContext } from "../CartContext";
import ProductPage from "../components/ProductPage";
import "../styles/Home.css"; 

function Home() {
  const { products } = useContext(CartContext); 

  return (
    <div className="home-container">
      <h1 className="shop-title">Welcome to My Shop</h1>
      <ProductPage products={products} />
    </div>
  );
}

export default Home;
