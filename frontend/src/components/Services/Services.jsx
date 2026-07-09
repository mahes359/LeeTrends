import { FaTshirt, FaCut, FaUserTie, FaClock } from "react-icons/fa";

function Services() {

    const services = [

        {
            icon: <FaTshirt size={45} />,
            title: "Customized Designs",
            desc: "Every dress is designed according to your style and measurements."
        },

        {
            icon: <FaCut size={45} />,
            title: "Perfect Stitching",
            desc: "Professional finishing with premium quality stitching."
        },

        {
            icon: <FaUserTie size={45} />,
            title: "Bridal Specialists",
            desc: "Wedding, Reception, Engagement and Designer Wear."
        },

        {
            icon: <FaClock size={45} />,
            title: "On-Time Delivery",
            desc: "We value your time and deliver every order promptly."
        }

    ];

    return (

        <section className="py-24 bg-pink-50">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-16">
                    Why Choose Lee Trends
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-3 transition duration-300"
                        >

                            <div className="text-pink-600 flex justify-center mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600">
                                {service.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Services;