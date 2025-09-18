import React, { useEffect, useState } from 'react'

const Sizetracker = () => {


const [windowsize,setWindowsize] = useState(window.innerWidth);

useEffect(() =>{
    const updatesize = () =>{
      setWindowsize(window.innerWidth);  
    };
    window.addEventListener("resize" , updatesize);
    return () => {
        window.removeEventListener("resize",updatesize);
    };
},[]);


  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
        
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `radial-gradient(circle at 50% 30%, #E9D5FF 0%, #C4B5FD 25%, #A78BFA 50%, #7C3AED 75%, #5B21B6 100%)`,
    }}
  />
  <div className='z-10 bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full'>
  <h1 className='text-4xl font-bold text-purple-700 mb-4'>Screen Size Tracker</h1>
  <p className='text-lg font-semibold text-gray-600'>Current Width:</p>
  <span className='text-4xl font-extrabold text-amber-500 mt-2 block'>{windowsize}px</span>
  </div>
  
</div>


  )
}

export default Sizetracker