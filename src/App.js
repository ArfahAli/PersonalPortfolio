// App.js
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import './App.css'; // Make sure this import is correct for your CSS file

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Set a 1.5-second delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-bgDark ${
        loading ? 'h-screen' : 'h-auto'
      }`}
    >
      {loading && (
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <span className='text-white text-6xl font-bold font-mono tracking-widest'>
            ARFAH
          </span>
          <div className='loading-dots'>
            <span className='dot text-white text-lg'>.</span>
            <span className='dot text-white text-lg'>.</span>
            <span className='dot text-white text-lg'>.</span>
          </div>
        </div>
      )}
      <div
        className={`transform transition-transform duration-1500 ${
          loading ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
