import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotal } from '../Cart/CartSlice';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    addToCart(product.id);
    dispatch(cartTotal(product));

    localStorage.setItem(
      'cartTotal',
      JSON.stringify(product)
    );


  }

  return (
    <div className="md:flex md:mx-[170px] mb-[50px]">
      <div className="flex gap-[17px] pb-5 md:pb-0">
        <div className="hidden sm:flex flex-col gap-4">
          <img className='h-[163px]' src={product.image} alt="" />
          <img className='h-[163px]' src={product.image} alt="" />
          <img className='h-[163px]' src={product.image} alt="" />
          <img className='h-[163px]' src={product.image} alt="" />
        </div>
        <div className="">
          <img className="w-[586px] h-[500px] sm:h-[700px] " src={product.image} alt="" />
        </div>
      </div>
      <div className="mx-5 md:mx-[70px] flex flex-col  ">
        <h1 className='text-[#3d3d3d] text-3xl md:text-[40px] font-bold pr-2'>{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-base ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[40px] gap-[30px] text-[24px] ">
          <div className="text-[#818181] line-through ">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garments.
        </div>
        <div className="des-right">
          <h1 className='mt-[55px] text-[#656565] text-[20px] font-semibold '>Select Size</h1>
          <div className="grid grid-cols-4 sm:flex my-[30px] gap-[20px]">
            <div className='py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer '>S</div>
            <div className='py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer '>M</div>
            <div className='py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer '>L</div>
            <div className='py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer '>XL</div>
            <div className='py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-[3px] cursor-pointer '>XXL</div>
          </div>
          <button  onClick={handleAddToCart} type="submit" className='px-10 py-5 w-[200px] text-base font-semibold text-white bg-[#ff4141] mb-10 cursor-pointer '>ADD TO CART</button>
          <p className='mt-[10px]'>
            <span className='font-semibold'>Category : </span>Women, T-Shirt, Crop Top
          </p>
          <p className='mt-[10px]'>
            <span className='font-semibold pg-'>Tags : </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
