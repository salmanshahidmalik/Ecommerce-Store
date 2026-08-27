import { Link } from "react-router-dom";
import products from "../data/products";

function Wishlist() {

  const wishlist = products.slice(2, 5);


  return (

    <div className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          My Wishlist ♡
        </h1>

        <p className="mt-2 text-base-content/60">
          Products you've saved for later.
        </p>

      </div>


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {wishlist.map((product) => (

          <div
            key={product.id}
            className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >

            <figure className="relative p-4">

              <button className="btn btn-circle btn-sm absolute right-4 top-4">
                ♥
              </button>

              <img
                src={product.images[0]}
                alt={product.name}
                className="h-52 w-full object-contain"
              />

            </figure>


            <div className="card-body">

              <Link to={`/products/${product.id}`}>

                <h2 className="card-title hover:text-primary">
                  {product.name}
                </h2>

              </Link>

              <p className="text-xl font-bold">
                ${product.price}
              </p>

              <p className="text-sm">
                ⭐ {product.rating} ({product.reviews})
              </p>


              <div className="card-actions mt-3">

                <button className="btn btn-primary w-full">
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;