import React from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-xl mx-auto px-10 py-5 sm:py-8 sm:px-10 flex justify-between items-center text-white">
        <div className="logo flex flex-col">
          <span className="font-bold text-3xl text-red-600">Tech </span><span className="text-sm ml-8 mt-[-0.5rem] text-zinc-900">Store</span>
        </div>

        <span className="sm:hidden">
          <IoIosMenu />
        </span>

        <div className="links hidden sm:flex justify-between items-center gap-5">
          <Link to="/home" className="hover:text-slate-900 text-xs">Home</Link>
          <Link to="/men" className="hover:text-slate-900 text-xs">Men</Link>
          <Link to="/women" className="hover:text-slate-900 text-xs">Women</Link>
          <Link to="/kids" className="hover:text-slate-900 text-xs">Kids</Link>
          <NavLink to={'https://portfolio-projects-x68b.vercel.app/'} className="hover:text-slate-900 text-xs">Admin</NavLink>
        </div>

        <div className="hidden sm:flex justify-between items-center gap-5 text-lg">
          <Link to="/login" className="hover:text-red-900">Login</Link>
          <Link to="/signup" className="hover:text-red-900">Signup</Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
