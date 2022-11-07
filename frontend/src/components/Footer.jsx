import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/e-logo.png";

function Footer() {
  return (
    <div className="flex flex-col w-full h-96 bg-green-900 text-white">
      <div className="grid grid-cols-5 gap-5 mt-10">
        <div className="flex flex-col space-y-2">
          <Link className="text-green-900 text-lg ml-5 lg:ml-20" to="/">
            <div className="flex flex-col items-center justify-center rounded-full">
              <img className="w-28 " src={logo} alt="logo image" />
              <p className="text-white">e-shop</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl">Our Shop</p>
          <p className="text-gray-300">All Products</p>
          <p className="text-gray-300">The Weekend Boot</p>
          <p className="text-gray-300">The Weekend Boot Z</p>
          <p className="text-gray-300">The Shop</p>
          <p className="text-gray-300">Rain Coats</p>
          <p className="text-gray-300">Accessories</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl">Help</p>
          <p className="text-gray-300">Size Guides</p>
          <p className="text-gray-300">Shipping Information</p>
          <p className="text-gray-300">Refund Policy</p>
          <p className="text-gray-300">Wear,Care and FAQ</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl">About US</p>
          <p className="text-gray-300">Values</p>
          <p className="text-gray-300">Terms Of Service</p>
          <p className="text-gray-300">Contact Us</p>
          <p className="text-gray-300">We're Hiring</p>
          <p className="text-gray-300">footer</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-xl">Get In TOuch</p>
          <p className="text-gray-300">Call US at +251-943-946-006</p>
          <p className="text-gray-300">Email</p>
          <p className="text-gray-300">ecommerce@gmail.com</p>
          <p className="text-gray-300 underline">Instagram</p>
          <p className="text-gray-300 underline">Facebook</p>
          <p className="text-gray-300 underline">Pinterest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
