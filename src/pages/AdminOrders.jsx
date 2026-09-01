function AdminOrders() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Order Management</h1>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>#SZ-10001</td>
                <td>John Doe</td>
                <td>$149.98</td>
                <td><span className="badge badge-success">Confirmed</span></td>
                <td>
                  <button className="btn btn-sm btn-outline">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminOrders;