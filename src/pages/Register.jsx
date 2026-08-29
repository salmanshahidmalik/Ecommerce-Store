import { Link } from "react-router-dom"; 
import { useState } from "react";
function Register() {
  const [Fullname, setFullname] = useState("");
  const [PhoneNUM, setPhoneNUM] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [loginsuccess, setloginsuccess] = useState("")

  const [FullnameError, setFullnameError] = useState("");
  const [PhoneNUMError, setPhoneNUMError] = useState("");
      const [Emailerror, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [CpasswordError, setCPasswordError] = useState("");

  const handleREG = (e) => {
    e.preventDefault();
  
    setFullnameError("");
    setPhoneNUMError("");
    setEmailError("");
    setPasswordError("");
    setCPasswordError("");

    if (!Fullname) {
      setFullnameError("Please Enter Your Name");
    } if (!PhoneNUM) {
      setPhoneNUMError("Please Enter Your Phone Number");
    } if (!CPassword) {
      setCPasswordError("Please Enter Your Password Again.");
    }if (!Email) {
      setEmailError("Please Enter Your Email");
    }if (!Password) {
      setPasswordError("Please Please Enter Your Password.");
    }
    if (
      Fullname &&
      PhoneNUM &&
      Email &&
      Password &&
      CPassword &&
      Password === CPassword
    ) {
      const user = {
        Fullname: Fullname,
        PhoneNUM: PhoneNUM,
        Email: Email,
        Password: Password
      }
      localStorage.setItem("user", JSON.stringify(user));
      setloginsuccess("Registration Successful !!!");
    }
    
  };




  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mb-4">
            Join ShopZone and start shopping smarter.
          </p>

          <form className="space-y-4"onSubmit={handleREG}>
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              {FullnameError &&(
                <p className="text-error text-sm mt-1">
                  {FullnameError}
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Phone</span>
              </label>

              <input
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="input input-bordered w-full"
                value={PhoneNUM}
                onChange={(e) => setPhoneNUM(e.target.value)}
              />
              {PhoneNUMError &&(
                <p className="text-error text-sm mt-1">
                  {PhoneNUMError}
                </p>
              )}
            </div>


            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
                            {Emailerror &&(
                <p className="text-error text-sm mt-1">
                  {Emailerror}
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError &&(
                <p className="text-error text-sm mt-1">
                  {passwordError}
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
                value={CPassword}
                onChange={(e) => setCPassword(e.target.value) }
              />
              {CpasswordError &&(
                <p className="text-error text text-sm mt-1">
                {CpasswordError}
                </p>
              )}

              {loginsuccess &&(
                <p className="text-success text-sm mt-1">
                  {loginsuccess}
                </p>
              )}

            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="divider">OR</div>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;