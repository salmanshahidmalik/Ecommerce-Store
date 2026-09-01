function AdminUsers() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td><span className="badge badge-success">Active</span></td>
                <td><button className="btn btn-sm btn-error">Suspend</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminUsers;