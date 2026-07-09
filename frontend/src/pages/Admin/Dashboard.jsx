import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";

function Dashboard() {

    const [dresses, setDresses] = useState([]);
    const totalDresses = dresses.length;
    const featured = dresses.filter(d => d.featured).length;
    const available = dresses.filter(d => d.available).length;
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");


    useEffect(() => {
        fetchDresses();
    }, []);

    async function fetchDresses() {
        try {
            const res = await API.get("/dresses");
            setDresses(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteDress(id) {

        if (!window.confirm("Delete this dress?"))
            return;

        await API.delete(`/dresses/${id}`);

        fetchDresses();

    }

    return (

        <div className="max-w-7xl mx-auto pt-28 pb-20">

            <div className="flex justify-between items-center mb-10">

                <h1 className="text-4xl font-bold">
                    Lee Trends Dashboard
                </h1>
                <button
                    onClick={() => {

                        localStorage.removeItem("token");

                        window.location.href = "/login";

                    }}

                    className="bg-red-600 text-white px-5 py-3 rounded"

                >

                    Logout

                </button>
                <Link
                    to="/admin/upload"
                    className="bg-pink-600 text-white px-6 py-3 rounded-lg"
                >
                    + Add Dress
                </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                <div className="bg-pink-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Total Dresses</h2>
                    <p className="text-4xl font-bold mt-2">
                        {totalDresses}
                    </p>
                </div>

                <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Available</h2>
                    <p className="text-4xl font-bold mt-2">
                        {available}
                    </p>
                </div>

                <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg">
                    <h2 className="text-lg">Featured</h2>
                    <p className="text-4xl font-bold mt-2">
                        {featured}
                    </p>
                </div>

            </div>

            <input
                type="text"
                placeholder="Search dress..."
                className="border rounded-lg px-4 py-3 w-full mb-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className="border rounded-lg px-4 py-3 mb-6"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option>All</option>
                <option>Bridal</option>
                <option>Party Wear</option>
                <option>Ethnic</option>
                <option>Kids Wear</option>
            </select>

            <table className="w-full border">

                <thead>

                    <tr className="bg-pink-600 text-white">

                        <th className="p-3">Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {dresses
                        .filter(d =>
                            d.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .filter(d =>
                            category === "All" || d.category === category
                        ).map(dress => (

                            <tr
                                key={dress.id}
                                className="text-center border-b"
                            >

                                <td className="p-2">

                                    <img
                                        src={dress.imageUrl}
                                        className="w-20 h-20 object-cover mx-auto rounded"
                                    />

                                </td>

                                <td>{dress.name}</td>

                                <td>{dress.category}</td>

                                <td>₹ {dress.price}</td>

                                <td>

                                    <Link
                                        to={`/admin/edit/${dress.id}`}
                                        className="bg-blue-500 text-white px-3 py-2 rounded mr-3"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => deleteDress(dress.id)}
                                        className="bg-red-600 text-white px-3 py-2 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                </tbody>

            </table>

        </div>

    );

}

export default Dashboard;