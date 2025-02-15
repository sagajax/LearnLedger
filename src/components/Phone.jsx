import React from 'react'
import p1 from '../assets/phone.webp'

const Phone = () => {
  return (
    <div className='w-full flex items-center justify-center relative h-96 z-30'>
        
      {/* Background glows */}
      <div className='w-96 h-96 blur-sm shadow-2xl bg-purple-500 rounded-full'></div>
      <div className='bg-purple-500 h-72 w-96 blur-3xl rounded-full absolute bottom-0 left-[20%]'></div>
      <div className='bg-purple-500 h-72 w-96 blur-3xl rounded-full absolute top-0 right-[20%]'></div>

      {/* Left stats elements */}
      <div className='absolute top-0 left-[27%] w-72'>
        {/* Top stats box */}
        <div 
          className='bg-[#B4A1E3] rounded-2xl p-4 w-48 transform transition-all duration-300 
                     hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 hover:bg-[#9d85d6] 
                     cursor-pointer z-20'
        >
          <div className='flex gap-2 mb-2'>
            <div className='bg-white/20 p-1 rounded-lg hover:bg-white/30 transition-colors duration-300'>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className='bg-white/20 p-1 rounded-lg hover:bg-white/30 transition-colors duration-300'>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
          <div className='text-2xl font-bold mb-1 text-white'>27% +</div>
          <div className='text-sm text-white/90'>Average AOV Increase</div>
        </div>

        {/* Space for vertical spacing */}
        <div className='h-32'></div>

        {/* Bottom label */}
        <div 
          className='bg-[#BFFF4D] text-black/80 px-6 py-2 rounded-xl w-32 text-center font-medium 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                    hover:shadow-lime-500/30 hover:bg-[#a8ff1a] cursor-pointer z-30'
        >
          Instant Setup
        </div>
      </div>

      {/* Right stats element - Chat Conversion Rate */}
      <div className='absolute top-12 right-[20%] w-72'>
        <div 
          className='bg-[#BFFF4D] rounded-2xl p-4 w-48 transform transition-all duration-300 
                     hover:scale-105 hover:shadow-xl hover:shadow-lime-500/30 hover:bg-[#a8ff1a] 
                     cursor-pointer z-20'
        >
          <div className='flex gap-2 mb-2'>
            <div className='bg-black/10 p-1 rounded-lg hover:bg-black/20 transition-colors duration-300'>
              <svg className="w-4 h-4 text-black/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className='bg-black/10 p-1 rounded-lg hover:bg-black/20 transition-colors duration-300'>
              <svg className="w-4 h-4 text-black/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className='text-2xl font-bold mb-1 text-black/80'>16.3%</div>
          <div className='text-sm text-black/70'>Average Chat Conversion Rate</div>
        </div>
      </div>

      {/* Main phone image */}
      <img 
        src={p1} 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 z-40' 
        alt="Phone" 
      />
    </div>
  )
}

export default Phone