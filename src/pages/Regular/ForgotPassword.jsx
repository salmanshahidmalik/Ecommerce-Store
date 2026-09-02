import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Forgot Password?
          </h1>

          <p className="text-center text-gray-500 mb-4">
            Enter your email and we'll help you reset your password.
          </p>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-5">
            <Link to="/login" className="link link-primary">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;