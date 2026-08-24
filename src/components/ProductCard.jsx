import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-md">

      <figure className="px-4 pt-4">
        <img
          src={product.images}
          alt={product.name}
          className="h-48 w-full object-contain"
        />
      </figure>

      <div className="card-body">

        <Link to={`/products/${product.id}`}>
          <h2 className="card-title">
            {product.name}
          </h2>
        </Link>

        <p className="text-lg font-semibold">
          ${product.price}


        </p>
        <p className="text-lg font-semibold ">
          
          {product.discount}"% OFF"
        </p>

        <p className="text-sm text-gray-500">
          ⭐ {product.rating}
        </p>

        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full bg-gray-900 hover:bg-amber-600">
            Add to Cart
          </button>

          <button className="btn btn-primary w-full bg-gray-900 hover:bg-red-600">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard