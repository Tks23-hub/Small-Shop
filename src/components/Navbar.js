import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Store</Link>
      </div>
      <div style={styles.right}>
        <Link to="/cart" style={styles.link}> My Cart</Link>
        <Link to="/admin" style={styles.link}>Admin Page</Link>
      </div>
    </nav>
  );
}
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "orange",
  },
  left: { fontSize: "20px", color: "white" },
  right: { display: "flex", gap: "15px" },
  link: { color: "black", textDecoration: "none", fontSize: "18px" }
};

export default Navbar;
