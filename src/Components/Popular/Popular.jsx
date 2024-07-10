import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90%] mt-[100px] pt-[70px] md:pt-0 mb-[70px] md:mb-[150px]'>
        <h1 className='text-[#171717] md:text-[50px] text-[32px] font-semibold '>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
        <div className='mt-[50px] grid sm:grid-cols-2 md:grid-cols-1 gap-y-6 md:flex sm:gap-[18px] md:gap-[30px]'>
            {
                data_product.map((item, i)=> {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default Popular