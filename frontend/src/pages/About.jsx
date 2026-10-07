import Footer from "../components/Footer/Footer";
import hero from "../assets/images/hero.jpg";
import bridal1 from "../assets/images/bridal1.jpg";
import { FaWhatsapp, FaGem, FaHeart, FaStar, FaClock } from "react-icons/fa";
import config from "../config";

const stats = [
  { num: "500+", label: "Happy Brides & Clients" },
  { num: "8+", label: "Years Experience" },
  { num: "1000+", label: "Couture Designs" },
  { num: "4.9★", label: "Client Rating" },
];

const values = [
  {
    icon: FaGem,
    title: "Premium Fabrics",
    desc: "We curate authentic Banarasi silks, pure raw silks, organza, and artisanal brocades.",
  },
  {
    icon: FaHeart,
    title: "Flawless Custom Fit",
    desc: "Every silhouette is measured and constructed with multiple trials to ensure pure comfort.",
  },
  {
    icon: FaStar,
    title: "Bespoke Styling",
    desc: "Personalized consultations to align embroidery motifs, cuts, and color schemes with your vision.",
  },
  {
    icon: FaClock,
    title: "Committed Delivery",
    desc: "Strict timelines to ensure your wedding ensembles are ready comfortably ahead of your events.",
  },
];

function About() {
  return (
    <div className="bg-[#fdf8f5] min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Banner */}
        <div className="relative h-[60vh] min-h-[460px] overflow-hidden bg-gray-950">
          <img src={hero} alt="About Lee Trends" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-16">
              <span className="inline-block px-3.5 py-1 bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-200 text-[10px] tracking-[0.35em] uppercase font-semibold rounded-full mb-4">
                Our Heritage & Artistry
              </span>
              <h1
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                About {config.businessName}
              </h1>
              <p className="text-gray-200 text-sm sm:text-base max-w-xl mt-4 font-light leading-relaxed">
                Celebrating South Indian bridal traditions, handloom elegance, and modern designer silhouettes since 2017.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-gradient-to-r from-rose-800 via-rose-700 to-rose-900 py-16 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center text-white flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300"
              >
                <p
                  className="text-4xl sm:text-5xl font-bold leading-none"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.num}
                </p>
                <div className="w-8 h-0.5 bg-rose-300/80 my-3 rounded-full" />
                <p className="text-rose-100 text-[11px] tracking-[0.25em] uppercase font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are Story */}
        <section className="py-20 md:py-28 bg-[#fdf8f5] w-full">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 bg-rose-100/70 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full">
                The Lee Trends Story
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Crafting Elegance for Life's Most Treasured Moments
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {config.businessName} is a premier bespoke boutique nestled in {config.address}, celebrated for our passion in turning bridal dreams into timeless heirlooms. We combine age-old hand-embroidery techniques like Zardozi, Aari, and Maggam with contemporary tailoring sensibilities.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                Whether creating a grand wedding lehenga, an ornate muhurtham blouse, or an evening party gown, our dedicated master tailors ensure every cut flatters your form and tells your unique story.
              </p>

              <div className="pt-2">
                <a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow-green inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-semibold shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp size={17} />
                  <span>Connect With Our Designers</span>
                </a>
              </div>
            </div>

            {/* Right Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-rose-100/70">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
                  <img src={bridal1} alt="Lee Trends Studio Work" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Experience Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-rose-800 to-rose-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-rose-400/30 hidden sm:block">
                <p className="text-4xl font-bold leading-none" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  8+ Years
                </p>
                <div className="w-8 h-0.5 bg-rose-300 my-2.5 rounded-full" />
                <p className="text-rose-100 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Boutique Mastery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 md:py-28 bg-white border-t border-rose-100/60 w-full">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <span className="inline-block px-3.5 py-1 bg-rose-50 text-rose-700 border border-rose-200/60 text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full mb-3">
                Our Standards
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Why Patrons Trust Us
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-10 h-px bg-rose-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <div className="w-10 h-px bg-rose-200" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-[#fdf8f5] rounded-3xl p-8 border border-rose-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white text-rose-700 flex items-center justify-center shadow-xs border border-rose-100 mb-6 group-hover:scale-105 transition-transform">
                      <v.icon size={20} />
                    </div>
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-rose-200/40 text-rose-600 text-xs font-semibold tracking-wider uppercase">
                    Guaranteed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;
