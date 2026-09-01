function AddProduct() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>
  
        <div className="card bg-base-100 shadow-md">
          <div className="card-body space-y-4">
            <input className="input input-bordered w-full" placeholder="Product Name" />
            <input className="input input-bordered w-full" placeholder="Price" />
            <input className="input input-bordered w-full" placeholder="Stock Quantity" />
  
            <select className="select select-bordered w-full">
              <option disabled selected>Category</option>
              <option>Electronics</option>
              <option>Gaming</option>
              <option>Computers</option>
              <option>Accessories</option>
            </select>
  
            <input type="file" className="file-input file-input-bordered w-full" />
  
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Product Description"
            />
  
            <button className="btn btn-primary">Add Product</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddProduct;