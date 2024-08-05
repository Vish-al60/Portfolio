import React from "react";
import project1 from "../assets/program.jpg";
import project2 from "../assets/frontend.jpg";
import project3 from "../assets/backend_1.jpg";
import c from "../assets/C.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6  grid md:grid-cols-2 gap-8 place-items-center' id="about">
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg p-6 flex flex-wrap gap-4 text-4xl justify-center ">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiReact className="text-blue-500" />
      </div>

      <div className="relative group">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-1g blur opacity-25
        group-hover:opacity-100  transition duration-300 "
        ></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-1g">
          <img
            src={project1}
            alt="project1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Programming Langugage
        </h2>
        <p className="text-gray-300 mb-5">
          <span className="text-blue-300">C++ </span>&nbsp; &nbsp;{" "}
          <span className="text-blue-600"> PYTHON</span> &nbsp; &nbsp;
          <span className="text-yellow-500">JAVASCRIPT</span>
        </p>

        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          {/* <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          
          <DiReact className="text-blue-500" /> */}
          <img src={c} alt="C++" className=" w-8 h-9 " />
          &nbsp;
          <DiPython className="text-blue-600" />
          &nbsp;
          <DiJavascript1 className="text-yellow-500" />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Frontend Skills
        </h2>
        <p className="text-gray-300 mb-4">
          <span className="text-orange-600">HTML </span> &nbsp;
          <span className="text-blue-600">CSS</span> &nbsp;
          <span className="text-yellow-500">JAVASCRIPT </span>&nbsp;
          <span className="text-sky-400">REACT JS</span> &nbsp;
          <span className="text-purple-600">BOOTSTRAP</span> &nbsp;&nbsp;&nbsp;
          <span className="text-sky-500">TAILWIND CSS</span>
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          &nbsp;
          <DiCss3 className="text-blue-600" />
          &nbsp;
          <DiJavascript1 className="text-yellow-500" />
          &nbsp;
          <DiReact className="text-blue-500" />
          &nbsp;
          <DiBootstrap className="text-purple-600" />
          &nbsp;
          <RiTailwindCssFill className=" text-sky-500" />
        </div>
      </div>
      <div className="relative group">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-1g blur opacity-25
        group-hover:opacity-100  transition duration-300 "
        ></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-1g">
          <img
            src={project2}
            alt="project2"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-1g blur opacity-25
        group-hover:opacity-100  transition duration-300 "
        ></div>

        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-1g">
          <img
            src={project3}
            alt="project3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Backend Skills
        </h2>
        <p className="text-gray-300 mb-4">
          <span className="text-green-500"> NODE JS</span> &nbsp;{" "}
          <span className="text-teal-500">EXPRESS JS </span> &nbsp;
          <span className="text-green-500">MONGODB</span> &nbsp;
          <span className="text-gray-500"> SQL</span>
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiNodejsSmall className="text-green-500" />
          &nbsp;
          <SiExpress className="text-teal-500" />
          &nbsp;
          <DiMongodb className="text-green-500" />
          &nbsp;
          <FaDatabase className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default About;
