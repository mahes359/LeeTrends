import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function login(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await API.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            toast.success("Login Successful");
            navigate("/admin");
        } catch (err) {
            toast.error("Invalid Email or Password");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-pink-50">
            <form
                onSubmit={login}
                className="bg-white shadow-xl rounded-xl p-10 w-[400px]"
            >
                <h1 className="text-3xl font-bold mb-2 text-center">Lee Trends</h1>
                <p className="text-center text-gray-500 mb-8">Admin Login</p>

                <input
                    className="border w-full p-3 mb-5 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    className="border w-full p-3 mb-5 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    className="bg-pink-600 text-white w-full p-3 rounded hover:bg-pink-700 transition disabled:opacity-60"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;
