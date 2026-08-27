```jsx
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-base-200 px-6 py-12">

      <div className="card w-full max-w-md bg-base-100 shadow-xl">

        <div className="card-body">

          {/* Heading */}
          <div className="mb-4 text-center">

            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-base-content/60">
              Login to your ShopZone account
            </p>

          </div>


          {/* Email */}
          <fieldset className="fieldset">

            <legend className="fieldset-legend">
              Email Address
            </legend>

            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email"
            />

          </fieldset>


          {/* Password */}
          <fieldset className="fieldset">

            <legend className="fieldset-legend">
              Password
            </legend>

            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />

          </fieldset>


          {/* Remember + Forgot */}
          <div className="mt-2 flex items-center justify-between">

            <label className="flex cursor-pointer items-center gap-2">

              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <span className="text-sm">
                Remember me
              </span>

            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>

          </div>


          {/* Login Button */}
          <button className="btn btn-primary mt-6 w-full">
            Login
          </button>


          {/* Divider */}
          <div className="divider">
            OR
          </div>


          {/* Google */}
          <button className="btn btn-outline w-full">
            Continue with Google
          </button>


          {/* Register */}
          <p className="mt-4 text-center text-sm">

            Don't have an account?

            <Link
              to="/register"
              className="ml-1 font-semibold text-primary hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
```
