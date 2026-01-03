import { useState } from 'react'
import './App.css'

// 1. We define the Card component separately here (OUTSIDE App)
function Card1({channel, channel2 ="Coding Guru"}) {
    
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://picsum.photos/400/300?random=90"
          alt="Featured content"
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
          Featured
        </span>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
          {channel}
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Discover cutting-edge design patterns and UI components that elevate your digital experiences.
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors duration-200">
          {channel2}
        </button>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>234 views</span>
        </div>
      </div>
    </div>
  );
}

// 2. The Main App Component
// 2. The Main App Component
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-amber-600 text-black rounded-xl p-4 mb-4'>Tailwind Test</h1>
      
      <div className="flex justify-center gap-4"> {/* Added gap-4 for space */}
      
        {/* CARD 1: I removed channel2, so it will fallback to "Coding Guru" */}
        <Card1 channel="Chai or React" />

        {/* CARD 2: I kept channel2, so it will use "Visit Me" */}
        <Card1 channel="Amigo Code" channel2="Visit Me" />

      </div>
    </>
  )
}

export default App