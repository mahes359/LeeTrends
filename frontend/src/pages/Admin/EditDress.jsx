import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

function EditDress() {

    const { id } = useParams();
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
        available: true
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        loadDress();
    }, []);

    async function loadDress() {

        try {

            const res = await API.get(`/dresses/${id}`);

            setForm({
                name: res.data.name,
                category: res.data.category,
                price: res.data.price,
                description: res.data.description,
                fabric: res.data.fabric,
                color: res.data.color,
                size: res.data.size,
                occasion: res.data.occasion,
                featured: res.data.featured,
                available: res.data.available
            });

            setPreview(res.data.imageUrl);

        } catch (err) {
            console.log(err);
        }

    }

    function handleChange(e) {

        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });

    }

    async function updateDress(e) {

        e.preventDefault();

        const data = new FormData();

        Object.keys(form).forEach(key => {
            data.append(key, form[key]);
        });

        if (image) {
            data.append("image", image);
        }

        try {

            await API.put(`/dresses/${id}`, data);

            toast.success("Dress updated successfully");
            navigate("/admin");

        } catch (err) {

            console.log(err);
            toast.error("Failed to update dress");

        }

    }

    return (

        <div className="max-w-4xl mx-auto pt-28 pb-20">

            <h1 className="text-4xl font-bold mb-10">
                Edit Dress
            </h1>

            <form
                onSubmit={updateDress}
                className="grid gap-5"
            >

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dress Name"
                    className="border p-3 rounded"
                />

                <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="border p-3 rounded"
                />

                <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border p-3 rounded"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-3 rounded"
                />

                <input
                    name="fabric"
                    value={form.fabric}
                    onChange={handleChange}
                    placeholder="Fabric"
                    className="border p-3 rounded"
                />

                <input
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    placeholder="Color"
                    className="border p-3 rounded"
                />

                <input
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                    placeholder="Size"
                    className="border p-3 rounded"
                />

                <input
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    placeholder="Occasion"
                    className="border p-3 rounded"
                />

                <div className="flex gap-10">

                    <label>

                        <input
                            type="checkbox"
                            name="featured"
                            checked={form.featured}
                            onChange={handleChange}
                        />

                        Featured

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            name="available"
                            checked={form.available}
                            onChange={handleChange}
                        />

                        Available

                    </label>

                </div>

                <img
                    src={preview}
                    className="w-64 rounded-lg"
                    alt="Preview"
                />

                <input
                    type="file"
                    onChange={(e) => {

                        setImage(e.target.files[0]);

                        setPreview(
                            URL.createObjectURL(e.target.files[0])
                        );

                    }}
                />

                <button
                    className="bg-pink-600 text-white p-3 rounded-lg"
                >
                    Update Dress
                </button>

            </form>

        </div>

    );

}

export default EditDress;