import React from "react";

import css from "../assets/css.png";
import html from "../assets/html.png";
import cpp from "../assets/cpp.png";
import js from "../assets/js.png";
import njs from "../assets/nodejs.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.png";

function Experience() {
  const list = [
    {
      id: 1,
      src: css,
      text: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: html,
      text: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: js,
      text: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      text: "REACT",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: cpp,
      text: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: njs,
      text: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: git,
      text: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: github,
      text: "GitHub",
      style: "shadow-blue-900",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-black to-gray-800 w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </h1>
          <p className="py-6">
            I have experience in the following technologies.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {list.map((item) => (
            <div
              key={item.id}
              className={
                "shadow-md hover:scale-105 duration-500 py-3 rounded-lg " +
                item.style
              }
            >
              <img className="w-[110px] mx-auto" src={item.src} alt="" />
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
