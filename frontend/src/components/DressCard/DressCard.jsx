function DressCard({ dress }) {

    return (

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img
                src={dress.imageUrl}
                alt={dress.name}
                className="h-72 w-full object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {dress.name}
                </h2>

                <p className="text-pink-600 font-semibold mt-2">
                    ₹ {dress.price}
                </p>

                <p className="text-gray-600 mt-2">
                    {dress.description}
                </p>

                <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-lg">
                    View Details
                </button>

            </div>

        </div>

    );

}

export default DressCard;