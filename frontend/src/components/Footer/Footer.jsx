import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}

        <div>

          <h2 className="text-3xl font-bold text-pink-500">
            Lee Trends
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Customized Designer Boutique specializing in Bridal,
            Party Wear, Ethnic Wear and Kids Wear.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/">Home</Link>

            <Link to="/collections">Collections</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 98866 91866
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              leetrends@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Rasipuram, Tamil Nadu
            </p>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 duration-300" />
            </a>

            <a
              href="https://wa.me/919886691866"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 duration-300" />
            </a>

          </div>

        </div>

      </div>

      <hr className="border-gray-700" />

      <div className="text-center py-6 text-gray-400">

        © {new Date().getFullYear()} Lee Trends.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;