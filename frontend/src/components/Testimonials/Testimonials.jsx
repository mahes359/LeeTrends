function Testimonials() {

    const reviews = [

        {
            name: "Priya",
            text: "The bridal lehenga was absolutely beautiful. Perfect stitching and premium quality."
        },

        {
            name: "Divya",
            text: "Excellent customer service and the dress fit perfectly. Highly recommended."
        },

        {
            name: "Anitha",
            text: "Affordable price with amazing quality. I'll definitely order again."
        }

    ];

    return (

        <section className="max-w-7xl mx-auto py-20 px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
                What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {reviews.map((review, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
                    >

                        <p className="text-yellow-500 text-2xl mb-4">
                            ★★★★★
                        </p>

                        <p className="text-gray-600 italic">
                            "{review.text}"
                        </p>

                        <h3 className="font-bold mt-6">
                            — {review.name}
                        </h3>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Testimonials;