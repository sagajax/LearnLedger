import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is adaptive learning?",
      answer: "Adaptive learning is a personalized educational approach that adjusts to your learning pace and style. Our platform uses AI to customize content and exercises based on your progress and understanding."
    },
    {
      question: "How do virtual classrooms work?",
      answer: "Virtual classrooms provide real-time interactive learning environments where you can attend lectures, participate in discussions, and collaborate with peers. Features include video conferencing, screen sharing, and digital whiteboards."
    },
    {
      question: "What devices support your platform?",
      answer: "Our platform is accessible across all major devices including desktop computers, laptops, tablets, and smartphones. It works on both iOS and Android mobile devices, as well as all modern web browsers."
    },
    {
      question: "How do you track learning progress?",
      answer: "We provide detailed analytics and progress tracking through interactive dashboards. You can monitor completion rates, assessment scores, time spent learning, and skill development across different subjects."
    },
    {
      question: "What learning resources are available?",
      answer: "Our platform offers diverse resources including video lectures, interactive exercises, downloadable materials, practice quizzes, and peer discussion forums. All content is curated by education experts."
    },
    {
      question: "How do you ensure content quality?",
      answer: "All educational content undergoes rigorous review by subject matter experts and instructional designers. We regularly update materials based on educational standards and user feedback."
    }
  ];

  return (
    <div className="bg-white min-h-screen mt-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Heading */}
          <div className="col-span-4">
            <div className="sticky top-8">
              <h2 className="text-4xl font-bold text-grey-800">Frequently Asked Questions</h2>
            </div>
          </div>

          {/* Right side - Questions */}
          <div className="col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-violet-500"
                >
                  <button
                    className="w-full py-6 text-left flex justify-between items-center hover:text-lime-600 transition-colors"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="text-xl font-medium text-black">{faq.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="text-lime-600 w-6 h-6" />
                    ) : (
                      <ChevronDown className="text-violet-600 w-6 h-6" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="pb-6 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-grey-800">
              Have more questions? <a href="#" className="text-lime-600 hover:underline">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;