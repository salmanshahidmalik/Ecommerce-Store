import { Link } from "react-router-dom";




function SellerDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Products</div>
          <div className="stat-value">24</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Orders</div>
          <div className="stat-value">86</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Sales</div>
          <div className="stat-value">$4,250</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/seller/products" className="btn btn-primary">
          My Products
        </Link>
        <Link to="/seller/products/add" className="btn btn-secondary">
          Add Product
        </Link>
        <Link to="/seller/orders" className="btn btn-outline">
          Orders
        </Link>
        <Link to="/seller/inventory" className="btn btn-outline">
          Inventory
        </Link>
      </div>
    </div>
  );
}

export default SellerDashboard;