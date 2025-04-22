import React from 'react';
// import Carousel from '../components/Carousel';
import images from '../utils/importImages';
import backgroundImage from '../styles/images/home_img/blue_laser.jpg';
import pro from '../styles/images/product_img/factory_worker.jpg';
import manufacturing from '../styles/images/product_img/high_quality_man.jpg';
import product2 from '../styles/images/product_img/industry_expert.jpg';
import satisfaction from '../styles/images/home_img/satisfaction.png';
import reasonable from '../styles/images/home_img/reasonable_rate.png';
import timeEfficiency from '../styles/images/home_img/time_efficiency.png';
import latest_machinery from '../styles/images/home_img/latest_machinery.png';

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
    <div className='pt-20 sm:pt-10 md:pt-10 lg:pt-10'>
      {/* Hero Section */}
      <section className="relative w-full h-[310px] sm:mt-10 sm:px-4 sm:py-6" id="home">
        <div className="absolute inset-0 ">
          <img
            // src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
            src= {backgroundImage}
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
 
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
              AKMAKE Engineering
            </h1>
            <p className="font-regular text-white text-xl mb-8 mt-4">
            Transforming Your Vision into Reality with Cutting Edge Automation
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group bg-white rounded-lg shadow-md overflow-hidden ${
                  service.special ? 'bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5' : ''
                }`}
              >
                {/* Special tag */}
                {service.special && (
                  <div className="text-center text-white font-medium absolute z-10 bg-black bg-opacity-50 w-full py-2 top-0">
                    Special product
                  </div>
                )}

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                {/* Title (always visible) */}
                <div className="bg-white text-center p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
                  <div className="text-black text-center">
                    <p className="text-sm md:text-base lg:text-lg">{service.description}</p>
                    {service.details && (
                      <details className="mt-2 text-sm md:text-base lg:text-lg">
                        <summary className="cursor-pointer underline">Read More</summary>
                        <p className="mt-1">{service.details}</p>
                      </details>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>



      {/* <div class="relative group bg-gray-200 h-[400px]] shadow-lg rounded-2xl overflow-hidden">
          <img class="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png" />
          <div class="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
            <div class="p-6">
              <div class="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 class="text-red-600 text-lg font-bold">jordan spizike low</h2>
                  <p class="dark:text-gray-100">men's shoes</p>
                </div>
                <div>
                <p class="text-3xl font-bold dark:text-gray-100">$160</p>
                </div>
              </div>
              <div class="block mt-4">
                <div class="absolute bottom-2 left-5">
                  <button class="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* About Us Section */}
      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
              <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4 text-justify">
  Delivering high-quality industrial finishing machines worldwide. We are India's leading providers of high-quality industrial finishing machines and spare parts. Our solutions have earned trust in India and international markets, including Latin & North America, Indonesia, Russia, North & South Africa, Saudi Arabia, Algeria and beyond. At AKMAKE, we don’t just deliver machines – we deliver excellence, reliability, and long-term partnerships. We continue to expand our global presence, ensuring superior performance and reliability for industries worldwide. Join hands with us to experience world-class finishing solutions tailored to your industry’s needs.
</p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">Why Us?</div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {whyUs.map((item, index) => (
              <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img src={item.image} className="w-32 mb-3" alt={item.title} />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
//   <div className="relative w-full min-h-screen">
//   <section className="w-screen pt-[90px] pb-[140px] flex flex-col bg-transparent">
//   <div className='text-3xl font-bold text-center text-4xl text-black backdrop-blur- bg-white/50 rounded-xl p-6'>AKMAKE Engineering</div>
//     <div className="flex flex-col w-full">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_400px] gap-[82px] items-center backdrop-blur- bg-white/50 rounded-xl p-6 shadow-2xl border border-white/60">  
//         <div className="flex flex-col gap-[56px] ">
//           <div className="flex flex-col gap-[20px]">
//             <span className="text-[16px] font-medium text-black">Create without boundaries</span>
//             <h4 className="font-bold tracking-[-0.05em] text-black sm:text-[36px] text-[36px] md:text-[48px] leading-[1.1]">
//               Transforming Your Vision into Reality with Cutting-Edge Automation
//             </h4>
//             <p className="text-[20px] text-black text-opacity-80">
//               Unlock the potential of full automation of your machine with the help of us.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-[56px]">
//             {[
//               { title: "High-Quality Manufacturing", desc: "We specialize in producing top-grade industrial finishing machines for FIBC, PP woven sacks, and plastic woven fabric industries." },
//               { title: "Latest Technology", desc: "Our state-of-the-art machines are designed to enhance production efficiency with the latest technology." },
//               { title: "Industry Expertise", desc: "With over a decade of experience, we understand customer needs and deliver customized, high-performance solutions." },
//               { title: "Customer Support", desc: "We serve global FIBC customers with premium machinery and reliable technical support." }
//             ].map((item, index) => (
//               <div key={index} className="flex flex-col gap-[12px]">
//                 <div className="flex items-center gap-[8px]">
//                   <CheckCircleIcon className="w-5 h-5 text-black" />
//                   <span className="text-[16px] font-medium text-black">{item.title}</span>
//                 </div>
//                 <p className="text-black text-opacity-80 text-left text-[16px] leading-[1.625em]">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col backdrop-blur-lg w-full h-auto sm:h-auto md:h-[300px] lg:h-[400px]">
//           <Carousel images={imageUrls} />
//         </div>
//       </div>
//     </div>
//   </section>
// </div>

  );
};

export default Home;