import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  
  return (
    <div className="rel-pro flex flex-col items-center gap-[10px]">
      <h1 className='text-[#171717] text-4xl md:text-[50px] font-semibold '>Related Products</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] '/>
      <div className="pro_item grid grid-cols-1 sm:grid-cols-2 md:flex mt-[50px] sm:gap-4 md:gap-[30px] ">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
