import React from 'react'
import img from '../styles/images/about_img/about_us1.jpg';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Delivering high-quality industrial finishing machines worldwide.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in <span className="font-bold">2025</span> and based in 
              <span className="font-bold"> Ahmedabad</span>, we are India's leading providers of
              high-quality industrial finishing machines and spare parts. Our solutions have
              earned trust in <span className="font-bold">66+ international markets</span>, including 
              <span className="font-bold"> Latin & North America, Indonesia, Russia, North & South Africa, and beyond</span>.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At AKMAKE, we don’t just deliver machines – we deliver 
            <span className="font-bold"> excellence, reliability, and long-term partnerships.</span> We continue to
              expand our global presence, ensuring <span className="font-bold">superior performance and reliability </span>
              for industries worldwide, 
              <br/><span>Join hands with us to <span className="font-bold">experience world-class finishing solutions tailored</span> to your industry’s needs.</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={img}
              alt="Industrial Machinery"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
