import React from "react";
import profilepic from "../assets/q5.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-3xl tracking-tight">
          HEY,I AM <br />
          <span className="text-blue-200 font-bold">Vishal Chouhan</span>
          <br />
          <TypeAnimation
            sequence={["Developer", 1000, "Web designer", 1000]}
            speed={10}
            repeat={Infinity}
            className=""
          />
        </p>
        <h4 className="text-gray-300 mt-2">I am dedicated to getting an opportunity where I can maximize my potential and significantly contribute to the organization’s growth.</h4>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#3d6ca4]  to-[rgb(61,108,164)] rounded-xl">
           <a href="">Download CV</a> 
          </button>
          <button className=" transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl">
           {/* <a href=""> View work</a> */}
           <Link to="portfolio" smooth={true} offset={10} duration={4000}>
           View work
          </Link>
          </button>
        </div>
        
        <div className=" absolute inset-0 overflow-hidden md:overflow-visible">
          <div className="hiddden md:block">
            <ShinyEffect left={100} top={200} size={1400} />
          </div>
          <ShinyEffect left={-100} top={0} size={1200} />
        </div>


      </div>
      <img src={profilepic} alt="" className="w-[300px] md:w-[500px]" />
    </div>
  );
};

export default Hero;
