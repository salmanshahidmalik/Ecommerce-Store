import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Shipping Information */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title mb-4">
                Shipping Information
              </h2>

              <form className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="input input-bordered w-full"
                  />
                </div>

                <h2 className="card-title mt-6">
                  Payment Method
                </h2>

                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select payment method
                  </option>
                  <option>Cash on Delivery</option>
                  <option>Credit / Debit Card</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">
                Order Summary
              </h2>

              <div className="flex justify-between mt-4">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>$0.00</span>
              </div>

              <button className="btn btn-primary w-full mt-5">
                Place Order
              </button>

              <Link
                to="/cart"
                className="btn btn-outline w-full"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;