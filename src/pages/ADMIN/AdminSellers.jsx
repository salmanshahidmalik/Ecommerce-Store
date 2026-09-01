function AdminSellers() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Seller Management</h1>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Business</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>TechStore</td>
                <td>tech@example.com</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td className="space-x-2">
                  <button className="btn btn-sm btn-success">Approve</button>
                  <button className="btn btn-sm btn-error">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminSellers;