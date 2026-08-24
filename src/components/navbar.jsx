  import {Link} from 'react-router-dom'

  function Navbar() {
    return (
      <nav className="navbar bg-neutral text-neutral-content px-4">
        
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
          <a className="text-2xl font-bold">
            ShopZone
          </a>
          </Link> 
        </div>

        {/* Search */}
        <div className="flex-none">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-64 bg-white text-black"
            />
          </div>
        </div>

        {/* Account */}
        <div className="ml-4">
          <Link to="/login" className="btn btn-ghost">
            Account
          </Link>
        </div>

        {/* Orders */}
        <div>
          <Link to="/orders" className="btn btn-ghost">
            Orders
          </Link>
        </div>

        {/* Cart */}
        <div>
          <Link to="/cart"className="btn btn-ghost">
            🛒 Cart
          </Link>
        </div>

      </nav>
    )
  }

  export default Navbar