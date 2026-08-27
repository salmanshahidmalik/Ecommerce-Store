function Orders() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
  
        <h1 className="text-3xl font-bold mb-8">
          My Orders
        </h1>
  
        <div className="card bg-base-100 shadow-md mb-6">
          <div className="card-body">
  
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
  
              <div>
                <h2 className="card-title">
                  Order #SZ-10001
                </h2>
  
                <p className="text-gray-500">
                  Placed on August 27, 2026
                </p>
              </div>
  
              <div>
                <div className="badge badge-success">
                  Confirmed
                </div>
              </div>
  
            </div>
  
            <div className="divider"></div>
  
            <div className="flex justify-between">
              <span>Items</span>
              <span>2</span>
            </div>
  
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold">
                $149.98
              </span>
            </div>
  
            <button className="btn btn-outline mt-4">
              View Order Details
            </button>
  
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Orders;