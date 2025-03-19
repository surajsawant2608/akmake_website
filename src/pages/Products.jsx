import React from "react";
import { Link } from "react-router-dom";
import prod_img from "../styles/images/product_img/pro.png";

export default function Products() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-wide text-gray-900">
            <span className="text-black">FABRIC</span>{" "}
            <span className="text-red-600">CUTTING MACHINE</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            High-performance cutting solutions for precision and efficiency.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <div className="max-w-5xl w-full">
            <img
              src={prod_img}
              alt="Fabric Cutting Machine"
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">PP WOVEN FABRIC CUTTING MACHINE</h2>

          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Armstrong is a leading manufacturer of FIBC fabric cutting machines for jumbo bags and woven sacks. Our machines are designed to provide **fast and efficient cutting**, resulting in **better finishing** and **lower labor costs**.
            </p>

            <p className="font-medium text-gray-800">Fabric Cutting Machine for FIBC Jumbo Bags:</p>
            <p>The FIBC fabric cutting machine makes fabric cutting easier and supports two types of cutting:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-gray-900">Heat Cut:</span>{" "}
                <em>Ideal for precise production with a smooth finish.</em>
              </li>
              <li>
                <span className="font-medium text-gray-900">Ultrasonic Cut:</span>{" "}
                <em>Best suited for food-grade production requirements.</em>
              </li>
            </ul>
          </div>

          {/* Enquiry Button */}
          <div className="text-center mt-10">
            <Link
              to="/contact-us"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-3 px-10 rounded-lg shadow-md transition duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
