import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Shop</Link>
      </div>
      <div style={styles.right}>
        <Link to="/cart" style={styles.link}>🛒 Cart</Link>
        <Link to="/admin" style={styles.link}>🔑 Admin</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#333",
  },
  left: { fontSize: "20px", color: "white" },
  right: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none", fontSize: "18px" }
};

export default Navbar;
