function AdminLogin() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card bg-base-100 w-full max-w-md shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Admin Login</h1>
  
            <input className="input input-bordered w-full mt-5" placeholder="Admin Email" />
            <input
              type="password"
              className="input input-bordered w-full mt-3"
              placeholder="Password"
            />
  
            <button className="btn btn-primary w-full mt-5">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminLogin;