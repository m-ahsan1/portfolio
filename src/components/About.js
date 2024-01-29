import React from "react";

function About() {
  return (
    <div
      name="about"
      className="flex flex-col gap-10 justify-center md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <h1 className="text-4xl sm:text-6xl font-bold underline p-2 inline">
          About
        </h1>
        <p className="mt-10">
          Hello! I'm a Computer Science graduate from FAST NUCES Lahore
          (2020-2024), with a strong inclination towards frontend development.
          Leveraging my degree, I've delved into the world of full stack
          development, though my passion truly lies in crafting intuitive and
          visually engaging user interfaces. With a year of hands-on experience,
          I thrive on coding and enjoy bringing ideas to life through building
          impactful projects. My journey in technology is fueled by a genuine
          love for the craft, and I'm always eager to explore new horizons in
          the ever-evolving realm of web development.
        </p>
      </div>
    </div>
  );
}

export default About;
