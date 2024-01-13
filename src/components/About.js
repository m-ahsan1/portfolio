import React from "react";

function About() {
  return (
    <div
      name="about"
      className="flex flex-col gap-10 justify-center h-screen w-full bg-gradient-to-t from-black to-gray-500 text-white"
    >
      <h1 className="text-6xl font-bold inline ml-10">About</h1>
      <p className="mx-10 mt-20">
        Hello! I'm a Computer Science graduate from FAST NUCES Lahore
        (2020-2024), with a strong inclination towards frontend development.
        Leveraging my degree, I've delved into the world of full stack
        development, though my passion truly lies in crafting intuitive and
        visually engaging user interfaces. With a year of hands-on experience, I
        thrive on coding and enjoy bringing ideas to life through building
        impactful projects. My journey in technology is fueled by a genuine love
        for the craft, and I'm always eager to explore new horizons in the
        ever-evolving realm of web development.
      </p>
      {/* <p className="mx-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quos
        autem atque at distinctio aperiam et. Cumque dolorem, incidunt
        repudiandae tenetur dolorum, eos fugiat expedita voluptatibus
        praesentium sit, ut consectetur!
      </p> */}
    </div>
  );
}

export default About;
