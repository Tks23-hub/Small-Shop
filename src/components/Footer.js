import "../styles/Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Small Shop. All Rights Reserved.</p>
      <p>
        <a href="/">Home</a> | <a href="/cart">Cart</a> | <a href="/checkout">Checkout</a>
      </p>
    </footer>
  );
}

export default Footer;
