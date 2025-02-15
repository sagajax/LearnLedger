import React from 'react';
import crypto from '../assets/crypto.png';

const CryptoBanner = () => {
  return (
    <div
      className="w-[80%] h-[650px] bg-cover bg-center flex items-center justify-start rounded-3xl pl-20"
      style={{ backgroundImage: `url(${crypto})` }}
    >
      <div className="text-white text-left mr-20 max-w-md">
        <h1 className="text-6xl font-semibold mb-4">Crypto Basket</h1>
        <p className="text-xl text-gray-300 mb-6">Diversify your portfolio</p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CryptoBanner;