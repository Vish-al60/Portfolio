import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
 
  
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gfg from "../assets/gfg.png";
const Footer = () => {
  return (
    <div className=" max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      {/* <div className=' space-y-4'>
      <h3 className='text-2xl text-gray-200 font-semibold'>Vishal</h3>
    </div> */}
      <div className=" flex flex-row gap-6 text-gray-400 text-4xl ">
        <a href="https://www.linkedin.com/in/vishal-chouhan-016973189/">
          <FaLinkedin className="linkdin text-blue-600 " />
        </a>
        <a href="https://github.com/Vish-al60">
          <FaGithubSquare className=" text-slate-500" />
        </a>
        <a href="https://www.instagram.com/visshhh.____/?hl=en">
          <FaInstagram className="text-red-600" />
        </a>
        <a href="https://x.com/vish_al487?lang=en">
          <FaTwitter className="text-blue-500" />
        </a>
        <a href="https://leetcode.com/u/VISH____AL/">
          <SiLeetcode className=" text-orange-400" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/vishchouhan058/"  > <img src={gfg} alt="gfg" className=" w-10 h-9 cursor-pointer " /></a>
      </div>

      <p className="text-gray-400 ">@ 2024 Vishal </p>
    </div>
  );
};

export default Footer;
