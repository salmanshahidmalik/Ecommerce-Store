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
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

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

        <Route path="/login" element={<Login />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App