import React from 'react';
import images from '../utils/importImages';
import backgroundImage from '../styles/images/home_img/welding.jpg';
import pro from '../styles/images/product_img/factory_worker.jpg';
import manufacturing from '../styles/images/product_img/high_quality_man.jpg';
import product2 from '../styles/images/product_img/industry_expert.jpg';
import satisfaction from '../styles/images/home_img/satisfaction.png';
import reasonable from '../styles/images/home_img/reasonable_rate.png';
import timeEfficiency from '../styles/images/home_img/time_efficiency.png';
import latest_machinery from '../styles/images/home_img/latest_machinery.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const imageUrls = [
    ...Object.values(images)
  ];

   // { title: "High-Quality Manufacturing", desc: "We specialize in producing top-grade industrial finishing machines for FIBC, PP woven sacks, and plastic woven fabric industries." },
//               { title: "Latest Technology", desc: "Our state-of-the-art machines are designed to enhance production efficiency with the latest technology." },
//               { title: "Industry Expertise", desc: "With over a decade of experience, we understand customer needs and deliver customized, high-performance solutions." },
//               { title: "Customer Support", desc: "We serve global FIBC customers with premium machinery and reliable technical support." }

  const services = [
    {
      title: 'High-Quality Manufacturing',
      image: manufacturing,
      description: 'We specialize in producing top-grade industrial finishing machines for FIBC, PP woven sacks, and plastic woven fabric industries.'
    },
    {
      title: 'Latest Technology',
      image: pro,
      description: 'Our state-of-the-art machines are designed to enhance production efficiency with the latest technology.'
    },
    {
      title: 'Industry Expertise',
      image: product2,
      description: 'With over a decade of experience, we understand customer needs and deliver customized, high-performance solutions.',
      // details: 'Our jowar flour is also a good source of protein and fiber...'
    },
    // {
    //   title: 'Customer Support',
    //   image: product1,
    //   description: 'We serve global FIBC customers with premium machinery and reliable technical support...',
    //   // details: 'We serve global FIBC customers with premium machinery and reliable technical support...'
    // },
    
    // {
    //   title: 'Flavoured Spaghetti',
    //   image: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww',
    //   description: 'Our speciality is Bappa Flour Mill offers a variety of flavored spaghetti...',
    //   special: true
    // },
    // {
    //   title: 'Rice Papad',
    //   image: 'https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=',
    //   description: 'Our company produces high-quality rice papad...',
    //   details: 'We offer a variety of rice papad flavors including plain, salted, spicy...'
    // }
  ];

 
  
  const whyUs = [
    {
      title: 'Latest Machinery',
      image: latest_machinery,
    },
    {
      title: 'Reasonable Rates',
      image: reasonable,
    },
    {
      title: 'Time Efficiency',
      image: timeEfficiency,
    },
    {
      title: 'Customer Satisfaction',
      image: satisfaction,
    }
  ];

  return (
    <div className="pt-20 sm:pt-10 md:pt-10 lg:pt-10">
      {/* Home Section */}
      <section className="relative w-full h-[320px] sm:mt-10 sm:px-4 sm:py-6" id="home">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="object-cover object-center w-full h-full"
            src={backgroundImage}
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-white font-medium text-3xl md:text-4xl leading-tight mb-2">
              AKMAKE Engineering
            </h1>
            <p className="font-regular text-white text-lg mb-8 mt-4">
              Transforming Your Vision into Reality with Cutting Edge Automation
            </p>
            <Link to="/contact-us"
              className="px-6 py-3 bg-[#c8a876] text-white font-small rounded-full hover:bg-[#c09858] transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                title: "High-Quality Manufacturing",
                img: "/akmake_website/static/media/high_quality_man.d47d597e2f191b79148f.jpg",
                desc: "We specialize in producing top-grade industrial finishing machines for FIBC, PP woven sacks, and plastic woven fabric industries.",
              },
              {
                title: "Latest Technology",
                img: "/akmake_website/static/media/factory_worker.a6aecd99c1382689453c.jpg",
                desc: "Our state-of-the-art machines are designed to enhance production efficiency with the latest technology.",
              },
              {
                title: "Industry Expertise",
                img: "/akmake_website/static/media/industry_expert.5ad5b4eea79fc647fe3c.jpg",
                desc: "With over a decade of experience, we understand customer needs and deliver customized, high-performance solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                  src={item.img}
                />
                <div className="bg-white text-center p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
                  <div className="text-black text-center">
                    <p className="text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-12">
            <div className="max-w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-left md:text-center">
                About Us
              </h2>
              <p className="text-gray-900 text-base sm:text-lg leading-relaxed text-justify">
                Delivering high-quality industrial finishing machines worldwide. We are India's leading
                providers of high-quality industrial finishing machines and spare parts. Our solutions
                have earned trust in India and international markets, including Latin & North America,
                Indonesia, Russia, North & South Africa, Saudi Arabia, Algeria and beyond. At AKMAKE,
                we don’t just deliver machines – we deliver excellence, reliability, and long-term
                partnerships. We continue to expand our global presence, ensuring superior performance
                and reliability for industries worldwide. Join hands with us to experience world-class
                finishing solutions tailored to your industry’s needs.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                alt="About Us"
                className="w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-2xl font-bold text-gray-800 text-center">Why Us?</div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {[
              {
                title: "Latest Machinery",
                img: "/akmake_website/static/media/latest_machinery.61def46be60380f899c8.png",
              },
              {
                title: "Reasonable Rates",
                img: "/akmake_website/static/media/reasonable_rate.e52b80bde72ba26964f7.png",
              },
              {
                title: "Time Efficiency",
                img: "/akmake_website/static/media/time_efficiency.0a8dd354c130c5a29bf7.png",
              },
              {
                title: "Customer Satisfaction",
                img: "/akmake_website/static/media/satisfaction.636b356779554dc13518.png",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img className="w-28 mb-3" alt={item.title} src={item.img} />
                  </div>
                  <h2 className="title-font font-regular text-xl text-gray-900">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  ); 
}
export default Home;