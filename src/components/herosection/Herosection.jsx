import React from 'react';

const Herosection = ({ womenlaptop }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-white py-16 px-4 md:px-0 w-[100%]">
        <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-r from-[#4e6a8f] via-[#6e8bb9] to-[#8faad9] p-8 md:p-16 lg:p-24 w-[80%] m-auto rounded-3xl">
          {/* Background Circles */}
          <div className="absolute top-0 left-0 md:left-16 lg:left-32">
            <div className="bg-white/30 rounded-full w-48 h-48"></div>
          </div>
          <div className="absolute bottom-8 right-8 md:right-16 lg:right-32">
            <div className="bg-white/30 rounded-full w-32 h-32"></div>
          </div>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2">
            <div className="bg-white/10 h-16 w-16 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white/10 h-16 w-16 rounded-full"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Empowering survivors of gender-based violence <br /> Safe Haven: A refuge for those in need
            </h2>
            <p className="text-lg text-white mb-8">
              Your safety and well-being are our priority
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-md">
              Start Your Journey
            </button>
          </div>

          {/* Image of Woman */}
          <div className="absolute bottom-0 right-0 hidden md:block">
            <img
              src={womenlaptop}
              alt="Woman with laptop"
              className="h-[500px] w-[340px] object-cover rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
