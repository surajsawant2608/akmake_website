import React from 'react';
import Carousel from '../components/Carousel';
import images from '../utils/importImages'; // Import the utility function
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const Home = () => {
  const imageUrls = [
    ...Object.values(images) // Add all local images
  ];

  return (
    <div>
      <section className="w-screen pt-[50px] pb-[140px] flex flex-col bg-white bg-opacity-100 transform">
        <div className="flex flex-col w-full max-w-[1680px] mx-auto px-[35px]">
        <h1 className="text-3xl font-bold mb-8 text-center mx-auto">AKMAKE Engineering</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_400px] gap-[82px] items-center">
            <div className=" flex flex-col gap-[56px]">
              <div className="flex flex-col gap-[20px]">
                <span className="text-[16px] font-medium text-black text-opacity-100">Create without boundaries</span>
                <h4 className="font-bold tracking-[-0.05em] text-black text-opacity-100 sm:text-[36px] text-[36px] md:text-[48px] leading-[1.1]">
                  Transforming Your Vision into Reality with Cutting-Edge Automation
                </h4>
                <p className="text-[20px] text-black text-opacity-60 text-left">
                  Unlock the potential of full automation of your machine with the help of us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[56px]">
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <CheckCircleIcon className="w-5 h-5 text-black" />
                    <span className="text-[16px] font-medium text-black">High-Quality Manufacturing</span>
                  </div>
                  <p className="text-black text-opacity-60 text-left text-[16px] leading-[1.625em]">
                    We specialize in producing top-grade industrial finishing machines for FIBC, PP woven sacks, and plastic woven fabric industries.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <CheckCircleIcon className="w-5 h-5 text-black" />
                    <span className="text-[16px] font-medium text-black">Latest Technology</span>
                  </div>
                  <p className="text-black text-opacity-60 text-left text-[16px] leading-[1.625em]">
                    Our state-of-the-art machines are designed to enhance production efficiency with the latest technology.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <CheckCircleIcon className="w-5 h-5 text-black" />
                    <span className="text-[16px] font-medium text-black">Industry Expertise</span>
                  </div>
                  <p className="text-black text-opacity-60 text-left text-[16px] leading-[1.625em]">
                    With over a decade of experience, we understand customer needs and deliver customized, high-performance solutions.
                  </p>
                </div>
                
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <CheckCircleIcon className="w-5 h-5 text-black" />
                    <span className="text-[16px] font-medium text-black">Customer Support</span>
                  </div>
                  <p className="text-black text-opacity-60 text-left text-[16px] leading-[1.625em]">
                    We serve global FIBC customers with premium machinery and reliable technical support.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <Carousel images={imageUrls} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;