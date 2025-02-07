import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../styles/Admin.css";

function Admin() {
  const { products, setProducts, addProduct } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState(null);

  // ✅ Add Product Function
  const handleAddProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newProduct = {
      id: Number(formData.get("id")), // Ensure ID is a number
      name: formData.get("name"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    addProduct(newProduct);
    alert(`Product "${newProduct.name}" added successfully!`);
    event.target.reset();
  };

  // ✅ Search for Product by ID
  const handleSearch = () => {
    const id = Number(productId); // Convert input to number
    console.log("Searching for product with ID:", id); // Debugging line

    const product = products.find((p) => p.id === id);
    console.log("Product found:", product); // Debugging line

    if (product) {
      setProductData({ ...product }); // ✅ Ensure state updates properly
    } else {
      alert("Product not found.");
      setProductData(null);
    }
  };

  // ✅ Update Product Function
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const updatedProduct = {
      id: productData.id, // Keep same ID
      name: formData.get("name"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    console.log("Updating product:", updatedProduct); // Debugging line

    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );

    setProducts(updatedProducts); // ✅ Correct way to update state
    alert(`Product "${updatedProduct.name}" updated successfully!`);
    setProductData(null);
    setProductId("");
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      {/* ✅ Side Panel with Buttons */}
      <div className="admin-sidebar">
        <button onClick={() => setSelectedOption("add")}>➕ Add Product</button>
        <button onClick={() => setSelectedOption("edit")}>✏️ Edit Product</button>
      </div>

      {/* ✅ Content Section */}
      <div className="admin-content">
        {/* Add Product Form */}
        {selectedOption === "add" && (
          <div className="admin-form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct} className="admin-form">
              <label>Product ID:</label>
              <input type="text" name="id" required />

              <label>Name:</label>
              <input type="text" name="name" required />

              <label>Price:</label>
              <input type="text" name="price" required />

              <label>Description:</label>
              <input type="text" name="description" required />

              <label>Image URL:</label>
              <input type="text" name="image" required />

              <button type="submit">Add Product</button>
            </form>
          </div>
        )}

        {/* Edit Product Section */}
        {selectedOption === "edit" && (
          <div className="admin-form-container">
            <h2>Edit Product</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>

            {productData && (
              <form onSubmit={handleUpdateProduct} className="admin-form">
                <label>Product ID:</label>
                <input type="text" name="id" value={productData.id} readOnly />

                <label>Name:</label>
                <input type="text" name="name" defaultValue={productData.name} required />

                <label>Price:</label>
                <input type="text" name="price" defaultValue={productData.price} required />

                <label>Description:</label>
                <input type="text" name="description" defaultValue={productData.description} required />

                <label>Image URL:</label>
                <input type="text" name="image" defaultValue={productData.image} required />

                <button type="submit">Update Product</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
