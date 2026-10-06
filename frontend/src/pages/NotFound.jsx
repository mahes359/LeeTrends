import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f5] text-center px-6">
      <p className="text-rose-300 text-xs tracking-[0.4em] uppercase mb-8 font-medium">Error 404</p>
      <h1
        className="float-404 text-[120px] md:text-[180px] font-bold text-rose-100 leading-none select-none"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        404
      </h1>
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-900 -mt-4 mb-5"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Page Not Found
      </h2>
      <p className="text-gray-400 text-sm max-w-md leading-7 mb-12">
        The page you're looking for doesn't exist or has been moved. Let's get you back to something beautiful.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="btn-glow bg-rose-600 text-white px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-rose-700 transition-all duration-300 rounded-sm"
        >
          Back to Home
        </Link>
        <Link
          to="/collections"
          className="btn-glow border border-rose-300 text-rose-600 px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-rose-600 hover:text-white transition-all duration-300 rounded-sm"
        >
          View Collections
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
