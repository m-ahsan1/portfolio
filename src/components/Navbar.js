import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavbarComponent() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // You can adjust the scroll threshold as needed
      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const [showNav, setShowNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center ${
        scrolling ? "bg-transparent" : "bg-black"
      } text-white w-full h-20 fixed`}
    >
      <div>
        <h1 className="font-signature text-5xl ml-5">Ahsan</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {showNav && (
        <ul className="flex = flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setShowNav(!showNav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavbarComponent;
