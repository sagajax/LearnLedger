import { useRef, useEffect, useState } from 'react';

export default function ModernCards() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const target = useRef(null);

  useEffect(() => {
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
    },
    {
      header: 'Turn Conversations into Revenue',
      title: 'Up to 44% of chats converts into sales',
      description:
        'Transform conversations into conversions with our intelligent chat system.',
      icon: '💬',
    },
    {
      header: 'Personalize Every Customer Interaction',
      title: 'Tailored user interactions',
      description:
        'Personalized experiences that resonate with your customers\' unique needs and preferences.',
      icon: '🎯',
    },
    {
      header: 'Streamline the Path to Purchase',
      title: 'Accelerated customer journeys',
      description:
        'Streamline the path to purchase with intuitive navigation and smart recommendations.',
      icon: '🚀',
    },
  ];

  return (
    <div ref={target} className="h-[500vh] mx-auto text-black flow-root relative">
      <div className="sticky top-16 flow-root">
        <div className="h-screen w-screen relative flex justify-center items-center pt-16">
          {/* Initial static card (Card 0) */}
          <div className="absolute w-full">
            <div className="bg-white shadow-2xl w-screen h-[calc(100vh-64px)] flex items-center justify-center border-4 border-gray-200/50 backdrop-blur-sm relative">
              <div className="absolute top-8 left-8 bg-gray-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                Card 0
              </div>
              <div className="max-w-4xl mx-8">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16">
                  Revolutionize Your Customer Experience
                </h2>
                <div className="space-y-8">
                  <span className="text-6xl block mb-8">✨</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Drive Growth with AI-Powered Solutions
                  </h3>
                  <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                    Unlock new levels of customer engagement and satisfaction with our cutting-edge platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated cards */}
          {cards.map((card, idx) => (
            <Card
              key={idx}
              scrollProgress={scrollProgress}
              index={idx}
              length={cards.length}
              start={(1 / cards.length) * idx}
              end={(1 / cards.length) * (idx + 1)}
            >
              <div className="bg-white shadow-2xl w-screen h-[calc(100vh-64px)] flex items-center justify-center border-4 border-gray-200/50 backdrop-blur-sm relative">
                <div className="absolute top-8 left-8 bg-gray-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                  Card {idx + 1}
                </div>
                <div className="max-w-4xl mx-8">
                  <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16">
                    {card.header}
                  </h2>
                  <div className="space-y-8">
                    <span className="text-6xl block mb-8">{card.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children, end, index, length, scrollProgress, start }) {
  const progress = Math.min(1, Math.max(0, (scrollProgress - start) / (end - start)));
  const transform = `translateY(${100 - 100 * progress}%)`;
  const opacity = progress;

  return (
    <div
      style={{
        transform: transform,
        opacity: opacity,
        transformOrigin: '50% 50%',
      }}
      className="absolute transition-all duration-100 w-full"
    >
      {children}
    </div>
  );
}