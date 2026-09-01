function BecomeSeller() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Become a Seller</h1>
        <p className="text-gray-500 mb-8">
          Start selling your products on ShopZone.
        </p>
  
        <div className="card bg-base-100 shadow-md">
          <div className="card-body space-y-4">
            <input className="input input-bordered w-full" placeholder="Full Name" />
            <input className="input input-bordered w-full" placeholder="Business Name" />
            <input className="input input-bordered w-full" placeholder="Email" />
            <input className="input input-bordered w-full" placeholder="Phone Number" />
            <input className="input input-bordered w-full" placeholder="Business Address" />
  
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about your business"
            />
  
            <button className="btn btn-primary">Submit Application</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BecomeSeller;