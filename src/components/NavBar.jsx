import React, { useState } from "react";

const NavBar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div>
      return (
      <nav className={`bg-black ${isOpen ? "md:hidden" : ""}`}>
        {" "}
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-8">
          {" "}
          <div className="flex items-center justify-between h-16">
            {" "}
            <div className="flex items-center">
              {" "}
              <div className="flex-shrink-0">
                {" "}
                <a href="/" className="text-white">
                  {" "}
                  <img
                    src="images/logo.jpg"
                    className="h-24 w-24"
                    alt="logo"
                  />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className={`${isOpen ? "block" : "hidden"} md:block`}>
              {" "}
              <div className="ml-4 flex items-center space-x-4">
                {" "}
                <a href="/" className="text-white p-2 hover:underline-offset-8">
                  {" "}
                  Home{" "}
                </a>{" "}
                <a href="/" className="text-white p-2 hover:underline-offset-8">
                  {" "}
                  Home{" "}
                </a>{" "}
                <a href="/" className="text-white p-2 hover:underline-offset-8">
                  {" "}
                  Home{" "}
                </a>{" "}
                <a href="/" className="text-white p-2 hover:underline-offset-8">
                  {" "}
                  Home{" "}
                </a>{" "}
                <a href="/" className="text-white p-2 hover:underline-offset-8">
                  {" "}
                  Home{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="md:hidden">
              {" "}
              <button
                className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {" "}
                <svg
                  className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6, 18L18 6M6 6l12 12"
                  />{" "}
                </svg>{" "}
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />{" "}
                </svg>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      );
    </div>
  );
};

export default NavBar;
