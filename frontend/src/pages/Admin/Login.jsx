import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import hero from "../../assets/images/bridal1.jpg";
import { FiArrowLeft, FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Welcome back!");
      navigate("/admin");
    } catch {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-[#fdf8f5]">
      {/* Left image panel */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src={hero}
          alt="Lee Trends Bridal Boutique"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent flex flex-col justify-end p-16">
          <div className="max-w-md">
            <span className="inline-block px-3 py-1 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-300 text-[10px] tracking-[0.3em] uppercase rounded-full mb-4">
              Boutique Management
            </span>
            <h1
              className="text-5xl font-bold text-white mb-3 tracking-widest leading-tight drop-shadow-md"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              LEE TRENDS
            </h1>
            <p className="text-rose-200/90 text-sm font-light tracking-wide leading-relaxed">
              Designer Bridal & Couture collections crafted with timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-12">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-rose-950/5 border border-rose-100/60">

          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-gray-400 hover:text-rose-600 transition-colors"
            >
              <FiArrowLeft size={13} />
              Storefront
            </Link>
            <span className="text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 bg-rose-50 text-rose-600 rounded-full font-medium">
              Admin Access
            </span>
          </div>

          <div className="mb-8">
            <p className="text-rose-600 text-xs tracking-[0.35em] uppercase mb-2 font-medium">Lee Trends Boutique</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Sign In
            </h2>
            <p className="text-gray-500 text-sm mt-1.5 font-light">Enter your credentials to manage collections and content</p>
          </div>

          <form onSubmit={login} className="space-y-5">
            <div>
              <label className="text-xs tracking-[0.25em] uppercase text-gray-500 block mb-2 font-medium">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200/50 transition-all"
                  placeholder="admin@leetrends.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.25em] uppercase text-gray-500 block mb-2 font-medium">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type={showPass ? "text" : "password"}
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-10 pr-11 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200/50 transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1 transition-colors"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-glow w-full bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white py-3.5 text-xs tracking-[0.25em] uppercase font-medium rounded-xl transition-all duration-300 disabled:opacity-60 shadow-lg shadow-rose-700/20 mt-3 cursor-pointer"
            >
              {loading ? "Authenticating..." : "Sign In to Dashboard"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
