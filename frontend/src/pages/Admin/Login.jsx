import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import hero from "../../assets/images/bridal1.jpg";

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
    <div className="min-h-screen flex">
      {/* Left image panel */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img src={hero} alt="Lee Trends" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/80 to-black/60 flex flex-col justify-end p-16">
          <h1
            className="text-5xl font-bold text-white mb-3 tracking-widest"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            LEE TRENDS
          </h1>
          <p className="text-rose-300 text-xs tracking-[0.4em] uppercase">Designer Boutique — Admin</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#fdf8f5] px-8">
        <div className="w-full max-w-md">

          <div className="mb-10">
            <p className="text-rose-500 text-xs tracking-[0.4em] uppercase mb-3 font-medium">Admin Portal</p>
            <h2
              className="text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Welcome Back
            </h2>
            <p className="text-gray-400 text-sm mt-2">Sign in to manage your boutique</p>
          </div>

          <form onSubmit={login} className="space-y-5">
            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-gray-400 block mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm focus:outline-none focus:border-rose-400 transition-colors"
                placeholder="admin@leetrends.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-gray-400 block mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm focus:outline-none focus:border-rose-400 transition-colors pr-12"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs tracking-wide"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-700 hover:bg-rose-800 text-white py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
