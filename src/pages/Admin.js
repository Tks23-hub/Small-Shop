import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../styles/Admin.css";

function Admin() {
  const { products, setProducts, addProduct } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState("add");
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState(null);
  
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProduct = Object.fromEntries(formData.entries());
    newProduct.id = Number(newProduct.id);
    newProduct.price = Number(newProduct.price);
    addProduct(newProduct);
    event.target.reset();
  };

  const handleSearch = () => {
    const id = Number(productId);
    const product = products.find((p) => p.id === id);
    if (product) {
      setProductData(null); 
      setTimeout(() => {
        setProductData({ ...product });
      }, 0);
    } else {
      setProductData(null);
    }
  };

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedProduct = Object.fromEntries(formData.entries());
    updatedProduct.id = Number(productData.id); 
    updatedProduct.price = Number(updatedProduct.price);
    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p );
    setProducts(updatedProducts);
    setProductData(null);
    setProductId("");
  };
  return (
    <div className="admin-container">
      <div className="admin-content">
        {selectedOption === "add" && (
          <div className="admin-form-container">
            <form onSubmit={handleAddProduct} className="admin-form">
              <label>ID:</label>
              <input type="text" name="id" required />
              <label>Name:</label>
              <input type="text" name="name" required />
              <label>Price:</label>
              <input type="text" name="price" required />
              <label>Description:</label>
              <input type="text" name="description" required />
              <label>Image URL:</label>
              <input type="text" name="image" required />
              <button type="submit">Add</button>
            </form>
          </div>
        )}

        {selectedOption === "edit" && (
          <div className="admin-form-container">
            <h2>
              Edit Product</h2>
            <div className="edit-button-container">
              <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="search-input"
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            {productData && (
              <form onSubmit={handleUpdateProduct} className="admin-form">
                <label>ID:</label>
                <input type="text" name="id" value={productData.id} readOnly />
                <label>Name:</label>
                <input type="text" name="name" defaultValue={productData.name} required />
                <label>Price:</label>
                <input type="text" name="price" defaultValue={productData.price} required />
                <label>Description:</label>
                <input type="text" name="description" defaultValue={productData.description} required />
                <label>Image URL:</label>
                <input type="text" name="image" defaultValue={productData.image} required />
                <button type="submit">Update</button>
              </form>
            )}
          </div>
        )}
      </div>
      <div className="admin-sidebar">
        <button onClick={() => setSelectedOption("add")}>Add product</button>
        <button className="edit-button" onClick={() => setSelectedOption("edit")}>
    <span>Edit Product</span> 
    <input
      type="text"
      placeholder="Enter ID"
      value={productId}
      onChange={(e) => setProductId(e.target.value)}
      className="search-input"
    />
    <button className="search-btn" onClick={handleSearch}>Search</button>
  </button>
      </div>
    </div>
  );
}

export default Admin;
