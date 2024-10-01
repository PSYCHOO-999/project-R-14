import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center' >
      <div className='relative w-80 h-60 bg-zinc-500 rounded-md flex overflow-hidden'>
        <img className={`shrink-0 ${val===false?"-translate-x-[0%]":"-translate-x-[100%]"} duration-700 ease-in-out w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1676422290422-bdf1d7eee629?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDh8fHxlbnwwfHx8fHw%3D" alt="" />
        <img className={`shrink-0 ${val===false?"-translate-x-[0%]":"-translate-x-[100%]"} duration-700 ease-in-out w-full h-full object-cover`} src="https://images.unsplash.com/photo-1727175401108-6e8bf73ca114?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNzd8fHxlbnwwfHx8fHw%3D" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='w-10 h-10 flex items-center justify-center rounded-full bg-[#dadada7b] absolute  bottom-[0%] left-[35%] -translate-x-[-50%] -translate-y-[50%]'>
          <FaLongArrowAltRight size={".7em"}/>
        </span>
      </div>
    </div>
  )
}

export default Home