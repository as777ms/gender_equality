const Victimssection = ({ manshakehand, handsshake, womenblond }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6 mt-12">Empowering Victims Through Support</h1>
      <p className="text-center text-xl text-gray-700 mb-12">
        Explore how we can help survivors rebuild their lives with hope, support, and compassion. Join the movement.
      </p>

      <div className="w-[80%] flex m-auto justify-between gap-6">
        {/* First Image with Background Color */}
        <div className="w-[30%] h-[400px] rounded-3xl bg-gradient-to-r from-[#4e6a8f] via-[#6e8bb9] to-[#8faad9] shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden">
          <img
            src={manshakehand}
            alt="Man shaking hands"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-white font-medium mt-4 px-6 text-lg">
            Building Trust Through Support
          </p>
        </div>

        {/* Second Image with Background Color */}
        <div className="w-[30%] h-[400px] rounded-3xl bg-gradient-to-r from-[#3b4f76] via-[#5d75a5] to-[#7a91c7] shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden">
          <img
            src={handsshake}
            alt="Hands shaking"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-white font-medium mt-4 px-6 text-lg">
            Together We Rise
          </p>
        </div>

        {/* Third Image with Background Color */}
        <div className="w-[30%] h-[400px] rounded-3xl bg-gradient-to-r from-[#4e6a8f] via-[#6e8bb9] to-[#8faad9] shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden">
          <img
            src={womenblond}
            alt="Woman with laptop"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <p className="text-center text-white font-medium mt-4 px-6 text-lg">
            Empowered to Succeed
          </p>
        </div>
      </div>
    </>
  );
};

export default Victimssection;
