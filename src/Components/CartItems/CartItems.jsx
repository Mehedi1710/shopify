import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const e = useSelector(state => state.cartDetails.value);
  const [subTotal, setSubTotal] = useState('')

  const subTotalPrice = () => {
    const total = e.reduce((sum, item) => sum + (item.new_price ), 0);
    setSubTotal(total)
  }
  useEffect(()=> {
    subTotalPrice();
  })

  return (
    <div className="md:my-[100px] sm:mx-4 md:mx-[170px]">
      <div className="grid grid-cols-6 items-center md:gap-[75px] md:py-5 text-[#454545] text-xs sm:text-lg font-semibold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2]  " />
      {e.map((e) => {
        // if (cartItems[e.id] > 0) {
          return (
            <>
              <div>
                <div className="text-[17px] font-medium grid grid-cols-6 items-center md:gap-[75px] md:py-5 text-[#454545] text-lg">
                  <img className="h-[62px]" src={e?.image} alt="" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="sm:w-[64px] h-[50px] border-[2px] border-[#ebebeb] bg-[#fff] ">{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]} </p>
                  <img
                    className="w-[15px] mx-10 cursor-pointer"
                    src={remove_icon}
                    onClick={() => {
                      // removeFromCart(e.id);
                      localStorage.removeItem('cartTotal');
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            </>
          );
        }
        // return null;
      )}
      <div className="md:flex my-[100px] mx-2 ">
        <div className="flex flex-1 flex-col mr-[200px] gap-10">
            <h1>Cart Totals</h1>
            <div>
                <div className="flex justify-between py-[15px] ">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] ">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] ">
                    <p>Total</p>
                    <p>${subTotal}</p>
                </div>
            </div>
            <button className='w-[262px] h-[58px] bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer '>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 text-base font-medium">
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className="sm:w-[504px] mt-[15px] pl-5 h-[58px] bg-[#eaeaea]">
                <input className='bg-transparent text-base w-[152px] sm:w-[314px] h-[58px] outline-none ' type="text" name="" id="" placeholder='promo code'/>
                <button className='w-[170px] h-[58px] text-base bg-black text-white cursor-pointer '>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
