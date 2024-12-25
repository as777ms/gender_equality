import React from 'react';

const Victimssection = ({ manshakehand, handsshake, womenblond }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6 mt-12 sm:text-3xl">Empowering Victims Through Support</h1>
      <p className="text-center text-xl text-gray-700 mb-12 sm:text-lg sm:px-6">
        Explore how we can help survivors rebuild their lives with hope, support, and compassion. Join the movement.
      </p>

      <div className="w-full flex flex-wrap justify-between gap-6 sm:w-[95%] sm:justify-center">
        {/* First Image with Background Color */}
        <div className="w-full sm:w-[30%] h-[400px] rounded-3xl bg-grey-900 shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden mb-6 sm:mb-0">
        <img
            src={manshakehand}
            alt="Man shaking hands"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-black font-medium mt-4 px-6 text-lg sm:text-base">
            Building Trust Through Support
          </p>
        </div>

        {/* Second Image with Background Color */}
        <div className="w-full sm:w-[30%] h-[400px] rounded-3xl bg-grey-900 shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden mb-6 sm:mb-0">
          <img
            src={handsshake}
            alt="Hands shaking"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-black font-medium mt-4 px-6 text-lg sm:text-base">
            Together We Rise
          </p>
        </div>

        {/* Third Image with Background Color */}
        <div className="w-full sm:w-[30%] h-[400px] rounded-3xl bg-grey-900 shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden mb-6 sm:mb-0">
          <img
            src={womenblond}
            alt="Woman with laptop"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-black font-medium mt-4 px-6 text-lg sm:text-base">
            Empowered to Succeed
          </p>
        </div>
      </div>
    </>
  );
};

export default Victimssection;
