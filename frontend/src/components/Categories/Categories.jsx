import bridal from "../../assets/images/bridal1.jpg";
import party from "../../assets/images/party1.jpg";
import ethnic from "../../assets/images/ethnic1.jpg";
import kids from "../../assets/images/kids1.jpg";

const categories = [
  {
    title: "Bridal Wear",
    image: bridal,
  },
  {
    title: "Party Wear",
    image: party,
  },
  {
    title: "Ethnic Wear",
    image: ethnic,
  },
  {
    title: "Kids Wear",
    image: kids,
  },
  {
    title: "Designer Blouses",
    image: bridal,
  },
  {
    title: "Custom Orders",
    image: party,
  },
];

function Categories() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Our Collections
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group cursor-pointer"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover group-hover:scale-110 duration-500"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <button className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full">
                  View Collection
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;