import { Link } from "react-router-dom";
import products from "../../data/products";

function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  const categories = [
    {
      name: "Computers",
      subtitle: "Power your productivity",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Electronics",
      subtitle: "Upgrade your everyday",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Gaming",
      subtitle: "Play without limits",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Wearables",
      subtitle: "Technology on you",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-base-100">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-neutral text-white">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        {/* Decorative gradients */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              New season collection is here
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Shop
              <span className="block text-primary">
                Smarter.
              </span>
              Live Better.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              Discover premium technology, everyday essentials and
              incredible deals — all carefully selected for the way
              you live.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/products"
                className="btn btn-primary btn-lg rounded-full px-8 shadow-xl transition hover:scale-105"
              >
                Explore Products
                <span>→</span>
              </Link>

              <Link
                to="/products"
                className="btn btn-outline btn-lg rounded-full border-white/40 bg-white/5 px-8 text-white backdrop-blur-md transition hover:scale-105 hover:border-white hover:bg-white/10"
              >
                View Deals
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-white/50">Happy Customers</p>
              </div>

              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-white/50">Premium Products</p>
              </div>

              <div>
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-sm text-white/50">Customer Rating</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
              Shop by category
            </h2>

            <p className="mt-3 max-w-xl text-base-content/60">
              Find everything you need across our carefully curated
              collections.
            </p>
          </div>

          <Link
            to="/products"
            className="font-semibold text-primary hover:underline"
          >
            View all categories →
          </Link>

        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <Link
              key={category.name}
              to="/products"
              className="group relative h-80 overflow-hidden rounded-3xl"
            >

              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">

                <p className="text-sm text-white/70">
                  {category.subtitle}
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  {category.name}
                </h3>

                <span className="mt-3 inline-block text-sm font-semibold opacity-0 transition group-hover:opacity-100">
                  Explore collection →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          DEALS
      ===================================================== */}
      <section className="bg-base-200 py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 flex items-end justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Limited time
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-5xl">
                Today's deals
              </h2>

              <p className="mt-3 text-base-content/60">
                Exceptional products. Exceptional prices.
              </p>
            </div>

            <Link
              to="/products"
              className="hidden font-semibold text-primary sm:block"
            >
              View all →
            </Link>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product) => (

              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">

                  <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    {product.discount}% OFF
                  </div>

                  <button
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-base-100 shadow-md transition hover:scale-110"
                    aria-label="Add to wishlist"
                  >
                    ♡
                  </button>

                  <img
                    src={product.images}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                  />

                </div>


                <div className="p-5">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-yellow-500">
                      ★★★★★
                    </span>

                    <span className="text-xs text-base-content/50">
                      {product.reviews} reviews
                    </span>
                  </div>


                  <Link to={`/products/${product.id}`}>

                    <h3 className="line-clamp-2 min-h-[48px] font-semibold transition hover:text-primary">
                      {product.name}
                    </h3>

                  </Link>


                  <div className="mt-4 flex items-center justify-between">

                    <div>
                      <span className="text-2xl font-black text-primary">
                        ${product.price}
                      </span>

                      <span className="ml-2 text-sm text-base-content/40 line-through">
                        $
                        {(
                          product.price /
                          (1 - product.discount / 100)
                        ).toFixed(0)}
                      </span>
                    </div>

                  </div>


                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary mt-5 w-full rounded-xl"
                  >
                    View Product
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROMOTIONAL BANNER
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-neutral text-white">

          <img
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1800&q=90"
            alt="Modern technology setup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

          <div className="relative flex min-h-[420px] items-center p-8 sm:p-12 lg:p-16">

            <div className="max-w-xl">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Upgrade your setup
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
                Technology designed for your lifestyle.
              </h2>

              <p className="mt-5 text-white/65">
                Discover the latest devices, accessories and smart
                technology built to make every day better.
              </p>

              <Link
                to="/products"
                className="btn btn-primary mt-8 rounded-full px-8"
              >
                Explore Collection →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BEST SELLERS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Customer favorites
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-5xl">
            Best sellers
          </h2>

          <p className="mt-3 text-base-content/60">
            The products everyone is talking about.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {bestSellers.map((product) => (

            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-64 items-center justify-center overflow-hidden bg-base-200 p-6">

                <img
                  src={product.images}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                />

              </div>


              <div className="p-5">

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-500">
                    ★ {product.rating}
                  </span>

                  <span className="text-base-content/40">
                    ({product.reviews})
                  </span>
                </div>


                <h3 className="mt-3 line-clamp-2 min-h-[48px] font-semibold">
                  {product.name}
                </h3>


                <p className="mt-4 text-2xl font-black text-primary">
                  ${product.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY SHOPZONE
      ===================================================== */}
      <section className="bg-neutral py-20 text-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              The ShopZone difference
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Shopping made better.
            </h2>

            <p className="mt-4 text-white/50">
              Everything we do is designed around making your
              shopping experience simple, secure and enjoyable.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-2xl">
                🚚
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Fast & Reliable
              </h3>

              <p className="mt-3 text-white/50">
                Get your orders delivered quickly with reliable
                shipping and real-time updates.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-2xl">
                🔒
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Secure Shopping
              </h3>

              <p className="mt-3 text-white/50">
                Your personal information and purchases are
                protected with secure technology.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-2xl">
                ↩
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Easy Returns
              </h3>

              <p className="mt-3 text-white/50">
                Shop confidently knowing that returning products
                is simple and hassle-free.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-content sm:p-12 lg:p-16">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">
                Stay ahead
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Get the best deals in your inbox.
              </h2>

              <p className="mt-4 opacity-70">
                Be the first to know about new products,
                exclusive offers and limited-time deals.
              </p>

            </div>


            <div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="input input-lg w-full border-0 bg-white text-black"
                />

                <button className="btn btn-neutral btn-lg">
                  Subscribe
                </button>

              </div>

              <p className="mt-3 text-xs opacity-60">
                No spam. Unsubscribe anytime.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;