import React from 'react'
import img from '../styles/images/about_img/about_us1.jpg';

export default function About() {
  return (
    <section className="w-screen pt-[160px] pb-[140px] flex flex-col bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
          <h3 class="text-2xl font-bold text-blue-800 mb-4">Delivering High-Quality Industrial Finishing Machines Worldwide</h3>
          </p>
        </div>

        {/* Content Section with Blur Effect */}
        <div className="grid lg:grid-cols-2 gap-12 items-center backdrop-blur- bg-white/50 rounded-xl p-6 shadow-2xl border border-white/80">
          {/* Text Section */}
          <div class="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 max-w-4xl mx-auto">
  
  
  <p class="text-gray-800 mb-4">
    <strong>AKMAKE</strong> is India’s leading provider of high-quality industrial finishing machines and spare parts. Our solutions have earned the trust of industries across India and international markets.
  </p>

  <p class="text-gray-700 mb-4">
    <strong>Global Reach:</strong> Latin & North America, Indonesia, Russia, North & South Africa, Saudi Arabia, Algeria, and beyond.
  </p>

  <p class="text-gray-700 mb-4">
    At <strong>AKMAKE</strong>, we don’t just deliver machines – we deliver <span class="text-blue-600 font-semibold">excellence</span>, <span class="text-blue-600 font-semibold">reliability</span>, and <span class="text-blue-600 font-semibold">long-term partnerships</span>.
  </p>

  <p class="text-gray-700 mb-4">
    We continue to expand our global presence, ensuring <span class="font-medium text-green-700">superior performance</span> and <span class="font-medium text-green-700">reliability</span> for industries worldwide.
  </p>

  <p class="text-gray-900 font-semibold">
    👉 Join hands with us to experience <span class="text-indigo-700 underline">world-class finishing solutions</span> tailored to your industry’s needs.
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
