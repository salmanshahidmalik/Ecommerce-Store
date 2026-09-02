import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

function Products() {

    return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Products
        
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
          
        ))}
      </div>
    </div>
  );
}

export default Products;