import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div>
        <div className="h-screen w-full mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
          <div className="">
            <h2 className="text-4xl sm:text-8xl font-bold mb-4">
              I am a <span className="text-green-500">Frontend Developer</span>
            </h2>
            <p className="flex-gray-500 py-4 max-w-lg text-lg">
              Welcome to my portfolio! I'm a frontend developer specializing in
              React.js, HTML, and CSS, with a focus on creating seamless user
              interfaces. My expertise extends to Tailwind CSS for streamlined
              development. Explore my work to see how I blend creativity with
              technical precision to deliver top-notch web solutions.
            </p>

            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 bg-green-700
              rounded-md flex flex-row items-center "
            >
              {" "}
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          {/* <div>
            <img
              className="rounded-2xl mx-auto w-2/3 md:w-full"
              src={i}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
