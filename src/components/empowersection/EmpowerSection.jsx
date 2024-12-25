import React from "react";
import { FaHandsHelping, FaPhoneAlt, FaBookOpen } from "react-icons/fa";

function GenderViolenceAwareness({togetherhug}) {
  return (
    <section className="relative bg-gradient-to-r from-indigo-200 via-blue-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={togetherhug}
            alt="Empowering support"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Together, We Can Make a Change
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Empowering survivors, spreading awareness, and taking action to end
            gender-based violence. Let’s build a world where everyone feels safe
            and respected.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <button className="px-6 py-3  bg-blue-600 text-white font-bold rounded-full shadow-md hover:shadow-lg hover: bg-blue-600 transition">
              Get Help Now
            </button>
            <button className="px-6 py-3 bg-white border border-blue-500 text-blue-500 font-bold rounded-full shadow-md hover:shadow-lg hover:bg-blue-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[
          {
            icon: <FaHandsHelping className="text-blue-500 text-5xl" />,
            title: "Support for Survivors",
            text: "Find resources and communities ready to support and empower you.",
          },
          {
            icon: <FaPhoneAlt className="text-blue-500 text-5xl" />,
            title: "Emergency Contacts",
            text: "Access emergency hotlines and immediate help services.",
          },
          {
            icon: <FaBookOpen className="text-blue-500 text-5xl" />,
            title: "Education & Awareness",
            text: "Learn how to identify, address, and prevent gender-based violence.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GenderViolenceAwareness;
