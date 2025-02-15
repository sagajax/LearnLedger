import { useRef, useEffect, useState } from 'react';
import warp1 from '../assets/warp1.webp';
import warp2 from '../assets/warp2.webp';
import warp3 from '../assets/warp3.webp';
import paw from '../assets/Paw.svg';
export default function ModernCards() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialVisible, setIsInitialVisible] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    // Set initial card visibility after a short delay
    setTimeout(() => {
      setIsInitialVisible(true);
    }, 300);

    const handleScroll = () => {
      const element = target.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPercent = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight))
      );
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      header: 'Transform Your E-commerce Experience',
      title: 'Up to 27% AOV increase',
      description:
        'Maximize your revenue potential with our proven solutions that drive higher average order values.',
      icon: '📈',
      image: warp1,
      randomText: 'Revolutionize your online store with cutting-edge AI tools.',
    },
    {
      header: 'Turn Conversations into Revenue',
      title: 'Up to 44% of chats converts into sales',
      description:
        'Transform conversations into conversions with our intelligent chat system.',
      icon: '💬',
      image: warp2,
      randomText: 'Engage customers like never before with real-time chat solutions.',
    },
    {
      header: 'Personalize Every Customer Interaction',
      title: 'Tailored user interactions',
      description:
        'Personalized experiences that resonate with your customers\' unique needs and preferences.',
      icon: '🎯',
      image: warp3,
      randomText: 'Deliver personalized experiences that drive customer loyalty.',
    },
  ];

  return (
    <div ref={target} className="h-[500vh] mx-auto text-black flow-root relative">
      <div className="sticky top-16 flow-root">
        <div className="h-screen w-screen relative flex justify-center items-center pt-16">
          {/* Initial static card (Card 0) */}
          <div className="absolute w-full">
            <div className="bg-white shadow-2xl w-screen h-[calc(100vh-64px)] flex items-center border-4 border-gray-200/50 relative overflow-hidden">
              <div className="max-w-7xl mx-4 lg:mx-12 flex items-center gap-8">
                <div className="hidden lg:block flex-1">
                  <div className="overflow-hidden">
                    <img
                      src={paw}
                      alt="Placeholder"
                      className="w-[500px] h-[500px] object-cover rounded-lg transform transition-all duration-1000"
                      style={{
                        transform: `translateX(${isInitialVisible ? '0' : '100'}%)`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 max-w-2xl">
                  <h2 
                    className="text-4xl md:text-6xl font-bold text-indigo-700 mb-6 transform transition-all duration-1000 opacity-0"
                    style={{
                      opacity: isInitialVisible ? 1 : 0,
                      transform: `translateY(${isInitialVisible ? '0' : '20px'})`,
                    }}
                  >
                    Revolutionize Your Customer Experience
                  </h2>
                  <div className="space-y-4">
                    <span 
                      className="text-6xl block mb-2 transform transition-all duration-1000 delay-200"
                      style={{
                        opacity: isInitialVisible ? 1 : 0,
                        transform: `translateY(${isInitialVisible ? '0' : '20px'})`,
                      }}
                    >
                      ✨
                    </span>
                    <h3 
                      className="text-3xl md:text-4xl font-bold text-indigo-600 transform transition-all duration-1000 delay-300"
                      style={{
                        opacity: isInitialVisible ? 1 : 0,
                        transform: `translateY(${isInitialVisible ? '0' : '20px'})`,
                      }}
                    >
                      Drive Growth with AI-Powered Solutions
                    </h3>
                    <p 
                      className="text-slate-600 text-xl md:text-2xl leading-relaxed transform transition-all duration-1000 delay-400"
                      style={{
                        opacity: isInitialVisible ? 1 : 0,
                        transform: `translateY(${isInitialVisible ? '0' : '20px'})`,
                      }}
                    >
                      Unlock new levels of customer engagement and satisfaction with our cutting-edge platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated cards */}
          {cards.map((card, idx) => {
            const start = (1 / cards.length) * idx;
            const end = (1 / cards.length) * (idx + 1);
            const progress = Math.min(1, Math.max(0, (scrollProgress - start) / (end - start)));
            
            return (
              <Card
                key={idx}
                scrollProgress={scrollProgress}
                index={idx}
                length={cards.length}
                start={start}
                end={end}
                progress={progress}
              >
                <div className="bg-white shadow-2xl w-screen h-[calc(100vh-64px)] flex items-center border-4 border-gray-200/50 relative">
                  <div className="max-w-7xl mx-4 lg:mx-12 flex items-center gap-8">
                    <div className="hidden lg:block flex-1">
                      <div className="overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-[600px] h-[600px] object-cover rounded-lg transform transition-transform duration-1000"
                          style={{
                            transform: `translateX(${100 - 100 * progress}%)`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 max-w-2xl">
                      <h2 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
                        {card.header}
                      </h2>
                      <div className="space-y-4">
                        <span className="text-6xl block mb-2">{card.icon}</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">
                          {card.title}
                        </h3>
                        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed">
                          {card.description}
                        </p>
                        <p className="text-emerald-600 text-xl md:text-2xl font-bold">
                          {card.randomText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card({ children, end, index, length, scrollProgress, start, progress }) {
  const verticalTransform = `translateY(${100 - 100 * progress}%)`;

  return (
    <div
      style={{
        transform: verticalTransform,
        transformOrigin: '50% 50%',
      }}
      className="absolute transition-all duration-100 w-full"
    >
      {children}
    </div>
  );
}