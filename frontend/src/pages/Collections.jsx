import { useEffect, useState } from "react";
import { getAllDresses } from "../services/dressService";
import { Link } from "react-router-dom";

function Collections() {

  const [dresses, setDresses] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getAllDresses();
    setDresses(data);
    setFiltered(data);
  }

  useEffect(() => {

    let result = dresses;

    if (category !== "All") {
      result = result.filter(
        d => d.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search !== "") {
      result = result.filter(
        d => d.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);

  }, [search, category, dresses]);

  return (

    <div className="max-w-7xl mx-auto pt-28 pb-20 px-6">

      <h1 className="text-5xl font-bold mb-10 text-center">
        Our Collections
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-10">

        <input
          className="border rounded-lg px-4 py-3 w-80"
          placeholder="Search Dresses..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-3"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          <option>All</option>
          <option>Bridal</option>
          <option>Party Wear</option>
          <option>Ethnic</option>
          <option>Kids Wear</option>

        </select>

      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filtered.map((dress)=>(
          <Link to={`/dress/${dress.id}`} key={dress.id}>
          <div
            
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >

            <img
              src={dress.imageUrl}
              className="h-80 w-full object-cover"
              alt={dress.name}
            />

            <div className="p-4">

              <h2 className="font-bold text-xl">
                {dress.name}
              </h2>

              <p className="text-gray-500">
                {dress.category}
              </p>

              <p className="text-pink-600 font-bold mt-3">
                ₹ {dress.price}
              </p>

            </div>

          </div>
          </Link>
        ))}

      </div>

    </div>

  );

}

export default Collections;