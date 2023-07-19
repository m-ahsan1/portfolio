import React from "react";
import { Fabars, Fatimes } from "react-icons/fa";

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
      link: "experince",
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
      <ul className="flex ">
        <li className="px-4">Home</li>
        <li className="px-4">Home</li>
        <li className="px-4">Home</li>
        <li className="px-4">Home</li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
