import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function DressDetails() {

    const { id } = useParams();

    const [dress, setDress] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDress();
    }, [id]);

    async function fetchDress() {

        try {

            const response = await API.get(`/dresses/${id}`);
            setDress(response.data);

        } catch (error) {

            console.error(error);
            setDress(null);

        } finally {

            setLoading(false);

        }

    }

    function bookNow() {

        const phone = "919886691866"; // Change to your WhatsApp number

        const message = `🌸 Hello Lee Trends,

I'm interested in the following dress.

👗 Dress Name : ${dress.name}

📂 Category : ${dress.category}

💰 Price : ₹${dress.price}

🧵 Fabric : ${dress.fabric}

🎨 Color : ${dress.color}

📏 Size : ${dress.size}

🎉 Occasion : ${dress.occasion}

Please share more details regarding availability and booking.

Thank you.`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    }

    if (loading) {

        return (
            <div className="pt-40 text-center text-3xl font-bold">
                Loading...
            </div>
        );

    }

    if (!dress) {

        return (

            <div className="pt-40 text-center">

                <h1 className="text-4xl font-bold mb-6">
                    Dress Not Found
                </h1>

                <Link
                    to="/collections"
                    className="bg-pink-600 text-white px-6 py-3 rounded-lg"
                >
                    Back to Collections
                </Link>

            </div>

        );

    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-28">

            <div className="grid lg:grid-cols-2 gap-16 items-start">

                <div>

                    <img
                        src={dress.imageUrl}
                        alt={dress.name}
                        className="w-full rounded-2xl shadow-2xl"
                    />

                </div>

                <div>

                    <h1 className="text-5xl font-bold">
                        {dress.name}
                    </h1>

                    <p className="text-pink-600 text-4xl font-bold mt-4">
                        ₹ {dress.price}
                    </p>

                    <div className="mt-8 space-y-4 text-lg">

                        <p>
                            <strong>Category :</strong> {dress.category}
                        </p>

                        <p>
                            <strong>Fabric :</strong> {dress.fabric}
                        </p>

                        <p>
                            <strong>Color :</strong> {dress.color}
                        </p>

                        <p>
                            <strong>Size :</strong> {dress.size}
                        </p>

                        <p>
                            <strong>Occasion :</strong> {dress.occasion}
                        </p>

                        <p>

                            <strong>Status :</strong>{" "}

                            {dress.available ? (

                                <span className="text-green-600 font-semibold">
                                    Available
                                </span>

                            ) : (

                                <span className="text-red-600 font-semibold">
                                    Out of Stock
                                </span>

                            )}

                        </p>

                    </div>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold mb-3">
                        Description
                    </h2>

                    <p className="text-gray-700 leading-8">
                        {dress.description}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">

                        <button
                            onClick={bookNow}
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                        >
                            📱 Book on WhatsApp
                        </button>

                        <Link
                            to="/collections"
                            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                        >
                            ← Back to Collections
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DressDetails;