import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";

function UploadDress() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        fabric: "",
        color: "",
        size: "",
        occasion: "",
        featured: false,
        available: true,
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!image) {
            toast.error("Please select an image");
            return;
        }
        setLoading(true);
        const data = new FormData();
        Object.keys(form).forEach(key => data.append(key, form[key]));
        data.append("image", image);

        try {
            await API.post("/dresses", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Dress Uploaded Successfully");
            navigate("/admin");
        } catch (err) {
            toast.error(err.response?.data?.error || "Upload Failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-3xl mx-auto pt-28 pb-20 px-6">

            <div className="flex items-center justify-between mb-10">
                <h1 className="text-4xl font-bold">Upload New Dress</h1>
                <button
                    onClick={() => navigate("/admin")}
                    className="text-pink-600 border border-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50"
                >
                    ← Back
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-lg p-8 rounded-xl">

                <input type="text" name="name" placeholder="Dress Name" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} required />

                <select name="category" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} required defaultValue="">
                    <option value="" disabled>Select Category</option>
                    <option>Bridal</option>
                    <option>Party Wear</option>
                    <option>Ethnic</option>
                    <option>Kids Wear</option>
                </select>

                <input type="number" name="price" placeholder="Price (₹)" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} required />

                <textarea name="description" placeholder="Description" rows="4" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} />

                <input type="text" name="fabric" placeholder="Fabric (e.g. Silk, Cotton)" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} />

                <input type="text" name="color" placeholder="Color" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} />

                <input type="text" name="size" placeholder="Size (e.g. S, M, L, XL)" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} />

                <input type="text" name="occasion" placeholder="Occasion (e.g. Wedding, Party)" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" onChange={handleChange} />

                <div className="flex gap-10">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="featured" onChange={handleChange} />
                        Featured
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="available" defaultChecked onChange={handleChange} />
                        Available
                    </label>
                </div>

                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            setPreview(URL.createObjectURL(e.target.files[0]));
                        }}
                        required
                    />
                    {preview && (
                        <img src={preview} alt="Preview" className="mt-4 w-48 h-48 object-cover rounded-lg" />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 disabled:opacity-60 transition"
                >
                    {loading ? "Uploading..." : "Upload Dress"}
                </button>

            </form>
        </div>
    );
}

export default UploadDress;
