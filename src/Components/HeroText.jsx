import React from "react";

const HeroText = () => {
  return (
    <div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          We provide care that your pet deserves!
        </h2>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition cursor-pointer">
            Book Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition cursor-pointer">
            Our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
