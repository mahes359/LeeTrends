import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            alert("Login Successful");

            navigate("/admin");

        } catch (err) {

            alert("Invalid Email or Password");

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center bg-pink-50">

            <form
                onSubmit={login}
                className="bg-white shadow-xl rounded-xl p-10 w-[400px]"
            >

                <h1 className="text-3xl font-bold mb-8 text-center">
                    Admin Login
                </h1>

                <input
                    className="border w-full p-3 mb-5 rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="border w-full p-3 mb-5 rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className="bg-pink-600 text-white w-full p-3 rounded"
                >
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;