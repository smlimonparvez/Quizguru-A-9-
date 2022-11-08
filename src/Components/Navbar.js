import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/analysis'>Analysis</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" to='/home'>Quiz Guru</Link>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center justify-evenly font-medium mr-4 hidden lg:inline-flex">
          <li className=" m-3"><Link to='/home'>Home</Link></li>
          <li className=" m-3"><Link to='/analysis'>Analysis</Link></li>
          <li className=" m-3"><Link to='/blog'>Blog</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
