import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header
      id="main-header"
      className="container-fluid bg-black w-100 lg:px-10 md:px-8 sm:px-6 px-3 ps-2 py-4 sticky top-0 left-0 right-0 z-10"
    >
      <div className="inner-container container inner-header flex justify-between items-center md:gap-4 gap-2 w-100 mx-auto">
        <a className="logo-container md:w-1/4 w-1/2" href="/">
          <picture className="md:max-w-80 max-w-48" href="/">
            <source media="(min-width: 0px)" srcSet={logo} />
            <img src={logo} alt="Coffee Friend" className="w-100" />
          </picture>
        </a>
        <div className="menu-container md:w-1/2 w-full md:flex hidden">
          <ul className="list-none md:flex hidden md:flex-row flex-col md:items-center items-start justify-center w-100">
            <li className="px-4 py-2 lg:mx-2">
              <a
                href="/"
                className="text-white lg:text-base md:text-sm text-base color-secondary-onhover"
              >
                Home
              </a>
            </li>
            <li className="px-4 py-2 lg:mx-2">
              <a
                href="#"
                className="text-white lg:text-base md:text-sm text-base color-secondary-onhover"
              >
                Menu
              </a>
            </li>
            <li className="px-4 py-2 lg:mx-2">
              <a
                href="#"
                className="text-white lg:text-base md:text-sm text-base color-secondary-onhover"
              >
                About Us
              </a>
            </li>
            <li className="px-4 py-2 lg:mx-2">
              <a
                href="#"
                className="text-white lg:text-base md:text-sm text-base color-secondary-onhover"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="accounts-container md:w-1/4 w-1/2">
          <div className="flex items-center gap-2 md:justify-center justify-end">
            <a
              href="#"
              className="btn rounded-full sm:px-4 px-3 sm:py-2 py-1.5 md:text-base text-sm bg-secondary-onhover color-light color-black-onhover"
            >
              Login
            </a>
            <a
              href="#"
              className="btn rounded-full sm:px-4 px-3 sm:py-2 py-1.5 md:text-base text-sm bg-secondary bg-balck-onhover color-black color-light-onhover"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
