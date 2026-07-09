import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold text-pink-600 tracking-wide"
        >
          Lee Trends
        </Link>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-10">

          <Link to="/">Home</Link>

          <Link to="/collections">Collections</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a
            href="https://wa.me/919886691866"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>

          <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 duration-300">
            Book Now
          </button>

        </div>

        {/* Mobile Icon */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiOutlineXMark  size={30} />
          ) : (
            <HiOutlineBars3  size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-white shadow-lg">

          <Link
            className="block px-8 py-4"
            to="/"
          >
            Home
          </Link>

          <Link
            className="block px-8 py-4"
            to="/collections"
          >
            Collections
          </Link>

          <Link
            className="block px-8 py-4"
            to="/about"
          >
            About
          </Link>

          <Link
            className="block px-8 py-4"
            to="/contact"
          >
            Contact
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;