import { FaShieldAlt, FaGenderless, FaLock } from 'react-icons/fa';

const Headercards = ({ huggingpeople }) => {
  return (
    <>
    <div className="text-black py-8 px-4 bg-gradient-to-r from-indigo-200 via-blue-100 to-white py-16 px-4 md:px-0">
  <h1 className="text-4xl font-bold text-center mb-4">
    The Power is within - Comprehensive Support Solutions
  </h1>
  <p className="text-lg text-center">
    Enjoy all the resources you need to stay safe, support loved ones, and make informed decisions in
    your journey toward healing and empowerment.
  </p>
</div>

      <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-white py-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-[90%] mx-auto my-8 justify-between">
          {/* Hugging Image (Now Bigger) */}
          <div className="w-full md:w-[35%] mb-6 md:mb-0">
            <img
              src={huggingpeople}
              alt="Supportive Hug"
              className="w-full h-[450px] object-cover rounded-lg shadow-lg" // Made this image a bit bigger
            />
          </div>

          {/* Info Cards Section */}
          <div className="w-full md:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Privacy Info Card (Lighter Blue for Anonymity) */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaLock className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your Privacy Matters</h3>
                <p className="text-sm">
                  Protect your privacy by using secure channels and safeguarding personal information online.
                </p>
              </div>

              {/* Gender Violence Awareness */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaGenderless className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">End Gender Violence</h3>
                <p className="text-sm">
                  Gender violence affects millions. Stand together to support survivors and create safe spaces for all.
                </p>
              </div>

              {/* Security Tips (Lighter Blue for Security) */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaShieldAlt className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stay Safe Online</h3>
                <p className="text-sm">
                  Use encrypted apps, strong passwords, and avoid sharing sensitive info with strangers.
                </p>
              </div>
            </div>

            {/* Second Row of Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Reporting Abuse */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaGenderless className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Report Abuse</h3>
                <p className="text-sm">
                  If you or someone you know is experiencing violence, reporting it is the first step towards safety.
                </p>
              </div>

              {/* Mental Health Support */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaShieldAlt className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mental Health Resources</h3>
                <p className="text-sm">
                  Reach out for support if you're struggling with emotional stress or trauma. Your mental health matters.
                </p>
              </div>

              {/* Safe Spaces */}
              <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6">
                <FaLock className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Find Safe Spaces</h3>
                <p className="text-sm">
                  It's essential to find spaces where you can express yourself freely and without fear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headercards;
