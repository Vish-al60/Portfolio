import React, { useState } from "react";
import ShinyEffect from "./ShinyEffect";
import project1 from "../assets/Healthbooker.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/Chatapp.png";
import project5 from "../assets/Weather.png";
import project6 from "../assets/Randompass.png";
import project7 from "../assets/salad.png";
import project8 from "../assets/music.png";

import { AiFillGithub } from "react-icons/ai";

const project = [
  {
    img: project1,
    tittle: "Project#1",
    description: "HealthBooker - Doctor Appointment System",
    links: {
      site: "https://doctor-appointment-system-1-z4jb.onrender.com/",
      github: "https://github.com/Vish-al60/Doctor-appointment-system",
    },
  },

  {
    img: project2,
    tittle: "Project#2",
    description: "Tripy - AI Trip Planner",
    links: {
      site: "#",
      github: "#",
    },
  },

  {
    img: project3,
    tittle: "Project#3",
    description: " Ecommerce Website",
    links: {
      site: "#",
      github: "https://github.com/Vish-al60/Ecommerce-Shopping",
    },
  },

  {
    img: project4,
    tittle: "Project#4",
    description: "Chat With Friends",
    links: {
      site: "https://chatroom-wwoh.onrender.com/",
      github: "https://github.com/Vish-al60/ChatRoom",
    },
  },

  {
    img: project5,
    tittle: "Project#5",
    description: "Weather Update",
    links: {
      site: "https://vish-al60.github.io/Weather-App/",
      github: "https://github.com/Vish-al60/Weather-App",
    },
  },

  {
    img: project6,
    tittle: "Project#6",
    description: "Random Pass Genration",
    links: {
      site: "https://vish-al60.github.io/RandomPassCreate/",
      github: "https://github.com/Vish-al60/RandomPassCreate",
    },
  },

  {
    img: project7,
    tittle: "Project#7",
    description: "Salad Page Design",
    links: {
      site: "https://vish-al60.github.io/SaladWebsiteDesign/",
      github: "https://github.com/Vish-al60/SaladWebsiteDesign",
    },
  },
  {
    img: project8,
    tittle: "Project#8",
    description: "Music page design",
    links: {
      site: "https://vish-al60.github.io/Music_suno/",
      github: "https://github.com/Vish-al60/Music_suno",
    },
  },
];

const Portfolio = () => {
  const [currentproject, setcurrentproject] = useState(0);
  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row ' id="portfolio">
      <div className=" z-10 glass p-6 w-full border-2 max-w-[600px]">
        <div className=" w-full h-80">
          <img
            src={project[currentproject].img}
            alt={project[currentproject].tittle}
            className=" w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className=" text-gray-200 my-4">
          {project[currentproject].description}
        </p>

        <div className=" flex space-x-4 ">
          <a
            href={project[currentproject].links.site}
            className=" px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
          >
            View Site
          </a>
          <a
            href={project[currentproject].links.github}
            className=" px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div className=" absolute inset-0 ">
        <div className="hiddden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
      </div>

      <ul className=" z-10 ml-6 flex flex-row md:flex-col flex-wrap justify-center mt-4 md:gap-1">
        {/* <h2 className=" text-cyan-50 mb-2">Projects </h2> */}
        {project.map((project, index) => (
          <li
            key={index}
            onClick={() => setcurrentproject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentproject === index ? " bg-slate-900" : ""
            }`}
          >
            {project.tittle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
