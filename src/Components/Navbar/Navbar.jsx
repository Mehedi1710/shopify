import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="hidden md:flex justify-around items-center p-4 border-b-[1px] border-b-[#626262]	">
        <div className="flex items-center gap-[10px] ">
          <img src={logo} alt="" />
          <p className="text-[#171717] text-[38px] font-semibold ">SHOPPER</p>
        </div>
        <ul className="flex items-center gap-[50px] text-[#626262] text-[20px] font-medium ">
          <li className="gap-[3px] cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? ' pb-1 border-b-[4px] border-b-red-500' : '';
              }}
            >
              Shop
            </NavLink>
          </li>
          <li className="gap-[3px] cursor-pointer">
            <NavLink
              to="/mens"
              className={({ isActive }) => {
                return isActive ? ' pb-1 border-b-[4px] border-b-red-500' : '';
              }}
            >
              Men
            </NavLink>
          </li>
          <li className="gap-[3px] cursor-pointer">
            <NavLink
              to="/womens"
              className={({ isActive }) => {
                return isActive ? ' pb-1 border-b-[4px] border-b-red-500' : '';
              }}
            >
              Women
            </NavLink>
          </li>
          <li className="gap-[3px] cursor-pointer">
            <NavLink
              to="/kids"
              className={({ isActive }) => {
                return isActive ? ' pb-1 border-b-[4px] border-b-red-500' : '';
              }}
            >
              Kids
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-[45px]">
          <Link to="/login">
            <button className="text-[20px] rounded-full text-[#515151] cursor-pointer bg-white font-medium border border-[#7a7a7a] w-[120px] h-[45px] ">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] text-white bg-red-500 ">
            0
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-between items-center p-4 border-b-[1px] border-b-[#626262]">
          <div className="flex items-center gap-[10px] ">
            <img src={logo} alt="" />
            <p className="text-[#171717] text-[32px] font-semibold ">SHOPPER</p>
          </div>
          <div
            onClick={handleClick}
            className="cursor-pointer font-bold text-[20px]"
          >
            {show ? <GiCancel /> : <FaBars />}
          </div>
        </div>
        <div
          className={
            show ? 'absolute top-0 left-0 bg-teal-500 w-[80%] h-full ' : 'absolute top-[-100%] left-[-100%]'
          }
        >
          <div className="flex justify-center pt-[50px]">
            <ul className="text-[#626262] text-[20px] font-medium ">
              <li className="gap-[3px] cursor-pointer pb-2">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? ' pb-1 border-b-[4px] border-b-red-500'
                      : '';
                  }}
                >
                  Shop
                </NavLink>
              </li>
              <li className="gap-[3px] cursor-pointer pb-2">
                <NavLink
                  to="/mens"
                  className={({ isActive }) => {
                    return isActive
                      ? ' pb-1 border-b-[4px] border-b-red-500'
                      : '';
                  }}
                >
                  Men
                </NavLink>
              </li>
              <li className="gap-[3px] cursor-pointer pb-2">
                <NavLink
                  to="/womens"
                  className={({ isActive }) => {
                    return isActive
                      ? ' pb-1 border-b-[4px] border-b-red-500'
                      : '';
                  }}
                >
                  Women
                </NavLink>
              </li>
              <li className="gap-[3px] cursor-pointer">
                <NavLink
                  to="/kids"
                  className={({ isActive }) => {
                    return isActive
                      ? ' pb-1 border-b-[4px] border-b-red-500'
                      : '';
                  }}
                >
                  Kids
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-[45px] py-8">
            <Link to="/login">
              <button className="text-[20px] rounded-full text-[#515151] cursor-pointer bg-white font-medium border border-[#7a7a7a] w-[120px] h-[45px] ">
                Login
              </button>
            </Link>
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] text-white bg-red-500 ">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
