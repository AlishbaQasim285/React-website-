import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-700 via-red-500 to-slate-600  py-10 px-6">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold">Subscribe Newsletter</h2>
            <p className="text-white text-sm">
              Subscribe newsletter to get 5% on all products.
            </p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email "
              className="px-4 py-2 w-64 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-lg flex text-white items-center">
              Capital Shop
            </h3>
          </div>
          <div>
            <h4 className="font-semibold">Shop Men</h4>
            <ul className="text-white space-y-1">
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Shop Women</h4>
            <ul className="text-white space-y-1">
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Baby Collection</h4>
            <ul className="text-white space-y-1">
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="text-white space-y-1">
              <li>Track Your Order</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Carrier</li>
              <li>About</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <FaFacebookF
            className="text-white hover:text-black duration-300 cursor-pointer"
            size={20}
          />
          <FaInstagram
            className="text-white hover:text-black duration-300 cursor-pointer"
            size={20}
          />
          <FaYoutube
            className="text-white hover:text-black duration-300 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
