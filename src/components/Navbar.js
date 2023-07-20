import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavbarComponent() {
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
      link: "portfolio",
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
    <div className="flex justify-between items-center bg-black text-white w-full h-20 fixed">
      <div>
        <h1 className="font-signature text-5xl ml-5">Ahsan</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="cursor-pointer pr-4 ">
        <FaBars size={30} />
      </div>
    </div>
  );
}

export default NavbarComponent;
