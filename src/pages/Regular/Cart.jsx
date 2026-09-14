import { Link } from "react-router-dom";
import cartStore from "../../store/cartStore";

function Cart() {
  const cart = cartStore((state) => state.cart);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);
  const removeFromCart = cartStore((state) => state.removeFromCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">Your Cart</h1>
        <p className="mb-6 text-base-content/60">
          Your cart is empty.
        </p>

        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-md"
            >
              <div className="card-body flex-row items-center gap-4">

                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    {item.name}
                  </h2>

                  <p className="text-primary font-semibold">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="btn btn-sm btn-outline"
                    >
                      −
                    </button>

                    <span className="min-w-8 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="btn btn-sm btn-outline"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-sm btn-error btn-outline"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="card h-fit bg-base-100 shadow-md">
          <div className="card-body">

            <h2 className="card-title">
              Order Summary
            </h2>

            <div className="divider my-1"></div>

            <div className="flex justify-between">
              <span>Items</span>
              <span>
                {cart.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="mt-2 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="btn btn-primary mt-4 w-full"
            >
              Proceed to Checkout
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;  