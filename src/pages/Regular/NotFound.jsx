import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-primary">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-6"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;