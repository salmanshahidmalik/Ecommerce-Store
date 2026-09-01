function AdminProducts() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Product Management</h1>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>Wireless Headphones</td>
                <td>TechStore</td>
                <td>$59.99</td>
                <td>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminProducts;