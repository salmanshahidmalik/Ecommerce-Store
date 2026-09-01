function SellerProducts() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">My Products</h1>
          <button className="btn btn-primary">Add Product</button>
        </div>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>Wireless Headphones</td>
                <td>$59.99</td>
                <td>25</td>
                <td>
                  <button className="btn btn-sm btn-outline mr-2">Edit</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default SellerProducts;