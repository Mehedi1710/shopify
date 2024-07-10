import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='sm:flex h-screen hero'>
      <div className='md:flex md:flex-1 md:flex-col justify-center gap-5 pl-[20px] pt-[40px] md:pt-0 md:pl-[180px] leading-tight '>
        <h2 className='sm:text-[26px] text-lg text-[#090909] font-semibold '>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='flex items-center gap-5'>
            <p className='md:text-[100px] text-[50px] text-[#171717] font-bold'>new</p>
            <img src={hand_icon} alt="" className='w-[60px] md:w-[105px]'/>
          </div>
          <p className='md:text-[100px] text-[45px] text-[#171717] font-semibold'>collection</p>
          <p className='md:text-[100px] text-[45px] text-[#171717] font-semibold'>for everyone</p>
        </div>
        <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium '>
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='md:flex md:flex-1 justify-center'>
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero