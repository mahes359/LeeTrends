import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

function UploadDress() {

    const navigate = useNavigate();

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

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    async function handleSubmit(e) {

        e.preventDefault();

        const data = new FormData();

        Object.keys(form).forEach(key => {
            data.append(key, form[key]);
        });

        data.append("image", image);

        try {

            await API.post("/dresses", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Dress Uploaded Successfully");

            navigate("/admin");

        } catch (err) {

            console.log(err);

            alert("Upload Failed");

        }

    }

    return (

        <div className="max-w-3xl mx-auto pt-28 pb-20">

            <h1 className="text-4xl font-bold mb-10 text-center">
                Upload New Dress
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white shadow-lg p-8 rounded-xl"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Dress Name"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    rows="4"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="fabric"
                    placeholder="Fabric"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="color"
                    placeholder="Color"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="size"
                    placeholder="Size"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="occasion"
                    placeholder="Occasion"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <div className="flex gap-10">

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="featured"
                            onChange={handleChange}
                        />
                        Featured
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="available"
                            defaultChecked
                            onChange={handleChange}
                        />
                        Available
                    </label>

                </div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
                >
                    Upload Dress
                </button>

            </form>

        </div>

    );

}

export default UploadDress;