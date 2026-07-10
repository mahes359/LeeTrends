import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";

function Dashboard() {

    const navigate = useNavigate();
    const [dresses, setDresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const totalDresses = dresses.length;
    const featured = dresses.filter(d => d.featured).length;
    const available = dresses.filter(d => d.available).length;

    useEffect(() => {
        fetchDresses();
    }, []);

    async function fetchDresses() {
        try {
            const res = await API.get("/dresses");
            setDresses(res.data);
        } catch (err) {
            toast.error("Failed to load dresses");
        } finally {
            setLoading(false);
        }
    }

    async function deleteDress(id) {
        if (!window.confirm("Delete this dress?")) return;
        try {
            await API.delete(`/dresses/${id}`);
            toast.success("Dress deleted");
            fetchDresses();
        } catch (err) {
            toast.error("Failed to delete dress");
        }
    }

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const filtered = dresses
        .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
        .filter(d => category === "All" || d.category === category);

    return (
        <div className="max-w-7xl mx-auto pt-28 pb-20 px-6">

            <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
                <h1 className="text-4xl font-bold">Lee Trends Dashboard</h1>
                <div className="flex gap-3">
                    <Link to="/admin/upload" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                        + Add Dress
                    </Link>
                    <button onClick={logout} className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition">
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-pink-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Total Dresses</h2>
                    <p className="text-4xl font-bold mt-2">{totalDresses}</p>
                </div>
                <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Available</h2>
                    <p className="text-4xl font-bold mt-2">{available}</p>
                </div>
                <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Featured</h2>
                    <p className="text-4xl font-bold mt-2">{featured}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search dress..."
                    className="border rounded-lg px-4 py-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>All</option>
                    <option>Bridal</option>
                    <option>Party Wear</option>
                    <option>Ethnic</option>
                    <option>Kids Wear</option>
                </select>
            </div>

            {loading ? (
                <div className="text-center py-20 text-xl text-gray-400">Loading...</div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-20 text-xl text-gray-400">No dresses found.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border rounded-xl overflow-hidden">
                        <thead>
                            <tr className="bg-pink-600 text-white">
                                <th className="p-3">Image</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(dress => (
                                <tr key={dress.id} className="text-center border-b hover:bg-pink-50">
                                    <td className="p-2">
                                        <img src={dress.imageUrl} className="w-20 h-20 object-cover mx-auto rounded" alt={dress.name} />
                                    </td>
                                    <td className="p-3 font-medium">{dress.name}</td>
                                    <td className="p-3">{dress.category}</td>
                                    <td className="p-3">₹ {dress.price}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-sm font-semibold ${dress.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                            {dress.available ? "Available" : "Out of Stock"}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <Link to={`/admin/edit/${dress.id}`} className="bg-blue-500 text-white px-3 py-2 rounded mr-2 hover:bg-blue-600 transition">
                                            Edit
                                        </Link>
                                        <button onClick={() => deleteDress(dress.id)} className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Dashboard;
