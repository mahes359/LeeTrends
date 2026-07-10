function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-28">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-pink-600 font-semibold uppercase tracking-[0.3em]">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Let’s create something beautiful together</h1>
          <p className="text-gray-700 mt-6 leading-8">
            Reach out for styling consultations, dress bookings, or questions about our latest collection.
          </p>
          <div className="mt-8 space-y-4 text-gray-700">
            <p><span className="font-semibold">Phone:</span> +91 98866 91866</p>
            <p><span className="font-semibold">Email:</span> leetrends@gmail.com</p>
            <p><span className="font-semibold">Location:</span> Rasipuram, Tamil Nadu</p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Book a consultation</h2>
          <a
            href="https://wa.me/919886691866"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;