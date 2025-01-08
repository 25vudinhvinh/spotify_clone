import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer  ' src={assets.arrow_left} alt="" />
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer  ' src={assets.arrow_right} alt="" />
            </div>

            <div className='flex items-center gap-4'>
              <button className='hover:scale-102 cursor-pointer bg-white text-black rounded-2xl text-black text-[13px] px-4 py-1 hidden md:block'>Explore Premium</button>
              <button className='hover:scale-102 cursor-pointer bg-black text-white rounded-2xl text-black text-[13px] px-4 py-1'>Install App</button>
              <p className='bg-orange-600 flex items-center justify-center text-white h-8 w-8 rounded-full hover:scale-105 cursor-pointer'>V</p>
            </div>
        </div> 

        <div className='flex items-center gap-3 mt-4'>
          <p className='bg-white text-black px-2 hover:scale-105 py-1 text-[12px] rounded-2xl cursor-pointer '>All</p>
          <p className='bg-black  px-2 hover:scale-105 py-1 text-[12px] rounded-2xl cursor-pointer '>Music</p>
          <p className='bg-black  px-2 hover:scale-105 py-1 text-[12px] rounded-2xl cursor-pointer '>Podcast</p>
        </div>

        

    </>
  )
}

export default Navbar
