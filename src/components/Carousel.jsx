import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden py-4">
      <div className="relative w-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} 
          className="w-full flex-shrink-0 object-cover rounded-lg sm:h-[250px] md:h-[300px] lg:h-[500px]"
          alt={`Slide ${index + 1}`} />
        ))}
      </div>

    {/* Indicators */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 w-4 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-black opacity-5 hover:opacity-100 transition-opacity duration-300"
      >
        &#10094;
      </button>
      
      {/* Right Navigation Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full text-black opacity-5 hover:opacity-100 transition-opacity duration-300"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;