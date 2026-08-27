import { Link } from "react-router-dom";
import products from "../data/products";

function Cart() {

  const cartItems = products.slice(0, 2);


  const subtotal = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  const shipping = 10;

  const total = subtotal + shipping;


  return (

    <div className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Shopping Cart
      </h1>

      <p className="mt-2 text-base-content/60">
        Review your items before checkout.
      </p>


      <div className="mt-10 grid gap-8 lg:grid-cols-3">


        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">

          {cartItems.map((product) => (

            <div
              key={product.id}
              className="card bg-base-100 shadow-md"
            >

              <div className="card-body">

                <div className="flex flex-col gap-6 sm:flex-row">


                  {/* Image */}
                  <div className="rounded-lg bg-base-200 p-4">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-32 w-32 object-contain"
                    />

                  </div>


                  {/* Info */}
                  <div className="flex-1">

                    <Link
                      to={`/products/${product.id}`}
                      className="text-xl font-bold hover:text-primary"
                    >
                      {product.name}
                    </Link>

                    <p className="mt-2 text-sm text-base-content/60">
                      {product.category}
                    </p>

                    <p className="mt-3 text-xl font-bold">
                      ${product.price}
                    </p>


                    {/* Quantity */}
                    <div className="mt-4 flex items-center gap-3">

                      <span>
                        Quantity:
                      </span>

                      <select
                        className="select select-bordered select-sm"
                        defaultValue="1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>

                    </div>

                  </div>


                  {/* Remove */}
                  <div>

                    <button className="btn btn-ghost btn-sm text-error">
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Summary */}
        <div>

          <div className="card bg-base-200 shadow-md">

            <div className="card-body">

              <h2 className="card-title">
                Order Summary
              </h2>


              <div className="mt-4 flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>


              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>


              <div className="divider"></div>


              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>


              <Link
                to="/checkout"
                className="btn btn-primary mt-6 w-full"
              >
                Proceed to Checkout
              </Link>


              <Link
                to="/products"
                className="btn btn-outline mt-2 w-full"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;