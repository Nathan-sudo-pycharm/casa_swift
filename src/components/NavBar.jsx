import React, {useState} from 'react';
import { FaBars , FaTimes } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div className='bg-[#FAF0DC]'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex item-center justify-between h-16'>
          <div className='flex items-center'>
            <img src='/logo.svg'></img>
          </div>
          {/* navlinks */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navlinks.map((link,index) => (
                <a key={index} className='text-[#FAF0DC] transition-all duration-500 
                hover:bg-[#C19770] hover:text-white px-5 py-5 rounded-md text-md 
                font-medium' 
                href={link.link}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        {/* hamburger button */}
        <div className='-mr-2 flex md:hidden'>
          <button type='button' onClick={handleMenu} className='inline-flex 
          item-center justify-center px-5 py-6 rounded-md text-[#C19770] 
          hover:text-[#A67A5B]'>
            <span className='sr-only'>Open Main Menu</span>
            {open == true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className='md:hidden'>
          <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navlinks.map((link,index) => (
            <a key={index} className='text-[#C19770] hover:bg-[#A67A5B] 
            hover:text-white block px-3 py-2 rounded-md text-base 
            font-medium' 
            href={link.link}
            >
              {link.title}
            </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;