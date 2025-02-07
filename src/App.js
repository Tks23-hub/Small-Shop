import { createBrowserRouter, RouterProvider, Outlet, useParams,  useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect } from "react"; // ✅ Correct!
import Checkout, { action as checkoutAction } from "./pages/Checkout";
import Admin from "./pages/Admin";
import { CartProvider } from "./CartContext";

function RootLayout() {
  const { role } = useParams(); // ✅ Extracts dynamic role parameter
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "admin") {
      navigate("/admin"); // Redirect to admin if role is "admin"
      
    }
  }, [role, navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout />, action: checkoutAction },
      { path: "/admin", element: <Admin /> }, // ✅ Dynamic path "/panel/admin"
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
