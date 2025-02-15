import React, { useState } from "react";
const cn = (...classes) => classes.filter(Boolean).join(" ");

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main className="w-screen min-h-screen bg-zinc-50 overflow-hidden">
      <div
        className={cn(
          "relative flex flex-col min-h-[100vh] w-screen items-center justify-center transition-bg",
          className
        )}
        style={{
          "--white": "rgba(255, 255, 255, 0.85)",
          "--transparent": "transparent",
          "--blue-300": "rgb(147, 197, 253)",
          "--blue-400": "rgb(96, 165, 250)",
          "--blue-500": "rgb(59, 130, 246)",
          "--indigo-300": "rgb(165, 180, 252)",
          "--violet-200": "rgb(221, 214, 254)",
        }}
        {...props}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(`
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[8px] invert
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:[background-size:200%,_100%] 
              after:[animation:aurora_8s_linear_infinite] 
              after:[background-attachment:fixed] 
              after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-70 
              animate-aurora
              will-change-transform`,
              showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_80%)]`
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

const HeroSection = () => {
  const [active, setActive] = useState('start');

  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 w-full mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mx-auto leading-tight tracking-wider text-gray-900">
          <span className="block mb-4">Transform Your Learning</span>
          <span className="block mb-4">into Earning</span>
        </h1>
        
        <span className="block text-center text-lg md:text-xl font-semibold leading-tight tracking-widest mt-8 mb-20 text-gray-800">
          Master In-Demand Skills, Complete Challenges, Earn Crypto
        </span>

        <div className="flex bg-white p-1 rounded-full relative items-center w-full max-w-lg mx-auto overflow-hidden">
          <div
            className={`absolute w-1/2 rounded-full bg-lime-300 z-10 h-[88%] transition-transform duration-400
              ${active === 'book' ? 'translate-x-[98%]' : 'translate-x-0'}`}
          />

          <button
            onMouseEnter={() => setActive('start')}
            onMouseLeave={() => setActive('start')}
            className="flex-1 px-8 py-4 rounded-full text-lg font-medium z-20 transition-all duration-300 text-center cursor-pointer hover:text-gray-900"
          >
            Start free trial
          </button>
          <button
            onMouseEnter={() => setActive('book')}
            onMouseLeave={() => setActive('start')}
            className="flex-1 px-8 py-4 rounded-full text-lg font-medium z-20 transition-all duration-300 text-center cursor-pointer hover:text-gray-900"
          >
            Book a demo
          </button>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;