import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-full bg-[#fce3fe] px-4 sm:px-0 pt-[100px] pb-[100px]'>
      <div className="sm:w-[600px] py-10 px-5 md:px-[50px] m-auto bg-white ">
        <h1 className='my-2 sm:my-5 font-semibold text-[28px] '>Sign Up</h1>
        <div className="login_sign-field flex flex-col gap-7 mt-[30px] ">
          <input className='h-[60px] sm:h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg ' type="text" name="" id="" placeholder='Your Name'/>
          <input className='h-[60px] sm:h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg ' type="email" name="" id="" placeholder='Email Address'/>
          <input className='h-[60px] sm:h-[72px] w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg ' type="password" name="" id="" placeholder='Password'/>
        </div>
        <button type="submit" className='w-full h-[72px] text-white bg-[#ff4141] mt-[30px] text-[24px] font-medium cursor-pointer '>Continue</button>
        <p className='mt-5 text-[#5c5c5c] text-lg font-medium '>Already have an account? <span className='text-[#ff4141] font-semibold '>Login here</span></p>
        <div className="agree flex items-center mt-[25px] gap-5 text-[#5c5c5c] text-base font-medium ">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup