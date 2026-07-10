function About() {
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-pink-600 font-semibold uppercase tracking-[0.3em]">About Lee Trends</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Crafting elegance for every special moment</h1>
          <p className="text-gray-700 mt-6 leading-8">
            Lee Trends is a boutique fashion studio known for designer collections that blend timeless charm with modern styling.
            From bridal wear to festive ensembles, every piece is curated to make celebrations feel unforgettable.
          </p>
          <p className="text-gray-700 mt-4 leading-8">
            Our team focuses on premium fabrics, flattering silhouettes, and personalized service so every customer feels confident and beautifully dressed.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Why clients love us</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Premium-quality designer outfits</li>
            <li>• Custom styling suggestions for every occasion</li>
            <li>• Easy booking and WhatsApp support</li>
            <li>• Fresh collections for bridal, party, ethnic, and kids wear</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;