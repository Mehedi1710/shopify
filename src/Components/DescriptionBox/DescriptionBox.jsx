import React from 'react';

const DescriptionBox = () => {

  return (
    <div className="desc my-[120px] md:px-[170px]">
      <div className="flex  mx-2 md:mx-0 pb-4 md:pb-0">
        <div className="des_nav_box flex items-center justify-center text-base font-semibold border-[1px] border-[#d0d0d0] w-[171px] h-[70px] ">Description</div>
        <div className="des_nav_box fade flex items-center justify-center text-base font-semibold border-[1px] border-[#d0d0d0] w-[171px] h-[70px] bg-[#FBFBFB] text-[#555] ">Reviews (122)</div>
      </div>
      <div className="desbox_des flex mx-2 md:mx-0 flex-col gap-[25px] p-8 md:p-12 md:pb-[70px] border-[1px] border-[#D0D0D0]">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individuals showcase their products,
          interact with customers, and conduct transactions without the need for
          a physical presence. E-Commerce websites have gained immense
          popularity due to their convention accessibility, and the global reach
          their offer.
        </p>
        <p>
          E-Commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g, sizes, colors). Each product usually has its own dedicated page
          with relevant information.{' '}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
