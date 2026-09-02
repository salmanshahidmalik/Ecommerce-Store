import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'

import Home from './pages/Regular/Home'
import Products from './pages/Regular/Products'
import ProductDetails from './pages/Regular/ProductDetails'
import Cart from './pages/Regular/Cart'
import Login from './pages/Regular/Login'
import Wishlist from './pages/Regular/Wishlist'
import Register from './pages/Regular/Register'
import Footer from './components/Footer'
import ForgotPassword from "./pages/Regular/ForgotPassword";
import Checkout from "./pages/Regular/Checkout";
import OrderConfirmation from "./pages/Regular/OrderConfirmation";
import Orders from "./pages/Regular/Orders";
import NotFound from "./pages/Regular/NotFound";
import Search from "./pages/Regular/Search";
import Categories from "./pages/Regular/Categories";
import Profile from "./pages/Regular/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import BecomeSeller from "./pages/SELLER/BecomeSeller";
import SellerDashboard from "./pages/SELLER/SellerDashboard";
import SellerProducts from "./pages/SELLER/SellerProducts";
import AddProduct from "./pages/Regular/AddProduct";
import SellerOrders from "./pages/SELLER/SellerOrders";
import Inventory from "./pages/Regular/Inventory";

import AdminLogin from "./pages/ADMIN/AdminLogin";
import AdminDashboard from "./pages/ADMIN/AdminDashboard";
import AdminUsers from "./pages/ADMIN/AdminUsers";
import AdminSellers from "./pages/ADMIN/AdminSellers";
import AdminProducts from "./pages/ADMIN/AdminProducts";
import AdminOrders from "./pages/ADMIN/AdminOrders";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>  } />

        <Route path="/orderconfirmation" element={<OrderConfirmation />} />

        <Route path="/login" element={<Login />} />

        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/checkout" element={<ProtectedRoute> <Checkout /> </ProtectedRoute>} />

        <Route path="/order-confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />

        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/seller" element={<ProtectedRoute><SellerDashboard /></ProtectedRoute>} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/products/add" element={<AddProduct />} />
        <Route path="/seller/orders" element={<SellerOrders />} />
        <Route path="/seller/inventory" element={<ProtectedRoute><Inventory /></ProtectedRoute>} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/sellers" element={<AdminSellers />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App