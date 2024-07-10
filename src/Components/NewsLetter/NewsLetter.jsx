import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter md:w-[85%] h-[60%] px-[70px] md:px-[140px] flex flex-col items-center justify-center m-auto mb-[150px] gap-[30px] '>
        <h1 className='text[#454545] text-[30px] md:text-[55px] font-semibold '>Get Exclusive Offers On Your Email</h1>
        <p className='text[#454545] text-[20px]'>Subscribe to our newsletter and stay updated</p>
        <div className='flex justify-between items-center w-[300px] md:w-[730px] h-[40px] md:h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3] '>
            <input type="email" name="" placeholder='Your Email id' id="" className='w-[190px] md:w-[500px] pl-4 md:ml-[30px] border-none outline-none text-[#616161] font-poppins text-base '/>
            <button type="submit" className='md:w-[210px] px-3 h-[40px] md:h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer '>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter