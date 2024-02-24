import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setLogo(!logo);
    setNav(!nav);
  };

  return (
    <>
      <div className=" flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
          <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
            BEACHES.
          </h1>
        </div>
        <ul className=" hidden md:flex">
            <li className=" cursor-pointer font-semibold">Home</li>
            <li className=" cursor-pointer font-semibold">Destination</li>
            <li className=" cursor-pointer font-semibold">Travel</li>
            <li className=" cursor-pointer font-semibold">View</li>
            <li className=" cursor-pointer font-semibold">Book</li>
        </ul>
        <div className=" hidden md:flex">
          <BiSearch size={20} className=" mr-2" />
          <BsPerson size={20} />
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className=" md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
        {/* Mobile navbar  */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul className=" font-mono">
            <h1 className="font-serif">BEACHES.</h1>
            <li className=" border-b">Home</li>
            <li className=" border-b">Destination</li>
            <li className=" border-b">Travel</li>
            <li className=" border-b">View</li>
            <li className=" border-b">Book</li>
            <div className=" flex flex-col">
              <button className=" my-4">Search</button>
              <button>Account</button>
            </div>
            <div className=" text-blue-500 flex justify-between my-6">
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaPinterest />
              <FaInstagram />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
