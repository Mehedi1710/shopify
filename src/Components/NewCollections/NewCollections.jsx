import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px]'>
        <h1 className='text-[#171717] text-[32px] md:text-[50px] font-semibold '>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] '/>
        <div className='mt-[50px] grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:grid-cols-4 sm:gap-[18px] gap-[30px]'>
            {
                new_collection.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollections