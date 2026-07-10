import { useEffect, useState } from "react";
import { getFeaturedDresses } from "../../services/dressService";
import { Link } from "react-router-dom";

function Featured() {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getFeaturedDresses();
      setDresses(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Collections
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dresses.map((dress) => (
          <Link
            to={`/dress/${dress.id}`}
            key={dress.id}
            className="block"
          >
            <div className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <img
                src={dress.imageUrl}
                alt={dress.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{dress.name}</h3>

                <p className="text-gray-600 mt-2">
                  {dress.category}
                </p>

                <p className="text-pink-600 font-bold mt-3 text-lg">
                  ₹ {dress.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Featured;