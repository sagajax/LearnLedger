import React from 'react';
import crypto1 from '../assets/crypto1.webp';
import crypto2 from '../assets/crypto2.webp';

const CryptoBanner = () => {
  return (
    <div className="px-28 w-full"> {/* Add padding to the left and right */}
      <div className="flex gap-4 w-full">
        {/* Left Banner */}
        <div 
          className="flex-1 rounded-2xl p-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${crypto1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
          }}>
          <div className="relative z-10">
            <p className="text-blue-400 text-lg mb-4">WELCOME BONUS</p>
            <h1 className="text-white text-5xl font-bold mb-2">
              Win Up To
              <br />
              1 BTC worth
              <br />
              of rewards
            </h1>
            <p className="text-gray-300 mb-6">in the Crypto.com App</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Learn More
              <span>→</span>
            </button>
            <p className="text-gray-400 text-sm mt-6">Terms and conditions apply</p>
          </div>
        </div>

        {/* Right Banner */}
        <div 
          className="w-96 rounded-2xl p-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${crypto2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="relative z-10">
            <p className="text-blue-400 text-lg mb-4">NEW FEATURE</p>
            <h2 className="text-white text-5xl font-bold mb-4">
              DUAL
              <br />
              INVEST
            </h2>
            <p className="text-gray-300 mb-6">
              Earn greater rewards while
              <br />
              waiting for your target price
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Learn More
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoBanner;