import React from 'react'
import img from '../styles/images/about_img/dfafd.png';

export default function About() {
  return (
    <section className="w-screen pt-[175px] pb-[140px] flex flex-col bg-transparent bg-gray-50 dark:bg-white-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-black sm:text-4xl lg:text-5xl">
              Hey 👋 We are<br className="block sm:hidden" /> AKMAKE Engineering
            </h2>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-black-600 dark:text-black-300 md:mt-8">
              <strong>AKMAKE</strong> is India’s leading provider of high-quality industrial finishing machines and spare parts. Our solutions have earned the trust of industries across India and international markets.
            </p>

            <p className="max-w-lg text-xl leading-relaxed text-gray-600 dark:text-black-300">
              <strong>Global Reach:</strong> Latin &amp; North America, Indonesia, Russia, North &amp; South Africa, Saudi Arabia, Algeria, and beyond.
            </p>

            <p className="max-w-lg mt-1 text-xl leading-relaxed text-gray-600 dark:text-black-300 md:mt-2">
              At <strong>AKMAKE</strong>, we don’t just deliver machines – we deliver <span className="text-blue-600 font-semibold">excellence</span>, <span className="text-blue-600 font-semibold">reliability</span>, and <span className="text-blue-600 font-semibold">long-term partnerships</span>.
            </p>

            <p className="max-w-lg mt-1 text-xl leading-relaxed text-gray-600 dark:text-black-300 md:mt-2">
              We continue to expand our global presence, ensuring <span className="font-medium text-green-700">superior performance</span> and <span className="font-medium text-green-700">reliability</span> for industries worldwide.
            </p>

            <p className="mt-4 text-xl text-gray-600 dark:text-black-300 md:mt-8">
              👉 Join hands with us to experience world-class finishing solutions tailored to your industry’s needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative max-w-full">
            <img
              className="absolute overflow-hidden inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              alt=""
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              alt="AKMAKE Logo"
              src={img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
