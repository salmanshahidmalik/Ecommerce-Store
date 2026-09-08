import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useState,useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
  
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-3xl font-bold">
          {error}
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