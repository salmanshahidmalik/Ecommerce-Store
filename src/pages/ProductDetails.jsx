import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="grid gap-10 md:grid-cols-2">

        {/* Product Image */}
        <div className="rounded-lg bg-base-200 p-6">
          <img
            src={product.images}
            alt={product.name}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-3 text-lg">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          <div className="mt-6">
            <p className="text-3xl font-bold">
              ${product.price}
            </p>

            <p className="mt-2 text-lg text-success">
              {product.discount}% OFF
            </p>
          </div>

          <div className="divider" />

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p className="mt-2">
            <strong>Stock:</strong> {product.stock}
          </p>

          <p className="mt-2">
            <strong>Seller:</strong> {product.seller}
          </p>

          <p className="mt-2">
            <strong>Estimated Delivery:</strong>{" "}
            {product.estimatedDelivery}
          </p>

          <div className="divider" />

          <h2 className="text-2xl font-semibold">
            Description
          </h2>

          <p className="mt-3 text-gray-600">
            {product.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn btn-primary">
              Add to Cart
            </button>

            <button className="btn btn-secondary">
              Buy Now
            </button>

            <button className="btn btn-outline">
              ♡ Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;