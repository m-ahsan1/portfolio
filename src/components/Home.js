import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import hero from "../assets/main.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bgHome from "../assets/bgWorld.mp4";

function Home() {
  // const onButtonClick = () => {
  //   const pdfUrl = "http://localhost:3000/portfolio/resume.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Ahsan's Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Frontend Developer", "Frontend Developer"],
    loop: {},
  });

  return (
    <div
      name="home"
      className="h-screen w-full text-white flex items-center justify-center"
    >
      <video
        className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"
        autoPlay
        loop
        muted
      >
        <source src={bgHome} type="video/mp4" />
      </video>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-4">
        <div className="">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            I am a <span className="text-green-500">{text}</span>
            <Cursor />
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
            // onClick={onButtonClick}
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="z-1">
          <img
            className="rounded-full mx-auto w-2/3 md:w-full"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
