import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">

      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">

        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-primary transition hover:opacity-80 sm:text-3xl"
          >
            ShopZone
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex">
          <div className="form-control">
            <label className="input input-bordered flex w-64 items-center gap-2 rounded-full border-base-300 bg-base-200 focus-within:border-primary lg:w-80">
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
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">

          {/* Account */}
          <Link
            to="/login"
            className="btn btn-ghost rounded-full transition hover:bg-primary/10 hover:text-primary"
          >
            👤 Account
          </Link>

          {/* Orders */}
          <Link
            to="/orders"
            className="btn btn-ghost rounded-full transition hover:bg-primary/10 hover:text-primary"
          >
            📦 Orders
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="btn btn-primary rounded-full px-5 shadow-md transition hover:scale-105"
          >
            🛒 Cart
          </Link>
        </div>

        {/* Mobile Cart */}
        <div className="flex items-center gap-2 md:hidden">

          <Link
            to="/cart"
            className="btn btn-primary btn-sm rounded-full"
            aria-label="Shopping cart"
          >
            🛒
          </Link>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >
              <li>
                <Link to="/">🏠 Home</Link>
              </li>

              <li>
                <Link to="/products">🛍️ Products</Link>
              </li>

              <li>
                <Link to="/login">👤 Account</Link>
              </li>

              <li>
                <Link to="/orders">📦 Orders</Link>
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