import { Link } from "react-router-dom";
import bridal from "../../assets/images/bridal1.jpg";
import party from "../../assets/images/party1.jpg";
import ethnic from "../../assets/images/ethnic1.jpg";
import kids from "../../assets/images/kids1.jpg";
import bridal2 from "../../assets/images/bridal2.jpg";

const categories = [
  { title: "Bridal Wear", subtitle: "Wedding & Reception", image: bridal, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Party Wear", subtitle: "Glamour & Style", image: party, span: "" },
  { title: "Ethnic Wear", subtitle: "Tradition & Grace", image: ethnic, span: "" },
  { title: "Kids Wear", subtitle: "Cute & Comfortable", image: kids, span: "" },
  { title: "Designer Blouses", subtitle: "Exclusive Designs", image: bridal2, span: "" },
];

function Categories() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="text-center mb-16 md:mb-24">
          <p className="text-rose-500 text-xs tracking-[0.5em] uppercase mb-4 font-medium">
            Explore
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Collections
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[640px]">
          {categories.map((item, i) => (
            <Link
              key={i}
              to="/collections"
              className={`group relative overflow-hidden ${item.span} ${i === 0 ? "col-span-2 row-span-1 lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover min-h-[240px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-400" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-rose-300 text-xs tracking-[0.3em] uppercase mb-2">{item.subtitle}</p>
                <h3
                  className={`text-white font-bold ${i === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span className="text-white text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
