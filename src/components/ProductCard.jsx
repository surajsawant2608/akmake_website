import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = ({
  title,
  subheader,
  specs = [],
  features = [],
  applications,
  contactCta,
  imageUrl,
}) => {
  return (
    <div className="mt-16 p-6 md:p-10 bg-white text-gray-800 max-w-7xl mx-auto" 
    >

      {/* Header */}
      <h1 className="text-center text-3xl font-bold text-gray-800" 
      >
        {title}
      </h1>

      {/* Subheader */}
      <p className="text-lg mb-5 mt-2 text-center">
        {subheader}
      </p>

      {/* Image (if provided) */}
      {imageUrl && (
        <div className="mb-6 flex justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-96 object-contain w-full rounded-lg shadow"
          />
        </div>
      )}


      {/* Technical Specifications */}
      {specs.length > 0 && (
        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-3">🔧 Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-sm md:text-base">
              <tbody>
                {specs.map(([key, value]) => (
                  <tr key={key} className="border-b">
                      <td className="border px-3 py-2 font-medium bg-gray-100">{key}</td>
                      <td className="border px-3 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Key Features */}
      {features.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">✨ Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            {features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Applications */}
      {applications && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🧩 Applications</h2>
          <p>{applications}</p>
        </section>
      )}

      {/* Contact Us CTA */}
      {contactCta && (
        <section className="mt-10 mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">📞 Contact Us Today</h2>
          <p className="text-lg mb-4">{contactCta}</p>
          <Link to="/contact-us" className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-xl font-medium text-white shadow-sm hover:bg-indigo-500">
            Enquiry Now
          </Link>
        </section>
      )}
    </div>
  );
};

export default ProductSection;
