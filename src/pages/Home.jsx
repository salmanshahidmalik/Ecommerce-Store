import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="bg-base-200">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-10 md:py-16">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Welcome to ShopZone
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              We Shop
              <span className="text-primary"> Smarter.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base text-base-content/70 sm:mt-6 sm:text-lg">
              Discover quality products, amazing deals, and everything
              you need in one place.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/products"
                className="btn btn-primary w-full sm:w-auto"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="btn btn-outline w-full sm:w-auto"
              >
                View Deals
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={featuredProducts[0]?.images}
              alt={featuredProducts[0]?.name}
              className="h-56 w-full max-w-sm object-contain sm:h-72 md:h-96"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Shop by Category
          </h2>

          <p className="mt-2 text-sm text-base-content/60 sm:text-base">
            Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">

          <Link
            to="/products"
            className="card bg-violet-50 p-4 text-center transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-3xl sm:text-4xl">💻</div>

            <h3 className="mt-3 text-sm font-semibold text-violet-700 sm:text-base">
              Computers
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-cyan-50 p-4 text-center transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-3xl sm:text-4xl">🎧</div>

            <h3 className="mt-3 text-sm font-semibold text-cyan-700 sm:text-base">
              Electronics
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-orange-50 p-4 text-center transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-3xl sm:text-4xl">🎮</div>

            <h3 className="mt-3 text-sm font-semibold text-orange-700 sm:text-base">
              Gaming
            </h3>
          </Link>

          <Link
            to="/products"
            className="card bg-emerald-50 p-4 text-center transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-3xl sm:text-4xl">⌚</div>

            <h3 className="mt-3 text-sm font-semibold text-emerald-700 sm:text-base">
              Wearables
            </h3>
          </Link>

        </div>
      </section>

      {/* Today's Deals */}
      <section className="bg-base-200 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                🔥 Today's Deals
              </h2>

              <p className="mt-2 text-sm text-base-content/60 sm:text-base">
                Grab them before they're gone.
              </p>
            </div>

            <Link
              to="/products"
              className="link link-primary self-start sm:self-auto"
            >
              View All
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

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
                    className="h-40 w-full object-contain sm:h-48"
                  />

                </figure>

                <div className="card-body p-4 sm:p-5">

                  <Link to={`/products/${product.id}`}>
                    <h2 className="card-title text-base hover:text-primary sm:text-lg">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="text-lg font-bold text-primary">
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
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">

        <div className="mb-6 sm:mb-8">

          <h2 className="text-2xl font-bold sm:text-3xl">
            ⭐ Best Sellers
          </h2>

          <p className="mt-2 text-sm text-base-content/60 sm:text-base">
            Products our customers love.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

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
                  className="h-44 w-full object-contain sm:h-40"
                />
              </figure>

              <div className="card-body p-4">

                <h3 className="text-sm font-semibold sm:text-base">
                  {product.name}
                </h3>

                <p className="font-bold text-primary">
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
      <section className="bg-primary py-10 text-primary-content sm:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mb-8 text-center sm:mb-10">

            <h2 className="text-2xl font-bold sm:text-3xl">
              Why ShopZone?
            </h2>

            <p className="mt-2 text-sm opacity-80 sm:text-base">
              Everything you need for a smarter shopping experience.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="text-center">

              <div className="text-4xl">🚚</div>

              <h3 className="mt-3 text-lg font-bold sm:text-xl">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm opacity-80 sm:text-base">
                Get your products delivered quickly and reliably.
              </p>

            </div>

            <div className="text-center">

              <div className="text-4xl">🔒</div>

              <h3 className="mt-3 text-lg font-bold sm:text-xl">
                Secure Shopping
              </h3>

              <p className="mt-2 text-sm opacity-80 sm:text-base">
                Your information and purchases are protected.
              </p>

            </div>

            <div className="text-center">

              <div className="text-4xl">↩️</div>

              <h3 className="mt-3 text-lg font-bold sm:text-xl">
                Easy Returns
              </h3>

              <p className="mt-2 text-sm opacity-80 sm:text-base">
                Shop confidently with our simple return process.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">

        <h2 className="text-2xl font-bold sm:text-3xl">
          Stay in the loop
        </h2>

        <p className="mt-3 text-sm text-base-content/60 sm:text-base">
          Get the latest deals, new products, and ShopZone updates.
        </p>

        <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;