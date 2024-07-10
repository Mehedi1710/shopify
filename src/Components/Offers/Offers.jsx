import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './offers.css'

const Offers = () => {
  return (
    <div className='offer sm:w-[85%] h-[60%] sm:flex m-auto px-[35px] md:px-[140px] mb-[100px] '>
        <div className='of_l flex flex-1 flex-col justify-center pt-10 md:pt-0'>
            <h1 className='text-[#171717] text-[40px] md:text-[70px] font-semibold '>Exclusive</h1>
            <h1 className='text-[#171717] text-[40px] md:text-[70px] font-semibold '>Offers For You</h1>
            <p className='text-[#171717]  text-base md:text-[22px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button type="submit" className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] text-white text[22px] font-medium mt-[30px] cursor-pointer '>Check Now</button>
        </div>
        <div className='md:flex md:flex-1 items-center justify-end pt-[50px]'>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers