import React from 'react';
import crypto from '../assets/crypto.svg';

const CryptoBanner = () => {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center p-8">
      {/* Main container with primary gradient */}
      <div className="w-full max-w-6xl relative rounded-3xl overflow-hidden">
        {/* Base gradient with light coming from above */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
        
        {/* Overlay gradient to enhance the light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-transparent to-blue-950/70" />
        
        {/* Radial gradient overlay for the spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-blue-950/50" />
        
        {/* Additional gradient for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-blue-900/30" />

        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 relative z-10">
          {/* Left content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-800/30 backdrop-blur-sm">
              <span className="text-blue-300 font-semibold text-sm tracking-wide">NEW PRODUCT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white via-white to-blue-100 bg-clip-text text-transparent">
              Crypto
              <br />
              Basket
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Diversify your portfolio
              <br />
              in one tap
            </p>
            <button className="group relative px-8 py-3 rounded-full overflow-hidden">
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white" />
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button text */}
              <span className="relative z-10 text-blue-900 font-semibold">
                Explore Now
              </span>
            </button>
          </div>

          {/* Right content - Placeholder Image */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
            {/* Gradient overlays for image integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/10 to-transparent rounded-3xl" />
            <img
              src={crypto}
              alt="Crypto Basket Illustration"
              className="w-full h-auto object-contain relative z-0"
            />
          </div>
        </div>

        {/* Footer text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
          Terms and Conditions apply
        </div>
      </div>
    </div>
  );
};

export default CryptoBanner;