import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-6">
      <h1 className="text-9xl font-bold text-pink-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-4 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
