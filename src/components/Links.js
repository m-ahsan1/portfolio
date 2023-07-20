import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Links() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center bg-black text-white">
          <a href="google.com">
            <>
              LinkedIn
              <FaLinkedin />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
