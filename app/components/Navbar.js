"use client";

import React, { useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Navbar(props) {
  useEffect(() => {
    if (localStorage.theme == "dark") {
      props.setDark(true);
    }
  }, []);

  return (
    <>
      <nav className="mb-12 flex justify-between py-10 px-10 dark:text-white md:px-20 lg:px-40">
        <h1 className="font-burtons text-3xl font-bold">CoffinS</h1>
        <ul className="flex items-center">
          <li onClick={props.setDark}>
            {props.darkMode ? (
              <BsFillSunFill className="cursor-pointer text-4xl md:text-3xl" />
            ) : (
              <BsFillMoonStarsFill className="cursor-pointer text-4xl md:text-3xl" />
            )}
          </li>
          <li>
            <a
              href="#"
              className="ml-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-2xl font-medium text-white md:py-2 md:px-5 md:text-xl"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
