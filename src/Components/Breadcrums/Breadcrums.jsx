import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;

  return (
    <div className='breadcrums flex items-center gap-2 text-[#5e5e5e] text-bse font-semibold my-[60px] md:mx-[170px] capitalize '>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product?.category} <img src={arrow_icon}  alt="" /> {product?.name}
    </div>
  )
}

export default Breadcrums