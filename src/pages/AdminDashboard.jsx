import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Users</div>
          <div className="stat-value">1,240</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Sellers</div>
          <div className="stat-value">86</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Products</div>
          <div className="stat-value">520</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Orders</div>
          <div className="stat-value">3,420</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/admin/users" className="btn btn-primary">Users</Link>
        <Link to="/admin/sellers" className="btn btn-secondary">Sellers</Link>
        <Link to="/admin/products" className="btn btn-outline">Products</Link>
        <Link to="/admin/orders" className="btn btn-outline">Orders</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;