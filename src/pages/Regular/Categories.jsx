import { Link } from "react-router-dom";

const categories = [
  "Electronics",
  "Wearables",
  "Computers",
  "Gaming",
  "Accessories",
  "Mobile",
  "Audio",
  "Storage",
  "Entertainment",
  "Cameras",
  "Smart Home",
];

function Categories() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <div className="card-body text-center">
              <h2 className="card-title justify-center">{category}</h2>
              <p>Explore products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;