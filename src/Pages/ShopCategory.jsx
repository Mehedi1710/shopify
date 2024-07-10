import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  
  return (
    <div className='shp-cat px-1'>
      <img className='shop-ban block my-[30px] mx-auto md:w-[78%] ' src={props.banner} alt="" />
      <div className="flex md:mx-[168px] justify-between items-center">
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="md:py-[10px] px-2 md:px-5 flex items-center gap-x-1 rounded-[40px] border-[1px] border-[#888] ">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:grid-cols-3 my-5 md:mx-[168px] md:gap-y-10 sm:gap-x-4 md:gap-x-[65px] justify-between">
        {all_product.map((item, i)=>{
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore flex justify-center items-center my-[120px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] test-lg font-medium ">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory