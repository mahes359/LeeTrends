import bridal1 from "../../assets/images/bridal1.jpg";
import bridal2 from "../../assets/images/bridal2.jpg";
import party1 from "../../assets/images/party1.jpg";
import ethnic1 from "../../assets/images/ethnic1.jpg";
import kids1 from "../../assets/images/kids1.jpg";
import hero from "../../assets/images/hero.jpg";

function Gallery() {

    const images = [
        bridal1,
        bridal2,
        party1,
        ethnic1,
        kids1,
        hero
    ];

    return (

        <section className="max-w-7xl mx-auto py-20 px-6">

            <h2 className="text-4xl font-bold text-center mb-4">
                Instagram Gallery
            </h2>

            <p className="text-center text-gray-500 mb-12">
                Follow Lee Trends for the latest collections
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                {images.map((image, index) => (

                    <a
                        key={index}
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <img
                            src={image}
                            alt="Gallery"
                            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl duration-300"
                        />

                    </a>

                ))}

            </div>

        </section>

    );

}

export default Gallery;