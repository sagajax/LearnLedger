import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiGraduateCap, GiMoneyStack, GiSkills } from "react-icons/gi";

const Card = ({ title, description, icon, className = "", isCenter = false }) => {
  return (
    <motion.div 
      className={`relative rounded-2xl p-6 w-[320px] h-[420px] transform cursor-pointer bg-gray-800 ${className}`}
      style={{
        clipPath: 'polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 0% 100%)',
        opacity: isCenter ? 1 : 0.5,
        scale: isCenter ? 1 : 0.9,
        transition: 'all 0.3s ease',
      }}
    >
      <div className="space-y-4">
        <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gray-700">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        <p className="text-sm text-gray-300 text-center max-w-[80%] mx-auto">{description}</p>
      </div>
    </motion.div>
  );
};

const BlackWarpBackground = ({
  perspective = 150,
  className = "",
  beamSize = 5,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Education",
      description: "Learn new skills and advance your career with our comprehensive courses.",
      icon: <GiGraduateCap className="w-8 h-8 text-white" />,
    },
    {
      title: "Earning",
      description: "Earn rewards and certificates upon completing courses and tasks.",
      icon: <GiMoneyStack className="w-8 h-8 text-white" />,
    },
    {
      title: "Skills",
      description: "Develop practical skills that are in demand in the job market.",
      icon: <GiSkills className="w-8 h-8 text-white" />,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

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
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white italic">
              Get to know more<br />about Education
            </h1>
            <p className="text-gray-300 max-w-xl">
              Empowering education and driving massive adoption through innovative, immersive, and gamified learning experiences.
            </p>
          </div>
          <div className="relative mt-8 flex items-center justify-center" style={{ height: '460px' }}>
            <button 
              onClick={handlePrev}
              className="absolute left-0 z-50 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <div className="relative w-[320px] h-[420px]">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="absolute top-0 left-0"
                  style={{
                    transform: `translateX(${(index - currentIndex) * 350}px)`,
                    transition: 'transform 0.5s ease',
                  }}
                >
                  <Card 
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    isCenter={index === currentIndex}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="absolute right-0 z-50 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWarpBackground;