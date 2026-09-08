import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = () => {
    setLoading(true);
    setError("");

    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load products. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Products
      </h1>

      {loading ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>

          <h2 className="mt-6 text-xl font-semibold">
            Loading Products
          </h2>

          <p className="mt-2 text-sm text-base-content/60">
            Preparing the best products for you...
          </p>
        </div>
      ) : error ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center">
          <div className="text-5xl">⚠️</div>

          <h2 className="mt-5 text-xl font-semibold">
            Unable to Load Products
          </h2>

          <p className="mt-2 text-sm text-base-content/60">
            {error}
          </p>

          <button
            onClick={fetchProducts}
            className="btn btn-primary mt-6"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;