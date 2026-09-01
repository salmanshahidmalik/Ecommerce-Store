import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import Register from './pages/Register'
import Footer from './components/Footer'
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";

import BecomeSeller from "./pages/BecomeSeller";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProducts from "./pages/SellerProducts";
import AddProduct from "./pages/AddProduct";
import SellerOrders from "./pages/SellerOrders";
import Inventory from "./pages/Inventory";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminSellers from "./pages/AdminSellers";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orderconfirmation" element={<OrderConfirmation />} />

        <Route path="/login" element={<Login />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/products/add" element={<AddProduct />} />
        <Route path="/seller/orders" element={<SellerOrders />} />
        <Route path="/seller/inventory" element={<Inventory />} />

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