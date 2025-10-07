import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className=" w-full f py-4">
      <div className="navbar flex justify-between items-center container mx-auto px-[3%] md:px-0">
        <div className="flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="px-3 text-[#131313cc] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className="font-normal text-[#131313cc] text-base"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allBooks"
                  className="font-normal text-[#131313cc] text-base"
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booklist"
                  className="font-normal text-[#131313cc] text-base"
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pageToRead"
                  className="font-normal text-[#131313cc] text-base"
                >
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="font-bold text-[#131313] text-base md:text-[24px] lg:text-[28px]">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={`font-normal text-[#131313cc] text-base`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allBooks"
                className="font-normal text-[#131313cc] text-base"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booklist"
                className="font-normal text-[#131313cc] text-base"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pageToRead"
                className="font-normal text-[#131313cc] text-base"
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="py-[14px] md:py-[18px] px-[20px] md:px-[28px] rounded-md md:rounded-lg bg-[#23BE0A] text-white text-sm md:text-lg font-semibold">
            Sign In
          </button>
          <button className="py-[14px] md:py-[18px] px-[20px] md:px-[28px] rounded-md md:rounded-lg bg-[#59C6D2] text-white text-sm md:text-lg font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
