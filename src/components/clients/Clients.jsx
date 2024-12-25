const Clients = ({ emily, together }) => {
  return (
    <div className="relative py-20 px-4 flex flex-col items-center mt-[10px]"> 
    <div className="absolute inset-0 flex justify-center items-center z-0">
    <img src={together} alt="Blob Background" className="w-full h-full object-contain" /> 
    </div>


      <div className="z-13 flex flex-col items-center max-w-2xl mx-auto" >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          What our clients are saying
        </h1>
        <p className="text-center text-gray-600 mb-12"> 
          Your safety and well-being are our top priorities. We are here to
          support your journey and help you grow.
        </p>

        <div className="relative bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"> 
        <span className="absolute text-6xl text-blue-200 top-4 left-4 z-0">&quot;</span>
          <div className="flex-shrink-0"> 
            <img
              src={emily}
              alt="Client"
              className="w-32 h-32 rounded-lg object-cover"
            /> 
          </div>
          <div className="z-10">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Empowering Support
            </h1>
            <p className="text-gray-700 mb-12">
              "Safi Haven has been a crucial lifeline for me. The anonymous chat
              feature helped me connect with caring counselors anytime I needed
              support. I felt truly safe and understood."
            </p>
            <p className="text-gray-600 italic">- Emily Hart</p>
          </div>
          <span className="absolute text-6xl text-blue-200 bottom-4 right-4 z-0">&quot;</span>

        </div>
      </div>
    </div>
  );
};

export default Clients;