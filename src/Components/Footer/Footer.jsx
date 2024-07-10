import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-[50px]'>
        <div className="ft_logo flex items-center gap-5">
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-[46px] font-bold '>SHOPPER</p>
        </div>
        <ul className='links  sm:flex gap-[50px] text-[#252525] text-[20px] '>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="flex gap-5">
            <div className="p-[10px] pb-[6px] bg-[#fbfbfb] ">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="p-[10px] pb-[6px] bg-[#fbfbfb]">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="p-[10px] pb-[6px] bg-[#fbfbfb]">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="copy_wright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-base sm:text-[20px] ">
            <hr className='w-[80%] rounded-[10px] h-[3px] bg-[#c7c7c7] '/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer