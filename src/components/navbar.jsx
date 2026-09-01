import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">

      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">

        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl"
          >
            ShopZone
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex">
          <label className="input input-bordered flex w-64 items-center gap-2 rounded-full bg-base-200 lg:w-80">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 opacity-60"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>

            <input
              type="text"
              placeholder="Search products..."
              className="grow bg-transparent"
            />

          </label>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex ml-4">

          <Link
            to="/products"
            className="btn btn-ghost rounded-full hover:bg-primary/10 hover:text-primary"
          >
            Products
          </Link>

          <Link
            to="/categories"
            className="btn btn-ghost rounded-full hover:bg-primary/10 hover:text-primary"
          >
            Categories
          </Link>

          <Link
            to="/wishlist"
            className="btn btn-ghost rounded-full hover:bg-primary/10 hover:text-primary"
          >
            ❤️
          </Link>

          <Link
            to="/orders"
            className="btn btn-ghost rounded-full hover:bg-primary/10 hover:text-primary"
          >
            📦
          </Link>

          {/* Account */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-full hover:bg-primary/10 hover:text-primary"
            >
              👤 Account
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl"
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
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="btn btn-primary ml-1 rounded-full px-5 shadow-md hover:scale-105"
          >
            🛒 Cart
          </Link>

        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">

          <Link
            to="/cart"
            className="btn btn-primary btn-sm rounded-full"
          >
            🛒
          </Link>

          <div className="dropdown dropdown-end">

            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >

              <li>
                <Link to="/">🏠 Home</Link>
              </li>

              <li>
                <Link to="/products">🛍️ Products</Link>
              </li>

              <li>
                <Link to="/categories">📂 Categories</Link>
              </li>

              <li>
                <Link to="/wishlist">❤️ Wishlist</Link>
              </li>

              <li>
                <Link to="/orders">📦 Orders</Link>
              </li>

              <li>
                <Link to="/profile">👤 Profile</Link>
              </li>

              <li>
                <Link to="/become-seller">🏪 Become a Seller</Link>
              </li>

              <li>
                <Link to="/login">🔐 Login</Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Mobile Search */}
      <div className="border-t border-base-200 px-4 py-3 md:hidden">

        <label className="input input-bordered flex w-full items-center gap-2 rounded-full bg-base-200">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 opacity-60"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>

          <input
            type="text"
            placeholder="Search products..."
            className="grow bg-transparent"
          />

        </label>

      </div>

    </nav>
  );
}

export default Navbar;