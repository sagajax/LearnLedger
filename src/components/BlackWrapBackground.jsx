import React from "react";
import react from '../assets/react.svg';
import Byr from '../assets/Byr.svg';
import paw from '../assets/Paw.svg';
import Dalfillo from '../assets/Dalfilo.svg';
import Hike from '../assets/Hike.svg';
import Lat from '../assets/Lat.svg';

const BlackWarpBackground = ({
  perspective = 150,
  className = "",
  beamSize = 5,
}) => {
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
    <div className="flex items-center justify-center min-h-screen w-full p-0 overflow-hidden">
      <div className={`relative rounded-none border border-gray-800 bg-black w-full h-[800px] overflow-hidden ${className}`}>
        <div
          style={{
            "--perspective": `${perspective}px`,
            "--grid-color": "rgba(255, 255, 255, 0.5)",
            "--beam-size": `${beamSize}%`,
          }}
          className="pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        >
          {/* Grid sides */}
          <div className="absolute [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]" />
          <div className="absolute top-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]" />
          <div className="absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]" />
          <div className="absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]" />
        </div>
        <div className="relative h-full w-full p-12">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-white italic">
              Valued Partners
            </h1>
          </div>
          
          <div className="flex items-center justify-center h-[calc(100%-200px)]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl w-full">
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
        </div>
      </div>
    </div>
  );
};

export default BlackWarpBackground;