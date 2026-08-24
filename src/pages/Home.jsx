
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-base-200">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Welcome to ShopZone
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              We Shop
              <span className="text-primary"> Smarter.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-base-content/70">
              Discover quality products, amazing deals, and everything
              you need in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>

              <Link to="/products" className="btn btn-outline">
                View Deals
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={featuredProducts[0]?.images}
              alt={featuredProducts[0]?.name}
              className="h-80 w-full object-contain md:h-96"
            />
          </div>

        </div>
      </section>


      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>

          <p className="mt-2 text-base-content/60">
            Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          <Link
            to="/products"
            className="card bg-base-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">💻</div>
            <h3 className="mt-3 font-semibold">
              Computers
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-base-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">🎧</div>
            <h3 className="mt-3 font-semibold">
              Electronics
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-base-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">🎮</div>
            <h3 className="mt-3 font-semibold">
              Gaming
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-base-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">⌚</div>
            <h3 className="mt-3 font-semibold">
              Wearables
            </h3>
          </Link>

        </div>
      </section>


      {/* Today's Deals */}
      <section className="bg-base-200 py-14">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                🔥 Today's Deals
              </h2>

              <p className="mt-2 text-base-content/60">
                Grab them before they're gone.
              </p>
            </div>

            <Link
              to="/products"
              className="link link-primary"
            >
              View All
            </Link>
          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product) => (

              <div
                key={product.id}
                className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <figure className="relative p-4">

                  <div className="badge badge-success absolute left-4 top-4 text-white">
                    {product.discount}% OFF
                  </div>

                  <img
                    src={product.images}
                    alt={product.name}
                    className="h-48 w-full object-contain"
                  />

                </figure>

                <div className="card-body">

                  <Link to={`/products/${product.id}`}>
                    <h2 className="card-title hover:text-primary">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">
                      ${product.price}
                    </span>

                    <span className="text-sm text-base-content/50">
                      ⭐ {product.rating}
                    </span>
                  </div>

                  <div className="card-actions mt-3">

                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-secondary btn-sm w-full"
                    >
                      View Product
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Best Sellers */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            ⭐ Best Sellers
          </h2>

          <p className="mt-2 text-base-content/60">
            Products our customers love.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {products.slice(4, 8).map((product) => (

            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <figure className="p-4">
                <img
                  src={product.images}
                  alt={product.name}
                  className="h-40 w-full object-contain"
                />
              </figure>

              <div className="card-body p-4">

                <h3 className="font-semibold">
                  {product.name}
                </h3>

                <p className="font-bold">
                  ${product.price}
                </p>

                <p className="text-sm text-base-content/60">
                  ⭐ {product.rating} ({product.reviews})
                </p>

              </div>

            </Link>

          ))}

        </div>
      </section>


      {/* Why ShopZone */}
      <section className="bg-primary text-primary-content py-14">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">
              Why ShopZone?
            </h2>

            <p className="mt-2 opacity-80">
              Everything you need for a smarter shopping experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="text-center">
              <div className="text-4xl">🚚</div>
              <h3 className="mt-3 text-xl font-bold">
                Fast Delivery
              </h3>
              <p className="mt-2 opacity-80">
                Get your products delivered quickly and reliably.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl">🔒</div>
              <h3 className="mt-3 text-xl font-bold">
                Secure Shopping
              </h3>
              <p className="mt-2 opacity-80">
                Your information and purchases are protected.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl">↩️</div>
              <h3 className="mt-3 text-xl font-bold">
                Easy Returns
              </h3>
              <p className="mt-2 opacity-80">
                Shop confidently with our simple return process.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Stay in the loop
        </h2>

        <p className="mt-3 text-base-content/60">
          Get the latest deals, new products, and ShopZone updates.
        </p>

        <div className="mx-auto mt-6 flex max-w-lg gap-2">

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary">
            Subscribe
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;
