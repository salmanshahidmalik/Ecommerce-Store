import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">

          <div className="text-6xl mb-4">
            ✅
          </div>

          <h1 className="text-3xl font-bold">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-3">
            Thank you for shopping with ShopZone.
            Your order has been successfully placed.
          </p>

          <div className="bg-base-200 rounded-lg p-4 mt-5">
            <p>
              <strong>Order Number:</strong> #SZ-10001
            </p>

            <p className="mt-2">
              <strong>Estimated Delivery:</strong> 2-5 business days
            </p>
          </div>

          <div className="card-actions justify-center mt-6">
            <Link
              to="/products"
              className="btn btn-primary"
            >
              Continue Shopping
            </Link>

            <Link
              to="/orders"
              className="btn btn-outline"
            >
              View Orders
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;