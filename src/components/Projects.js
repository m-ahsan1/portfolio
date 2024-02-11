import React from "react";
import sequence from "../assets/sequence.png";
import biddingB from "../assets/biddingBazaar.png";
import appli from "../assets/appli.png";
import scraper from "../assets/scraper.jpeg";
import android from "../assets/android.png";

function Projects(props) {
  const redirectToWebsite = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      name="projects"
      className="md:h-screen w-full bg-gradient-to-t from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="font-bold text-5xl inline border-b-4 border-gray-500">
            Projects
          </h1>
          <p className="py-6">Here are some of the projects that I did.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div>
            <h1 className="text-center font-semibold m-2">
              Sequence Board Game
            </h1>
            <img
              className="rounded-md duration-200 hover:scale-105"
              src={sequence}
              alt=""
            />
            <div className="flex justify-around items-center bg-black rounded-md h-10">
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://m-ahsan1.github.io/sequence-frontend/"
                  )
                }
              >
                Demo
              </button>
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://github.com/m-ahsan1/sequence-frontend"
                  )
                }
              >
                Code
              </button>{" "}
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold m-2">
              BiddingBazaar - Car Bidding Platform
            </h1>
            <img
              className="rounded-md duration-200 hover:scale-105"
              src={biddingB}
              alt=""
            />
            <div className="flex justify-around items-center bg-black rounded-md h-10">
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://github.com/m-ahsan1/fyp-bidding-bazaar"
                  )
                }
              >
                Demo
              </button>
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://github.com/m-ahsan1/fyp-bidding-bazaar"
                  )
                }
              >
                Code
              </button>{" "}
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold m-2">Simplication</h1>
            <img
              className="rounded-md duration-200 hover:scale-105"
              src={appli}
              alt=""
            />
            <div className="flex justify-around items-center bg-black rounded-md h-10">
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite("https://github.com/m-ahsan1/simplication")
                }
              >
                Demo
              </button>
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite("https://github.com/m-ahsan1/simplication")
                }
              >
                Code
              </button>{" "}
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold m-2">Data Srapers</h1>
            <img
              className="rounded-md duration-200 hover:scale-105"
              src={scraper}
              alt=""
            />
            <div className="flex justify-around items-center bg-black rounded-md h-10">
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://github.com/m-ahsan1/pakwheels-data-scaper"
                  )
                }
              >
                Demo
              </button>
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite(
                    "https://github.com/m-ahsan1/pakwheels-data-scaper"
                  )
                }
              >
                Code
              </button>{" "}
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold m-2">
              GaariGar - Android App
            </h1>
            <img
              className="rounded-md duration-200 hover:scale-105"
              src={android}
              alt=""
            />
            <div className="flex justify-around items-center bg-black rounded-md h-10">
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite("https://github.com/m-ahsan1/GaariGar-App")
                }
              >
                Demo
              </button>
              <button
                className="hover:scale-105 duration-200"
                onClick={() =>
                  redirectToWebsite("https://github.com/m-ahsan1/GaariGar-App")
                }
              >
                Code
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
