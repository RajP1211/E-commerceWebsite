import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="border-t py-12 px-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg  text-gray-800 mb-4">Newletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products,exclusive events andonline
            offers
          </p>
          <p className="font-semibold text-sm text-gray-800 mb-6">
            sign up and get 10% off your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md
               hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* shop list */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800">
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us */}
        <div className="space-y-2">
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb -6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="patillls"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="patillls"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="patillls"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className=" inline-block mr-2" />
            0123-456-789
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm text-center">© 2025,CompileTab, All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
