import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white"
        >
          Lee Trends
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="text-xl md:text-3xl mt-6 text-pink-100"
        >
          Customized Designer Boutique
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-5 text-lg text-white max-w-3xl"
        >
          Bridal Wear • Party Wear • Ethnic Wear • Kids Wear
        </motion.p>

        <div className="mt-10 flex gap-5">

          <a
            href="/collections"
            className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full text-white font-semibold"
          >
            Explore Collection
          </a>

          <a
            href="https://wa.me/919886691866"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-pink-600"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;