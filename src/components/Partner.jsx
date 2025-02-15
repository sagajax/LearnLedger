import React from 'react';
import react from '../assets/react.svg';
import Byr from '../assets/Byr.svg';
import paw from '../assets/Paw.svg';
import Dalfillo from '../assets/Dalfilo.svg';
import Hike from '../assets/Hike.svg';
import Lat from '../assets/Lat.svg';
const PartnersSection = () => {
  const partners = [
    { id: 1, name: 'HLV', logo: paw },
    { id: 2, name: 'Liquifi', logo: Byr },
    { id: 3, name: 'Autonomous', logo: react },
    { id: 4, name: 'Hashlock', logo: Lat },
    { id: 5, name: 'Thirdweb', logo: react },
    { id: 6, name: 'Immutable', logo: Hike },
    { id: 7, name: 'Skale', logo: react },
    { id: 8, name: 'Upside', logo: Dalfillo },
    { id: 9, name: 'Digital Economy Council', logo: Byr },
    { id: 10, name: 'QUT', logo: paw }
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-center text-3xl font-bold mb-12 ">
        Valued Partners
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="relative group bg-black rounded-lg p-4 h-32 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:translate-y-[-2px] hover:bg-white"
          >
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain transition-all duration-300 filter brightness-0 invert group-hover:filter-none group-hover:brightness-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
