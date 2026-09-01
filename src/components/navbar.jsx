import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">

      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">
          ShopZone
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">

        <Link to="/" className="btn btn-ghost">
          Home
        </Link>

        <Link to="/products" className="btn btn-ghost">
          Products
        </Link>

        <Link to="/categories" className="btn btn-ghost">
          Categories
        </Link>

        <Link to="/search" className="btn btn-ghost">
          🔍 Search
        </Link>

        <Link to="/wishlist" className="btn btn-ghost">
          ❤️ Wishlist
        </Link>

        <Link to="/cart" className="btn btn-primary">
          🛒 Cart
        </Link>

        {/* Account Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            👤 Account ▾
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link to="/orders">My Orders</Link>
            </li>

            <li>
              <Link to="/become-seller">
                Become a Seller
              </Link>
            </li>

            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-xl"
        >
          ☰
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-50 w-56 p-2 shadow"
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/categories">Categories</Link>
          </li>

          <li>
            <Link to="/search">Search</Link>
          </li>

          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/orders">My Orders</Link>
          </li>

          <li>
            <Link to="/become-seller">
              Become a Seller
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;