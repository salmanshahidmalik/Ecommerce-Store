function Inventory() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Inventory</h1>
  
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>Wireless Headphones</td>
                <td>25</td>
                <td><span className="badge badge-success">In Stock</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Inventory;