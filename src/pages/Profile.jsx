function Profile() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
  
        <div className="card bg-base-100 shadow-md">
          <div className="card-body space-y-4">
            <input className="input input-bordered w-full" placeholder="Full Name" />
            <input className="input input-bordered w-full" placeholder="Email" />
            <input className="input input-bordered w-full" placeholder="Phone Number" />
            <input className="input input-bordered w-full" placeholder="Address" />
  
            <button className="btn btn-primary">Save Changes</button>
            <button className="btn btn-error btn-outline">Logout</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;